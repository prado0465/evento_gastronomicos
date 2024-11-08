const fetch = require('node-fetch');


async function geocodeAddress(address) {
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  const response = await fetch(geocodeUrl);
  const data = await response.json();

  if (data.status === 'OK') {
    return data.results[0].geometry.location;
  } else {
    throw new Error('Endereço inválido');
  }
}

module.exports = geocodeAddress;
