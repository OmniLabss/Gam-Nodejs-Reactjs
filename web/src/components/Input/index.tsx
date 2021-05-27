import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

type InputProps = {
  name: string;
  label?: string;
} & ChakraInputProps;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest }: InputProps,
  ref
) => {
  return (
    <FormControl >
      {!!label && <FormLabel
         htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        w="50%"
        focusBorderColor="messenger.600"
        bgColor="gray900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);