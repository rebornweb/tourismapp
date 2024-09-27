// components/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Navigation from './Navigation';
import { Box } from '@chakra-ui/react';
import { Providers } from '../providers';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import ApolloProvider from '../apollo-provider'; // Import ApolloProvider

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <UserProvider>
        <body>
          <ApolloProvider> {/* Wrap the Providers with ApolloProvider */}
            <Providers>
              <Box bg="secondary.default">
                <Header/>
                <Navigation/>
              </Box>
              {children}
            </Providers>
          </ApolloProvider>
        </body>
      </UserProvider>
    </html>
  );
}
