import React, { ReactNode } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import { Box } from '@chakra-ui/react';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Box bg="accent2.300">
        <Header />
        <Navigation />
      </Box>
      <Box>
        <main>{children}</main>
      </Box>
    </>
  );
};

export default Layout;
