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

// アプリのパフォーマンスを測定したい場合は、結果を記録する関数
// を渡して結果をログに記録したり（例：reportWebVitals(console.log))
// とするか、アナリティクスのエンドポイントに送信します。
// 詳細はこちら： https://bit.ly/CRA-vitals
reportWebVitals();
