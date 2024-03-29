import React, { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from './Layout';
import GoogleMaps from './Map'; // Import the GoogleMaps component
import Places from './Places'; // Import the Hotel component

interface Location {
  lat: number;
  lng: number;
  locationId: number; // Add locationId to the Location interface
}

const Home: React.FC = () => {
  // State to hold latitude, longitude, and locationId
  const [location, setLocation] = useState<Location>({ lat: 0, lng: 0, locationId: 0 }); // Initialize locationId

  // Function to handle location change
  const handleLocationChange = (lat: number, lng: number) => {
    // Update the location state when the location changes in GoogleMaps
    setLocation({ lat, lng, locationId: 1234 }); // Provide a sample locationId value
    console.log('Updated Location:', { lat, lng });
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
      
      {/* Pass the location object as prop to the Places component */}
      <Places location={location} />
    </div>
  );
};

export default Home;
