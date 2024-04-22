import React from 'react';
import { Box, Heading, Text, Image, Stack } from '@chakra-ui/react';

// Use require to import the image dynamically
const airportCoffeeImage = require('../../../public/airport-coffee.jpg');

const Header: React.FC = () => {
  return (
    <header>
      <Stack direction='row' alignItems='center'>
        <Box flex='1'>
          <Heading>Welcome to Travel Eyes</Heading>
          <Text>Explore the world with our amazing travel recommendations!</Text>
        </Box>
        <Box>
          <Image
            borderRadius='full'
            boxSize='150px'
            src={airportCoffeeImage} // Use .default to access the imported image
            alt='Airport Coffee'
          />
        </Box>
      </Stack>
    </header>
  );
};

export default Header;
