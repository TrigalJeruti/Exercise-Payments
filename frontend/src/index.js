import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AuthContextWrapper from './context/AuthContextWrapper'
import GeneralContextWrapper from './context/GeneralContextWrapper'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GeneralContextWrapper>
      <AuthContextWrapper>
        <App />
      </AuthContextWrapper>
    </GeneralContextWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
