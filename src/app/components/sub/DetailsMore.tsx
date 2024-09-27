import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, Heading, Text, Image, SimpleGrid } from '@chakra-ui/react';
import { useQuery, gql } from '@apollo/client';
import Reviews from './Reviews';

// GraphQL Queries
const GET_DETAILS = gql`
  query GetDetails($locationId: String!) {
    locationDetails(locationId: $locationId) {
      name
      description
      rating
      ancestors {
        level
        name
        location_id
      }
      address_obj {
        street1
        address_string
      }
      rating_image_url
    }
  }
`;

const GET_PHOTOS = gql`
  query GetPhotos($locationId: String!) {
    locationPhotos(locationId: $locationId) {
      data {
        id
        is_blessed
        caption
        published_date
        images {
          thumbnail {
            height
            width
            url
          }
          small {
            height
            width
            url
          }
          medium {
            height
            width
            url
          }
          large {
            height
            width
            url
          }
          original {
            height
            width
            url
          }
        }
        album
        source {
          name
          localized_name
        }
      }
    }
  }
`;

const DetailsMore: React.FC = () => {
  const locationParams = useSearchParams();
  const locationId = locationParams.get('locationId');

  const { data: detailsData, loading: loadingDetails, error: detailsError } = useQuery(GET_DETAILS, {
    variables: { locationId },
  });

  const { data: photosData, loading: loadingPhotos, error: photosError } = useQuery(GET_PHOTOS, {
    variables: { locationId },
  });

  useEffect(() => {
    if (loadingDetails) {
      document.title = 'Loading...';
    } else if (detailsData) {
      document.title = detailsData.locationDetails.name || 'Details';
    }
  }, [loadingDetails, detailsData]);

  if (loadingDetails || loadingPhotos) {
    return <Text>Loading...</Text>;
  }

  if (detailsError || photosError) {
    return <Text>Error loading data</Text>;
  }

  return (
    <div>
      <Heading as="h3" size="md">{detailsData?.locationDetails.name || 'Not available'}</Heading>
      <Text>Address: {detailsData?.locationDetails.address_obj?.address_string || 'Not available'}</Text>
      <Text>
        {detailsData?.locationDetails.rating_image_url ? (
          <Image src={detailsData?.locationDetails.rating_image_url} />
        ) : (
          detailsData?.locationDetails.rating
        )}
      </Text>
      <Text>
        Description: {detailsData?.locationDetails.description || 'Not available'}
      </Text>

      <SimpleGrid columns={2} spacing={1}>
        {photosData?.locationPhotos.data.map((photo: any, index: any) => (
          <Box key={index} boxSize='md'>
            <Image src={photo.images.large.url || ''} alt={photo.caption || 'Photo'} />
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              {photo.album || 'Untitled'}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
              {photo.caption || 'No caption available'}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      <Reviews locationId={locationId} />
    </div>
  );
};

export default DetailsMore;
