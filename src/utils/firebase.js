// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDytx6SwrOkeOlvhwmcAVspNLPZ19afVm8",
  authDomain: "football-stats-2dc3b.firebaseapp.com",
  projectId: "football-stats-2dc3b",
  storageBucket: "football-stats-2dc3b.appspot.com",
  messagingSenderId: "1052297820604",
  appId: "1:1052297820604:web:0f10655d1d3a317ebbd3b9",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
