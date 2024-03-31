import React, { useState } from 'react';

const Flights: React.FC = () => {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const [postData, setPostData] = useState<any>({
    data: {
      cabin_class: 'economy',
      slices: [
        {
          departure_date: '2024-04-09',
          destination: 'WLG',
          origin: 'AKL'
        }
      ],
      passengers: [
        {
          type: 'adult'
        }
      ]
    }
  });
  
  const handlePostRequest = async () => {
    setLoading(true);
    try {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData(prevData => ({
      ...prevData,
      data: {
        ...prevData.data,
        [name]: value
      }
    }));
  };

  return (
    <div>
      <div>
        <label>Cabin Class:</label>
        <input type="text" name="cabin_class" value={postData.data.cabin_class} onChange={handleChange} />
      </div>
      <div>
        <label>Departure Date:</label>
        <input type="text" name="departure_date" value={postData.data.slices[0].departure_date} onChange={handleChange} />
      </div>
      <div>
        <label>Destination:</label>
        <input type="text" name="destination" value={postData.data.slices[0].destination} onChange={handleChange} />
      </div>
      <div>
        <label>Origin:</label>
        <input type="text" name="origin" value={postData.data.slices[0].origin} onChange={handleChange} />
      </div>
      <div>
        <label>Passenger Type:</label>
        <input type="text" name="type" value={postData.data.passengers[0].type} onChange={handleChange} />
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
