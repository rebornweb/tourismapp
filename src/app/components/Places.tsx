import React, { useEffect, useState } from 'react';
import { Box, Select, Text, VStack, Button } from '@chakra-ui/react';
import { useQuery, gql } from '@apollo/client';
import Details from './sub/Details';
import { DetailsProvider } from './sub/DetailsContext';
import Ancestors from './sub/Ancestors';

const NEARBY_PLACES_QUERY = gql`
  query NearbyPlaces($lat: Float!, $lng: Float!, $category: String!) {
    nearbyPlaces(lat: $lat, lng: $lng, category: $category) {
      location_id
      name
      distance
      bearing
      address_obj {
        street1
        city
        state
        country
        postalcode
        address_string
      }
    }
  }
`;

const LOCATION_DETAILS_QUERY = gql`
  query LocationDetails($locationId: ID!) {
    locationDetails(locationId: $locationId) {
      name
      description
      rating
      ancestors {
        level
        name
        location_id
      }
      address_obj {
        street1
        address_string
      }
      rating_image_url
    }
  }
`;

// Define types for better type safety
interface Address {
  street1: string;
  city: string;
  state: string | null;
  country: string;
  postalcode: string;
  address_string: string;
}

interface Place {
  location_id: string;
  name: string;
  distance: string;
  bearing: string;
  address_obj: Address;
}

interface PlaceProps {
  location: {
    lat: number;
    lng: number;
    locationId: number;
  };
}

const Places: React.FC<PlaceProps> = ({ location }) => {
  const [category, setCategory] = useState<string>('hotels');
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  // Query to fetch nearby places
  const { data: placesData, loading: placesLoading, error: placesError } = useQuery(NEARBY_PLACES_QUERY, {
    variables: { lat: location.lat, lng: location.lng, category },
    skip: !location.lat || !location.lng,
  });

  // Query to fetch location details for a selected place
  const { data: detailsData, loading: detailsLoading, error: detailsError } = useQuery(LOCATION_DETAILS_QUERY, {
    variables: { locationId: location.locationId },
    skip: !location.locationId, // Skip details query until a place is selected
  });

  useEffect(() => {
    if (placesLoading) console.log('Loading nearby places...');
    if (placesError) console.error('Error fetching places:', placesError.message);
    if (placesData) console.log('Fetched places data:', placesData);
  }, [placesLoading, placesError, placesData]);

  useEffect(() => {
    if (detailsLoading) console.log('Loading location details...');
    if (detailsError) console.error('Error fetching details:', detailsError.message);
    if (detailsData) console.log('Fetched location details:', detailsData);
  }, [detailsLoading, detailsError, detailsData]);

  const places = placesData?.nearbyPlaces || [];

  return (
    <VStack align="start" spacing={4} p={4}>
      <Text>Latitude: {location.lat}</Text>
      <Text>Longitude: {location.lng}</Text>

      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="hotels">Hotels</option>
        <option value="attractions">Attractions</option>
        <option value="restaurants">Restaurants</option>
        <option value="geos">Geos</option>
      </Select>

      <Text fontSize="xl" fontWeight="bold">
        Nearby {category.charAt(0).toUpperCase() + category.slice(1)} Data
      </Text>

      {placesLoading && <Text>Loading...</Text>}
      {placesError && <Text color="red.500">Error: {placesError.message}</Text>}
      {places.length === 0 && !placesLoading && <Text>No {category} found.</Text>}

      {places.length > 0 && places.map((place:any) => (
        <Box key={place.location_id} borderWidth="1px" borderRadius="lg" p="4">
          <Text fontSize="lg" fontWeight="bold">{place.name}</Text>
          <Text>Distance: {place.distance} km</Text>
          <Text>Bearing: {place.bearing}</Text>
          <Text>Address: {place.address_obj.address_string}</Text>
          {/* Display details if this place is selected */}
            <DetailsProvider locationId={place.location_id}>
              <Details locationId={place.location_id} />
              <Ancestors locationId={place.location_id} />
            </DetailsProvider>
          
        </Box>
      ))}
    </VStack>
  );
};

export default Places;
