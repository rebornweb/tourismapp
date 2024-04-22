'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Heading } from '@chakra-ui/react'
import CreateUserForm from '@/app/components/CreateUser';
import FlightBooking from '@/app/components/FlightBooking';

interface OfferProps {
  offerId: string;
  passengerId: string;
}

const Offer: React.FC<OfferProps> = () => {
  const router = useRouter();
  const [offerData, setOfferData] = useState<any>(null);
  const [airlineIATACode, setAirlineIATACode] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const localApiUrl = process.env.NEXT_PUBLIC_REACT_APP_LOCAL_API_URL || '';

  // Get offerId and passengerId from URL using useSearchParams
  const offerParams = useSearchParams();
  const passengerParams = useSearchParams();
  const offerId = offerParams.get('offerId');
  const passengerId = passengerParams.get('passengerId');

  // Function to update passenger details
  const handlePatchPassengerDetails = async () => {
    try {
      const newData = {
        data: {
          loyalty_programme_accounts: [
            {
              airline_iata_code: airlineIATACode,
              account_number: accountNumber,
            },
          ],
          given_name: givenName,
          family_name: familyName,
        },
      };

    const response = await fetch(
  `${localApiUrl}/update/passenger?offerId=${offerId}&passengerId=${passengerId}`,
  {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ offerId, passengerId, newData }), // Combine offerId, passengerId, and newData in an object
  }
);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedPassenger = await response.json();
      console.log('Updated Passenger:', updatedPassenger);

      setOfferData(updatedPassenger.data); // Assuming the response structure contains 'data' property
    } catch (error) {
      console.error('Error updating passenger details:', error);
    }
  };

  useEffect(() => {
    if (offerId && passengerId) {
      handlePatchPassengerDetails();
    }
  }, [offerId, passengerId]); // Run the effect when offerId or passengerId changes

  return (
    <div>
      <Heading as='h4'>Offer Details</Heading>
      <p>Offer ID: {offerId}</p>
      <p>Offer Passenger ID: {passengerId}</p>
      <CreateUserForm/>
      <Heading as='h4'>Update Passenger</Heading>
      {/* Input bars */}
      <label>
        Airline IATA Code:
        <input
          type="text"
          value={airlineIATACode}
          onChange={(e) => setAirlineIATACode(e.target.value)}
        />
      </label>
      <br />
      <label>
        Account Number:
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        Given Name:
        <input
          type="text"
          value={givenName}
          onChange={(e) => setGivenName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Family Name:
        <input
          type="text"
          value={familyName}
          onChange={(e) => setFamilyName(e.target.value)}
        />
      </label>
      <br />

      <button onClick={handlePatchPassengerDetails}>Update Passenger</button>

      {offerData ? (
        <div>
          <h3>Name: {offerData.given_name} {offerData.family_name}</h3>
          {/* Display other updated details if needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <FlightBooking offerId={offerId} passengerId={passengerId}/>
    </div>
  );
};

export default Offer;
