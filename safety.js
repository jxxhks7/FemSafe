document.getElementById("sos-button").addEventListener("click", function() {
    alert("SOS Alert Sent! Your emergency contacts and nearby police stations have been notified.");
    // Add functionality to send messages to emergency contacts and the police
    // You can integrate APIs for SMS/email or use GPS data to find nearby places
    
    // Initialize the map with Google Maps API
})
let map;
let service;

function initMap() {
  // Create a map centered on a default location (latitude, longitude)
  const defaultLocation = { lat: 28.6448, lng: 77.216721 };  // Coordinates of New Delhi, India
  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 14,
  });

  // Create a Places Service object
  service = new google.maps.places.PlacesService(map);
}

// Find secure places when the button is clicked
document.getElementById("find-secure-places").addEventListener("click", function() {
  const request = {
    location: map.getCenter(),
    radius: '5000', // Search within 5km radius
    type: ['hospital', 'police', 'shelter'],
  };

  // Perform a nearby search
  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      // Clear previous markers
      results.forEach((place) => {
        const marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          title: place.name,
        });

        // Add an info window to each marker
        const infowindow = new google.maps.InfoWindow({
          content: `<strong>${place.name}</strong><br>${place.vicinity}`,
        });

        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      });
    } else {
      alert("No secure places found in your area.");
    }
  });
});

  