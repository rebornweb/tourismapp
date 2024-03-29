import React, { useEffect, useState } from 'react';

interface PhotosProps {
  locationId: number; // Location ID to fetch photos
}

const Photos: React.FC<PhotosProps> = ({ locationId }) => {
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;
  const [photosData, setPhotosData] = useState<any[]>([]); // State to store fetched photos data

  useEffect(() => {
    // Fetch photos data from backend server based on the provided location ID
    const fetchPhotosFromBackend = async () => {
      try {
        const photosResponse = await fetch(`${localApiUrl}/photos?location_Id=${locationId}`);
        if (!photosResponse.ok) {
          throw new Error(`Failed to fetch photos: ${photosResponse.statusText}`);
        }
        const photosData = await photosResponse.json(); // Parse JSON data
        setPhotosData(photosData.data); // Update photosData state with fetched data from backend
      } catch (error) {
        console.error('Error fetching photos:', error);
        // Handle error, e.g., set an error state or display an error message
      }
    };

    fetchPhotosFromBackend(); // Call fetchPhotosFromBackend function when component mounts or when locationId changes
  }, [localApiUrl, locationId]); // Depend on localApiUrl and locationId changes

  return (
    <div>
      {photosData && photosData.length > 0 && (
        <div>
          <h3>Photos Data</h3>
          {photosData.map((photo: any) => (
            <div key={photo.id}>
              <img src={photo.images.medium.url} alt={photo.caption} />
              <p>{photo.caption}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Photos;
