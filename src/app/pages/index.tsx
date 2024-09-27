import React, { useState, useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import GoogleMaps from '../components/Map'; // Import the GoogleMaps component
import Places from '../components/Places'; // Import the Hotel component

interface Location {
  lat: number;
  lng: number;
  locationId: number; // Add locationId to the Location interface
}

const Home: React.FC = () => {

  useEffect(() => {
    document.title = 'Skysetters - Home';
  }, []);
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
  
      {/* Pass handleLocationChange function as prop to GoogleMaps */}
      {/* This is where the state is lifted up */}
      <Heading as='h4' size='md'>Plan Your Adventure</Heading>
      <GoogleMaps onLocationChange={handleLocationChange} />
      {/* The GoogleMaps component will call handleLocationChange when the location changes */}
      
      {/* Pass the location object as prop to the Places component */}
      <Places location={location} locationId={''} />
    </div>
  );
};

export default Home;
