import React, { Component } from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <span class='text'> Let's search your favourite place in Poznan</span> <br />
        <form id='form'>
          <input id="search" type="text" placeholder="Place name" />
          <input id="search-button" type="button" value="Search" />
        </form>
        <ol id='list-of-places'>
          <li>Park Cytadela</li>
          <li>Cathedral of Poznan</li>
          <li>Rusalka Lake</li>
          <li>Chocolate Museum</li>
          <li>Gate of Poznan</li>
        </ol>
      </div>
    )
  }
}

export default Sidebar;