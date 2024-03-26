import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Select } from '@chakra-ui/react';
import Reviews from './sub/Reviews'; // Import the Reviews component

interface placeProps {
  location: {
    lat: number;
    lng: number;
  };
}

const Places: React.FC<placeProps> = ({ location }) => {
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;

  const [placesData, setplacesData] = useState<any>(null); // State to store fetched places data
  const [category, setCategory] = useState<string>('hotels'); // State to store selected category

  useEffect(() => {
    // Fetch places data from backend server based on the provided location and category
    const fetchplacesFromBackend = async () => {
      try {
        const response = await fetch(`${localApiUrl}/nearby/places?lat=${location.lat}&lng=${location.lng}&category=${category}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch places: ${response.statusText}`);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json(); // Parse JSON data
          // Assuming 'data' contains the places data array
          const sortedData = data.data.sort((a: any, b: any) => a.distance - b.distance);
          setplacesData(sortedData); // Update placesData state with sorted data from backend
        } else {
          const data = await response.text(); // Treat response as text
          console.log('Response is not in JSON format. Raw data:', data); // Log raw data
          throw new Error('Response is not in JSON format');
        }
      } catch (error) {
        console.error('Need to choose a place or Error fetching places:', error);
        // Handle error, e.g., set an error state or display an error message
      }
    };
    
    fetchplacesFromBackend(); // Call fetchplacesFromBackend function when component mounts or when category changes
  }, [location.lat, location.lng, category]); // Depend on location and category changes

  return (
    <div>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="hotels">Hotels</option>
        <option value="attractions">Attractions</option>
        <option value="restaurants">Restaurants</option>
        <option value="geos">Geos</option>
      </Select>
      <h3>Nearby {category.charAt(0).toUpperCase() + category.slice(1)} Data</h3>
      {placesData && placesData.length === 0 && (
        <p>No {category} found.</p>
      )}
      {placesData && placesData.length > 0 && placesData.map((place: any) => (
        <Box key={place.location_id} borderWidth="1px" borderRadius="lg" p="2">
          <Heading as="h3" size="md">{place.name}</Heading>
          <Text>LocationID: {place.location_id}</Text>
          <Text>Distance: {place.distance} miles</Text>
          <Text>Bearing: {place.bearing}</Text>
          <Text>Address: {place.address_obj.address_string}</Text>
          <Reviews locationId={place.location_id} />
        </Box>
      ))}
    </div>
  );
};

export default Places;
