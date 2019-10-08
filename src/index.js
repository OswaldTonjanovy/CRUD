import React from 'react';
import ReactDOM from 'react-dom';
// sin estas lineas de codigo no se aplicaran los style al jsx ni el bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// se debe poner para que funcionen
import App from './App';
import  { firebaseConfig } from './config/config';
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));