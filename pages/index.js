import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Product from '../src/components/Product';
import API_URL from '../config';

export default function Home({ updateBasket }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log(API_URL);
        const response = await fetch(`${API_URL}/?limit=10`);
        const data = await response.json();
        console.log(data);
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
