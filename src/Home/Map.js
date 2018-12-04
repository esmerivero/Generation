import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Data from '../Data/store_directory';
import Autocomplete from 'react-google-autocomplete';


const Marker = () => (
    <div style={{color:"#d60093"}}> 
        <i className="fas fa-suitcase"></i>
    </div>);

const UserMarker = () => (
  <div style={{color:"blue"}}> 
      <i className="fas fa-suitcase"></i>
  </div>);

// const FilterMarkers = () => (
//   <div style={{color:"red"}}> 
//       <i className="fas fa-suitcase"></i>
//   </div>
// );

const getFilter = (lat1,lon1,lat2,lon2) =>{
 const rad = function(x) {return x*Math.PI/180;}
 const Radio = 6378.137; //Radio de la tierra en km
 const distanceLat = rad( lat2 - lat1 );
 const distanceLong = rad( lon2 - lon1 );
 const calculation = Math.sin(distanceLat/2) * Math.sin(distanceLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(distanceLong/2) * Math.sin(distanceLong/2);
 const result = 2 * Math.atan2(Math.sqrt(calculation), Math.sqrt(1-calculation));
 const convert = Radio * result;

return convert.toFixed(2); //Retorna tres decimales
}

const getMarkers = (props) => {

  const dataFiltered = Data.filter((item) => {
    if((getFilter(props.coords.lat, props.coords.lng, item.Coordinates.lat, item.Coordinates.lng)) <= 5 ){
      return true
    }
    return false;
  }); 

  const markerArray = dataFiltered.map((element,i) => {
      return (<Marker lat={element.Coordinates.lat} lng={element.Coordinates.lng} text={element.Name} key={i}/>)
  })
  markerArray.push(<UserMarker lat= {props.coords.lat} lng={props.coords.lng} />)
  return markerArray;
}
class Map extends Component {
  static defaultProps = {
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
      <Autocomplete
        style={{width: '90%'}}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        types={['(regions)']}
        componentRestrictions={{country: "mx"}}/>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBYKb22rHjTAooeyz_Mrfg0ku35OhDMFyw' }}
          defaultCenter={this.props.coords}
          center={this.props.coords}
          defaultZoom={this.props.zoom} 
          >

          {getMarkers(this.props)}
          
        </GoogleMapReact>
      </div>

    );
  }
}
 
export default Map;