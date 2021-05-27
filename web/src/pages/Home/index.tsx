/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
  useToast,
  Button,
  Link,
} from '@chakra-ui/react';
import api from '../../services/api';
import { Input } from '../../components/Input';
import { RiAddLine } from 'react-icons/ri';
import { FiEdit3 } from 'react-icons/fi';

import ModalEditCliente from '../CriarCliente/Modal/modal-edit-cliente';

interface ICliente {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefones: [{
    numero: string;
  }]
}

interface IEditClient {
  id: string;
  nome: string;
  cpf: string;
  email: string;
}

interface IClienteEditFormData {
  nome: string;
  email: string;
  cpf: string;
}

function Home() {
  const [cliente, setCliente] = useState<ICliente[]>([]);
  const [buscar, setBuscar] = useState('');
  const [editClient, setEditClient] = useState<IEditClient>();

  const toast = useToast();
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    api.get('/cliente', {
      params: {
        conteudo: buscar
      }
    }).then(response => {
      setCliente(response.data)
    })
  }, [buscar])

  const handleEditClient = useCallback(async (data: IClienteEditFormData, client_id: string ) => {
    try {
      await api.put(`/cliente/${client_id}`, {
        nome: data.nome,
        email: data.email,
        cpf: data.cpf
      })

      const filteredClient = cliente.map((c) => {
        return c.id === client_id
          ? {
              ...c,
              nome: data.nome,
              email: data.email,
              cpf: data.cpf
            }
          : c;
      });

      setCliente(filteredClient);
      onClose();

      toast({
        title: 'Sucesso',
        description: 'Cliente Editado',
        status: 'success',
        duration: 2000,
        position: 'bottom-right',
        isClosable: true,
      });
    } catch(err) {
      toast({
        title: 'Erro',
        description: 'Erro ao editar cliente',
        status: 'error',
        duration: 2000,
        position: 'bottom-right',
        isClosable: true,
      });
    }
  }, [cliente, onClose, toast])

  return (
    <Box>
      <Header />
      <Flex justifyContent="space-between" alignItems="center">
      <Input ml="12" name="buscar" onChange={e => setBuscar(e.target.value ? e.target.value : '')} mt="8" />
          <Link href="/criar-cliente">
            <Button         bgColor="gray.800"
 size="md" mt="8" mr="6" leftIcon={<RiAddLine size="24" />}>
                Criar Cliente
            </Button>
          </Link>
        </Flex>
      <Box
        flex="1"
        mr="8"
        borderRadius={4}
        p="8"
      >
        <Flex mb="8" justifyContent="space-between" alignItems="center">
        <Table>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>Nome</Th>
              <Th>Cpf</Th>
              <Th>Email</Th>
              <Th>Telefones</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          
          {cliente &&
            cliente.map((cliente) => (
              <Tbody key={cliente.id}>
                <Tr>
                  <Td>
                    <Box>
                      <Text fontWeight="medium" fontSize="sm" >
                        {cliente.id}
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="medium" fontSize="sm" >
                        {cliente.nome}
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box>
                      <Text fontWeight="medium" fontSize="sm" >
                        {cliente.cpf}
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box>
                      <Text fontWeight="medium" fontSize="sm" >
                        {cliente.email}
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box>
                      {cliente.telefones.map(t => (
                        <Text fontWeight="medium" fontSize="sm" >
                        {t.numero}
                      </Text>
                      ))}
                    </Box>
                  </Td>

                  <Td>
                      <Box
                        as="div"
                      >
                        <Button
                          color="#fff"
                          size="md"
                          bgColor="messenger.500"
                          onClick={() => {
                            setEditClient({
                              id: cliente.id,
                              nome: cliente.nome,
                              cpf: cliente.cpf,
                              email: cliente.email
                            });
                            onOpen();
                          }}
                        >
                          <FiEdit3 size="18" />
                        </Button>
                      </Box>
                  </Td>

                </Tr>
              </Tbody>
            ))}
        <ModalEditCliente
            editingClient={editClient as any}
            isOpen={isOpen}
            onClose={onClose}
            handleUpdateClient={handleEditClient}
          />
        </Table>
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;
