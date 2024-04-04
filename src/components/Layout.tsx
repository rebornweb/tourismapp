import React, { ReactNode } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import { Box, Heading, Text } from '@chakra-ui/react';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <Box>
      <main>{children}</main>
      </Box>
    </>
  );
};

export default Layout;
