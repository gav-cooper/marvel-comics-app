import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './Styles/index.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <App />
  </BrowserRouter>
  ,
)

