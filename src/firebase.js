import firebase from 'firebase'
import 'firebase/analytics';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkEIS1Q_SmdFM5kpB6DhgCubk1D_x1D9Q",
    authDomain: "hackerspoint-b6e75.firebaseapp.com",
    projectId: "hackerspoint-b6e75",
    storageBucket: "hackerspoint-b6e75.appspot.com",
    messagingSenderId: "909783611784",
    appId: "1:909783611784:web:fb6062346acb5b70ed223d",
    measurementId: "G-Y9ZLMSPP7S"
  };

  if(typeof window !== 'undefined' && !firebase.apps.length){
      firebase.initializeApp(firebaseConfig);

      if('measurementId' in firebaseConfig) firebase.analytics()
  }

  export default firebase;