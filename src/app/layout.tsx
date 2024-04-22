// components/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { Box } from '@chakra-ui/react';
import { Providers } from './providers'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
       
        <Providers>
        <Box bg="accent2.300">
        <Header/>
        <Navigation/>
        </Box>
        
          {children}
        
        </Providers>
      </body>
    </html>
  )
}