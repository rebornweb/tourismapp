import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

interface DetailsProps {
  locationId: string; // Assuming locationId is a string, adjust the type if necessary
}

const Details: React.FC<DetailsProps> = ({ locationId }) => {
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;

  const [detailsData, setDetailsData] = useState<any>(null); // State to store fetched Details data

  useEffect(() => {
    // Fetch Details data from backend server based on the provided location ID
    const fetchDetailsFromBackend = async () => {
      try {
        const response = await fetch(`${localApiUrl}/location/details?location_Id=${locationId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch Details: ${response.statusText}`);
        }
        const data = await response.json(); // Parse JSON data
        setDetailsData(data); // Update DetailsData state with fetched data from backend
      //  console.log('Component: ' + JSON.stringify(data)); // Check the data structure in the console
      } catch (error) {
        console.error('Error fetching Details:', error);
        // Handle error, e.g., set an error state or display an error message
      }
    };

    fetchDetailsFromBackend(); // Call fetchDetailsFromBackend function when component mounts
  }, [locationId]); // Depend on locationId changes

  if (!detailsData) {
    return <Text>Loading...</Text>; // Show a loading indicator while data is being fetched
  }

  return (
    <div>
      <Heading as="h3" size="md">{detailsData.name}</Heading>
      <Text>Address: {detailsData.address_obj.address_string}</Text>
      <Text>Rating: {detailsData.rating}</Text>
      <Text>Description: {detailsData.description}</Text>
           
      {/* Add more details as needed */}
    </div>
  );
};

export default Details;
