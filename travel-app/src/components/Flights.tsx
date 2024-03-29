import React, { useState } from 'react';

const Flights: React.FC = () => {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const handlePostRequest = async () => {
    setLoading(true);
    try {
      const postData = {
        "data": {
          "cabin_class": "economy",
          "slices": [
            {
              "departure_date": "2024-04-09",
              "destination": "WLG",
              "origin": "AKL"
            }
          ],
          "passengers": [
            {
              "type": "adult"
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
    } catch (error: unknown) { // Explicitly specify the type of error as unknown
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
