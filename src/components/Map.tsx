import React, { useEffect } from 'react';
import { Input, Checkbox } from '@chakra-ui/react';

const GoogleMaps = ({ onLocationChange }) => {
  const initMap = async () => {
    if (!google || !google.maps) {
      console.error('Google Maps API is not loaded.');
      return;
    }

    const map = new google.maps.Map(document.getElementById('map')!, {
      zoom: 17,
      mapTypeControl: false,
      mapId: 'a26138f45e6ccac8',
    });

    const card = document.getElementById('pac-card')!;
    const input = document.getElementById('pac-input') as HTMLInputElement;
    const biasInputElement = document.getElementById('use-location-bias') as HTMLInputElement;
    const strictBoundsInputElement = document.getElementById('use-strict-bounds') as HTMLInputElement;
    const infowindowContent = document.getElementById('infowindow-content') as HTMLElement;

    if (!map || !input || !biasInputElement || !strictBoundsInputElement || !infowindowContent) {
      console.error('Required elements not found.');
      return;
    }

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    const infowindow = new google.maps.InfoWindow();
    const marker = new google.maps.Marker({
      map,
      anchorPoint: new google.maps.Point(0, -29),
    });

    autocomplete.addListener('place_changed', async () => {
      infowindow.close();
      marker.setVisible(false);

      const place = autocomplete.getPlace();

      if (!place || !place.geometry || !place.geometry.location) {
        window.alert("No details available for input: '" + (place ? place.name : 'Unknown') + "'");
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
      }

      if (place.geometry && place.geometry.location) {
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        map.setCenter(place.geometry.location);
      } else {
        console.error('No location found for the selected place');
      }

      infowindowContent.children['place-name'].textContent = place.name || '';
      infowindowContent.children['place-address'].textContent = place.formatted_address || '';

      infowindow.setContent(infowindowContent);
      infowindow.open(map, marker);

      onLocationChange(place.geometry.location.lat(), place.geometry.location.lng());
    });

    biasInputElement.addEventListener('change', () => {
      if (biasInputElement.checked) {
        autocomplete.bindTo('bounds', map);
      } else {
        autocomplete.unbind('bounds');
        autocomplete.setBounds({ east: 180, west: -180, north: 90, south: -90 });
        strictBoundsInputElement.checked = biasInputElement.checked;
      }

      input.value = '';
    });

    strictBoundsInputElement.addEventListener('change', () => {
      autocomplete.setOptions({
        strictBounds: strictBoundsInputElement.checked,
      });
      if (strictBoundsInputElement.checked) {
        biasInputElement.checked = strictBoundsInputElement.checked;
        autocomplete.bindTo('bounds', map);
      }

      input.value = '';
    });

    map.addListener('click', async (e) => {
      if (!e || !e.latLng) {
        console.error('Invalid click event');
        return;
      }

      const latLng = e.latLng;
      const lat = latLng.lat();
      const lng = latLng.lng();

      marker.setPosition(latLng);
      marker.setVisible(true);

      const geocoder = new google.maps.Geocoder();
      await geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === 'OK') {
          if (results && results[0]) {
            const address = results[0].formatted_address;
            input.value = address;

            console.log('Address:', address);
          } else {
            console.error('No results found');
          }
        } else {
          console.error('Geocoder failed due to:', status);
        }
      });

      onLocationChange(lat, lng);
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(userLocation);
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
      <div id="pac-card">{/* Add card content here */}</div>
      <Input id="pac-input" type="text" placeholder="Enter a location" />
      <Checkbox id="use-location-bias" defaultChecked>
        Use location bias
      </Checkbox>
      <br />
      <Checkbox id="use-strict-bounds" defaultChecked>
        Use strict bounds
      </Checkbox>

      <div id="infowindow-content">
        <span id="place-name"></span>
        <br />
        <span id="place-address"></span>
      </div>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default GoogleMaps;
