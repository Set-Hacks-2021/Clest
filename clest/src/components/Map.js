import React from 'react'
import GoogleMapReact from 'google-map-react'
import "../styles/map.scss";

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

const LocationPin = ({ text }) => (
  <div className="pin">
    {/* <Icon icon={locationIcon} className="pin-icon" /> */}
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>


    <p></p>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDJNmdmk9BmJxd6tLolaugUhmo7l5ou_4U' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map;
