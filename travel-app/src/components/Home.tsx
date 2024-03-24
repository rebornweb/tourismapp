import React, { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from './Layout';
import GoogleMaps from './Map'; // Import the GoogleMaps component
import Places from './Places'; // Import the Hotel component

interface Location {
  lat: number;
  lng: number; // Corrected property name to match usage in state and function
}

const Home: React.FC = () => {
  // State to hold latitude and longitude
  const [location, setLocation] = useState<Location>({ lat: 0, lng: 0 }); // Corrected type annotation

  // Function to handle location change
  const handleLocationChange = (lat: number, lng: number) => { // Corrected parameter type annotation
    // Update the location state when the location changes in GoogleMaps
    setLocation({ lat, lng });
    console.log('Uplifted Location from Googlemaps to home:', { lat, lng });
  };

  return (
      <div>
      <Box>
        <Heading>Welcome to the Travel App</Heading>
        <Text>Explore the world with our amazing travel recommendations!</Text>
      </Box>
      {/* Pass handleLocationChange function as prop to GoogleMaps */}
      {/* This is where the state is lifted up */}
      <GoogleMaps onLocationChange={handleLocationChange} />
      {/* The GoogleMaps component will call handleLocationChange when the location changes */}
      
      {/* Pass the location object as prop to the Hotel component */}
      <Places location={location} />
      </div>
  );
};

export default Home;
