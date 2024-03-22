import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';

interface HotelProps {
  location: {
    lat: number;
    lng: number;
  };
}

const Hotel: React.FC<HotelProps> = ({ location }) => {
  const [hotelsData, setHotelsData] = useState<any>(null); // State to store fetched hotels data

  useEffect(() => {
    // Fetch hotels data based on the provided location
    const fetchHotels = async () => {
      try {
        const response = await fetch(
          `https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=${location.lat},${location.lng}&language=en&key=78A1C7463CF34DD699BB7E39A0E6A156`,
        );
        if (response.ok) {
          const data = await response.json();
          setHotelsData(data); // Update hotelsData state with fetched data
        } else {
          console.error('Failed to fetch hotels:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels(); // Call fetchHotels function when component mounts
  }, [location.lat, location.lng]); // Depend on location changes

  return (
    <div>
      <h2>Hotel Component</h2>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
      <h3>Nearby Hotels Data</h3>
      <pre>{JSON.stringify(hotelsData, null, 2)}</pre>
    </div>
  );
};

export default Hotel;
