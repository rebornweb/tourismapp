import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, IconButton, useBreakpointValue, Stack, Container } from '@chakra-ui/react';
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

interface DetailsProps {
  locationId: string;
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
}

const Details: React.FC<DetailsProps> = ({ locationId }) => {
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;
  const detailsUrl = `${localApiUrl}/location/details?location_Id=${locationId}`;
  const photosUrl = `${localApiUrl}/photos?location_Id=${locationId}`;

  const [detailsData, setDetailsData] = useState<any>(null);
  const [photosData, setPhotosData] = useState<any[]>([]);
  const [isLoadingDetails, setIsLoadingDetails] = useState<boolean>(true);
  const [isLoadingPhotos, setIsLoadingPhotos] = useState<boolean>(true);
  const [slider, setSlider] = useState<Slider | null>(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

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

  if (isLoadingDetails || isLoadingPhotos) {
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


      
      {/* Add more details as needed */}

      <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

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
                    {/* Photo Heading */}
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
    </div>
  );
};

export default Details;
