import React, { useEffect, useState } from 'react';

const FlightInfoComponent: React.FC = () => {
  const [flightData, setFlightData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const localApiUrl = process.env.REACT_APP_LOCAL_API_URL;

  useEffect(() => {
    const fetchFlightInfo = async () => {
      const params = {
        DepartureDateTime: '2024-04-09'
        //ArrivalDateTime: '2024-04-12'
        //Limit: 5
      };

      const queryParams = new URLSearchParams(params).toString();
      const url = `${localApiUrl}/flights?${queryParams}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setFlightData(result.data);
        setLoading(false);
      } catch (error:any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchFlightInfo();
  }, []);

  return (
    <div>
      <h1>Flight Info Component</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {flightData.map((flight, index) => (
            <div key={index}>
              <p>Carrier: {flight.carrier.iata} - {flight.carrier.icao}</p>
              <p>Flight Number: {flight.flightNumber}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightInfoComponent;
