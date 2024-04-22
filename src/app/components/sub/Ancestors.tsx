import React, { useEffect, useState } from 'react';
import Photos from '../Photos';
import Details from './Details';

interface Ancestor {
  level: string;
  name: string;
  location_id: string;
  photos: any[]; // Add a photos property to the Ancestor interface
}

const Ancestors: React.FC<{ locationId: string }> = ({ locationId }) => {
  const [ancestors, setAncestors] = useState<Ancestor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const localApiUrl = process.env.NEXT_PUBLIC_REACT_APP_LOCAL_API_URL;
  const ancestorsUrl = `${localApiUrl}/location/details/ancestors?location_Id=${locationId}`;

  useEffect(() => {
    const fetchAncestors = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(ancestorsUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch ancestors: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Ancestors Data:', data); // Log the entire data object for debugging
      
        if (!Array.isArray(data.ancestors) || data.ancestors.length === 0) {
          throw new Error('Ancestors data is empty or not an array.');
        }
      
        const ancestorList: Ancestor[] = data.ancestors.map((ancestor: Ancestor) => ({
          ...ancestor,
          photos: [] // Initialize photos array
        }));
        setAncestors(ancestorList);
      } catch (error: any) {
        console.error('Error fetching ancestors:', error);
        setError(`Error fetching ancestors: ${error.message}`);
      } finally {
        setLoading(false);
      }
      
    };

    fetchAncestors();
  }, [ancestorsUrl, locationId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Ancestors:</h2>
      {/* This is the issue of the Link problem */}
      <ul>
        {ancestors.map((ancestor, index) => (
          <li key={index}>
            {ancestor.level}: {ancestor.name} (Location ID: {ancestor.location_id})
            {/* Render the Photos component for each ancestor */}
            <Details locationId={ancestor.location_id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ancestors;
