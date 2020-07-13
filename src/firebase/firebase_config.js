import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBweBRgqGjqg09xLUq7-lYBxMf4BOddZDo",
    authDomain: "social-media-app-440cb.firebaseapp.com",
    databaseURL: "https://social-media-app-440cb.firebaseio.com",
    projectId: "social-media-app-440cb",
    storageBucket: "social-media-app-440cb.appspot.com",
    messagingSenderId: "473930392872",
    appId: "1:473930392872:web:032bbb5e417d6cdbb99c1d",
    measurementId: "G-ZGLL8VHX85"
  };


if (!firebase.apps.length){
   firebase.initializeApp(firebaseConfig)
}

export { firebase }

//firebase.analytics(); -> at some point? 
