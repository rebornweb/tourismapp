'use client'

import React, { useState } from 'react';
import Autocomplete from './Autocomplete';
import iataCodes from '../utils/iataCodes';
import { Box, Heading, Text, Image, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, Flex, Input } from '@chakra-ui/react';
import Link from 'next/link';

const OneWayOfferRequests: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<any>(null);

  const [selectedDate, setSelectedDate] = useState<string>('');
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const localApiUrl = `${process.env.NEXT_PUBLIC_HOST_DOMAIN_API}`

  const handlePostRequest = async () => {
    setLoading(true);
    try {
      const postData = {
        data: {
          cabin_class: 'economy',
          slices: [
            {
              departure_date: selectedDate,
              destination: selectedDestination,
              origin: selectedOrigin,
            },
          ],
          passengers: [{ type: 'adult' }],
        },
      };
      console.log('Data being posted:', postData);

      const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
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
      console.log('One way flights data:', responseData);
      setResponseData(responseData);
    } catch (error: any) {
      if (error instanceof Error) {
        setError('Error posting flight data: ' + error.message);
      } else {
        setError('Unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('');

  return (
    <div>
      <SimpleGrid columns={1} spacingX='2px' spacingY='2px'>
        <Flex>
          <Autocomplete
            placeholder="Enter origin city"
            options={iataCodes}
            onSelect={(code: any) => setSelectedOrigin(code)}
            extraLabel='From'
          />
          <Autocomplete
            placeholder="Enter destination city"
            options={iataCodes}
            onSelect={(code: any) => setSelectedDestination(code)}
            extraLabel='To'
          />
          <Box flex='2'>
            <Text mb='8px'>Depart</Text>
            <Input
              placeholder='Select Date and Time'
              size='md'
              type='date'
              flex='2'
              htmlSize={5}
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Box>
          <Box flex='2'>
            <Button
              bg='primary.default'
              _hover={{ bg: 'primary.100' }}
              onClick={handlePostRequest}
            >
              Search Flights
            </Button>
          </Box>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
        </Flex>
      </SimpleGrid>

      {responseData && responseData.data ? (
        <div>
          <h1>Flight Details</h1>
          <p>Origin: {responseData?.data.slices[0].origin.name}</p>
          <p>Destination: {responseData?.data.slices[0].destination.name}</p>
          <p>Cabin Class: {responseData?.data.cabin_class}</p>

          <h3>Offers</h3>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
            {responseData.data.offers.map((offer: any, index: any) => (
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
                  {offer?.owner.logo_lockup_url} 

                  <Link href={{
                    pathname: '/flights/summary',
                    query: { offerId: offer?.id, passengerId: offer?.passengers[0].id, al: offer.owner.iata_code }
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
