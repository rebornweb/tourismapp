import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import theme from "./theme";



const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
    <App/>
    </ChakraProvider>
  </React.StrictMode>,
  root
);

