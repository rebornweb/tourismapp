import React, { useState } from 'react';

const Flights: React.FC = () => {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const [cabinClass, setCabinClass] = useState<string>('economy');
  const [departureDate, setDepartureDate] = useState<string>('2024-04-09');
  const [destination, setDestination] = useState<string>('WLG');
  const [origin, setOrigin] = useState<string>('AKL');
  const [passengerType, setPassengerType] = useState<string>('adult');
  
  const handlePostRequest = async () => {
    setLoading(true);
    try {
      const postData = {
        "data": {
          "cabin_class": cabinClass,
          "slices": [
            {
              "departure_date": departureDate,
              "destination": destination,
              "origin": origin
            }
          ],
          "passengers": [
            {
              "type": passengerType
            }
          ]
        }
      };
      
      const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.DUFFEL_API_KEY_ENV}`,
          'Accept-Encoding': 'gzip',
          'Duffel-Version': 'v1'
        },
        body: JSON.stringify(postData),
      };

      const response = await fetch('http://localhost:5000/api/offer_requests', requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const responseData = await response.json();
      setResponse(responseData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError('Error posting flight data: ' + error.message);
      } else {
        setError('Unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <label>Cabin Class:</label>
        <input type="text" value={cabinClass} onChange={(e) => setCabinClass(e.target.value)} />
      </div>
      <div>
        <label>Departure Date:</label>
        <input type="text" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
      </div>
      <div>
        <label>Destination:</label>
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </div>
      <div>
        <label>Origin:</label>
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
      </div>
      <div>
        <label>Passenger Type:</label>
        <input type="text" value={passengerType} onChange={(e) => setPassengerType(e.target.value)} />
      </div>
      <button onClick={handlePostRequest}>Send POST Request</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {response && (
        <div>
          <h1>Response Data</h1>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Flights;
