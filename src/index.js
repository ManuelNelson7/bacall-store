import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyCA52tWmAIRLPa4YvPiQtbFa5eB3rkmjVc",
  authDomain: "bacall-store.firebaseapp.com",
  projectId: "bacall-store",
  storageBucket: "bacall-store.appspot.com",
  messagingSenderId: "1017876799013",
  appId: "1:1017876799013:web:b6d4da1aa091b3695869cc"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
