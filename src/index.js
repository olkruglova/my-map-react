import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Map from './Components/Map.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Map />, document.getElementById('map'));
registerServiceWorker();
