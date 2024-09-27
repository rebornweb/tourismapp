import React from 'react';
import { Box, Heading, Text, Image, Stack, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button, Flex } from '@chakra-ui/react';

interface FlightCardProps {
  offerData: any; // Update the type based on the actual structure of your offer data
}

const FlightCard: React.FC<FlightCardProps> = ({ offerData }) => {
  console.log('Flight card data: ', offerData);

  // Check if offerData is not null and contains the necessary data
  if (!offerData || !offerData.data) {
    return <Text>No flight data available</Text>;
  }

  const {
    data: {
      total_emissions_kg,
      base_amount,
      tax_amount,
      total_amount,
      slices,
      passengers,
      updated_at,
      expires_at,
      owner,
    },
  } = offerData;
// Assuming offerData is your object
const cabinClass = offerData?.slices?.[0]?.segments?.[0]?.passengers?.[0]?.cabin_class;

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4">
       
      {/* Render other necessary details from slices, passengers, owner, etc. */}

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>

        <Card variant='elevated'>
          <CardHeader> Flight Details</CardHeader>
          <CardBody>
            <p>Airline: {owner.name}</p>
            <Image src={owner.logo_lockup_url} boxSize='150px' borderRadius='lg' />
            <p>Cabin Class: {cabinClass}</p>
            <Text>Total Emissions (kg): {total_emissions_kg}</Text>
      <Text>Base Amount: {base_amount}</Text>
      <Text>Tax Amount: {tax_amount}</Text>
      <Text>Total Amount: {total_amount}</Text>
        
       
          </CardBody>
          <CardFooter>Have a nice trip</CardFooter>
        </Card>
</SimpleGrid>
    </Box>
  );
};

export default FlightCard;
