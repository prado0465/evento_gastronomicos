import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css'; 
const GastronomyMap = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
     
      const response = await fetch('/api/events'); 
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <MapContainer center={[-23.5505, -46.6333]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {events.map(event => (
        <Marker key={event.id} position={[event.latitude, event.longitude]}>
          <Popup>
            <strong>{event.name}</strong><br />
            <em>{event.venue}</em><br />
            <Link to={`/event/${event.id}`}>Ver Detalhes</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GastronomyMap;
