import React from 'react';
import { Flex, Text, Image, Box, Button } from '@chakra-ui/react';

// For consistency, a re-usable component was created for each product's data to be rendered within. The props being passed down are required to display the relevant data.

const Product = ({ image, id, title, desc, price, updateBasket }) => {
  // When an online customer clicks on the 'add to basket' button, the product's information is stored in an object which is passed into updateBasket() as an argument.
  // The default quantity of any product is 1.
  function handleClick() {
    const item = {
      id: id,
      image: image,
      title: title,
      price: price,
      quantity: 1,
    };
    updateBasket(item);
  }

  return (
    <Box
      display="flex"
      flexDirection={'column'}
      p="1em"
      w={{ base: '100%', md: '30em' }}
      height="auto"
      m={{ base: '0em', md: '2em' }}
      mb={{ base: '1em' }}
    >
      <Box w={{ md: '100%' }} display="flex" justifyContent="center" mb="2em">
        <Image src={image} mt="1em" pl="1em" height={{ md: '300px' }} />
      </Box>
      <Flex flexDirection="column" p="1em" display="flex">
        <Text
          textTransform={'uppercase'}
          pb=".4em"
          fontSize={{ base: '1em' }}
          minHeight={'3em'}
        >
          {title}
        </Text>
        {/* Design: the price is displayed in bold and grey in order for it to stand out */}
        <Text
          mb=".8em"
          fontWeight="800"
          fontSize={{ base: '1em' }}
          color="grey"
        >
          £{price}
        </Text>
        <Box height={{ base: '10em', md: '10em' }}>
          <Text
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="wrap"
            fontSize={{ base: '.8em' }}
          >
            {desc}
          </Text>
        </Box>
        <Button
          mt={{ base: '2em', sm: '1em' }}
          onClick={handleClick}
          w="10em"
          alignSelf="center"
          textTransform="uppercase"
          letterSpacing=".5px"
          fontSize=".8em"
        >
          Add to basket
        </Button>
      </Flex>
    </Box>
  );
};

export default Product;
