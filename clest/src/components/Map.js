import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'

import '../styles/map.scss';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import henry from '../assets/canada.json';


import L from 'leaflet';


function GetIcon(_iconUrl,_iconSize)
{
  return L.icon({
    iconUrl: [_iconUrl],
    iconSize: [_iconSize]
  })
}

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



  // const position = [51.505, -0.09]


  


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
        {henry.map(item =>{
        var x = ' '
        if(item.aqi<= 50)
        {
          x = 'https://cdn.discordapp.com/attachments/875569873131036682/876356592755429436/color.png'
        }
        else if(item.aqi<=100)
        {
          x = 'https://cdn.discordapp.com/attachments/875569873131036682/876356467068928050/color.png '
        }
       else if(item.aqi<=150)
       {
         x = 'https://cdn.discordapp.com/attachments/875569873131036682/876356285761736704/color.png'
       }
       else if(item.aqi<=200)
       {
          x = 'https://cdn.discordapp.com/attachments/875569873131036682/876356183588474900/color.png'
       }
       else if(item.aqi<=300)
       {
        x = 'https://cdn.discordapp.com/attachments/875569873131036682/876356041217015858/color.png'
       }
       else if(item.aqi<=500)
       {
        x = 'https://cdn.discordapp.com/attachments/875569873131036682/876355416253169695/color.png'
       }
        if(JSON.parse(item.coords)!= null)
        {
          if(JSON.parse(item.coords)[0] != null && JSON.parse(item.coords)[1] != null && item.city != null && item.aqi != null)
          {
            console.log(JSON.parse(item.coords));
            return(
              <Marker position={JSON.parse(item.coords)} icon = {GetIcon(x,45)}>
                <Popup>
                  {item.city} ||| Air Quality Index: {item.aqi}
                </Popup>
              </Marker>        
            )
          }
        }
        })}
      </div>
    )

  }
  
  return (
    <MapContainer  center= {[50.649787,-102.072945]} zoom={8} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Loading />
  </MapContainer>
  )
}



export default Map;