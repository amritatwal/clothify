import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  Flex,
  Text,
  Image,
  IconButton,
  Box,
  Icon,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

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
              {basket.length < 1 ? (
                <Text>Your basket is empty</Text>
              ) : (
                <>
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
