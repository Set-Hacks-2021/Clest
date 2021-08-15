import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import "../styles/map.scss";


import collect from '@turf/collect';
import voronoi from '@turf/voronoi';
import buffer from '@turf/buffer';
import turf from '@turf/turf';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import data from './small.json';

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





function Map(){

  //  async function generateMarkers(){
  
  //   const cities = ['beijing','berlin']

  //   const result = cities.map(async(city) => { // needs to be async since we are using async values to define jsx objects
  //     const data = await getDataFromCity(city);
  //     return (
  //       <Marker position={data['city']['geo']}>
  //         <Popup>
  //           I am {data['city']}
  //         </Popup>
  //       </Marker>
  //     );
    
  //   })

  //   return Promise.all(result);

   
    
   

     
      
    

  
  


  

  // var file = new File([""], "'./Data.txt'");
  // console.log(file);
  // var reader = new FileReader();
  // reader.onload = function(e) {
  //   // The file's text will be printed here
  //   console.log(e.target.result)
  // };


  // readTextFile('./Data.txt')
  // console.log(reader.readAsText(file));



  const position = [51.505, -0.09]


  


//   onChange = e => {
//     let files = e.target.files;
//     console.log(files);
//     let reader = new FileReader();
//     reader.onload = r => {
//          console.log(r.target.result);
//      };
//     reader.readAsDataURL(files[0]);
    
// render() {
//   return (
//       <div onSubmit={this.onFormSubmit}>
//         <h1>Upload File Here</h1>
//         <input type="file" name="file" onChange={e => this.onChange(e)} />
//       </div>


    
// }


  function Loading(){
    return(
      <div>
        {data.map((item, index) =>{
          // console.log(item)
          return(
            
            <Marker position={JSON.parse(item.coords)} key={index}>
            <Popup>
              I am at {item.city}, with {item.api}
            </Popup>
          </Marker>        
          )
        })}
      </div>
    )

  }

  return (
    
      <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true} >
        <TileLayer
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <Loading />
    </MapContainer>
  )
} 


// function Map(){
//   const [bad, setBad] = React.useState([1,2,3]);

//   g++;
//   console.log(g);
//   console.log(bad);
//   return (
//     <div>
//       <button onPress={() => (setBad([5,3,6]))}>click me</button>
//       {bad.map((item,index) => (<h1 key={index}>{item}</h1>))}
//     </div>
//   );
// }

export default Map;
