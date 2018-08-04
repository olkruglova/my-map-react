import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Components/Map.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Map />, div);
  ReactDOM.unmountComponentAtNode(div);
});
