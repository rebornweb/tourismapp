'use client'
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Box, Heading, Text, Container, Stack } from '@chakra-ui/react';
import Reviews from '../components/sub/Reviews';

interface DetailsData {
  name: string;
  address_obj: {
    address_string: string;
  };
  rating: number;
  description?: string;
}

interface DetailsMoreProps {
  locationId?: string;
}

const DetailsMore: React.FC<DetailsMoreProps> = ({ }) => {
  const router = useRouter();
  const locationParams = useSearchParams()
  const locationId = locationParams.get('locationId');

  const localApiUrl = process.env.NEXT_PUBLIC_REACT_APP_LOCAL_API_URL;
  const detailsUrl = `${localApiUrl}/location/details?location_Id=${locationId}`;
  const photosUrl = `${localApiUrl}/photos?location_Id=${locationId}`;

  const [detailsData, setDetailsData] = useState<DetailsData | null>(null);
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
        const data: DetailsData = await response.json();
        setDetailsData(data);
        console.log('Details data:', data);
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
        console.log('Details more Photos data:', data);
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

  useEffect(() => {
    if (isLoadingDetails) {
      document.title = 'Loading...';
    } else if (detailsData) {
      document.title = detailsData.name || 'Details';
    }
  }, [isLoadingDetails, detailsData]);

  if (isLoadingDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <div>
      <Heading as="h3" size="md">{detailsData?.name}</Heading>
      <Text>Address: {detailsData?.address_obj?.address_string}</Text>
      <Text>Rating: {detailsData?.rating}</Text>

      <Text>
        Description: {detailsData?.description || 'Not available'}
      </Text>

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

      <Reviews locationId={locationId} />
    </div>
  );
};

export default DetailsMore;
