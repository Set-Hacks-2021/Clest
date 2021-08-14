import React, { useEffect } from 'react'
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


const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}


async function getDataFromCity(city){
  const key = 'e92a140d7bcfad9ccb8bd5fb9d3a1f532bcb88e8';
  const response = fetch(`https://api.waqi.info/feed/${city}/?token=${key}`, {
    method: 'GET'
  })

  const data = (await (await response).json())['data']
  return data;
}

function MarkersGen(x,y){
  return (
    <Marker position={[x,y]}>
      <Popup>
        I am henry xiu          
        </Popup>
      </Marker>
  );
}

function Map(){

  function generateMarkers(){
  
    // const result = cities.map((city) => {
    //   const data = await getDataFromCity(city);
    //   return (
    //     <Marker position={data['city']['geo']}>
    //       <Popup>
    //         I am {data['city']}
    //       </Popup>
    //     </Marker>
    //   );
    
    // })

    // console.log(result)
    // return result;

   
    
   

      // for(let i = 0; i <90; i++) {
        // var x =  Math.floor(Math.random() * 50) + 51;
        // var y =  Math.floor(Math.random() * 6) + 1;
        
        
      // }
        // im going to go eat, then turn off liveshare when u guys are doneokok
      
    

  }
  
  

  
  
  // generateMarkers(['beijing','ottawa','toronto']);

  var [jsx, setJsx] = React.useState(generateMarkers()); //getter,setter

  useEffect(() => {
    console.log(jsx)
  }, []);


  // const array = [<h1>wadaowk</h1>,<h1>sucj</h1>];


  // setJsx(generateMarkers(['toronto']));

  return (
    <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkersGen x ={51} y = {13}/>
      {/* {jsx != null ? jsx : <h1>loading...</h1>}
      {jsx} */}
    </MapContainer>
  );
}

export default Map;
