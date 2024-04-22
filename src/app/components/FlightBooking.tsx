'user client'

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button } from '@chakra-ui/react'

interface FlightBookingProps {
  offerId: string | null;
  passengerId: string | null;
}

const FlightBooking: React.FC<FlightBookingProps> = ({ offerId, passengerId }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const localApiUrl = process.env.NEXT_PUBLIC_REACT_APP_LOCAL_API_URL;
  useEffect(() => {
    // Call handleGetOffer when the component mounts
    handleGetOffer();
  }, []); // Empty dependency array means this effect runs only once, on mount

  const handleGetOffer = async () => {
    if (!offerId || !passengerId) {
      console.error('Invalid offerId or passengerId');
      return;
    }

    try {
      const response = await fetch(`${localApiUrl}/get_offer?offerId=${offerId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.error || 'Unknown error occurred';
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
      }

      const responseData = await response.json();
      console.log('Get Offer Response data:', responseData);
    } catch (error: any) {
      console.error('Error getting offer:', error.message);
      setError('Error getting offer');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);
    setError(null);

    try {
      await handleGetOffer(); // Call the handleGetOffer function before creating the order

      // Your order creation code here

      const postData = {
        // Your flight booking data here
        "data": {
          "users": [
            "icu_0000Ah6UzIHn6Km3dUIMhE"
          ],
          "type": "instant",
          "selected_offers": [
            offerId // Use the offerId prop here
          ],
          "payments": [
            {
              "type": "balance",
              "currency": "AUD",
              "amount": "47.18" //Need to match the offer
            }
          ],
          "passengers": [
            {
              "user_id": "icu_0000Ah6UzIHn6Km3dUIMhE",
              "title": "mrs",
              "phone_number": "+442080160509",
              "identity_documents": [
                {
                  "unique_identifier": "19KL56147",
                  "type": "passport",
                  "issuing_country_code": "GB",
                  "expires_on": "2025-04-25"
                }
              ],
              "id": passengerId, // Use the passengerId prop here
              "given_name": "Amelia",
              "gender": "f",
              "family_name": "Earhart",
              "email": "amelia@duffel.com",
              "born_on": "1987-07-24"
            }
          ],
          "metadata": {
            "payment_intent_id": "pit_00009htYpSCXrwaB9DnUm2"
          }
        }
      };
      

      const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      };

      const response = await fetch(`${localApiUrl}/create_order`, requestOptions);

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.message || 'Unknown error occurred';
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
      }

      const responseData = await response.json();
      console.log('Create Order Response data:', responseData);
      setSuccess(true);
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
  return (
    <div>
      <h2>Flight Booking</h2>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
    <Card variant='elevated'>
      <CardHeader> Flight</CardHeader>
      <CardBody>
   

      <form onSubmit={handleSubmit}>
        {/* Add your input fields for flight booking data here */}
        <Button type="submit" variant='solid' colorScheme='primary' disabled={loading}>
          {loading ? 'Booking...' : 'Book Flight'}
        </Button>
      </form>
      {success && <p>Flight booked successfully!</p>}
      {error && <p>{error}</p>}

      </CardBody>
      <CardFooter>Have a nice trip</CardFooter>
    </Card>
</SimpleGrid>


    </div>
  );
};

export default FlightBooking;