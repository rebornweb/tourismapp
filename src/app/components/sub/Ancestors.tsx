import React from 'react';
import Details from './Details';
import { useDetails } from './DetailsContext';

interface AncestorsProps {
  locationId: string;


}

const Ancestors: React.FC<AncestorsProps> = ({ locationId }) => {
  const { ancestors, isLoading, detailsData } = useDetails();


  console.log('Ancestors in comp',ancestors);
  // Access the single instance of ancestors directly
  const ancestor = ancestors[0];

  return (
    <div>
    
     {/* Create a link that will link to a Details more for ancestors but in hyperlinks no buttons  */} 
     <p>
      {ancestors.map((ancestor: any) => (
        <div key='index'>
  {ancestor.level} - {ancestor.name} - {ancestor.location_id} 
</div>
))}
</p>

      
    
    </div>
  );
};

export default Ancestors;
