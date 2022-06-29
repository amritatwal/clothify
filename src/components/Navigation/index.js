import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import ShoppingBasket from '../Basket';

// The navigation bar currently only displays a name and the mini-basket.
// The props being passed in - basket and removeItem - are necessary for <ShoppingBasket/> to have access to the current basket in order to display the items, and also removeItem: needed to handle a removal of a product should the online customer click on the 'remove' button.

const Navigation = ({ basket, removeItem }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      padding=".5em"
    >
      <Box justifyContent="center" display="flex" flexGrow="1">
        <Heading
          color="#F694C1"
          fontFamily="Fredoka One"
          fontSize={{ base: '2em', md: '3.5em' }}
          textTransform="lowercase"
        >
          Bloom
        </Heading>
      </Box>
      <Box display="flex" mx="1em" w="3em">
        <ShoppingBasket basket={basket} removeItem={removeItem} />
      </Box>
    </Flex>
  );
};

export default Navigation;
