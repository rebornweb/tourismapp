import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from './Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Box>
        <Heading>Welcome to the Travel App</Heading>
        <Text>Explore the world with our amazing travel recommendations!</Text>
      </Box>
    </Layout>
  );
};

export default Home;
