import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBlBqt_SDlYJLlCanwf1QYR7_5QQHwEL5I",
  authDomain: "pro-organiser1.firebaseapp.com",
  databaseURL: "https://pro-organiser1.firebaseio.com",
  projectId: "pro-organiser1",
  storageBucket: "pro-organiser1.appspot.com",
  messagingSenderId: "538117235337",
  appId: "1:538117235337:web:5e97d8be91e2130ee41c58",
};
let fire = firebase.initializeApp(firebaseConfig);
export default fire;
