import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Select } from '@chakra-ui/react';
import Details from './sub/Details';
import Ancestors from './sub/Ancestors';

interface PlaceProps {
  location: {
    lat: number;
    lng: number;
  };
}

const Places: React.FC<PlaceProps> = ({ location }) => {
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;

  const [placesData, setPlacesData] = useState<any>(null); // State to store fetched places data
  const [category, setCategory] = useState<string>('hotels'); // State to store selected category
  const [loading, setLoading] = useState<boolean>(false); // State to track loading status
  const [error, setError] = useState<string | null>(null); // State to store error message

  useEffect(() => {
    const fetchPlacesFromBackend = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${localApiUrl}/nearby/places?lat=${location.lat}&lng=${location.lng}&category=${category}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch places: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Client Places data:', data);
        if (data.data && data.data.length > 0) {
          const sortedData = data.data.sort((a: any, b: any) => a.distance - b.distance);
          setPlacesData(sortedData);
        } else {
          setPlacesData([]);
        }
      } catch (error) {
        console.error('Error fetching places:', error);
        setError('Error fetching places');
      } finally {
        setLoading(false);
      }
    };

    fetchPlacesFromBackend();
  }, [location.lat, location.lng, category]);

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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : placesData && placesData.length === 0 ? (
        <p>No {category} found.</p>
      ) : (
        <>
          <Ancestors locationId={placesData?.location_id} />
          {placesData && placesData.length > 0 && placesData.map((place: any) => (
            <Box key={place.location_id} borderWidth="1px" borderRadius="lg" p="2">
              <Details locationId={place.location_id} />
            </Box>
          ))}
        </>
      )}
    </div>
  );
};

export default Places;
