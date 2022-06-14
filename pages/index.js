import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Product from '../src/components/Product';
import API_URL from '../config';

export default function Home({ updateBasket }) {
  // Products fetched from the API are stored in a state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Using the Fetch API to retrieve the products
    // useEffect is necessary in order to render the products once mounted
    async function fetchProducts() {
      // Utilising a try ...catch to wrap the fetch inside to handle exceptions/error handling
      try {
        const response = await fetch(`${API_URL}/?limit=10`);
        const data = await response.json();
        setProducts([products, ...data]);
      } catch (error) {
        throw error;
      }
    }
    fetchProducts();
  }, []);

  return (
    <Flex
      flexWrap="wrap"
      flexDirection={{ base: 'column', md: 'row' }}
      display="flex"
      justifyContent="center"
      p="1em"
    >
      {products.slice(1, 10).map(product => {
        return (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            desc={product.description}
            price={product.price}
            updateBasket={updateBasket}
          />
        );
      })}
    </Flex>
  );
}
