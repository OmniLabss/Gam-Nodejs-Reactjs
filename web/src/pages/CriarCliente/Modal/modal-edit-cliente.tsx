import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  Image,
  Input as InputChackra,
  Heading,
  Button,
  useColorModeValue,
  SimpleGrid,
  Divider,
  Box,
} from '@chakra-ui/react';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Input } from '../../../components/Input';
import api from '../../../services/api';

import { useForm } from 'react-hook-form';

type IClientPlate = {
  id: string;
  nome: string;
  email: string;
  cpf: string;
};

type IModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleUpdateClient: (data: IEditClientData, client_id: string) => void;
  editingClient: IClientPlate;
};
type IEditClientData = {
  nome: string;
  email: string;
  cpf: string;
};

export default function ModalEditClient({
  editingClient,
  handleUpdateClient,
  isOpen,
  onClose,
}: IModalProps) {
  const { register, handleSubmit, formState } = useForm();

  const handleUpdate = useCallback(
    async (data: IEditClientData, group_id: string) => {
      handleUpdateClient(data, group_id);
    },
    [handleUpdateClient]
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <Box
        as="form"
        onSubmit={handleSubmit((data: any) =>
          handleUpdate(data, editingClient.id)
        )}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Cliente</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            <VStack spacing={4}>
            <Input
              {...register('nome', {required: true})}
              defaultValue={editingClient && editingClient.nome}
              label="Nome"
              w="100%"
            />

            <Input
              {...register('email', {required: true})}
              defaultValue={editingClient && editingClient.email}
              label="Email"
              w="100%"
            />

            <Input
              {...register('cpf', {required: true})}
              defaultValue={editingClient && editingClient.cpf}
              label="CPF"
              w="100%"
            />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              isLoading={formState.isSubmitting}
              colorScheme="blue"
              mr={3}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Box>
    </Modal>
  );
}
