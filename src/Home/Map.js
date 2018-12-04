import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (<div>{text}</div>);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
        lat: 19.43,
        lng: -99.13
    },
    zoom: 11
    
  };

  

 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBYKb22rHjTAooeyz_Mrfg0ku35OhDMFyw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} 
          >
          
          <Marker
          lat={19.5418}
          lng={-99.23292} 
          text={"Red Barn Stores"}
          body={{color:"blue"}}
          
          />

        </GoogleMapReact>
      </div>

    );
  }
}
 
export default SimpleMap;