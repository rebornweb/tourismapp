import React, { useState, useRef, useEffect } from 'react';
import iataCodes from '../utils/iataCodes'; // Import the IATA codes file
import Autosuggest from 'react-autosuggest'; // Assuming you use react-autosuggest library
import { Box, Heading, Text, Image, Stack, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button } from '@chakra-ui/react';
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { Link } from 'react-router-dom';

//What this component does is that it posts the one-way flight data with autocomplete.
//It picks from the iataCodes and displays the city data but sends the iata code like OOL or BNE
//It will send the offer id to that Link which is the route in App.tsx

const OneWayOfferRequests: React.FC = () => {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<any>(null);
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL || '';

  const [inputValueOrigin, setInputValueOrigin] = useState<string>('');
  const [selectedOrigin, setSelectedOrigin] = useState<{ code: string; city: string } | null>(null);
  const [suggestionsOrigin, setSuggestionsOrigin] = useState<any[]>([]);
  
  const [inputValueDestination, setInputValueDestination] = useState<string>('');
  const [selectedDestination, setSelectedDestination] = useState<{ code: string; city: string } | null>(null);
  const [suggestionsDestination, setSuggestionsDestination] = useState<any[]>([]);

  const [date, setDate] = useState(new Date()); // State for the date picker
  const [postData, setPostData] = useState<any>({
    cabin_class: 'economy',
    slices: [{ departure_date: '', destination: '', origin: '' }],
    passengers: [{ type: 'adult' }],
  });

  
  const handleSuggestionsFetchRequestedOrigin = ({ value }: { value: string }) => {
    const inputValue = value.trim().toLowerCase();
  
    const suggestions =
      inputValue.length === 0
        ? []
        : iataCodes.filter(city => city.city.toLowerCase().includes(inputValue));
  
    setSuggestionsOrigin(suggestions);
  };
  

  
  const handleSuggestionsClearRequestedOrigin = () => {
    setSuggestionsOrigin([]);
  };

  const handleChangeOrigin = (event: React.ChangeEvent<HTMLInputElement>, { newValue }: { newValue: string }) => {
    console.log(newValue);
    setInputValueOrigin(newValue);

  };

  const handleSuggestionSelectedOrigin = (event: any, { suggestion }: { suggestion: any }) => {
    setSelectedOrigin({ code: suggestion.code, city: suggestion.city });
    setPostData(prevData => ({
      ...prevData,
      slices: [{ ...prevData.slices[0], origin: suggestion.code }],
    }));
  };

  const handleSuggestionsFetchRequestedDestination = ({ value }: { value: string }) => {
    const inputValue = value.trim().toLowerCase();
  
    const suggestions =
      inputValue.length === 0
        ? []
        : iataCodes.filter(city => city.city.toLowerCase().includes(inputValue));
  
    setSuggestionsDestination(suggestions);
  };
  const handleSuggestionsClearRequestedDestination = () => {
    setSuggestionsDestination([]);
  };

  const handleChangeDestination = (event: React.ChangeEvent<HTMLInputElement>, { newValue }: { newValue: string }) => {
    setInputValueDestination(newValue);
  };

  const handleSuggestionSelectedDestination = (event: any, { suggestion }: { suggestion: any }) => {
    setSelectedDestination({ code: suggestion.code, city: suggestion.city });
    setPostData(prevData => ({
      ...prevData,
      slices: [{ ...prevData.slices[0], destination: suggestion.code }],
    }));
  };

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

      console.log('Post Data:', postData); // Log the postData just before making the API call

      const response = await fetch(`${localApiUrl}/duffel/offer_requests`, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Duffel Flight Response data:', responseData);
      setResponseData(responseData);
    } catch (error: any) {
      setError('Error posting flight data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (selectedDate: Date) => {
    setDate(selectedDate);
    setPostData(prevData => ({
      ...prevData,
      slices: [{ ...prevData.slices[0], departure_date: selectedDate.toISOString().slice(0, 10) }],
    }));
  };


  const renderSuggestion = (suggestion: any) => <div>{suggestion.city}, ({suggestion.code}) {suggestion.country_code} </div>;

   
  const { slices } = responseData?.data || {};
const slicedata = slices?.[0];
const destination = slices?.[0]?.destination;
const origin = slices?.[0]?.origin;
  return (
    <div>
      {/* Input field with autocomplete for Origin  
      The Value is what is rendered in the input box but not what is sent
      What is sent posted is the Iata code.
      */}
      <h4>One Way</h4>
      <Autosuggest
        suggestions={suggestionsOrigin}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequestedOrigin}
        onSuggestionsClearRequested={handleSuggestionsClearRequestedOrigin}
        getSuggestionValue={(suggestion: any) => suggestion.city}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: 'Type origin city',
          value: selectedOrigin ? `${selectedOrigin.city} (${selectedOrigin.code})` : inputValueOrigin,
          onChange: handleChangeOrigin
          
        }}
        onSuggestionSelected={handleSuggestionSelectedOrigin}
      />

      {/* Input field with autocomplete for Destination */}
      <Autosuggest
        suggestions={suggestionsDestination}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequestedDestination}
        onSuggestionsClearRequested={handleSuggestionsClearRequestedDestination}
        getSuggestionValue={(suggestion: any) => suggestion.city}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: 'Type destination city',
          value: selectedDestination ? `${selectedDestination.city} (${selectedDestination.code})` : inputValueDestination,
          onChange: handleChangeDestination
         
        }}
        onSuggestionSelected={handleSuggestionSelectedDestination}
      />
  
  <SingleDatepicker
    name="date-input"
    date={date}
    onDateChange={handleDateChange} // Handle date change event
    
  configs={{
    dateFormat: 'dd-MM-yyyy',
    dayNames: 'abcdefg'.split(''), // length of 7
    monthNames: 'ABCDEFGHIJKL'.split(''), // length of 12
    firstDayOfWeek: 2, // default is 0, the dayNames[0], which is Sunday if you don't specify your own dayNames,
  }}


  />

  
   
      {/* Button to trigger the API call */}
      <Button onClick={handlePostRequest}>Search Flights</Button>

      {/* Loading and error handling */}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {/* Display flight details */}
      {responseData ? (
        <div>
          <h1>Flight Details</h1>
          <p>Origin: {responseData.slices[0].origin.name}</p>
          <p>Destination: {responseData.slices[0].destination.name}</p>
          <p>Cabin Class: {responseData?.cabin_class}</p>
          <p>
            Airport Origin Long and Lat:  
          </p>
          {/* Additional flight details can be displayed here */}

          <h3>Offers</h3>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
          {responseData.offers.map((offer, index) => (
     
    
      <Card key={index} variant='elevated'>
            <CardHeader> Flight</CardHeader>
            <CardBody>
          <p>Airline: {offer.owner.name}</p>
          <Image src={offer?.owner.logo_lockup_url} borderRadius='full' boxSize='150px' />
          <p>Cabin Class: {responseData?.cabin_class}</p>
          <p>Baggage: 1 Carry-on</p>
          <p>Total Amount: {offer?.base_currency} {offer?.base_amount}</p>
          <p>OfferId: {offer?.id}</p>
          <p>Passenger Id: {offer?.passengers[0].id}</p>
          <Link to={`/flights/updateoffer/${offer?.id}/${offer?.passengers[0].id}`} target="_blank" rel="noopener noreferrer">
            View Offer
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

