import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { ChakraProvider, theme } from '@chakra-ui/react';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  </React.StrictMode>
);