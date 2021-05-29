import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  Button,
  Box,
} from '@chakra-ui/react';

import { useCallback, useState } from 'react';
import { Input } from '../../../components/Input';

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
  const [cpf, setCpf] = useState(editingClient && editingClient.cpf);
  const [email, setEmail] = useState(editingClient && editingClient.email);
  const [nome, setNome] = useState(editingClient && editingClient.nome);

  const handleUpdate = useCallback(
    async (client_id: string) => {
      handleUpdateClient({
        cpf,
        nome,
        email
      }, client_id);
    },
    [cpf, email, handleUpdateClient, nome]
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <Box
        as="form"
        onSubmit={() =>
          handleUpdate(editingClient.id)
        }
      >
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <ModalHeader>Editar Cliente</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            <VStack spacing={4}>
            <Input
              onChange={e => setNome(e.target.value)}
              defaultValue={editingClient && editingClient.nome}
              label="Nome"
              name="nome"
              w="100%"
            />

            <Input
              onChange={e => setCpf(e.target.value)}
              defaultValue={editingClient && editingClient.cpf}
              label="CPF"
              name="cpf"
              w="100%"
            />
            <Input
              onChange={e => setEmail(e.target.value)}
              defaultValue={editingClient && editingClient.email}
              label="Email"
              name="email"
              w="100%"
            />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => handleUpdateClient({cpf, email, nome},editingClient.id)}
              colorScheme="blue"
              mr={3}
            >
              Save
            </Button>
            <Button bg="gray.800" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Box>
    </Modal>
  );
}
