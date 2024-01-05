// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPfTwTINOUNQlUfB5AgRQDt9nEUAFxCus",
  authDomain: "bloggingwebapp-b701d.firebaseapp.com",
  projectId: "bloggingwebapp-b701d",
  storageBucket: "bloggingwebapp-b701d.appspot.com",
  messagingSenderId: "141258168383",
  appId: "1:141258168383:web:016d36992fdd07bd74808a",
  measurementId: "G-K80QCMCGCK",
};

const fireBaseApp = initializeApp(firebaseConfig);
module.exports = fireBaseApp;
