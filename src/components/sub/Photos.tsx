import React, { useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 2,
  slidesToScroll: 2,
}

interface PhotosProps {
  locationId: number; // Location ID to fetch photos
}

const Photos: React.FC<PhotosProps> = ({ locationId }) => {
  const [slider, setSlider] = React.useState<Slider | null>(null)
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;
  const [photosData, setPhotosData] = useState<any[]>([]); // State to store fetched photos data
  const [isLoading, setIsLoading] = useState<boolean>(true); // State to track loading status

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  useEffect(() => {
    const fetchPhotosFromBackend = async () => {
      try {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
  
        const photosResponse = await fetch(`${localApiUrl}/photos?location_Id=${locationId}`, {
          method: 'GET',
          headers: headers,
        });
  
        if (!photosResponse.ok) {
          throw new Error(`Failed to fetch photos: ${photosResponse.statusText}`);
        }
  
        const contentType = photosResponse.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not in JSON format');
        }
  
        const photosData = await photosResponse.json();
        console.log('Client Photos data:', photosData); 
        setPhotosData(photosData.data);
        setIsLoading(false); // Set loading state to false once data is fetched
      } catch (error) {
        console.error('Error fetching photos:', error);
        setIsLoading(false); // Set loading state to false in case of error
      }
    };
    fetchPhotosFromBackend();
  }, [localApiUrl, locationId]);

  if (isLoading) {
    return (
      <Box>
        <Text>Loading...</Text>
      </Box>
    );
  }

  if (photosData.length === 0) {
    return (
      <Box>
        <Text>No photos available.</Text>
      </Box>
    );
  }

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {photosData.map((photo: any) => (
          <Box
            key={photo.id}
            height={'400px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${photo.images.large.url})`}>
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
                color="white">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                 
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {photo.caption}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Photos;
