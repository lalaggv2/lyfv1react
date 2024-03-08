import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InicioContextProvider from './Context/InicioContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <InicioContextProvider>
      <App />
    </InicioContextProvider>
);


