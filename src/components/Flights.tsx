import React, { useState } from 'react';
import { Box, Heading, Text, Image, Stack, Card, CardHeader, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react';

const OfferRequests: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<any>(null);
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;

  const [postData, setPostData] = useState<any>({
    cabin_class: 'economy',
    slices: [
      {
        departure_date: '2024-04-09',
        destination: 'WLG',
        origin: 'AKL'
      }
    ],
    passengers: [
      {
        type: 'adult'
      }
    ]
  });

  const handlePostRequest = async () => {
    setLoading(true);
    try {
      const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      };

      const response = await fetch(`${localApiUrl}/duffel/offer_requests`, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Duffel Flight Reponse data: ',responseData);
      setResponseData(responseData);
    } catch (error: any) {
      setError('Error posting flight data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData(prevData => ({
      ...prevData,
      slices: [{ ...prevData.slices[0], [name]: value }],
    }));
  };

  //const { slices } = responseData || {};
  //const slicedata = slices?.[0];
  //const destination = slicedata?.destination;
  //const origin = slicedata?.origin;
  const cabinClass = responseData?.cabin_class || '';

  return (
    <div>
      <div>
        <h2>Flights Duffel</h2>
        <label>Cabin Class:</label>
        <input type="text" name="cabin_class" value={postData.cabin_class} onChange={handleChange} />
      </div>
      <div>
        <label>Departure Date:</label>
        <input type="text" name="departure_date" value={postData.slices[0].departure_date} onChange={handleChange} />
      </div>
      <div>
        <label>Destination:</label>
        <input type="text" name="destination" value={postData.slices[0].destination} onChange={handleChange} />
      </div>
      <div>
        <label>Origin:</label>
        <input type="text" name="origin" value={postData.slices[0].origin} onChange={handleChange} />
      </div>
      <div>
        <label>Passenger Type:</label>
        <input type="text" name="type" value={postData.passengers[0].type} onChange={handleChange} />
      </div>
      <button onClick={handlePostRequest}>Send POST Request</button>
      
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {responseData ? (
        <div>
          <h1>Flight Details</h1>
          <p>Departure Date: {responseData?.departure_date}</p>
          <p>Destination: {responseData?.destination?.name}</p>
          <p>Airport Destination: Long and Lat: {}</p>
          <p>Origin: {responseData?.origin?.name}</p>
          <p>
            Airport Origin Long and Lat: {responseData?.destination?.longitude} {responseData?.destination?.latitude}  
          </p>
          <h3>Offers</h3>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
            {responseData.offers?.slice(0, 5).map((offer: any, index: number) => (
              <Card key={index} variant='elevated'>
                <CardHeader>Flight</CardHeader>
                <CardBody>
                  <p>Airline: {offer?.owner?.name}</p>
                  <Image src={offer?.slices[0].segments[0].operating_carrier.logo_lockup_url} borderRadius='full' boxSize='150px' />
                  <p>To: {offer?.slices[0].destination?.city_name}, {offer?.slices[0].destination?.iata_country_code} ({offer?.slices[0].destination?.name})</p>
                  <p>From: {offer?.slices[0].origin?.city_name}, {offer?.slices[0].origin?.iata_country_code} </p>
                  <p>Cabin Class: {cabinClass}</p>
                  <p>Baggage: {offer?.slices[0].segments[0].passengers[0].baggages[0].quantity} 
                  {offer?.slices[0].segments[0].passengers[0].baggages[0].type}
                  </p>
                  <p>{offer?.slices[0].segments[0].passengers[0].baggages[1].quantity} 
                  {offer?.slices[0].segments[0].passengers[0].baggages[1].type}</p>
                  <p>Total Amount: {offer?.base_currency} {offer?.base_amount}</p>
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

export default OfferRequests;
