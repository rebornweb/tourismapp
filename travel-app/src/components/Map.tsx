import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const GoogleMaps = () => {
  const [query, setQuery] = useState('');
  const [map, setMap] = useState<google.maps.Map | undefined>();

  useEffect(() => {
    const initMap = () => {
      const sydney = new google.maps.LatLng(-33.867, 151.195);

      const mapInstance = new google.maps.Map(document.getElementById("map")!, {
        center: sydney,
        zoom: 15,
      });

      setMap(mapInstance);
    };

    const searchPlaces = (query: string) => {
      if (!map) return;

      const request = {
        query,
        fields: ["name", "geometry"],
      };

      const service = new google.maps.places.PlacesService(map);
      service.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          for (let i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }

          if (map) {
            map.setCenter(results[0].geometry!.location!);
          }
        }
      });
    };

    const createMarker = (place: google.maps.places.PlaceResult) => {
      if (!place.geometry || !place.geometry.location || !map) return;

      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });

      const infowindow = new google.maps.InfoWindow(); // Declare infowindow variable

      google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map);
      });
    };

    // Load Google Maps API asynchronously
    let map: google.maps.Map | undefined;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    // Clean up function
    return () => {
      if (map) {
        map = undefined;
      }
    };
  }, []);

  const searchPlaces = (query: string) => {
    if (!map) return;

    const createMarker = (place: google.maps.places.PlaceResult) => {
      if (!place.geometry || !place.geometry.location || !map) return;

      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });

      const infowindow = new google.maps.InfoWindow(); // Declare infowindow variable

      google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map);
      });
    };

    const request = {
      query,
      fields: ["name", "geometry"],
    };

    const service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }

        map.setCenter(results[0].geometry!.location!);
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchPlaces(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search places"
        />
        <button type="submit">Search</button>
      </form>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default GoogleMaps;
