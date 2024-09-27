import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { SimpleGrid, Card, CardHeader, CardBody, Heading, Input, Button } from '@chakra-ui/react';

const FlightBookingForm = () => {
  const localApiUrl = `${process.env.NEXT_PUBLIC_HOST_DOMAIN_API}`
  const offerParams = useSearchParams();
  const passengerParams = useSearchParams();
  const airlineParams = useSearchParams();
  const offerId = offerParams.get('offerId') || ''; // Provide default empty string if null
  const passengerId = passengerParams.get('passengerId') || ''; // Provide default empty string if null
  const airlineId = airlineParams.get('al') || ''; // Provide default empty string if null

  const [offerData, setOfferData] = useState<any>(null);

  const [formData, setFormData] = useState({
    givenName: '',
    familyName: '',
    gender: '',
    email: '',
    offerId: offerId,
    passengerId: passengerId,
    al: airlineId
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const queryParams = new URLSearchParams(formData).toString();
    const path = `/flights/updateoffer?${queryParams}`;

    router.push(path);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!offerId || !passengerId) {
          console.error('Invalid offerId or passengerId');
          return;
        }

        const offerResponse = await fetch(`${localApiUrl}/get_offer?offerId=${offerId}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!offerResponse.ok) {
          const errorData = await offerResponse.json();
          const errorMessage = errorData?.error || 'Unknown error occurred';
          throw new Error(`HTTP error! Status: ${offerResponse.status}, Message: ${errorMessage}`);
        }

        const offerData = await offerResponse.json();
        console.log('Update offer page data:', offerData);
        setOfferData(offerData);
      } catch (error) {
        console.error('Error fetching offer data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
      <Card variant='elevated'>
        <CardHeader>
          <Heading as='h2' size='md'>
            Flight Booking
          </Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <Input type="text" name="givenName" value={formData.givenName} onChange={handleInputChange} placeholder="Given Name" />
            <Input type="text" name="familyName" value={formData.familyName} onChange={handleInputChange} placeholder="Family Name" />
            <Input type="text" name="gender" value={formData.gender} onChange={handleInputChange} placeholder="Gender" />
            <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
            <Button type="submit" variant='solid' colorScheme='primary'>
              Next
            </Button>
          </form>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default FlightBookingForm;
