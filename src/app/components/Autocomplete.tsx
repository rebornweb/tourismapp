import React, { useState, ChangeEvent } from 'react';
import { Input, List, ListItem, Text } from '@chakra-ui/react';

interface Option {
  code: string;
  city: string;
  country_code: string;
}

interface AutocompleteProps {
  placeholder: string;
  extraLabel: string;
  options: Option[];
  onSelect: (code: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ placeholder, options, onSelect, extraLabel }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = options.filter(
      (option) => option.city.toLowerCase().includes(value.toLowerCase()) || option.code.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleSelectOption = (option: Option) => {
    setInputValue(`${option.city}, ${option.code}`); // Concatenate city and code for display
    onSelect(option.code);
    setFilteredOptions([]);
  };

  return (
    <div>
      <Text mb='8px'>{extraLabel}</Text>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        variant='unstyled'
        size='lg'
      />
      {filteredOptions.length > 0 && (
        <List mt={2} maxH="200px" overflowY="auto" boxShadow="md">
          {filteredOptions.map((option) => (
            <ListItem key={option.code} onClick={() => handleSelectOption(option)} cursor="pointer"
            _hover={{ backgroundColor: "secondary.100",  }}
            >
              {option.city}, {option.country_code}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Autocomplete;
