import React from 'react'
import GoogleMapReact from 'google-map-react'
import "../styles/map.scss";

import collect from '@turf/collect';
import voronoi from '@turf/voronoi';
import buffer from '@turf/buffer';
import turf from '@turf/turf';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// var drawingManager = new google.maps.drawing.DrawingManager();
// drawingManager.setMap(map);

// var p = turf.point(-74, 40);
// var bbox = turf.bbox(p)
// var bboxPolygon = turf.bboxPolygon(bbox);

fetchAQIdata();

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}


async function fetchAQIdata(){
  const key = 'e92a140d7bcfad9ccb8bd5fb9d3a1f532bcb88e8';

  async function getDataFromCity(city){
    const response = fetch(`https://api.waqi.info/feed/${city}/?token=${key}`, {
      method: 'GET'
    })

    return (await response).json()
  }
  
  console.log('i ran')
  console.log(await getDataFromCity('shanghai'));
}

function Map(){
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
