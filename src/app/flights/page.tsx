'use client'

import React, { useState } from 'react';
import OneWayOfferRequests from '../components/OneWayFlight';
import RoundTripFlight from '../components/RoundTripFlight';

const FlightChoice: React.FC = () => {
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRoundTrip(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isRoundTrip}
          onChange={handleCheckboxChange}
        />
        Round Trip
      </label>

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
