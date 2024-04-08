import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text, useBreakpointValue, Container, Stack } from '@chakra-ui/react';

interface DetailsProps {
  locationId: string;
}

const Details: React.FC<DetailsProps> = ({ locationId }) => {
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;
  const detailsUrl = `${localApiUrl}/location/details?location_Id=${locationId}`;
  const photosUrl = `${localApiUrl}/photos?location_Id=${locationId}`;

  const [detailsData, setDetailsData] = useState<any>(null);
  const [photoData, setPhotoData] = useState<any | null>(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState<boolean>(true);
  const [isLoadingPhoto, setIsLoadingPhoto] = useState<boolean>(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(detailsUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch Details: ${response.statusText}`);
        }
        const data = await response.json();
        setDetailsData(data);
        setIsLoadingDetails(false);
      } catch (error) {
        console.error('Error fetching Details:', error);
        setIsLoadingDetails(false);
      }
    };

    const fetchPhoto = async () => {
      try {
        const response = await fetch(photosUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch photo: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.data.length > 0) {
          setPhotoData(data.data[0]); // Assuming the first photo in the array
        }
        setIsLoadingPhoto(false);
      } catch (error) {
        console.error('Error fetching photo:', error);
        setIsLoadingPhoto(false);
      }
    };

    fetchDetails();
    fetchPhoto();
  }, [detailsUrl, photosUrl]);

  if (isLoadingDetails || isLoadingPhoto || !photoData) {
    return <Text>Loading...</Text>;
  }


  return (
    <div>
      <Heading as="h3" size="md">{detailsData.name}</Heading>
      <Text>Address: {detailsData.address_obj.address_string}</Text>
      <Text>Rating: {detailsData.rating}</Text>
      <Text>
        Description: {detailsData.description && detailsData.description.split('.').length >= 3 ? detailsData.description : 'Not available'}
      </Text>

      {/* Your existing Details component content Open a new */}
      <Link to={`/details/${locationId}`} target="_blank" rel="noopener noreferrer">
        View More Details
      </Link>


      <Box height={'400px'} position="relative" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${photoData.images.large.url})`}>
        <Container size="container.lg" height="600px" position="relative">
          <Stack spacing={6} w={'full'} maxW={'lg'} position="absolute" top="50%" transform="translate(0, -50%)" color="white">
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              {photoData.heading}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
              {photoData.caption}
            </Text>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Details;
