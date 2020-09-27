import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr3kVxaqxgLhCHUQhh4x8HG2yRvHPR6hM",
  authDomain: "hello-90860.firebaseapp.com",
  databaseURL: "https://hello-90860.firebaseio.com",
  projectId: "hello-90860",
  storageBucket: "hello-90860.appspot.com",
  messagingSenderId: "248530060899",
  appId: "1:248530060899:web:fae9d803bda63963dfda56",
  measurementId: "G-KE065RGQCZ"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
