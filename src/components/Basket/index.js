import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  Flex,
  Text,
  Image,
  Box,
  Icon,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

// Chakra's <Menu/> component was used due to how easily and quickly it creates a dropdown that is functional, responsive and user-friendly.
// I chose to use a shopping cart icon from React Icons for the dropdown menu to signify to the online customer where the mini-basket is

const ShoppingBasket = ({ basket, removeItem }) => {
  return (
    <div>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button}>
              <Flex flexDirection="row">
                <Icon as={FiShoppingCart} />
                <Box
                  borderRadius={50}
                  w={'1.3em'}
                  h={'1.3em'}
                  backgroundColor="lightgrey"
                  display="flex"
                  justifyContent="center"
                  fontSize=".8em"
                  ml=".5em"
                >
                  {basket.length}
                </Box>
              </Flex>
            </MenuButton>
            <MenuList p="1em">
              {/* Should the basket be empty, it's good practice to instead display some text to the user to show that. In this context, I am using the length property on basket to determine whether the basket is empty or not for conditional rendering. */}
              {basket.length < 1 ? (
                <Text>Your basket is empty</Text>
              ) : (
                <>
                  {/* Iterating over each product in the basket and rendering the UI that includes multiplying the price and quantity of a product to get a sub-total */}
                  {basket.map(item => {
                    return (
                      <Flex display="flex">
                        <Image
                          src={item.image}
                          w={{ base: '3em' }}
                          height="100%"
                          pr=".5em"
                        />
                        <Flex flexDirection="column" pb=".5em">
                          <Text fontWeight={'800'} fontSize={{ base: '.8em' }}>
                            £{item.price * item.quantity}
                          </Text>
                          <Text fontSize={{ base: '.8em' }}>{item.title}</Text>
                          <Flex flexDirection="row">
                            <Text fontSize={{ base: '.8em' }}>
                              Qty: {item.quantity}
                            </Text>
                          </Flex>
                          {/* Should the online customer choose to remove a product, an onClick is used to invoke removeItem() */}
                          <Button
                            onClick={() => removeItem(item)}
                            mt=".5em"
                            w={{ base: '10em' }}
                            h="auto"
                            p=".5em"
                            color="grey"
                            fontSize={{ base: '.5em' }}
                          >
                            REMOVE ITEM
                          </Button>
                        </Flex>
                      </Flex>
                    );
                  })}
                  <Button>Checkout</Button>
                </>
              )}
            </MenuList>
          </>
        )}
      </Menu>
    </div>
  );
};

export default ShoppingBasket;
