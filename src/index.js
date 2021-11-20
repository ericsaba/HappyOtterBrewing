import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import Client from 'shopify-buy';
Amplify.configure(config);

const client = Client.buildClient({    storefrontAccessToken: 'c8211bcc87339f7539eecfef914310e3',    domain: 'happy-otter-brewing.myshopify.com'});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
