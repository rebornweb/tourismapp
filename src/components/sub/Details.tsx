import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Text, Card, Stack, Heading, Image, CardBody, CardFooter } from '@chakra-ui/react';
import Ancestors from './Ancestors'; // Import the Ancestors component

interface DetailsProps {
  locationId: string;
  // Define other props as needed
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
            <Link to={`/details/${locationId}`} target="_blank" rel="noopener noreferrer">
              View More Details
            </Link>
          </CardFooter>
        </Stack>
      </Card>

      {/* Conditionally render Ancestors component */}
      {!isLoadingDetails && !isLoadingPhoto && photoData && (
        <Ancestors locationId={locationId} />
      )}
    </div>
  );
};

export default Details;
