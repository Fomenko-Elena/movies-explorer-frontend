import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import WindowSizeContextProvider from './components/WindowSizeContextProvider/WindowSizeContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <WindowSizeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WindowSizeContextProvider>
);
