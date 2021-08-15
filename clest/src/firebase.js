import './styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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

export const auth = firebase.auth()
const firestore = firebase.firestore()
export const database = {
    topics: firestore.collection("topics"),
    formatDoc: (doc) => {
        return {...doc.data()}
    }
}

export const storage = firebase.storage()