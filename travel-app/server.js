const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Define a middleware to set CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'GET'); // Allow only GET method for /api/hotels endpoint
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Specify allowed headers
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // If you allow credentials (cookies, authorization headers), set this to true
  next();
});

// Define API endpoint to fetch hotels data from TripAdvisor
app.get('/api/hotels', async (req, res) => {
  const { lat, lng } = req.query;
  const apiKey = '78A1C7463CF34DD699BB7E39A0E6A156'; // Your TripAdvisor API key

  try {
    const response = await fetch(
      `https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=${lat},${lng}&language=en&key=${apiKey}`
    );

    if (response.ok) {
      const data = await response.json();
      res.json(data);
    } else {
      console.error('Failed to fetch hotels from TripAdvisor:', response.statusText);
      res.status(500).send('Failed to fetch hotels from TripAdvisor');
    }
  } catch (error) {
    console.error('Error fetching hotels from TripAdvisor:', error);
    res.status(500).send('Error fetching hotels from TripAdvisor');
  }
});

// Handle other routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
