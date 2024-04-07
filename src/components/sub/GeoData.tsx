import React, { useEffect } from 'react';
import { Input, Checkbox } from '@chakra-ui/react';

const GeoData = ({ onLocationChange }) => {
  useEffect(() => {
    const initAutocomplete = async () => {
      const inputElement = document.getElementById("pac-input") as HTMLInputElement | null;
      if (!inputElement) {
        console.error("Input element not found in the DOM.");
        return;
      }

      const autocomplete = new google.maps.places.Autocomplete(inputElement, {
        types: ['geocode'],
      });

      autocomplete.addListener("place_changed", async () => {
        const place = autocomplete.getPlace();

        if (!place.geometry || !place.geometry.location) {
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }

        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);

        // Trigger the onLocationChange callback with the new latitude and longitude
        onLocationChange(lat, lng);
      });
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = initAutocomplete;
    document.head.appendChild(script);

    return () => {
      const scriptElement = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  return (
    <div>
      {/* Your existing JSX for Google Maps UI */}
      <Input id="pac-input" type="text" placeholder="Enter a location" />
      <Checkbox id="use-location-bias" defaultChecked>Use location bias</Checkbox>
      <br></br>
      <Checkbox id="use-strict-bounds" defaultChecked>Use strict bounds</Checkbox>

      <div id="infowindow-content">
        <span id="place-name"></span><br />
        <span id="place-address"></span>
      </div>
    </div>
  );
};

export default GeoData;
