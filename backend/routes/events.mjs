import express from 'express';
import fetch from 'node-fetch';  
import Event from '../models/Event.mjs'; 
const router = express.Router();


router.post('/', async (req, res) => {
  const { name, description, address, date } = req.body;

  
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  try {
    const geocodeResponse = await fetch(geocodeUrl);
    const geocodeData = await geocodeResponse.json();

    if (geocodeData.status === 'OK') {
      const location = geocodeData.results[0].geometry.location;

      
      const event = new Event({
        name,
        description,
        location: {
          latitude: location.lat,
          longitude: location.lng
        },
        date
      });

      
      const newEvent = await event.save();
      res.status(201).json(newEvent);  
    } else {
      res.status(400).json({ message: 'Endereço inválido' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao tentar obter coordenadas' });
  }
});

export default router;
