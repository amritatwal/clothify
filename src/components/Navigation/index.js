import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import ShoppingBasket from '../Basket';

// The navigation bar currently only displays a name and the mini-basket.
// The props being passed in - basket and removeItem - are necessary for <ShoppingBasket/> to have access to the current basket in order to display the items, and also removeItem: needed to handle a removal of a product should the online customer click on the 'remove' button.

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
