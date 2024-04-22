import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface OfferProps {
  offerId: string;
  offerPassengerId: string;
}

const Offer: React.FC<OfferProps> = () => {
  const { offerId, offerPassengerId } = useParams<{ offerId: string; offerPassengerId: string }>();
  const [offerData, setOfferData] = useState<any>(null);
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL || '';


  const handlePatchPassengerDetails = async () => {
    try {
      const newData = {
        data: {
          loyalty_programme_accounts: [
            {
              airline_iata_code: 'BA',
              account_number: '12901014',
            },
          ],
          given_name: 'Amelia',
          family_name: 'Earhart',
        },
      };
  
      const response = await fetch(`http://localhost:8080/api/update/passenger?offerId=${offerId}&offerPassengerId=${offerPassengerId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ offerId, offerPassengerId, newData }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const updatedPassenger = await response.json();
      console.log('Updated Passenger:', updatedPassenger);
  
      setOfferData(updatedPassenger.data); // Assuming the response structure contains 'data' property
    } catch (error) {
      console.error('Error updating passenger details:', error);
    }
  };
  
  
 
  

  useEffect(() => {
    handlePatchPassengerDetails();
  }, []); // Empty dependency array to run the effect only once on initial render

  return (
    <div>
      <h2>Offer Details</h2>
      <p>Offer ID: {offerId}</p>
      <p>Offer Passenger ID: {offerPassengerId}</p>
      {offerData && (
        <div>
          <h3>Name: {offerData.given_name} {offerData.family_name}</h3>
          <p>Description: {offerData.description}</p>
          <p> Ticket Type {offerData.type}</p>
          {/* Add more offer details as needed */}
        </div>
      )}
      {!offerData && <p>Loading...</p>}
    </div>
  );
};

export default Offer;
