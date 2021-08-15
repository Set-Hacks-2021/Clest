
import React from 'react';
import GoogleMapReact from 'google-map-react'
import "../styles/styles.scss";
import Map from '../components/Map' 

import { Quest, QuestList } from '../components/quest'



  
function MapPage() {
  const styles = {
    section: {
      width: '100%',
      height: '100vh',
      position: 'relative',
    },
    container:{
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100vh',
    }

  }

  return (
    <section style={styles.section}>
        
      <Quest/>
      <div style={styles.container}>
        <Map/> 
        <QuestList style={{width: '30%'}}/>
      </div>

    </section>

  );
}

export default MapPage;