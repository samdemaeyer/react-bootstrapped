import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Favicon from 'react-favicon';

ReactDOM.render(
  <div>
    <Favicon url='/favicons/favicon-16x16.png'/>
    <App />
  </div>, document.getElementById('root')
);

registerServiceWorker();
