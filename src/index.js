import React from 'react';
import ReactDOM from 'react-dom';
// sin estas lineas de codigo no se aplicaran los style al jsx ni el bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// se debe poner para que funcionen
import { firebaseConfig } from './config/config';
import firebase from 'firebase';
import AppRoutes from './module/AppRoutes';
import { BrowserRouter as Router } from "react-router-dom";


const fire = firebase.initializeApp(firebaseConfig);

export default fire;

ReactDOM.render(
    <Router>
        <AppRoutes />
    </Router>, document.getElementById('root'));