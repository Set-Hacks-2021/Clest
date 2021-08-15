
import React from 'react';
import GoogleMapReact from 'google-map-react'
import "../styles/styles.scss";
import Map from '../components/Map' 
import Quest from '../components/quest'
import QuestList from '../components/quest'


  
function MapPage() {
  return (
    <section>
      <div style={{width}}>
      <Map /> 
       <Quest/>
      </div>

       <QuestList />
    </section>

  );
}

export default MapPage;