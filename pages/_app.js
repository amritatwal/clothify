import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Navigation from '../src/components/Navigation';
import styled from '@emotion/styled';

// Import relevant font
import '@fontsource/fredoka-one';

// //entire app is put inside an appContainer which is a div and styled with the relevant font family
// const AppContainer = styled.div`
//   font-family: 'Fredoka One';
// `;

function App({ Component, pageProps }) {
  // Products added to the basket are stored in a state
  const [basket, setBasket] = useState([]);

  function updateBasket(itemToAdd) {
    // First, determine whether the product the online customer wants to add already exists in the basket by using the product id
    const existingItem = basket.find(item => {
      return item.id === itemToAdd.id;
    });
    // If it has been already added, increase the current quantity by one (this logic will need to change when there are variations in products such as colour or size)
    if (existingItem) {
      existingItem.quantity++;
    } else {
      // If not, add the product to the basket
      setBasket([...basket, itemToAdd]);
    }
  }

  function removeItem(itemToRemove) {
    // First, find the index of the product the online customer wants to remove by using the product id
    const indexToRemove = basket.findIndex(item => {
      return item.id === itemToRemove.id;
    });
    // Depending on the position of the product in the basket, splice the basket array accordingly and remove the product
    if (indexToRemove > 0) {
      setBasket([
        ...basket.slice(0, indexToRemove),
        ...basket.slice(indexToRemove + 1),
      ]);
    } else {
      setBasket([...basket.slice(indexToRemove + 1)]);
    }
  }

  return (
    <ChakraProvider>
      <Navigation basket={basket} removeItem={removeItem} />
      <div className="container">
        <Box mx={{ md: '10em' }}>
          <Component {...pageProps} updateBasket={updateBasket} />
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
