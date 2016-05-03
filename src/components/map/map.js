import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import routes from './routes';
import renderStops from './stops';
// import { fetchVehicles } from '../../actions/vehicle-actions';

require('./routes.scss');

const colors = {
  'L-Taraval': 'purple',
  'N-Judah': 'blue',
  'J-Church': 'orange',
  'KT-Ingleside/Third Street': 'red',
  'M-Ocean View': 'green',
};

class TileMap extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }

    const position = [37.7741, -122.45063];
    const lines = routes(this.props.routes, colors);
    const stops = renderStops(this.props.routes, colors);


    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
        />
        {lines}
        {stops}
        {this.props.children}
      </Map>
    );
  }
}

TileMap.propTypes = {
  routes: React.PropTypes.array,
  map: React.PropTypes.func,
  vehicles: React.PropTypes.array,
  children: React.PropTypes.array,
};

export default TileMap;
