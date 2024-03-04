import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IndexContextProvider from './Context/InicioContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IndexContextProvider>
      <App />
    </IndexContextProvider>
);


