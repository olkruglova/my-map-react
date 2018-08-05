import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import markers from './DefaultMarkers';
import mapStyles from './MapStyles.js';


class Map extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: {}
      })
    }
  };

   render() {
    const mapOptions = {
      styles: mapStyles
    };
    
    const GMap = withGoogleMap(props => (
    <div className={mapStyles.mapWrapper}>
      <GoogleMap
        defaultCenter = {{
          lat: 52.406374,
          lng: 16.925168100000064
        }}
        defaultZoom = { 13 }
        defaultStyle = { mapStyles }
        options={ mapOptions }
        onClick={ this.onMapClicked }
        marker={markers}
      >

      <Marker
        title={ markers.title }
        name={ markers.name }
        position={ markers.position }
        onClick={this.onMarkerClick}
        >
      
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
          
      </Marker>

      </GoogleMap>
    </div>
   ));
   return(
      <div>
        <GMap
          containerElement={ <div style={{ height: `100vh`, width: '65%', right: '0', float: 'right'}} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};




export default Map;
