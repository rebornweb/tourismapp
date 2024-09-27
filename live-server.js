const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { Duffel } = require('@duffel/api');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON requests
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080; // Define the port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const base_url = 'https://api.content.tripadvisor.com/api/v1';


const duffel = new Duffel({
  token: process.env.DUFFEL_API_KEY_ENV || '',
  debug: { verbose: true },
});

// Trip Advisor Endpoint to fetch places data with category parameter
app.get('/api/nearby/places', async (req, res) => {
  const { lat, lng, category } = req.query;
  try {
    // Fetch hotels data from the TripAdvisor API with category parameter
    const response = await fetch(`${base_url}/location/nearby_search?latLong=${lat},${lng}&category=${category}&language=en&key=${process.env.TRIPADVISOR_API_KEY_ENV}`);
    const data = await response.json();
    res.json(data); // Return the JSON data to the client
    console.log('Nearby Trip Advisor data:',data);
  } catch (error) {
    console.error('Error fetching hotels:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/location/details', async (req, res) => {
  const { location_Id } = req.query;
  try {
    // Fetch details data from the specified endpoint
    const response = await fetch(`${base_url}/location/${location_Id}/details?language=en&key=${process.env.TRIPADVISOR_API_KEY_ENV}`);
    const data = await response.json();
    res.json(data); // Return the JSON data to the client
    console.log('Server Location Id Trip Advisor details:' + data);
  } catch (error) {
    console.error('Error fetching details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/location/details/ancestors', async (req, res) => {
  const { location_Id } = req.query;
  try {
    // Fetch details data from the specified endpoint
    const response = await fetch(`${base_url}/location/${location_Id}/details?language=en&key=${process.env.TRIPADVISOR_API_KEY_ENV}`);
    const data = await response.json();
    res.json(data); // Return the JSON data to the client
    console.log('Server Location Id Trip Advisor details:' + data);
  } catch (error) {
    console.error('Error fetching details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/api/reviews', async (req, res) => {
  const { location_Id } = req.query;
  try {
    // Fetch reviews data from the TripAdvisor API
    const response = await fetch(`${base_url}/location/${location_Id}/reviews?language=en&key=${process.env.TRIPADVISOR_API_KEY_ENV}`);
    const data = await response.json();
    res.json(data); // Return the JSON data to the client
console.log('Server Reviews data', data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/photos', async (req, res) => {
  const { location_Id} = req.query;
  try {
    // Fetch reviews data from the TripAdvisor API
    const response = await fetch(`${base_url}/location/${location_Id}/photos?language=en&key=${process.env.TRIPADVISOR_API_KEY_ENV}`);
    const data = await response.json();
    console.log('Server Photos data: ' + data);
    res.json(data); // Return the JSON data to the client

  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
//Payment Intent
app.post('/api/payment_intents', async (req, res) => {
  try {
    const postData = req.body; // Access the data sent from the client

    // Check if postData is valid
    if (!postData) {
      throw new Error('Invalid POST data');
    }

    // Forward the POST request to the external API using fetch
    const response = await fetch(`${process.env.DUFFEL_API_ENDPOINT}/payments/payment_intents`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DUFFEL_API_KEY_ENV}`,
        'Accept-Encoding': 'gzip',
        'Duffel-Version': 'v1'
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error('Error forwarding request');
    }

    const responseData = await response.json();
    res.json(responseData);
  } catch (error) {
    console.error('Error forwarding request:', error.message);
    let errorMessage = 'Error forwarding request';
    let statusCode = 500;

    if (error instanceof Error && error.name === 'AbortError') {
      errorMessage = `Fetch error: ${error.message}`;
      statusCode = 502; // Bad Gateway
    }

    res.status(statusCode).json({ error: errorMessage });
  }
});


//Create 
app.post('/api/create_order', async (req, res) => {
  try {
    const postData = req.body; // Access the data sent from the client

    // Check if postData is valid
    if (!postData) {
      throw new Error('Invalid POST data');
    }

    console.log(`Server:${process.env.DUFFEL_API_ENDPOINT}`)
    // Forward the POST request to the external API using fetch
    const response = await fetch(`https://api.duffel.com/air/orders`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DUFFEL_API_KEY_ENV}`,
        'Accept-Encoding': 'gzip',
        'Duffel-Version': 'v1'
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error('Error forwarding request');
    }

    const responseData = await response.json();
    res.json(responseData);
  } catch (error) {
    console.error('Error forwarding request:', error.message);
    let errorMessage = 'Error forwarding request';
    let statusCode = 500;

    if (error instanceof Error && error.name === 'AbortError') {
      errorMessage = `Fetch error: ${error.message}`;
      statusCode = 502; // Bad Gateway
    }

    res.status(statusCode).json({ error: errorMessage });
  }
});



//Use this if the Module fails This is the Manual way to the direct Endpoint using the default manual file
app.post('/api/offer_requests', async (req, res) => {
  try {
    const postData = req.body; // Access the data sent from the client

    // Check if postData is valid
    if (!postData) {
      throw new Error('Invalid POST data');
    }

    console.log(`Server:${process.env.DUFFEL_API_ENDPOINT}`)
    // Forward the POST request to the external API using fetch
    const response = await fetch(`${process.env.DUFFEL_API_ENDPOINT}/air/offer_requests`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DUFFEL_API_KEY_ENV}`,
        'Accept-Encoding': 'gzip',
        'Duffel-Version': 'v1'
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error('Error forwarding request');
    }

    const responseData = await response.json();
    res.json(responseData);
  } catch (error) {
    console.error('Error forwarding request:', error.message);
    res.status(500).json({ error: 'Error forwarding request' });
  }
});



//Duffel Update passenger 
app.patch('/api/update/passenger', async (req, res) => {
    try {
      const { offerId, passengerId, newData } = req.body;
  
      // Check if postData is valid
      if (!offerId || !passengerId || !newData) {
        throw new Error('Invalid PATCH data');
      }
  
      // Make the PATCH request to the Duffel API
      const response = await fetch(`https://api.duffel.com/air/offers/${offerId}/passengers/${passengerId}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.DUFFEL_API_KEY_ENV}`,
          'Accept-Encoding': 'gzip',
          'Duffel-Version': 'v1',
        },
        body: JSON.stringify(newData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const updatedPassenger = await response.json();
  
      console.log('Updated Passenger:', updatedPassenger); // Log the updated passenger data
  
      res.json(updatedPassenger);
    } catch (error) {
      console.error('Error updating passenger details:', error); // Log the error
      res.status(500).json({ error: 'Error updating passenger details' });
    }
  });

  app.get('/api/get_offer', async (req, res) => {
    try {
      const offerId = req.query.offerId; // Access the offerId from query parameters
  
      // Check if offerId is valid
      if (!offerId) {
        throw new Error('Invalid offerId');
      }
  
      console.log(`Server: ${process.env.DUFFEL_API_ENDPOINT}`);
  
      // Forward the GET request to the external API using fetch
      const response = await fetch(`${process.env.DUFFEL_API_ENDPOINT}/air/offers/${offerId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.DUFFEL_API_KEY_ENV}`,
          'Accept-Encoding': 'gzip',
          'Duffel-Version': 'v1'
        },
      });
  
      if (!response.ok) {
        throw new Error('Error forwarding request');
      }
  
      const responseData = await response.json();
      res.json(responseData);
    } catch (error) {
      console.error('Error forwarding request:', error.message);
      res.status(500).json({ error: 'Error forwarding request' });
    }
  });
  
  
//Create Order  
// Create Order
app.post('/api/create_order', async (req, res) => {
  try {
    const postData = req.body; // Access the data sent from the client

    // Check if postData is valid
    if (!postData) {
      throw new Error('Invalid POST data');
    }

    console.log(`Server: ${process.env.DUFFEL_API_ENDPOINT}`);
    // Forward the POST request to the external API using fetch
    const response = await fetch(`https://api.duffel.com/air/orders`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DUFFEL_API_KEY_ENV}`,
        'Accept-Encoding': 'gzip',
        'Duffel-Version': 'v1'
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error('Error forwarding request');
    }

    const responseData = await response.json();
    res.json(responseData);
    console.log('Response server data: ', responseData)
  } catch (error) {
    console.error('Error forwarding request:', error.message, "Data failed:", responseData);
    let errorMessage = 'Error forwarding request';
    let statusCode = 500;
  
    if (error instanceof FetchError) {
      errorMessage = `Fetch error: ${error.message}`;
      statusCode = 502; // Bad Gateway
    }
  
    res.status(statusCode).json({ error: errorMessage });
  }
});


// Request to retrieve an offer ID using the native Duffel import
app.post('/api/duffel/offer_requests', async (req, res) => {
  try {
    const postData = req.body;

    // Check if postData is valid
    if (!postData) {
      throw new Error('Invalid POST data');
    }

    // Forward the POST request to the Duffel API
    const offerRequestResponse = await duffel.offerRequests.create(postData);

    console.log('Server duffel response:', offerRequestResponse); // Log the Duffel API response

    res.json(offerRequestResponse.data);
  } catch (error) {
    console.error('Error creating offer request:', error); // Log the error
    res.status(500).json({ error: 'Error creating offer request' });
  }
});





// Add the following import statement
const googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// Inside your existing Express server setup...

app.get('/api/google/places', async (req, res) => {
  const { input } = req.query;

  https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBM4gd5q5nfHIXPEgq91qQg8nPuNFA5zMA&name=sequence
  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&key=${googleApiKey}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch places: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data); // Return the JSON data to the client
  } catch (error) {
    console.error('Error fetching Google Places:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Serve the React app from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// All other requests will be served the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});






// Endpoint to handle RAPID API
// app.get('/api/flights', async (req, res) => {
//   try {
//     const { 
//       DepartureDateTime 
//       //ArrivalDateTime 
//       // DepartureAirport,
//       // ArrivalAirport,
//       // FlightType,.
//       //FlightType,
//       //Limit
//      } = req.query;

//     // Construct query parameters for the external API
//     const queryParams = new URLSearchParams({
//       DepartureDateTime
//       //ArrivalDateTime
//       // DepartureAirport,
//       // ArrivalAirport,
//       //FlightType,
//       //Limit
//     }).toString();

//     // Forward the GET request to the external API using fetch
//     const version = 'v2';
//     const url = `https://flight-info-api.p.rapidapi.com/schedules?${queryParams}&version=${version}`;
//     const response = await fetch(url, {
//       headers: {
//         'X-RapidAPI-Key': process.env.RAPID_API_KEY_ENV, // Your RapidAPI key
//         'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
//       }
//     });

//     if (!response.ok) {
//       throw new Error('Error forwarding request');
//     }

//     const responseData = await response.json();
//     res.json(responseData);
//   } catch (error) {
//     console.error('Error forwarding request:', error.message);
//     res.status(500).json({ error: 'Error forwarding request' });
//   }
// });



// app.get('/api/flights/oag', async (req, res) => {
//   try {
//     const { 
//       DepartureDateTime, 
//       ArrivalDateTime, 
//       DepartureAirport,
//       ArrivalAirport,
//       FlightType,
//       Limit
//      } = req.query;

//     // Construct query parameters for the external API
//     const queryParams = new URLSearchParams({
//       DepartureDateTime,
//       ArrivalDateTime,
//       DepartureAirport,
//       ArrivalAirport,
//       FlightType,
//       Limit
//     }).toString();

//     // Forward the GET request to the external API using fetch
//     const version = 'v2';
//     const url = `https://flight-info-api.p.rapidapi.com/schedules?${queryParams}&version=${version}`;
//     const response = await fetch(url, {
//       headers: {
//         'X-RapidAPI-Key': process.env.OAG_API_KEY_ENV, // Your RapidAPI key
//         'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
//       }
//     });

//     if (!response.ok) {
//       throw new Error('Error forwarding request');
//     }

//     const responseData = await response.json();
//     res.json(responseData);
//   } catch (error) {
//     console.error('Error forwarding request:', error.message);
//     res.status(500).json({ error: 'Error forwarding request' });
//   }
// });




//Example calls
// http://localhost:5000/api/nearby/hotels?lat=37.7749&lng=-122.4194

// Raw https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=40.75886291350166%2C-73.98120403289795&category=hotels&language=en&key=key
