import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrap entire project in BrowserRouter component to use routing  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// measure performance of app byy passing a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Reference: https://bit.ly/CRA-vitals
reportWebVitals();
