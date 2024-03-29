import React, { useEffect } from 'react';
import { Input, Checkbox } from '@chakra-ui/react';

const GoogleMaps = ({ onLocationChange }) => {
  const initMap = () => {
    const map = new google.maps.Map(document.getElementById("map")!, {
      center: { lat: 40.749933, lng: -73.98633 },
      zoom: 13,
      mapTypeControl: false,
    });

    const card = document.getElementById("pac-card")!;
    const input = document.getElementById("pac-input") as HTMLInputElement;
    const biasInputElement = document.getElementById("use-location-bias") as HTMLInputElement;
    const strictBoundsInputElement = document.getElementById("use-strict-bounds") as HTMLInputElement;
    const infowindowContent = document.getElementById("infowindow-content") as HTMLElement;

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", map);

    const infowindow = new google.maps.InfoWindow();
    const marker = new google.maps.Marker({
      map,
      anchorPoint: new google.maps.Point(0, -29),
    });

    autocomplete.addListener("place_changed", async () => {
      infowindow.close();
      marker.setVisible(false);
    
      const place = autocomplete.getPlace();
    
      if (!place.geometry || !place.geometry.location) {
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
    
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
    
      // Perform null check for place.geometry.location
      if (place.geometry && place.geometry.location) {
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      } else {
        console.error('No location found for the selected place');
      }
    
      infowindowContent.children["place-name"].textContent = place.name || '';
      infowindowContent.children["place-address"].textContent = place.formatted_address || '';
    
      infowindow.setContent(infowindowContent);
      infowindow.open(map, marker);
    
      // Trigger the onLocationChange callback with the new latitude and longitude
      onLocationChange(place.geometry.location.lat(), place.geometry.location.lng());
    
      
    
     });
    
    

    biasInputElement.addEventListener("change", () => {
      if (biasInputElement.checked) {
        autocomplete.bindTo("bounds", map);
      } else {
        autocomplete.unbind("bounds");
        autocomplete.setBounds({ east: 180, west: -180, north: 90, south: -90 });
        strictBoundsInputElement.checked = biasInputElement.checked;
      }

      input.value = "";
    });

    strictBoundsInputElement.addEventListener("change", () => {
      autocomplete.setOptions({
        strictBounds: strictBoundsInputElement.checked,
      });
      if (strictBoundsInputElement.checked) {
        biasInputElement.checked = strictBoundsInputElement.checked;
        autocomplete.bindTo("bounds", map);
      }

      input.value = "";
    });

    // Add click event listener to the map to get latitude and longitude
    map.addListener("click", async (e) => {
      const latLng = e.latLng;
      const lat = latLng.lat();
      const lng = latLng.lng();
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    
      // Update marker position
      marker.setPosition(latLng);
      marker.setVisible(true);
    
      // Reverse geocode to get the address from the clicked coordinates
      const geocoder = new google.maps.Geocoder();
      await geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK") {
          if (results && results[0]) { // Add null check for 'results' and results[0]
            const address = results[0].formatted_address;
            input.value = address; // Update input field with the address
  
  
            console.log("Address:", address);
          } else {
            console.error("No results found");
          }
        } else {
          console.error("Geocoder failed due to:", status);
        }
      });
    
      // Call the onLocationChange callback with the new latitude and longitude
      onLocationChange(lat, lng);
    });

       // Automatically center the map on the user's location when the page loads
       if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            map.setCenter(userLocation);
            map.setZoom(10); // Adjust zoom level as needed
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;

    script.onload = initMap;
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
      <div id="pac-card">
        {/* Add card content here */}
      </div>
      <Input id="pac-input" type="text" placeholder="Enter a location" />
      <Checkbox id="use-location-bias" defaultChecked>Use location bias</Checkbox> 
      <Checkbox id="use-strict-bounds" defaultChecked>Use strict bounds</Checkbox> 

      <div id="infowindow-content">
        <span id="place-name"></span><br />
        <span id="place-address"></span>
      </div>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default GoogleMaps;