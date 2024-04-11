import React, { useEffect, useState } from 'react';
import Photos from './Photos';

interface Ancestor {
  level: string;
  name: string;
  location_id: string;
}
const Ancestors: React.FC<{ locationId: string }> = ({ locationId }) => {
  const [ancestors, setAncestors] = useState<Ancestor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;
  const ancestorsUrl = `${localApiUrl}/location/details?location_Id=${locationId}`;

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
        console.log('API Response:', data); // Log the entire response for debugging
        setAncestors(data.ancestors);
      } catch (error:any) {
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
      <ul>
        {ancestors.map((ancestor, index) => (
          <li key={index}>
            {ancestor.level}: {ancestor.name} (Location ID: {ancestor.location_id})
            {/* Ensure Photos component is rendered conditionally */}
            {ancestor.location_id && <Photos locationId={ancestor.location_id} />}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Ancestors;

