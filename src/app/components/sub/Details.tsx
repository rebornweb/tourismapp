'use client';

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { Card, CardBody, CardFooter, Stack, Image, Text, Heading, Button } from '@chakra-ui/react';
import { usePathname } from 'next/navigation'; // Import usePathname from Next.js
import { useDetails } from './DetailsContext';

interface DetailsProps {
  locationId: string;
}

const Details: React.FC<DetailsProps> = ({ locationId }) => {
  const { detailsData, photoData, isLoading } = useDetails();
  const pathname = usePathname();
  console.log('Details data in comp: ', detailsData);
  console.log('Photos data in comp: ', photoData);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!photoData || !detailsData) {
    return <Text>No data available</Text>;
  }

  // Use the first photo from the photoData for display
  const firstPhoto = photoData.data[0];

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
          src={firstPhoto.images.small.url} // Display the large image
          alt={firstPhoto.caption || 'Photo'}
        />

        <Stack>
          <CardBody>
            <Heading size="lg">
              {detailsData.locationDetails?.name || 'No Name'}
              
            </Heading>
            <Image src={detailsData.locationDetails?.rating_image_url}/>
            {detailsData.locationDetails?.address_obj && (
              <Text py='2'>
                Address: {detailsData.locationDetails.address_obj.address_string || 'Not available'}
              </Text>
            )}
            <Text py='2'>
              Description: {detailsData.locationDetails?.description || 'No description available'}
            </Text>
          </CardBody>

          <CardFooter>
            <Link href={{
              pathname: '/details',
              query: { locationId }
            }} passHref>
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
