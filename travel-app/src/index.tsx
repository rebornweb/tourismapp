import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

const theme = extendTheme({
  // Define your Chakra UI theme here if needed
});



const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
    <App/>
    </ChakraProvider>
  </React.StrictMode>,
  root
);

