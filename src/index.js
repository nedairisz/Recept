import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';  
import App from './App';
import { TablazatProvider } from './TablazatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TablazatProvider>
      <App />
    </TablazatProvider>
  </React.StrictMode>
);