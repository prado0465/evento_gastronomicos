import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Eventos() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  
  const coordenadasEvento = { lat: -23.55052, lng: -46.633308 }; 

  return (
    <div>
      <h1>Eventos de Gastronomia</h1>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "400px" }}
          center={coordenadasEvento}
          zoom={13}
        >
          <Marker position={coordenadasEvento} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Eventos;
