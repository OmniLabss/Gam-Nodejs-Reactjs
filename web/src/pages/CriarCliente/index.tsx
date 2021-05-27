/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  useToast,
  Button,
  Link,
  Divider,
  VStack,
} from '@chakra-ui/react';
import api from '../../services/api';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { Select } from '../../components/Select/Select';
import { useHistory } from 'react-router';

interface ITelefoneTipos {
  id: string;
  tipo: string;
  whatsapp: boolean;
}

interface IFormData {
  nome: string;
  email: string;
  cpf: string;
}

interface ITeleonfes {
  telefone: string;
  telefone_tipo: string;
}

function CriarCliente() {
  const [telefoneTipos, setTelefoneTipos] = useState<ITelefoneTipos[]>();
  const [telefones, setTelefones] = useState<ITeleonfes[]>([]);

  const history = useHistory();

  const toast = useToast();

  const { register, handleSubmit, formState } = useForm();

  function addNewTelefone() {
    setTelefones([
        ...telefones,
        { telefone: '', telefone_tipo: '' }
    ]);
  }

  function setTelefoneItemValue(position: number, field: string, value: string) {
    const updateTelItems = telefones.map((tel, index) => {
        if (index === position) {
            return { ...tel, [field]: value };
        }

        return tel;
    });

    setTelefones(updateTelItems);
}

  useEffect(() => {
    api.get('/cliente/telefone_tipos').then(response => [
      setTelefoneTipos(response.data)
    ])
  }, [])

  const handleCriarCliente = useCallback((data: IFormData) => {
    const filteredTelefone = telefones.filter(e => {
      return e.telefone_tipo !== '' || e.telefone !== ''
    })
    api.post('/cliente', {
      nome: data.nome,
      email: data.email,
      cpf: data.cpf,
      telefoneDados: filteredTelefone 
    })
    
    toast({
      title: 'Sucesso.',
      description: 'Cliente foi criado com sucesso',
      status: 'success',
      duration: 2000,
      position: 'top-right',
      isClosable: true,
    });
  }, [telefones])

  return (
    <Box
        flex="1"
        mr="8"
        borderRadius={4}
        shadow="0 0 20px rgba(0, 0, 0, 0.05)"
        p="8"
      >
        <Flex mb="8" justifyContent="center" alignItems="center">
          <Box>
            <Heading size="xl" fontWeight="medium" >
              Criação Cliente
            </Heading>
          </Box>
        </Flex>

        <Box as="form" onSubmit={handleSubmit(handleCriarCliente)}>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="4" alignItems="flex-start">
            <Input
              {...register('nome', {required: true})}
              name="nome"
              label="Nome"
              w="100%"
            />

            <Input
              {...register('email', {required: true})}
              label="Email"
              w="100%"
            />

            <Input
              {...register('cpf', {required: true})}
              name="cpf"
              label="CPF"
              w="100%"
            />

              <Button
                bg="messenger.600"
                onClick={addNewTelefone}
              >
                Adicionar telefone
              </Button>

            {telefones.map((tel, index) => {
              return (
              <Box flex='1' w="100%" key={index}>
              <Input
                onChange={e => setTelefoneItemValue(index, 'telefone', e.target.value)}
                name="telefone"
                value={tel.telefone}
                label="Telefone"
                w="100%"
              />

              <Select
                onChange={e => setTelefoneItemValue(index, 'telefone_tipo', e.target.value)}
                label="Tipo de Telefone"
                value={tel.telefone_tipo}
                name="telefone_tipo"
                placeholder="Selecione a jornada"
                >
                {telefoneTipos &&
                  telefoneTipos.map((telefone) => (
                    <option style={{backgroundColor: 'black'}} key={telefone.id} value={telefone.id}>
                      {telefone.tipo}
                    </option>
                  ))}
              </Select> 

              </Box>
              )
            })}

          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/">
                <Button bg="messenger.600">Cancelar</Button>
              </Link>

              <Button
                type="submit"
                bg="messenger.600"
                isLoading={formState.isSubmitting}
              >
                Criar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Box>
  );
}

export default CriarCliente;
