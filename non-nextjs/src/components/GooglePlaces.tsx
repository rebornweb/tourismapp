import React, { useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';

interface GooglePlacesProps {
  onSearch: (input: string) => void; // Callback function to handle search
  onUpdateAddress: (address: string) => void; // Callback function to update address
  location: {
    lat: number;
    lng: number;
  };
}

const GooglePlaces: React.FC<GooglePlacesProps> = ({ onSearch, onUpdateAddress }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [updatedAddress, setUpdatedAddress] = useState<string>('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/google/places?input=${inputValue}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch places: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Google Places data:', data);
      onSearch(inputValue); // Call the parent component's onSearch function with inputValue
      onUpdateAddress(data.address); // Call onUpdateAddress to update the address string
      setUpdatedAddress(data.address); // Update the local state with the address
    } catch (error) {
      console.error('Error fetching Google Places:', error);
      // Handle error in your app as needed
    }
  };

  return (
    <Box>
      <Input
        placeholder="Enter search query"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        mb={4}
      />
      <Button colorScheme="blue" onClick={handleSearch}>
        Search
      </Button>
      {updatedAddress && (
        <Text mt={4}>Updated Address: {updatedAddress}</Text>
      )}
    </Box>
  );
};

export default GooglePlaces;
