import { Flex, Text, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Product from '../src/components/Product';
import API_URL from '../config';
import MenuTabs from '../src/components/Tabs/tabs';

export default function Test() {
  // Products fetched from the API are stored in a state
  const [products, setProducts] = useState();

  useEffect(() => {
    // Using the Fetch API to retrieve the products
    // useEffect is necessary in order to render the products once mounted
    async function fetchProducts() {
      // Utilising a try ...catch to wrap the fetch inside to handle exceptions/error handling
      try {
        const response = await fetch(
          'https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4'
        );
        const data = await response.json();
        setProducts(data.slice(0, 4));
        console.log(data.slice(0, 4));
      } catch (error) {
        throw error;
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Flex flexDirection="column" color="#494949">
        <MenuTabs />
        <Flex>
          <Text
            fontFamily="Monospace"
            fontSize={{ base: '1em', md: '1em' }}
            fontWeight="800"
            letterSpacing="1.5px"
            textTransform="uppercase"
          >
            Best sellers + top rated
          </Text>
          <Box></Box>
        </Flex>
      </Flex>
    </>
  );
}
