import React, { useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';

interface GooglePlacesProps {
  onSearch: (input: string) => void; // Callback function to handle search
}


const GooglePlaces: React.FC<GooglePlacesProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearch = () => {
    onSearch(inputValue); // Call the parent component's onSearch function with inputValue
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
    </Box>
  );
};

export default GooglePlaces;
