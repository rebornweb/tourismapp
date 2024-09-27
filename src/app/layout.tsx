// components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { Providers } from './providers'; // Adjust the path as needed
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Box } from '@chakra-ui/react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <UserProvider>
      <body>
       
        <Providers>

        <Box bg="secondary.default">
        <Header/>
        <Navigation/>
        </Box>
        
          {children}
        
        </Providers>
      </body>
      </UserProvider>
    </html>
  );
}
