import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import Navigation from '../src/components/Navigation';

function App({ Component, pageProps }) {
  const [basket, setBasket] = useState([]);

  function updateBasket(itemToAdd) {
    const existingItem = basket.find(item => {
      return item.id === itemToAdd.id;
    });
    if (existingItem) {
      existingItem.quantity++;
    } else {
      setBasket([...basket, itemToAdd]);
    }
  }

  function removeItem(itemToRemove) {
    const indexToRemove = basket.findIndex(item => {
      return item.id === itemToRemove.id;
    });
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
        <Component {...pageProps} updateBasket={updateBasket} />
      </div>
    </ChakraProvider>
  );
}

export default App;
