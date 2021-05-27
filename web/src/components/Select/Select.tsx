import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectFieldProps as ChakraSelectProps,
} from '@chakra-ui/react';

type SelectProps = {
  name: string;
  label?: string;
  placeholder: string;
} & ChakraSelectProps;

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { name, label, placeholder, ...rest }: SelectProps,
  ref
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraSelect placeholder={placeholder} name={name} ref={ref} {...rest} />
    </FormControl>
  );
};

export const Select = forwardRef(SelectBase);
