import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteApp from './Routes/RouteApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteApp></RouteApp>
  </React.StrictMode>
);

reportWebVitals();
