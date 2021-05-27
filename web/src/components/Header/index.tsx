import {
  Flex,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

import LogoGam from '../../assets/logo-gam-azul.png'

export function Header() {
  const textColor = useColorModeValue('gray.700', 'gray.50');

  return (
    <Flex
      as="header"
      h="20"
      px="6"
      w="100%"
      mx="auto"
      maxWidth={1480}
      align="center"
    >
      <Flex maxWidth={1480} width="100%" marginX="auto" alignItems="center">
        <Text
          color={textColor}
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing="tight"
          w="64"
        >
          <Link to="/">
            <img src={LogoGam} alt="" />
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
}
