'use-client'
import React, { useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Image, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import  iataCodes  from '../utils/iataCodes-small.js'; 
//import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {  Autocomplete,  AutocompleteSection,  AutocompleteItem} from "@nextui-org/autocomplete";

const OneWayOfferRequests: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<any>(null);

  const localApiUrl = process.env.NEXT_PUBLIC_REACT_APP_LOCAL_API_URL;

  const handlePostRequest = async () => {
    setLoading(true);
    try {
      const postData = {
        data: {
          cabin_class: 'economy',
          slices: [
            {
              departure_date: '2024-04-23',
              destination: selectedDestination,
              origin: selectedOrigin,
            },
          ],
          passengers: [{ type: 'adult' }],
        },
      };
          // Log the data being posted
    console.log('Data being posted:', postData);

      const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      };

      const response = await fetch(`${localApiUrl}/offer_requests`, requestOptions);
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.message || 'Unknown error occurred';
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
      }

      const responseData = await response.json();
      setResponseData(responseData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError('Error posting flight data: ' + error.message);
      } else {
        setError('Unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };


  const [destinationInput, setDestinationInput] = useState('');
  const [originInput, setOriginInput] = useState('');

  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('');
  

  const handleDestinationSelect = (code: any) => {
    setSelectedDestination(code);
  };
  
  const handleOriginSelect = (code: any) => {
    setSelectedOrigin(code);
  };
  
  return (
    <div>

     {/* Input fields for Destination and Origin */}
     <Autocomplete defaultItems={iataCodes} label="Destination" placeholder="Search a city" onSelectionChange={handleDestinationSelect}>
        {(iataCode) => (
          <AutocompleteItem key={iataCode.code}>{iataCode.city}</AutocompleteItem>
        )}
      </Autocomplete>
      <p className="text-default-500 text-small">Selected Destination: {selectedDestination}</p>
      <Autocomplete defaultItems={iataCodes} label="Origin" placeholder="Search a city" onSelectionChange={handleOriginSelect}>
        {(iataCode) => (
          <AutocompleteItem key={iataCode.code}>{iataCode.city}</AutocompleteItem>
        )}
      </Autocomplete>
      <p className="text-default-500 text-small">Selected Origin: {selectedOrigin}</p>

      {/* Button to trigger the API call */}
      <Button onClick={handlePostRequest}>Search Flights</Button>
      {/* Loading and error handling */}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
{/* Display flight details */}
{responseData && responseData.data ? (
  <div>
    <h1>Flight Details</h1>
    <p>Origin: {responseData?.data.slices[0].origin.name}</p>
    <p>Destination: {responseData?.data.slices[0].destination.name}</p>
    <p>Cabin Class: {responseData?.data.cabin_class}</p>
    {/* Additional flight details can be displayed here */}

    <h3>Offers</h3>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
      {responseData.data.offers.map((offer : any, index : any) => (
        <Card key={index} variant='elevated'>
          <CardHeader> Flight</CardHeader>
          <CardBody>
            <p>Airline: {offer.owner.name}</p>
            <Image src={offer?.owner.logo_lockup_url} boxSize='150px' borderRadius='lg' />
            <p>Cabin Class: {responseData?.data.cabin_class}</p>
            <p>Baggage: 1 Carry-on</p>
            <p>Total Amount: {offer?.base_currency} {offer?.base_amount}</p>
            <p>OfferId: {offer?.id}</p>
            <p>Passenger Id: {offer?.passengers[0].id}</p>
            

            <Link href={{
            pathname: '/flights/updateoffer',
            query: {offerId: offer?.id, passengerId: offer?.passengers[0].id}
          }} >
        <Button variant='solid' colorScheme='primary'>Check Flight</Button>
      </Link>
            
      
          </CardBody>
          <CardFooter>Have a nice trip</CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  </div>
) : (
  <div>No flight details available</div>
)}

    </div>
  );
};

export default OneWayOfferRequests;

