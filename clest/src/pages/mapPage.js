
import React from 'react';
import GoogleMapReact from 'google-map-react'
import "../styles/styles.scss";

import MapSection from '../components/Map' 



const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
  
function MapPage() {
  return (
    <MapSection location={location} zoomLevel={17} /> 
  );
}

export default MapPage;