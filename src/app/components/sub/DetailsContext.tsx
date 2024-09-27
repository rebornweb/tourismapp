import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useQuery, gql } from '@apollo/client';

interface DetailsContextType {
    locationId: string;
    detailsData: any;
    photoData: any;
    ancestors: any;
    isLoading: boolean;
}

interface Ancestor {
    level: string;
    name: string;
    location_id: string;
    photos: any[];
}

const DetailsContext = createContext<DetailsContextType | undefined>(undefined);

const GET_DETAILS_QUERY = gql`
  query GetDetails($locationId: String!) {
    locationDetails(locationId: $locationId) {
      description
      ancestors {
        level
        name
        location_id
      }
    }
  }
`;

const GET_PHOTOS_QUERY = gql`
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

export const DetailsProvider: React.FC<{ children: ReactNode, locationId: string }> = ({ children, locationId }) => {
    const { data: detailsData, loading: detailsLoading, error: detailsError } = useQuery(GET_DETAILS_QUERY, {
        variables: { locationId },
        skip: !locationId,
    });

    const { data: photoData, loading: photosLoading, error: photosError } = useQuery(GET_PHOTOS_QUERY, {
        variables: { locationId },
        skip: !locationId,
    });

    const [ancestors, setAncestors] = useState<Ancestor[]>([]);
    const [photo, setPhoto] = useState<any | null>(null);
    const isLoading = detailsLoading || photosLoading;

    useEffect(() => {
        if (detailsData && detailsData.locationDetails) {
            setAncestors(detailsData.locationDetails.ancestors || []); // Ensure ancestors is always an array
            console.log('Details in context:', detailsData);
        }
    }, [detailsData]);

    useEffect(() => {
        if (photoData && photoData.locationPhotos && Array.isArray(photoData.locationPhotos.data)) {
            if (photoData.locationPhotos.data.length > 0) {
                setPhoto(photoData.locationPhotos); 
                console.log('Photo in context', photoData.locationPhotos);

            }
        }
    }, [photoData]);

    if (detailsError || photosError) {
        console.error('Error fetching data:', detailsError || photosError);
    }

    return (
        <DetailsContext.Provider value={{ locationId, detailsData, photoData: photo, ancestors, isLoading }}>
            {children}
        </DetailsContext.Provider>
    );
};

export const useDetails = () => {
    const context = useContext(DetailsContext);
    if (!context) {
        throw new Error('useDetails must be used within a DetailsProvider');
    }
    return context;
};
