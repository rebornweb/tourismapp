'use-client'

import React from 'react';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../layout'; // Import your layout component
import '../styles/globals.css'; // Global styles
import theme from '../../styles/theme'; // Your Chakra UI theme

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
