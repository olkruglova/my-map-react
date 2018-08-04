import React, { Component } from 'react';
import {
  withGoogleMap, 
  GoogleMap,
  Marker
} from 'react-google-maps';

const mapStyles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

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
        options={mapOptions}
        onClick={this.onMapClicked}
      >

      <Marker
          title={'Park Cytadela'}
          name={'SoMA'}
          position={{lat: 52.42167420000001, lng: 16.936194}} />
        <Marker
          title={'Cathedral of Poznan'}
          name={'SoMA'}
          position={{lat: 52.4115064, lng: 16.948639800000024}} />
        <Marker
          title={'Rusalka Lake'}
          name={'SoMA'}
          position={{lat: 52.4265609, lng: 16.87878230000001}} />
        <Marker
          title={'Chocolate Museum'}
          name={'SoMA'}
          position={{lat: 52.4064838, lng: 16.932899799999973}} />
        <Marker
          title={'Gate of Poznan'}
          name={'SoMA'}
          position={{lat: 52.412412, lng: 16.951546000000008}} />


        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        

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
