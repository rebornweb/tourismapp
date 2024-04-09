const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const axios = require('axios');
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
    // const response = await fetch(`${base_url}/location/nearby_search?latLong=${lat},${lng}&category=${category}&language=en&key=${process.env.TRIPADVISOR_API_KEY_ENV}`);
    // const data = await response.json();

    // Static nearby places data (commented out the previous fetch)
    const staticData = {
      "19990197": {
        location_id: "19990197",
        name: "sequence MIYASHITA PARK",
        distance: "0.14113005212864138",
        bearing: "northwest",
        address_obj: {
          street1: "_6-20-10 Jingumae",
          street2: "MIYASHITA PARK North 4F",
          city: "Shibuya",
          state: "Tokyo Prefecture",
          country: "Japan",
          postalcode: "150-0001",
          address_string: "_6-20-10 Jingumae MIYASHITA PARK North 4F, Shibuya 150-0001 Tokyo Prefecture"
        }
      },
      "479494": {
        location_id: "479494",
        name: "Shibuya Tokyu REI Hotel",
        distance: "0.15305531601241826",
        bearing: "southwest",
        address_obj: {
          street1: "1-24-10 Shibuya",
          street2: "",
          city: "Shibuya",
          state: "Tokyo Prefecture",
          country: "Japan",
          postalcode: "150-0002",
          address_string: "1-24-10 Shibuya, Shibuya 150-0002 Tokyo Prefecture"
        }
      }
      // Add more static nearby places as needed
    };
    
    // res.json(data); // Return the fetched JSON data to the client
    res.json(staticData); // Return the static JSON data to the client

    console.log('Nearby Trip Advisor data:', staticData);
  } catch (error) {
    console.error('Error fetching hotels:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/api/location/details', async (req, res) => {
  const { location_Id } = req.query;
  try {
    // Fetch details data from the specified endpoint
    // const response = await fetch(`${base_url}/location/${location_Id}/details?language=en&key=${process.env.TRIPADVISOR_API_KEY_ENV}`);
    // const data = await response.json();

    // Static client details data (commented out the previous fetch)
    const staticData = {
      location_id: "12389531",
      name: "Trunk(Hotel)",
      description: "TRUNK (HOTEL) is the transmission point of a new style of social contribution called . is \"to live true to yourself, without undue pressure, but with a life-sized social purpose.\" Hotel interior and design.Amenities and minibar in the rooms.Items, which can be purchased at the store, the takeout coffee··· Here exists various schemes that allow you to experience socializing. It is a hotel for all people who are living the “now”, and whose desires are to “be of help to someone” and to “do something for a reason”.",
      web_url: "https://www.tripadvisor.com/Hotel_Review-g1066456-d12389531-Reviews-Trunk_Hotel-Shibuya_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
      address_obj: {
        street1: "5-31 Jingumae",
        city: "Shibuya",
        state: "Tokyo Prefecture",
        country: "Japan",
        postalcode: "150-0001",
        address_string: "5-31 Jingumae, Shibuya 150-0001 Tokyo Prefecture"
      },
      ancestors: [
        {
          level: "Municipality",
          name: "Shibuya",
          location_id: "1066456"
        },
        // Add more ancestors as needed
      ],
      latitude: "35.664204",
      longitude: "139.70392",
      timezone: "Asia/Tokyo",
      write_review: "https://www.tripadvisor.com/UserReview-g1066456-d12389531-Trunk_Hotel-Shibuya_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827",
      ranking_data: {
        geo_location_id: "1066456",
        ranking_string: "#23 of 39 hotels in Shibuya",
        geo_location_name: "Shibuya",
        ranking_out_of: "39",
        ranking: "23"
      },
      rating: "3.5",
      // Add more fields as needed
    };

    // res.json(data); // Return the fetched JSON data to the client
    res.json(staticData); // Return the static JSON data to the client

    console.log('Server Location Id Trip Advisor details:' + staticData);
  } catch (error) {
    console.error('Error fetching details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.get('/api/reviews', async (req, res) => {
  const { location_Id } = req.query;
  try {
    // Fetch reviews data from the TripAdvisor API
    // const response = await fetch(`${base_url}/location/${location_Id}/reviews?language=en&key=${process.env.TRIPADVISOR_API_KEY_ENV}`);
    // const data = await response.json();

    // Static reviews data (commented out the previous fetch)
    const staticData = {
      data: [
        {
          id: 940263107,
          lang: "en",
          location_id: 12389531,
          published_date: "2024-02-29T22:40:02Z",
          rating: 5,
          helpful_votes: 0,
          rating_image_url: "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
          url: "https://www.tripadvisor.com/ShowUserReviews-g1066456-d12389531-r940263107-Reviews-Trunk_Hotel-Shibuya_Tokyo_Tokyo_Prefecture_Kanto.html?m=66827#review940263107",
          text: "Just love this place. It's so unique.  From the pajamas to the drink's in the fridge.  I also loved the vegan breakfast in the restaurant.  They were also really great to my son when I had to step out for a meeting.  We  will definitely go back.  The location is great too.",
          title: "Stay here",
          trip_type: "Family",
          travel_date: "2023-07-31",
          user: {
            username: "BenLookingQC",
            user_location: {
              id: "298450",
              name: "Makati, Metro Manila, Luzon"
            },
            avatar: {
              thumbnail: "https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e9/60/default-avatar-2020-64.jpg",
              small: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e9/60/default-avatar-2020-64.jpg",
              medium: "https://media-cdn.tripadvisor.com/media/photo-f/1a/f6/e9/60/default-avatar-2020-64.jpg",
              large: "https://media-cdn.tripadvisor.com/media/photo-p/1a/f6/e9/60/default-avatar-2020-64.jpg",
              original: "https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/e9/60/default-avatar-2020-64.jpg"
            }
          },
          subratings: {
            "0": {
              name: "RATE_VALUE",
              rating_image_url: "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s4.0-66827-5.svg",
              value: 4,
              localized_name: "Value"
            },
            "1": {
              name: "RATE_LOCATION",
              rating_image_url: "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
              value: 5,
              localized_name: "Location"
            },
            "2": {
              name: "RATE_SERVICE",
              rating_image_url: "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
              value: 5,
              localized_name: "Service"
            }
          }
        },
        // Add more static review data as needed
      ]
    };

    // res.json(data); // Return the fetched JSON data to the client
    res.json(staticData); // Return the static JSON data to the client

    console.log('Server Reviews data', staticData);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/api/photos', async (req, res) => {
  const { location_Id } = req.query;
  try {
    // Simulating fetching data from an API
       // Fetch reviews data from the TripAdvisor API
      // const response = await fetch(`${base_url}/location/${location_Id}/photos?language=en&key=${process.env.TRIPADVISOR_API_KEY_ENV}`);
      // const data = await response.json();
    // Static data
    const staticData = {
      data: [
        {
          id: 123456789,
          caption: "Static Image 1",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/10/53/64/aa/lobby--v17159715.jpg"
            },
            medium: {
              height: 200,
              width: 300,
              url: "https://media-cdn.tripadvisor.com/media/oyster/550/10/53/64/aa/lobby--v17159715.jpg"
            },
            original: {
              height: 800,
              width: 1200,
              url: "hhttps://media-cdn.tripadvisor.com/media/oyster/2600/10/53/64/aa/lobby--v17159715.jpg"
            }
          },
          album: "Static Album",
          source: {
            name: "Static Source",
            localized_name: "Static Source"
          }
        },
        // Add more static data objects as needed
      ]
    };
   
    // res.json(data); // Return the combined JSON data to the client

    // Instead, send only static data as the response
    res.json(staticData);

  } catch (error) {
    console.error('Error fetching or combining data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// This is the Manual way to the direct Endpoint using the default manual file
app.post('/api/offer_requests', async (req, res) => {
  try {
    const postData = req.body; // Access the data sent from the client

    // Check if postData is valid
    if (!postData) {
      throw new Error('Invalid POST data');
    }

    // Forward the POST request to the external API using fetch
    const response = await fetch('https://api.duffel.com/air/offer_requests', {
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
