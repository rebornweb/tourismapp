# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


https://visgl.github.io/react-google-maps/examples/autocomplete

https://github.com/tripadvisor-mcgill-2016/tripadvisor-docs/blob/master/ta-api-cheatsheet.md


# TripAdvisor Partner JSON API

### Sample URL
http://api.tripadvisor.com/api/partner/2.0/location/60745/hotels?key=<your_key>

### URL Structure
   - **Host, Servlet, Namespace, Version**: `http://api.tripadvisor.com/api/partner/2.0/`
   - **Endpoint and Connection**: `location/60745/hotels`
   - **Your Key**: `?key=<your_key>`
   - **Optional URL Parameters**: `&lang=de`

### Response Format Sample Snippet (for a list call)

    {
         "data": [
             {
                 "location_id": "77638",
                 "name": "The Inn at Longwood Medical",
             },
             {
                 "location_id": "3225572",
                 "name": "enVision Hotel Boston",
             },
         ],
    }

### Reference Documentation
API reference: `http://api.tripadvisor.com/api/partner/2.0/doc?key=<your_key>`

Detailed Documentation: `https://developer-tripadvisor.com/partner/json-api/` <br/>
(Contact the hackathon organizers for credentials)

### TripAdvisor Location ID Examples
Property:
   - Accommodation: 114134: The Lenox Hotel in Boston
   - Attraction: 105250: Fenway Park
   - Eatery: 322981: Pizzeria Regina

Geo:
   - 1 : The World
   - 17 : North America
   - 191 : USA
   - 28942 : Massachusetts
   - 60745 : Boston

### Sample Calls
#### /location
Get data for location 89575
`http://api.tripadvisor.com/api/partner/2.0/location/89575?key=<your_key>`

Get reviews for location 89575
`http://api.tripadvisor.com/api/partner/2.0/location/89575/reviews?key=<your_key>`

Get the best Hotels in location 60745 (Boston)
`http://api.tripadvisor.com/api/partner/2.0/location/60745/hotels?key=<your_key>`

Get photos for location 60745
`http://api.tripadvisor.com/api/partner/2.0/location/60745/photos?key=<your_key>`

#### /map
Get locations near a lat long point
`http://api.tripadvisor.com/api/partner/2.0/map/42.33141,-71.099396?key=<your_key>`

Get locations near a lat long point that are attractions
`http://api.tripadvisor.com/api/partner/2.0/map/42.33141,-71.099396/attractions?key=<your_key>`

Get attractions near a lat long point that contain ‘art’ in the name
`http://api.tripadvisor.com/api/partner/2.0/map/42.33141,-71.099396/attractions?key=<your_key>&q=arts`

Get geographic locations (cities) near a lat long point
`http://api.tripadvisor.com/api/partner/2.0/map/42.33141,-71.099396/geos?key=<your_key>`

#### /search
Search for locations with “freedom trail run”
`http://api.tripadvisor.com/api/partner/2.0/search/freedom%20trail%20run?key=<your_key>`

Search for locations with “bellagio” that are hotels
`http://api.tripadvisor.com/api/partner/2.0/search/bellagio?key=<your_key>&category=hotels`

#### Neat Stuff / Ideas
Best hotels in a country
`http://api.tripadvisor.com/api/partner/2.0/location/191/hotels?key=<your_key>`

Walk part of the location hierarchy:
`http://api.tripadvisor.com/api/partner/2.0/location/1/geos?key=<your_key>`

Get locations of some type near lat / long
`http://api.tripadvisor.com/api/partner/2.0/map/42.33141,-71.099396/attractions?key=<your_key>`

### Acknowledgements
Thanks to Barlow Adamson (TripAdvisor)

https://www.npmjs.com/package/@react-google-maps/api

Do this: https://github.com/googlemaps/extended-component-library/tree/main/examples/react_sample_app



Duffel ref
https://duffel.com/docs/api/overview/key-concepts
https://www.postman.com/duffelhq/workspace/duffel/collection/15754339-f39d0236-5204-479f-91a1-f9832f7c0351
https://duffel.com/docs/api/overview/test-mode/duffel-airways

OAG
https://developers.oag.com/

https://rapidapi.com/oag-oag-default/api/flight-info-api

https://developers.oag.com/api-details#api=flight-info-v2&operation=GetFlights

https://www.oag.com/knowledge/flight-info-api-response-layout-descriptions

Free Flight API
https://rapidapi.com/Travelpayouts/api/flight-data/

Fill these in .env

REACT_APP_GOOGLE_MAPS_API_KEY=

TRIPADVISOR_API_KEY_ENV=

DUFFEL_API_KEY_ENV=

REACT_APP_LOCAL_API_URL=http://localhost:5000/api


//Duffel sample
import { Duffel } from '@duffel/api'

const duffel = new Duffel({
  token: YOUR_ACCESS_TOKEN
})

duffel.offerRequests.create({
  "return_offers": false,
  "supplier_timeout": 10000,
  "slices": [
    {
      "origin": "LHR",
      "destination": "JFK",
      "departure_time": {
        "to": "17:00",
        "from": "09:45"
      },
      "departure_date": "2020-04-24",
      "arrival_time": {
        "to": "17:00",
        "from": "09:45"
      }
    }
  ],
  "private_fares": {
    "QF": [
      {
        "corporate_code": "FLX53",
        "tracking_reference": "ABN:2345678"
      }
    ],
    "UA": [
      {
        "corporate_code": "1234",
        "tour_code": "578DFL"
      }
    ]
  },
  "passengers": [
    {
      "family_name": "Earhart",
      "given_name": "Amelia",
      "loyalty_programme_accounts": [
        {
          "account_number": "12901014",
          "airline_iata_code": "BA"
        }
      ],
      "type": "adult"
    },
    {
      "age": 14
    },
    {
      "fare_type": "student"
    },
    {
      "age": 5,
      "fare_type": "contract_bulk_child"
    }
  ],
  "max_connections": 0,
  "cabin_class": "economy"
})