'use client'
import React, { useState, useEffect } from 'react';
import { Heading, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button, Input, Box } from '@chakra-ui/react'
import { DuffelPayments } from "@duffel/components";

interface FlightBookingProps {
  givenName: string | null | undefined;
  familyName: string | null | undefined;
  gender: string | null | undefined;
  email: string | null | undefined;
  offerId: string | null | undefined;
  passengerId: string | null | undefined;
  paymentId: string | null | undefined;
  clientToken: string | null | undefined;
}

const FlightBooking: React.FC<FlightBookingProps> = ({ givenName, familyName, gender, email, offerId, passengerId, paymentId, clientToken }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<any>(null);

  const localApiUrl = `${process.env.NEXT_PUBLIC_HOST_DOMAIN_API}`

  useEffect(() => {
    handleGetOffer();
  }, []);

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
      setResponseData(responseData);
    } catch (error: any) {
      console.error('Error getting offer:', error.message);
      setError('Error getting offer');
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    // Extract form data from state
   // const { givenName, familyName, gender, email } = formData;
    let response; // Declare response here
  
    try {
      response = await fetch(`${localApiUrl}/get_offer?offerId=${offerId}`, {
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
  
      const responseData = await response.json(); // Assign the value here
  
      const postData = {
        data: {
         //users: ["icu_0000Ah6UzIHn6Km3dUIMhE"],
          type: "instant",
          selected_offers: [`${offerId}`],
          payments: [
            {
              type: "balance",
              currency: "AUD",
              amount: responseData?.data?.total_amount || "0", // Use responseData here
            },
          ],
          passengers: [
            {
             // user_id: "icu_0000Ah6UzIHn6Km3dUIMhE",
              title: "mr",
              phone_number: "+442080160509",
              identity_documents: [
                {
                  unique_identifier: "19KL56147",
                  type: "passport",
                  issuing_country_code: "GB",
                  expires_on: "2025-04-25",
                },
              ],
              id: `${passengerId}`,
              given_name: givenName, // Use form data here
              gender: gender,
              family_name: familyName,
              email: email,
              born_on: "1987-07-24",
            },
          ],
          metadata: {
            payment_intent_id: `${paymentId}`,
          },
        },
      };
  
      console.log('Post Data:', postData); // Log the postData object
  
      const requestOptions: RequestInit = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };
  
      response = await fetch(`${localApiUrl}/create_order`, requestOptions);
  
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.message || "Unknown error occurred";
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
      }
  
      const responseDataPost = await response.json(); // Get the response data after POST
      console.log("Order Created - Response data:", responseDataPost); // Log the response after POST
      setSuccess(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError("Error posting flight data: " + error.message);
      } else {
        setError("Unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  
  const handleSuccessfulPayment = () => {
    console.log('Payment successful! Initiating flight booking...');
    const placeholderEvent = { preventDefault: () => {} } as React.FormEvent<HTMLFormElement>;
    handleSubmit(placeholderEvent);
    setSuccess(true);
  };
  return (
    <div>
      <Box>
        <Heading as='h5' size='sm'>Client Token: {clientToken}</Heading>
        {/* Conditionally render based on success state */}
        {success ? (
          <Box>
            <Heading as='h2' size='md'>Payment Sent</Heading>
            {/* Additional content/message */}
            <p>Your payment has been successfully processed.</p>
          </Box>
        ) : (
          <DuffelPayments
            paymentIntentClientToken={clientToken ?? ''}
            onSuccessfulPayment={() => {
              handleSuccessfulPayment();
              console.log('Additional console log for successful payment.');
            }}
            onFailedPayment={() => {
              console.log('Additional Payment failed.');
            }}
          />
        )}
      </Box>
      <Box>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
          <Card variant='elevated'>
            <CardHeader>
              <Heading as='h2' size='md'>Flight Booking</Heading>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit}>
                {/* Form inputs */}
                <Input type="text" name="givenName" value={givenName || ''} readOnly placeholder="Given Name" />
                <Input type="text" name="familyName" value={familyName || ''} readOnly placeholder="Family Name" />
                <Input type="text" name="gender" value={gender || ''} readOnly placeholder="Gender" />
                <Input type="email" name="email" value={email || ''} readOnly placeholder="Email" />

                {loading ? 'Booking...' : 'Ready to Fly?'}
              </form>
            </CardBody>
            <CardFooter>Have a nice trip</CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </div>
  );
};


export default FlightBooking;

