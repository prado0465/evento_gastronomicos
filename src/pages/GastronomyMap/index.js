import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';


const Marker = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'red',
    padding: '10px',
    borderRadius: '50%',
    textAlign: 'center',
  }}>
    {text}
  </div>
);

const Map = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    
    axios.get('/api/events') 
      .then(response => setEvents(response.data))
      .catch(error => console.log('Erro ao carregar eventos', error));
  }, []);

  const defaultProps = {
    center: {
      lat: -23.55052,  
      lng: -46.633308
    },
    zoom: 12
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {events.map(event => (
          <Marker
            key={event.id}
            id={event.id}
            lat={event.lat}
            lng={event.lng}
            text={event.name} 
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
