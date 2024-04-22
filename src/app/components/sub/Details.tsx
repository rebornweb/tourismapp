'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { Card, CardBody, CardFooter, Stack, Image, Text, Heading, Button } from '@chakra-ui/react';
import { useRouter, usePathname } from 'next/navigation'; // Import useRouter from Next.js

interface DetailsProps {
  locationId: string;
  images?: {
    small: {
      url: string;
    };
  };
}

const Details: React.FC<DetailsProps> = ({ locationId }) => {
  const router = useRouter(); // Initialize router
  const pathname = usePathname();
  const localApiUrl = process.env.NEXT_PUBLIC_REACT_APP_LOCAL_API_URL;
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
        console.log('Client Details data:', data);
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
          console.log('Details > Photos Data:', data.data[0]);
          setPhotoData(data.data[0]); // Assuming the first photo in the array
          console.log(data.data[0]);
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
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '500px' }}
          src={photoData.images.large.url}
          alt={photoData.album}
        />

        <Stack>
          <CardBody>
            <Heading size="lg">
              {detailsData.name} {detailsData.rating} <p><Image src={detailsData.rating_image_url} /></p>
            </Heading>
            Address: {detailsData.address_obj.address_string}
            <Text py='2'>
              Description: {detailsData.description && detailsData.description.split('.').length >= 3 ? detailsData.description : 'Not available'}
            </Text>
          </CardBody>

          <CardFooter>
            {/* Use Next.js Link for routing */}
            <Link href={{
              pathname:'/details', 
          query:{locationId}
              }} passHref target="_blank" rel="noopener noreferrer">
             
              <Button
              colorScheme={pathname === `/details/${locationId}` ? 'primary' : 'background.light'}
              variant={pathname === `/details/${locationId}` ? 'solid' : 'outline'}
            >
              View Details
            </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default Details;
