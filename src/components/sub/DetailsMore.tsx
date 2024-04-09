import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, IconButton, useBreakpointValue, Container, Stack } from '@chakra-ui/react';
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { useParams } from 'react-router-dom';

interface DetailsMoreProps {
  locationId?: string; // Make locationId optional
}

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 2,
  slidesToScroll: 2,
};

const DetailsMore: React.FC<DetailsMoreProps> = ({ locationId }) => {
  const { locationId: routeLocationId } = useParams<{ locationId: string }>();
  const actualLocationId = locationId || routeLocationId;
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;
  const detailsUrl = `${localApiUrl}/location/details?location_Id=${actualLocationId}`; // Use actualLocationId here
  const photosUrl = `${localApiUrl}/photos?location_Id=${actualLocationId}`; // Use actualLocationId here

  const [detailsData, setDetailsData] = useState<any>(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState<boolean>(true);
  const [isLoadingPhotos, setIsLoadingPhotos] = useState<boolean>(true);
  const [photosData, setPhotosData] = useState<any[]>([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(detailsUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch Details: ${response.statusText}`);
        }
        const data = await response.json();
        setDetailsData(data);
        console.log('Details data:',data);
        setIsLoadingDetails(false);
      } catch (error) {
        console.error('Error fetching Details:', error);
        setIsLoadingDetails(false);
      }
    };

    const fetchPhotos = async () => {
      try {
        const response = await fetch(photosUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch photos: ${response.statusText}`);
        }
        const data = await response.json();
        setPhotosData(data.data);
        setIsLoadingPhotos(false);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setIsLoadingPhotos(false);
      }
    };

    fetchDetails();
    fetchPhotos();
  }, [detailsUrl, photosUrl]);


  if (isLoadingDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <div>
      <Heading as="h3" size="md">{detailsData.name}</Heading>
      <Text>Address: {detailsData.address_obj.address_string}</Text>
      <Text>Rating: {detailsData.rating}</Text>
            
      <Text>
        Description: {detailsData.description || 'Not available'}
      </Text>

   {/* Add more details as needed */}

   <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
        {photosData.map((photo, index) => (
          <Box
            key={index}
            height={'400px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${photo.images.large.url})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
                color="white"
              >
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {photo.heading}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {photo.caption}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default DetailsMore;
