import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Map from './Map';
import Navigation from './Navigation';

const Home = () => {
    return (
        <Box>
            <Heading>Welcome to the Travel App</Heading>
            <Text>Explore the world with our amazing travel recommendations!</Text>
            <Navigation/>

            <Map/>
        </Box>
    );
};

export default Home;