import React, { useState } from 'react';

const Flights: React.FC = () => {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<any>(null); // State to store responseData

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
      setResponseData(responseData); // Set responseData state
      console.log(responseData);
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
      {responseData && responseData.data ? (
          <div>
          <h1>Flight Details</h1>
          <p>Departure Date: {responseData.data.slices[0]?.departure_date}</p>
          <p>Destination: {responseData.data.slices[0]?.destination?.city_name}</p>
          <p>Origin: {responseData.data.slices[0]?.origin?.city_name}</p>
          <p>Airline: Jetstar Airways</p>
          <p>Cabin Class: Economy</p>
          <p>Baggage: 1 Carry-on</p>
          <p>Total Amount: AUD 53.86</p>
          {/* Add more flight details as needed */}
        </div>
      ) : (
        <div>No flight details available</div>
      )}
    </div>
  );
};

export default Flights;

/*

"data": {
  "client_key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTIwNDgzMDMsImxpdmVfbW9kZSI6ZmFsc2UsIm9yZ2FuaXNhdGlvbl9pZCI6Im9yZ18wMDAwQWdFOTgxRzBxeWZCbkNEbVdFIn0.0BedFT41sjcZLiCozF66A1JgGNuOLwYN4DGeBG1BAsc",
  "offers": [
    {
      "total_emissions_kg": "21",
      "allowed_passenger_identity_document_types": [
        "passport",
        "tax_id",
        "known_traveler_number",
        "passenger_redress_number"
      ],
      "payment_requirements": {
        "requires_instant_payment": true,
        "price_guarantee_expires_at": null,
        "payment_required_by": null
      },
      "supported_passenger_identity_document_types": [],
      "passenger_identity_documents_required": false,
      "tax_currency": "AUD",
      "base_currency": "AUD",
      "base_amount": "38.86",
      "private_fares": [],
      "tax_amount": "15.00",
      "total_currency": "AUD",
      "created_at": "2024-04-01T08:58:21.459626Z",
      "live_mode": false,
      "total_amount": "53.86",
      "slices": [
        {
          "ngs_shelf": null,
          "destination_type": "airport",
          "origin_type": "airport",
          "fare_brand_name": "STARTER",
          "conditions": {
            "priority_check_in": null,
            "priority_boarding": null,
            "advance_seat_selection": null,
            "change_before_departure": {
              "penalty_currency": "AUD",
              "penalty_amount": "60",
              "allowed": true
            }
          },
          "segments": [
            {
              "origin_terminal": null,
              "destination_terminal": null,
              "aircraft": null,
              "departing_at": "2024-04-09T06:00:00",
              "arriving_at": "2024-04-09T07:05:00",
              "stops": [],
              "operating_carrier": {
                "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/JQ.svg",
                "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/JQ.svg",
                "iata_code": "JQ",
                "conditions_of_carriage_url": "https://www.jetstar.com/au/en/conditions-of-carriage-jq",
                "name": "Jetstar Airways",
                "id": "arl_00009VME7DCOaPRQvNhcNc"
              },
              "marketing_carrier": {
                "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/JQ.svg",
                "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/JQ.svg",
                "iata_code": "JQ",
                "conditions_of_carriage_url": "https://www.jetstar.com/au/en/conditions-of-carriage-jq",
                "name": "Jetstar Airways",
                "id": "arl_00009VME7DCOaPRQvNhcNc"
              },
              "operating_carrier_flight_number": "251",
              "marketing_carrier_flight_number": "251",
              "distance": null,
              "passengers": [
                {
                  "cabin": {
                    "amenities": null,
                    "marketing_name": "Economy",
                    "name": "economy"
                  },
                  "baggages": [
                    {
                      "quantity": 0,
                      "type": "checked"
                    },
                    {
                      "quantity": 1,
                      "type": "carry_on"
                    }
                  ],
                  "cabin_class_marketing_name": "Economy",
                  "fare_basis_code": "ELECOE4",
                  "passenger_id": "pas_0000AgRIkaOmGPKt44yBoQ",
                  "cabin_class": "economy"
                }
              ],
              "duration": "PT1H5M",
              "destination": {
                "iata_city_code": "WLG",
                "city_name": "Wellington",
                "iata_country_code": "NZ",
                "airports": null,
                "icao_code": "NZWN",
                "iata_code": "WLG",
                "latitude": -41.327743,
                "longitude": 174.807318,
                "city": null,
                "time_zone": "Pacific/Auckland",
                "type": "airport",
                "name": "Wellington International Airport",
                "id": "arp_wlg_nz"
              },
              "origin": {
                "iata_city_code": "AKL",
                "city_name": "Auckland",
                "iata_country_code": "NZ",
                "airports": null,
                "icao_code": "NZAA",
                "iata_code": "AKL",
                "latitude": -37.008148,
                "longitude": 174.789684,
                "city": {
                  "iata_city_code": "AKL",
                  "city_name": null,
                  "iata_country_code": "NZ",
                  "icao_code": null,
                  "iata_code": "AKL",
                  "latitude": null,
                  "longitude": null,
                  "time_zone": null,
                  "type": "city",
                  "name": "Auckland",
                  "id": "cit_akl_nz"
                },
                "time_zone": "Pacific/Auckland",
                "type": "airport",
                "name": "Auckland Airport",
                "id": "arp_akl_nz"
              },
              "id": "seg_0000AgRIkfrfwOQG19Wq36"
            }
          ],

        }
        */