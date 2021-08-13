import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Button from 'react-bootstrap/Button';
//var voronoi = require('@turf/voronoi');
import voronoi from '@turf/voronoi';
import * as turf from '@turf/turf';

import {Nav, NavItem} from 'react-bootstrap';
import NavBar from '../components/navbar.js'




const firebaseConfig = {
    apiKey: "AIzaSyDfzPF3G7jy5Ha6clqJbIBB-sIXwJuHiw4",
    authDomain: "clest-322818.firebaseapp.com",
    projectId: "clest-322818",
    storageBucket: "clest-322818.appspot.com",
    messagingSenderId: "860346307090",
    appId: "1:860346307090:web:2e6dfb6d96a414abd13ecb",
    measurementId: "G-TH9CPDXJ1X"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();
}

const auth = firebase.auth()
const firestore = firebase.firestore()

function HomePage(){
    return (
        <section className='page'>
            <Landing />
            <NavBar />
        </section>
    );
}


function Landing(){
    return (
        <section className='landing'>
            <h1>Clest</h1>
            <h2>Improve your community, one quest at a time.</h2>
            <Login />
            <Testing />
        </section>
    );
}



function Login(){

    // // var userEmail = document.getElementById("email_field").value;
    // // var userPass = document.getElementById("password_field").value;
  
    // firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
  
    //   window.alert("Error : " + errorMessage);
  
    //   // ...
    // });

    const [user] = useAuthState(auth);


    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        // if user is null, then display login button 
        <div>
            { user ? 
            <Button href='/map'>go to map {user.email}</Button>  // runs if user signed in
            : 
            <Button onClick={signInWithGoogle}>Join with Google.</Button> // runs if user not signed in
            }
        </div>
    );
  
  }

  function Testing()
  {
    var options = {
        bbox: [-70, 40, -60, 60]
      };
      var points = turf.randomPoint(100, options);
      var voronoiPolygons = turf.voronoi(points, options);
      
      return(
          voronoiPolygons
      )
  }






export default HomePage;