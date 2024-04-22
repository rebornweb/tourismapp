"use-client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface OfferProps {
  offerId: string;
  offerPassengerId: string;
}

const Offer: React.FC<OfferProps> = () => {
  const router = useRouter();
  const { offerId, offerPassengerId } = router.query;
  const [offerData, setOfferData] = useState<any>(null);
  const localApiUrl = process.env.NEXT_PUBLIC_LOCAL_API_URL || '';

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

      const response = await fetch(`${localApiUrl}/api/update/passenger?offerId=${offerId}&offerPassengerId=${offerPassengerId}`, {
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
    if (offerId && offerPassengerId) {
      handlePatchPassengerDetails();
    }
  }, [offerId, offerPassengerId]); // Run the effect when offerId or offerPassengerId changes

  return (
    <div>
      <h2>Offer Details</h2>
      <p>Offer ID: {offerId}</p>
      <p>Offer Passenger ID: {offerPassengerId}</p>
      {offerData ? (
        <div>
          <h3>Name: {offerData.given_name} {offerData.family_name}</h3>
          <p>Description: {offerData.description}</p>
          <p> Ticket Type {offerData.type}</p>
          {/* Add more offer details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Offer;
