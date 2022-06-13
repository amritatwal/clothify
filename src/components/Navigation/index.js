import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
  Text,
  Image,
  Box,
  Heading,
} from '@chakra-ui/react';
import ShoppingBasket from '../Basket';

const Navigation = ({ basket, removeItem }) => {
  return (
    <Flex
      flexDirection="row"
      borderBottom={'solid 1px #ededed'}
      padding=".5em"
      justifyContent={'flex-end'}
    >
      <Box flexGrow={1} ml={2}>
        <Heading>clothify</Heading>
      </Box>
      <ShoppingBasket basket={basket} removeItem={removeItem} />
    </Flex>
  );
};

export default Navigation;
