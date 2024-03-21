import React, { useEffect } from 'react';

const GoogleMaps = () => {
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

    autocomplete.addListener("place_changed", () => {
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

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      infowindowContent.children["place-name"].textContent = place.name || '';
      infowindowContent.children["place-address"].textContent = place.formatted_address || '';

      infowindow.setContent(infowindowContent);
      infowindow.open(map, marker);
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
      <div id="pac-card">
        {/* Add card content here */}
      </div>
      <input id="pac-input" type="text" placeholder="Enter a location" />
      <input id="use-location-bias" type="checkbox" />
      <label htmlFor="use-location-bias">Use location bias</label>
      <input id="use-strict-bounds" type="checkbox" />
      <label htmlFor="use-strict-bounds">Use strict bounds</label>
      <div id="infowindow-content">
        <span id="place-name"></span><br />
        <span id="place-address"></span>
      </div>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default GoogleMaps;
