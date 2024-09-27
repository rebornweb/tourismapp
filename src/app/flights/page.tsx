'use client'

import React, { useState } from 'react';
import OneWayOfferRequests from '../components/OneWayFlight';
import RoundTripFlight from '../components/RoundTripFlight';
import { Select, Flex, Box } from '@chakra-ui/react';

const FlightChoice: React.FC = () => {
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsRoundTrip(event.target.value === 'roundTrip');
  };

  return (
    <div>
      <Flex>
      <Box p={4}>
      <Select
        placeholder='Select option'
        value={isRoundTrip ? 'roundTrip' : 'oneWay'}
        onChange={handleSelectChange}
      >
        <option value='oneWay'>One Way</option>
        <option value='roundTrip'>Round Trip</option>
      </Select>
      </Box>
</Flex>
      <div>
        {isRoundTrip ? (
          <RoundTripFlight />
        ) : (
          <OneWayOfferRequests />
        )}
      </div>
    </div>
  );
};

export default FlightChoice;
