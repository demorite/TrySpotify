import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app.js';
import registerServiceWorker from './registerServiceWorker';
import "./assets/css/main.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
