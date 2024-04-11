import React, { useEffect, useState } from 'react';

interface Ancestor {
  level: string;
  name: string;
  location_id: string;
}

const Ancestors: React.FC<{ locationId: string }> = ({ locationId }) => {
  const [ancestors, setAncestors] = useState<Ancestor[]>([]);
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;
  const ancestorsUrl = `${localApiUrl}/location/details?location_Id=${locationId}`;

  useEffect(() => {
    const fetchAncestors = async () => {
      try {
        const response = await fetch(ancestorsUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch ancestors: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Ancestors data:', data.ancestors);
        setAncestors(data.ancestors);
      } catch (error) {
        console.error('Error fetching ancestors:', error);
      }
    };

    fetchAncestors();
  }, [ancestorsUrl]);

  return (
    <div>
      <h2>Ancestors:</h2>
      <ul>
        {ancestors.map((ancestor, index) => (
          <li key={index}>
            {ancestor.level}: {ancestor.name} (Location ID: {ancestor.location_id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ancestors;
