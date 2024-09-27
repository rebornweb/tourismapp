// app/providers.tsx
'use client';

import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import theme from './styles/theme';
import client from './apollo-client'; // Adjust the path as needed

export function Providers({ children }: { children: React.ReactNode }) {
  return (
   
      <ChakraProvider theme={theme}>
         <ApolloProvider client={client}>
        {children}
        </ApolloProvider>
      </ChakraProvider>
  
  );
}

