// the .env file will load evinroment vars here the .env.local will load it on the client side

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { Duffel } = require('@duffel/api');
const bodyParser = require('body-parser');
//console.log('Environment Variables:', process.env);




const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); 
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080; // Define the port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const base_url = 'https://api.content.tripadvisor.com/api/v1';

console.log(process.env.OAG_API_KEY_ENV, '= testing vars ENV- OAG_API_KEY_ENV');
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
      "data": [
          {
              "location_id": "299048",
              "name": "Ambassador Motor Inn",
              "distance": "0.20062318028458978",
              "bearing": "south",
              "address_obj": {
                  "street1": "180 Gladstone Rd",
                  "street2": "South Brisbane",
                  "city": "Brisbane",
                  "state": "Queensland",
                  "country": "Australia",
                  "postalcode": "4101",
                  "address_string": "180 Gladstone Rd South Brisbane, Brisbane, Queensland 4101 Australia"
              }
          },
          {
              "location_id": "256668",
              "name": "Hotel Diana",
              "distance": "0.5127826780447526",
              "bearing": "northeast",
              "address_obj": {
                  "street1": "12 Annerley Rd",
                  "street2": "Woolloongabba",
                  "city": "Brisbane",
                  "state": "Queensland",
                  "country": "Australia",
                  "postalcode": "4102",
                  "address_string": "12 Annerley Rd Woolloongabba, Brisbane, Queensland 4102 Australia"
              }
          },
          {
              "location_id": "23898089",
              "name": "Peak Apartments",
              "distance": "0.566437534970521",
              "bearing": "northeast",
              "address_obj": {
                  "street1": "218 Vulture Street",
                  "city": "Brisbane",
                  "state": "Queensland",
                  "country": "Australia",
                  "postalcode": "4101",
                  "address_string": "218 Vulture Street, Brisbane, Queensland 4101 Australia"
              }
          },
          {
              "location_id": "23144750",
              "name": "Courtyard by Marriott Brisbane South Bank",
              "distance": "0.5834593715064114",
              "bearing": "northeast",
              "address_obj": {
                  "street1": "218 Vulture Street",
                  "city": "Brisbane",
                  "state": "Queensland",
                  "country": "Australia",
                  "postalcode": "4101",
                  "address_string": "218 Vulture Street, Brisbane, Queensland 4101 Australia"
              }
          },
          {
              "location_id": "10335467",
              "name": "Menso at Southbank",
              "distance": "0.5946333024866973",
              "bearing": "north",
              "address_obj": {
                  "street1": "68 Cordelia St",
                  "city": "Brisbane",
                  "state": "Queensland",
                  "country": "Australia",
                  "postalcode": "4101",
                  "address_string": "68 Cordelia St, Brisbane, Queensland 4101 Australia"
              }
          },
          {
              "location_id": "13993553",
              "name": "Emporium Hotel South Bank",
              "distance": "0.6010830044839831",
              "bearing": "north",
              "address_obj": {
                  "street1": "267 Grey Street",
                  "city": "Brisbane",
                  "state": "Queensland",
                  "country": "Australia",
                  "postalcode": "4101",
                  "address_string": "267 Grey Street, Brisbane, Queensland 4101 Australia"
              }
          },
          {
              "location_id": "256665",
              "name": "Central Hillcrest Apartments",
              "distance": "0.6368217456699429",
              "bearing": "northeast",
              "address_obj": {
                  "street1": "Hillcrest Central Apartments 311 Vulture St",
                  "street2": "",
                  "city": "Brisbane",
                  "state": "Queensland",
                  "country": "Australia",
                  "postalcode": "4101",
                  "address_string": "Hillcrest Central Apartments 311 Vulture St, Brisbane, Queensland 4101 Australia"
              }
          },
          {
              "location_id": "584130",
              "name": "Mantra South Bank Brisbane",
              "distance": "0.822210694867177",
              "bearing": "north",
              "address_obj": {
                  "street1": "161 Grey St",
                  "street2": "South Bank",
                  "city": "Brisbane",
                  "state": "Queensland",
                  "country": "Australia",
                  "postalcode": "4101",
                  "address_string": "161 Grey St South Bank, Brisbane, Queensland 4101 Australia"
              }
          },
          {
              "location_id": "289422",
              "name": "Rydges South Bank Brisbane",
              "distance": "0.8718504587098178",
              "bearing": "north",
              "address_obj": {
                  "street1": "Rydges Southbank 9 Glenelg St",
                  "street2": "South Brisbane",
                  "city": "Brisbane",
                  "state": "Queensland",
                  "country": "Australia",
                  "postalcode": "4101",
                  "address_string": "Rydges Southbank 9 Glenelg St South Brisbane, Brisbane, Queensland 4101 Australia"
              }
          },
          {
              "location_id": "13839499",
              "name": "Novotel Brisbane South Bank",
              "distance": "0.8740253574721666",
              "bearing": "north",
              "address_obj": {
                  "street1": "38 Cordelia St",
                  "city": "Brisbane",
                  "state": "Queensland",
                  "country": "Australia",
                  "postalcode": "4101",
                  "address_string": "38 Cordelia St, Brisbane, Queensland 4101 Australia"
              }
          }
      ]
  }
    
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
    // To do when looking up the ancestor you can details of the city of where the hotel is {{base_url}}/location/255068/details?language=en&key
    // Static client details data (commented out the previous fetch)
    const staticData = {
      "location_id": "1160898",
      "name": "The Originals Lyon Est Eclipse",
      "description": "Ideally situated just minutes from the centre of Lyon, the Hotel Eclipse offers high-quality comfort in a clam and comfortable atmosphere. It features modern guestrooms designed to be relaxing living spaces. All guestrooms are equipped with satellite television and free Wi-Fi internet access.",
      "web_url": "https://www.tripadvisor.com/Hotel_Review-g1080938-d1160898-Reviews-The_Originals_Lyon_Est_Eclipse-Decines_Charpieu_Rhone_Auvergne_Rhone_Alpes.html?m=66827",
      "address_obj": {
          "street1": "25 Avenue Jean Jaures",
          "street2": "",
          "city": "Decines-Charpieu",
          "country": "France",
          "postalcode": "69150",
          "address_string": "25 Avenue Jean Jaures, 69150 Decines-Charpieu France"
      },
      "ancestors": [
          {
              "level": "City",
              "name": "Decines-Charpieu",
              "location_id": "1080938"
          },
          {
              "level": "Department",
              "name": "Rhone",
              "location_id": "1904061"
          },
          {
              "level": "Region",
              "name": "Auvergne-Rhone-Alpes",
              "location_id": "11038913"
          },
          {
              "level": "Country",
              "name": "France",
              "location_id": "187070"
          }
      ],
      "latitude": "45.76837",
      "longitude": "4.938692",
      "timezone": "Europe/Paris",
      "write_review": "https://www.tripadvisor.com/UserReview-g1080938-d1160898-The_Originals_Lyon_Est_Eclipse-Decines_Charpieu_Rhone_Auvergne_Rhone_Alpes.html?m=66827",
      "ranking_data": {
          "geo_location_id": "1080938",
          "ranking_string": "#2 of 3 hotels in Decines-Charpieu",
          "geo_location_name": "Decines-Charpieu",
          "ranking_out_of": "3",
          "ranking": "2"
      },
      "rating": "3.5",
      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/3.5-66827-5.svg",
      "num_reviews": "172",
      "review_rating_count": {
          "1": "27",
          "2": "19",
          "3": "38",
          "4": "57",
          "5": "31"
      },
      "subratings": {
          "0": {
              "name": "rate_sleep",
              "localized_name": "Sleep Quality",
              "rating_image_url": "https://static.tacdn.com/img2/ratings/traveler/ss3.5.svg",
              "value": "3.5"
          },
          "1": {
              "name": "rate_location",
              "localized_name": "Location",
              "rating_image_url": "https://static.tacdn.com/img2/ratings/traveler/ss3.0.svg",
              "value": "3.0"
          },
          "2": {
              "name": "rate_room",
              "localized_name": "Rooms",
              "rating_image_url": "https://static.tacdn.com/img2/ratings/traveler/ss3.5.svg",
              "value": "3.5"
          },
          "3": {
              "name": "rate_service",
              "localized_name": "Service",
              "rating_image_url": "https://static.tacdn.com/img2/ratings/traveler/ss4.0.svg",
              "value": "4.0"
          },
          "4": {
              "name": "rate_value",
              "localized_name": "Value",
              "rating_image_url": "https://static.tacdn.com/img2/ratings/traveler/ss3.5.svg",
              "value": "3.5"
          },
          "5": {
              "name": "rate_cleanliness",
              "localized_name": "Cleanliness",
              "rating_image_url": "https://static.tacdn.com/img2/ratings/traveler/ss3.5.svg",
              "value": "3.5"
          }
      },
      "photo_count": "103",
      "see_all_photos": "https://www.tripadvisor.com/Hotel_Review-g1080938-d1160898-m66827-Reviews-The_Originals_Lyon_Est_Eclipse-Decines_Charpieu_Rhone_Auvergne_Rhone_Alpes.html#photos",
      "price_level": "$",
      "amenities": [
          "Wifi",
          "Free Wifi",
          "Meeting rooms",
          "Non-smoking rooms",
          "Multilingual Staff",
          "Flatscreen TV",
          "Breakfast Buffet",
          "Parking",
          "Internet",
          "Suites",
          "Free Internet",
          "Free parking",
          "Wheelchair access",
          "Restaurant",
          "Bar/Lounge",
          "Pets Allowed",
          "Dry Cleaning",
          "Banquet Room",
          "Accessible rooms",
          "Non-smoking hotel",
          "Housekeeping",
          "Baggage Storage",
          "Billiards",
          "Bottled Water",
          "Express Check-in / Check-out",
          "English",
          "French",
          "Kids' Meals",
          "Newspaper",
          "Outdoor Furniture",
          "Parking Garage",
          "Paid Private Parking On-site",
          "Secured Parking",
          "Shared Lounge / TV Area",
          "Soundproof Rooms",
          "Street Parking",
          "Wine / Champagne"
      ],
      "parent_brand": "The Originals, Human Hotels & Resorts",
      "brand": "The Originals",
      "category": {
          "name": "hotel",
          "localized_name": "Hotel"
      },
      "subcategory": [
          {
              "name": "hotel",
              "localized_name": "Hotel"
          }
      ],
      "styles": [
          "Classic",
          "Mid-range"
      ],
      "neighborhood_info": [],
      "trip_types": [
          {
              "name": "business",
              "localized_name": "Business",
              "value": "56"
          },
          {
              "name": "couples",
              "localized_name": "Couples",
              "value": "47"
          },
          {
              "name": "solo",
              "localized_name": "Solo travel",
              "value": "15"
          },
          {
              "name": "family",
              "localized_name": "Family",
              "value": "33"
          },
          {
              "name": "friends",
              "localized_name": "Friends getaway",
              "value": "9"
          }
      ],
      "awards": []
  }
    // res.json(data); // Return the fetched JSON data to the client
    res.json(staticData); // Return the static JSON data to the client

    console.log('Server Location Id Trip Advisor details:' + staticData);
  } catch (error) {
    console.error('Error fetching details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




  app.get('/api/location/details/ancestors', async (req, res) => {
    const { location_Id } = req.query;
    try {
      // Fetch details data from the specified endpoint
      // const response = await fetch(`${base_url}/location/${location_Id}/details?language=en&key=${process.env.TRIPADVISOR_API_KEY_ENV}`);
      // const data = await response.json();
      // To do when looking up the ancestor you can details of the city of where the hotel is {{base_url}}/location/255068/details?language=en&key
      // Static client details data (commented out the previous fetch)
      const staticData = {
        "location_id": "187070",
        "name": "France",
        "description": "There's much more to France than Paris—from the fairy-tale châteaux of the Loire Valley to the lavender fields of Provence, and the French Riviera's celebrity-studded beaches. World-famous gastronomy and fine wines provide the perfect complement to the country's alpine views and architectural masterpieces.",
        "web_url": "https://www.tripadvisor.com/Tourism-g187070-France-Vacations.html?m=66827",
        "address_obj": {
            "address_string": "France"
        },
        "ancestors": [
          {
            "level": "Country",
            "name": "Australia",
            "location_id": "255055"
          }
        ],
        "latitude": "48.864765",
        "longitude": "2.343772",
        "timezone": "Europe/Paris",
        "see_all_photos": "https://www.tripadvisor.com/Tourism-g187070-m66827-France-Vacations.html#photos",
        "category": {
            "name": "geographic",
            "localized_name": "Geographic"
        },
        "subcategory": [
            {
                "name": "country",
                "localized_name": "Country"
            }
        ],
        "neighborhood_info": [],
        "awards": []
    }
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
      "data": [
          {
              "id": 941619351,
              "lang": "en",
              "location_id": 256668,
              "published_date": "2024-03-10T06:13:39Z",
              "rating": 5,
              "helpful_votes": 0,
              "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
              "url": "https://www.tripadvisor.com/ShowUserReviews-g255068-d256668-r941619351-Reviews-Hotel_Diana-Brisbane_Brisbane_Region_Queensland.html?m=66827#review941619351",
              "text": "Hotel Diana is clean and tidy. Our room was the family room and spa. The spa in the bath works well and has strong jets. Kids loved it. Room was large and had sectioned areas for dining table and lounge. There was even a hot plate to cook with. I would stay here again. Real easy to pop out for dinner. So many restaurants around the hotel. Buffet breakfast on offer as well.",
              "title": "Impressed",
              "trip_type": "Family",
              "travel_date": "2024-03-31",
              "user": {
                  "username": "Rloague",
                  "user_location": {
                      "id": "255067",
                      "name": "Queensland"
                  },
                  "avatar": {
                      "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/ef/73/default-avatar-2020-13.jpg",
                      "small": "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/ef/73/default-avatar-2020-13.jpg",
                      "medium": "https://media-cdn.tripadvisor.com/media/photo-f/1a/f6/ef/73/default-avatar-2020-13.jpg",
                      "large": "https://media-cdn.tripadvisor.com/media/photo-p/1a/f6/ef/73/default-avatar-2020-13.jpg",
                      "original": "https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/ef/73/default-avatar-2020-13.jpg"
                  }
              },
              "subratings": {}
          },
          {
              "id": 936672441,
              "lang": "en",
              "location_id": 256668,
              "published_date": "2024-02-03T01:10:05Z",
              "rating": 5,
              "helpful_votes": 0,
              "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
              "url": "https://www.tripadvisor.com/ShowUserReviews-g255068-d256668-r936672441-Reviews-Hotel_Diana-Brisbane_Brisbane_Region_Queensland.html?m=66827#review936672441",
              "text": "Needed a good priced 1 night stay around the Southbank area of Brisbane. With the ridiculous prices most hotels were looking for around Southbank I came across this gem. The Hotel Diana. Price was awsome and included free parking. \nArrived to a super warm greeting for the lady behind the desk. Room was ready even though we arrived early. Room modern, fresh, super clean. \nHotel 10min easy walk to Southbank. Great eateries local to the hotel itself so not necessary to go to southbank if you don't need to. Breakfast reasonably priced and well presented. \nOnly negative, there is no pool but southbank has all the swimming facilities you would need.\nNice gym for the fitness gurus.\nDon't spend hundreds on other hotels in the area. Try this one first.",
              "title": "Hidden Gem close to Southbank",
              "trip_type": "Couples",
              "travel_date": "2024-02-29",
              "user": {
                  "username": "TonyF255",
                  "user_location": {
                      "id": "255059",
                      "name": "Coffs Harbour, New South Wales"
                  },
                  "avatar": {
                      "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-t/01/2e/70/7f/avatar066.jpg",
                      "small": "https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/7f/avatar066.jpg",
                      "medium": "https://media-cdn.tripadvisor.com/media/photo-f/01/2e/70/7f/avatar066.jpg"
                  }
              },
              "subratings": {
                  "0": {
                      "name": "RATE_VALUE",
                      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
                      "value": 5,
                      "localized_name": "Value"
                  },
                  "1": {
                      "name": "RATE_LOCATION",
                      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
                      "value": 5,
                      "localized_name": "Location"
                  },
                  "2": {
                      "name": "RATE_SERVICE",
                      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
                      "value": 5,
                      "localized_name": "Service"
                  }
              }
          },
          {
              "id": 933656339,
              "lang": "en",
              "location_id": 256668,
              "published_date": "2024-01-10T23:35:11Z",
              "rating": 5,
              "helpful_votes": 0,
              "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
              "url": "https://www.tripadvisor.com/ShowUserReviews-g255068-d256668-r933656339-Reviews-Hotel_Diana-Brisbane_Brisbane_Region_Queensland.html?m=66827#review933656339",
              "text": "Great location for appointment at the Mater. Staff were very friendly and helpful.\nBeds were super comfy, had a great night sleep. Water pressure was good. Good selection of places close by for food. The water cooler was handy to refill with cold water. Will be staying here again on my next trip. Easy to get to from Roma Street Station.",
              "title": "Superb",
              "trip_type": "Family",
              "travel_date": "2024-01-31",
              "user": {
                  "username": "59kathk",
                  "user_location": {
                      "id": "null"
                  },
                  "avatar": {
                      "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e3/6a/default-avatar-2020-47.jpg",
                      "small": "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e3/6a/default-avatar-2020-47.jpg",
                      "medium": "https://media-cdn.tripadvisor.com/media/photo-f/1a/f6/e3/6a/default-avatar-2020-47.jpg",
                      "large": "https://media-cdn.tripadvisor.com/media/photo-p/1a/f6/e3/6a/default-avatar-2020-47.jpg",
                      "original": "https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/e3/6a/default-avatar-2020-47.jpg"
                  }
              },
              "subratings": {
                  "0": {
                      "name": "RATE_VALUE",
                      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
                      "value": 5,
                      "localized_name": "Value"
                  },
                  "1": {
                      "name": "RATE_LOCATION",
                      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
                      "value": 5,
                      "localized_name": "Location"
                  },
                  "2": {
                      "name": "RATE_SERVICE",
                      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
                      "value": 5,
                      "localized_name": "Service"
                  }
              }
          },
          {
              "id": 930898845,
              "lang": "en",
              "location_id": 256668,
              "published_date": "2023-12-24T11:26:04Z",
              "rating": 4,
              "helpful_votes": 0,
              "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s4.0-66827-5.svg",
              "url": "https://www.tripadvisor.com/ShowUserReviews-g255068-d256668-r930898845-Reviews-Hotel_Diana-Brisbane_Brisbane_Region_Queensland.html?m=66827#review930898845",
              "text": "Stayed at this property for four nights prior to a 2 week cruise.  We came from overseas and were permitted to check in early which was nice after a 15 hr flight.  We had a king room on the 3rd floor.  The room was not large but very well appointed, comfortable and very clean.  There were wine glass in the room, small fridge, and coffee/tea making facilities, including an occasional chair and table for sitting at.  The bathroom was a tile and the shower had great pressure.  The front desk staff were very friendly and always greeted us when we passed by.  The location of the hotel is nice, less than  5 min walk to the south bank and adjacent to the Brisbane Brewing Company pub and some food court type restaurants.  I would recommend this hotel to anyone visiting Brisbane, as the service, quality and location was great value for the price paid!",
              "title": "Highly Recommend  - Close to South Bank",
              "trip_type": "Couples",
              "travel_date": "2023-11-30",
              "user": {
                  "username": "haybri2016",
                  "user_location": {
                      "id": "181772",
                      "name": "Sidney, Victoria Capital Regional District, Vancouver Island, British Columbia"
                  },
                  "avatar": {
                      "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-t/01/2e/70/9a/avatar026.jpg",
                      "small": "https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/9a/avatar026.jpg",
                      "medium": "https://media-cdn.tripadvisor.com/media/photo-f/01/2e/70/9a/avatar026.jpg"
                  }
              },
              "subratings": {
                  "0": {
                      "name": "RATE_VALUE",
                      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
                      "value": 5,
                      "localized_name": "Value"
                  },
                  "1": {
                      "name": "RATE_LOCATION",
                      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s4.0-66827-5.svg",
                      "value": 4,
                      "localized_name": "Location"
                  },
                  "2": {
                      "name": "RATE_SERVICE",
                      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
                      "value": 5,
                      "localized_name": "Service"
                  }
              }
          },
          {
              "id": 929505994,
              "lang": "en",
              "location_id": 256668,
              "published_date": "2023-12-14T17:12:08Z",
              "rating": 3,
              "helpful_votes": 0,
              "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s3.0-66827-5.svg",
              "url": "https://www.tripadvisor.com/ShowUserReviews-g255068-d256668-r929505994-Reviews-Hotel_Diana-Brisbane_Brisbane_Region_Queensland.html?m=66827#review929505994",
              "text": "The room was supposed to be a deluxe queen and single. The queen was just two singles pushed together. The room had cockroaches in the bathroom which scared me when I went for my shower. The kettle was covered in dust and the milk provided was a bit sad as it is only tiny long life. The walls are thin and you can hear other people’s enjoyment in certain activities. The bar fridge was old and was loud during the night. The room is small. The carpet is dirty. The bathroom needs refurbishing as the cupboards are rotting and there is mould on the roof and in the grout in the shower.\nIt was convenient and close to the hospital for my stay.",
              "title": "Run down, convenient and positioned well.",
              "trip_type": "Family",
              "travel_date": "2023-11-30",
              "user": {
                  "username": "R7966QLrachelh",
                  "user_location": {
                      "id": "null"
                  },
                  "avatar": {
                      "thumbnail": "https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e8/ea/default-avatar-2020-63.jpg",
                      "small": "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e8/ea/default-avatar-2020-63.jpg",
                      "medium": "https://media-cdn.tripadvisor.com/media/photo-f/1a/f6/e8/ea/default-avatar-2020-63.jpg",
                      "large": "https://media-cdn.tripadvisor.com/media/photo-p/1a/f6/e8/ea/default-avatar-2020-63.jpg",
                      "original": "https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/e8/ea/default-avatar-2020-63.jpg"
                  }
              },
              "subratings": {
                  "0": {
                      "name": "RATE_VALUE",
                      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s3.0-66827-5.svg",
                      "value": 3,
                      "localized_name": "Value"
                  },
                  "1": {
                      "name": "RATE_LOCATION",
                      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
                      "value": 5,
                      "localized_name": "Location"
                  },
                  "2": {
                      "name": "RATE_SERVICE",
                      "rating_image_url": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/s5.0-66827-5.svg",
                      "value": 5,
                      "localized_name": "Service"
                  }
              }
          }
      ]
  }

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
      //To do get the photos of ancestors which is the City and country e.g ${base_url}/location/255068/photos?language=en
    // Static data
    const staticData ={
  "data": [

    {
      "id": 340474430,
      "is_blessed": false,
      "caption": "Vue de la Moselle",
      "published_date": "2018-08-24T14:14:25.597Z",
      "images": {
          "thumbnail": {
              "height": 50,
              "width": 50,
              "url": "https://media-cdn.tripadvisor.com/media/photo-t/14/4b/3a/3e/vue-de-la-moselle.jpg"
          },
          "small": {
              "height": 150,
              "width": 150,
              "url": "https://media-cdn.tripadvisor.com/media/photo-l/14/4b/3a/3e/vue-de-la-moselle.jpg"
          },
          "medium": {
              "height": 167,
              "width": 250,
              "url": "https://media-cdn.tripadvisor.com/media/photo-f/14/4b/3a/3e/vue-de-la-moselle.jpg"
          },
          "large": {
              "height": 367,
              "width": 550,
              "url": "https://media-cdn.tripadvisor.com/media/photo-s/14/4b/3a/3e/vue-de-la-moselle.jpg"
          },
          "original": {
              "height": 1707,
              "width": 2560,
              "url": "https://media-cdn.tripadvisor.com/media/photo-c/2560x500/14/4b/3a/3e/vue-de-la-moselle.jpg"
          }
      },
      "album": "Other",
      "source": {
          "name": "Traveler",
          "localized_name": "Traveler"
      },
      "user": {
          "username": "JEAN_CLAUDEG564"
      }
  }

   ]

    } 

    // res.json(data); // Return the combined JSON data to the client

    // Instead, send only static data as the response
    res.json(staticData);

  } catch (error) {
    console.error('Error fetching or combining data:', error);
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
