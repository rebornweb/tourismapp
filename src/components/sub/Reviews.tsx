import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel,   AccordionIcon } from '@chakra-ui/react';

interface ReviewsProps {
  locationId: string; // Assuming locationId is a string, adjust the type if necessary
}

const Reviews: React.FC<ReviewsProps> = ({ locationId }) => {
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;

  const [reviewsData, setReviewsData] = useState<any[]>([]); // State to store fetched reviews data

  useEffect(() => {
    // Fetch reviews data from backend server based on the provided location ID
    const fetchReviewsFromBackend = async () => {
      try {
        const response = await fetch(`${localApiUrl}/reviews?location_Id=${locationId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch reviews: ${response.statusText}`);
        }
        const data = await response.json(); // Parse JSON data
        setReviewsData(data.data); // Update reviewsData state with fetched data from backend
      } catch (error) {
        console.error('Error fetching reviews:', error);
        // Handle error, e.g., set an error state or display an error message
      }
    };

    fetchReviewsFromBackend(); // Call fetchReviewsFromBackend function when component mounts
  }, [locationId]); // Depend on locationId changes

  return (
    <div>
      <Heading as="h3" size="md">Reviews</Heading>
      <Accordion  allowToggle>
        {/* Check if reviewsData is not empty before rendering */}
        {reviewsData && reviewsData.length > 0 ? (
          reviewsData.map((review: any, index: number) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                
                    <Text>Rating: {review.rating}</Text>
                    <Text>Title: {review.title}</Text>
                  
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text>Comment: {review.text}</Text>
                <Text>Trip Type: {review.trip_type}</Text>
                <Text>Travel Date: {review.travel_date}</Text>
                {/* Add more fields as needed */}
              </AccordionPanel>
            </AccordionItem>
          ))
        ) : (
          <Text>No reviews available.</Text>
        )}
      </Accordion>
    </div>
  );
};

export default Reviews;
