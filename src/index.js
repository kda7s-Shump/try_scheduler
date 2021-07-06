import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/index.css';
import Header from './components/Header';
import Side from './components/Side';
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="container">
      <div className="row">
        <Side />
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
