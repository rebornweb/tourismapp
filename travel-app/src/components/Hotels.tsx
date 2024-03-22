import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Reviews from './sub/Reviews'; // Import the Reviews component

interface HotelProps {
  location: {
    lat: number;
    lng: number;
  };
}

const Hotel: React.FC<HotelProps> = ({ location }) => {
  const [hotelsData, setHotelsData] = useState<any>(null); // State to store fetched hotels data

  useEffect(() => {
    // Fetch hotels data from backend server based on the provided location
    const fetchHotelsFromBackend = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/nearby/hotels?lat=${location.lat}&lng=${location.lng}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch hotels: ${response.statusText}`);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json(); // Parse JSON data

          // Sort hotelsData array by distance (assuming 'distance' is the property containing the distance)
          const sortedData = data.data.sort((a: any, b: any) => a.distance - b.distance);

          setHotelsData(sortedData); // Update hotelsData state with sorted data from backend
        } else {
          const data = await response.text(); // Treat response as text
          console.log('Response is not in JSON format. Raw data:', data); // Log raw data
          throw new Error('Response is not in JSON format');
        }
      } catch (error) {
        console.error('Error fetching hotels:', error);
        // Handle error, e.g., set an error state or display an error message
      }
    };
    
    fetchHotelsFromBackend(); // Call fetchHotelsFromBackend function when component mounts
  }, [location.lat, location.lng]); // Depend on location changes

  return (
    <div>
      <h2>Hotel Component</h2>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
      <h3>Nearby Hotels Data</h3>
      {/* Check if hotelsData is not null before rendering */}
      {hotelsData && hotelsData.map((hotel: any) => (
        <Box key={hotel.location_id} borderWidth="1px" borderRadius="lg" p="2">
          <Heading as="h3" size="md">{hotel.name}</Heading>
          <Text>LocationID: {hotel.location_id}</Text>
          <Text>Distance: {hotel.distance} miles</Text>
          <Text>Bearing: {hotel.bearing}</Text>
          <Text>Address: {hotel.address_obj.address_string}</Text>
          {/* Pass location ID as a prop to the Reviews component */}
          <Reviews locationId={hotel.location_id} />
        </Box>
      ))}
    </div>
  );
};

export default Hotel;

//Example call App
// http://localhost:5000/api/nearby/hotels?lat=37.7749&lng=-122.4194