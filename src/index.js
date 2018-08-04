import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Map from './Components/Map.js';
import Sidebar from './Components/Sidebar.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Map />, document.getElementById('map'));
ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
registerServiceWorker();
