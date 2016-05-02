import React from 'react';
import { Map, TileLayer, Polyline, Circle } from 'react-leaflet';
// import Routes from './routes';
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
    const lines = this.props.routes.map(route =>
      route.paths.map(path =>
        <Polyline
          color={colors[route.title]}
          opacity={1}
          weight={8}
          positions={path.points.map(ll => [ll.lat, ll.lng])}
        />
      )
    );

    const stops = this.props.routes.map(route =>
      route.stops.map(stop =>
        (<Circle
          center={[stop.lat, stop.lng]}
          radius={10} fillColor="white"
          fillOpacity={1}
          color={colors[route.title]}
          opacity={1}
        />)
      )
    );

    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
        />
        {lines}
        {stops}
      </Map>
    );
  }
}

TileMap.propTypes = {
  routes: React.PropTypes.array,
  map: React.PropTypes.func,
};

export default TileMap;
