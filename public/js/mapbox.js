export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibW9oYW1lZGFtZWVuMTIwIiwiYSI6ImNraWxqcGVtdzBpcTIzMnA5d293eGRlOTIifQ.UUmZ2NJ8_FXGZ-7yHnQuTg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mohamedameen120/ckilw1jrw2azq17qoke8zzld0',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // add popup
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day} : ${loc.description}</p>`)
      .addTo(map);

    // extend map bounds to enclude current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
