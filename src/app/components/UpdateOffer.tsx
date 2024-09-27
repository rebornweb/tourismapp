import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Heading, Input, Flex, Box, Spacer } from '@chakra-ui/react'
import CreateUserForm from '@/app/components/CreateUser';
import FlightBooking from '@/app/components/FlightBooking';
import FlightCard from '@/app/components/FlightCard';

interface OfferProps {
  offerId: string;
  passengerId: string;
  givenName: string;
  familyName: string;
  gender: string;
  email: string;

}

const Offer: React.FC = () => {
  //const router = useRouter();
  //const { givenName, familyName, gender, email } = router.query;

  const [offerData, setOfferData] = useState<any>(null);
  const [airlineIATACode, setAirlineIATACode] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [givenNameUpdate, setGivenName] = useState('');
  const [familyNameUpdate, setFamilyName] = useState('');
  const localApiUrl = `${process.env.NEXT_PUBLIC_HOST_DOMAIN_API}` 

  // Get offerId and passengerId from URL using useSearchParams
  const offerParams = useSearchParams();
  const passengerParams = useSearchParams();
  const airlineParams = useSearchParams();
  const offerId = offerParams.get('offerId');
  const passengerId = passengerParams.get('passengerId');
  const airlineId = airlineParams.get('al');

  const givenNameParams = useSearchParams();
  const familyNameParams = useSearchParams();
  const genderParams = useSearchParams();
  const emailParams = useSearchParams();

  const givenName = givenNameParams.get('givenName');
  const familyName = familyNameParams.get('familyName');
  const gender = genderParams.get('gender');
  const email = emailParams.get('email');

  //Payment details
  const [paymentIntent, setPaymentIntent] = useState<any>(null);

  const handlePatchPassengerDetails = async () => {
    try {
      const newData = {
        data: {
          loyalty_programme_accounts: [
            {
              airline_iata_code: airlineId,
              account_number: accountNumber,
            },
          ],
          given_name: givenNameUpdate,
          family_name: familyNameUpdate,
        },
      };

      const response = await fetch(
        `${localApiUrl}/update/passenger?offerId=${offerId}&passengerId=${passengerId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ offerId, passengerId, newData }),
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
    handlePatchPassengerDetails();
  }, [offerId, passengerId]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch offer data
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
        setOfferData(offerData); // Store the response data in state
  
        // Ensure offerData and data object exist before accessing properties
        if (offerData && offerData.data) {
          const postData = {
            data: {
              currency: offerData.data.base_currency || '', // Provide a default value if base_currency is undefined
              amount: offerData.data.total_amount || '' // Provide a default value if total_amount is undefined
            }
          };
          console.log('Payment Intent Postdata:', postData);
          const paymentRequestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          };
  
          const paymentResponse = await fetch(`${localApiUrl}/payment_intents`, paymentRequestOptions);
  
          if (!paymentResponse.ok) {
            const errorData = await paymentResponse.json();
            const errorMessage = errorData?.error || 'Unknown error occurred';
            throw new Error(`HTTP error! Status: ${paymentResponse.status}, Message: ${errorMessage}`);
          }
  
          const paymentIntentData = await paymentResponse.json();
          console.log('Payment Intent Response:', paymentIntentData);
          setPaymentIntent(paymentIntentData);
        } else {
          console.error('Error: Invalid offerData structure');
          setPaymentIntent(null);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setOfferData(null);
        setPaymentIntent(null);
      }
    };
  
    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array means it runs once on mount
  


  return (
    <Suspense>
    <div>
      <p>Offer ID: {offerId}</p>
      <p>Offer Passenger ID: {passengerId}</p>
      {paymentIntent && paymentIntent.data && paymentIntent.data.id ? (
        <p>Payment Intent id: {paymentIntent.data.id}</p>
        
      ) : (
        <p>Loading payment intent...</p>
      )}
      <Flex>
      <Box>
      <FlightCard offerData={offerData} />
      </Box>
      <Box>
     
      {paymentIntent && paymentIntent.data && paymentIntent.data.id ? (
         <FlightBooking
         clientToken={paymentIntent.data.client_token}
         paymentId={paymentIntent.data.id}
         offerId={offerId}
         passengerId={passengerId}
         givenName={givenName}
         familyName={familyName}
         gender={gender}
         email={email}
       />
      
      ) : (
        <p>Loading...</p>
      )}
      </Box>
      </Flex>
      <Flex>
        <Box flex='4'>
          <CreateUserForm />
        </Box>
        <Spacer />
        <Box flex='4'>
          <Heading as='h4' size='md'>Update Passenger / Loyalty Account</Heading>
          <br />
          <label>
            Account Number:
            <Input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </label>
          <br />
          <label>
            Given Name:
            <Input
              type="text"
              value={givenNameUpdate}
              onChange={(e) => setGivenName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Family Name:
            <Input
              type="text"
              value={familyNameUpdate}
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
        </Box>
      </Flex>
      
    </div>
    </Suspense>
  );
};

export default Offer;
