import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from './Layout';
import GeolocationComponent from './Map';

const Home: React.FC = () => {
  return (
    <Layout>
      
        <Heading>Welcome to the Travel App</Heading>
        <Text>Explore the world with our amazing travel recommendations!</Text>
        <GeolocationComponent/>
    </Layout>
  );
};

export default Home;
