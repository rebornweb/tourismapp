const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path'); // Import the path module
require('dotenv').config(); // Load environment variables from .env file
const axios = require('axios');


const app = express();
app.use(cors()); // Enable CORS for all routes


const base_url = 'https://api.content.tripadvisor.com/api/v1';

// Endpoint to fetch hotels data with category parameter
app.get('/api/nearby/places', async (req, res) => {
  const { lat, lng, category } = req.query;
  try {
    // Fetch hotels data from the TripAdvisor API with category parameter
    const response = await fetch(`${base_url}/location/nearby_search?latLong=${lat},${lng}&category=${category}&language=en&key=${process.env.TRIPADVISOR_API_KEY_ENV}`);
    const data = await response.json();
    res.json(data); // Return the JSON data to the client
  } catch (error) {
    console.error('Error fetching hotels:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// --url 'https://api.content.tripadvisor.com/api/v1/location/570101/reviews?language=en&key=' 

app.get('/api/reviews', async (req, res) => {
  const { location_Id} = req.query;
  try {
    // Fetch reviews data from the TripAdvisor API
    const response = await fetch(`${base_url}/location/${location_Id}/reviews?language=en&key=${process.env.TRIPADVISOR_API_KEY_ENV}`);
    const data = await response.json();
    res.json(data); // Return the JSON data to the client
    
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST endpoint to handle incoming requests from React component

// Static post data
const postData = {
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
};

// Endpoint to handle POST request
app.post('/api/post-flight-data', async (req, res) => {
  try {
    //const postData = req.body;
    // const postData = {
    //   data: {
    //     cabin_class: 'economy',
    //     slices: [
    //       {
    //         departure_date: '2024-04-09',
    //         destination: 'WLG',
    //         origin: 'AKL'
    //       }
    //     ],
    //     passengers: [
    //       {
    //         type: 'adult'
    //       }
    //     ]
    //   }
    // };
    // Check if postData is valid
    if (!postData) {
      throw new Error('Invalid POST data');
    }

    // Forward the POST request to the external API
    const response = await axios.post('https://api.duffel.com/air/offer_requests', postData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DUFFEL_API_KEY_ENV}`,
        'Accept-Encoding': 'gzip',
        'Duffel-Version': 'v1'
      },
    });

    const responseData = response.data;
    res.json(responseData);
  } catch (error) {
    console.error('Error forwarding request:', error.message);
    res.status(500).json({ error: 'Error forwarding request' });
  }
});




// Serve the React app from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// All other requests will be served the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//Example call App
// http://localhost:5000/api/nearby/hotels?lat=37.7749&lng=-122.4194

// Raw https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=40.75886291350166%2C-73.98120403289795&category=hotels&language=en&key=key