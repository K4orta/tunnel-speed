import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
require('./routes.scss');

export default class Routes extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }

    const position = [37.7741, -122.45063];
    const map = (
      <Map center={position} zoom={13}>
        <TileLayer
          url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br />Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );

    return (
      <div className="map-container">
        {map}
      </div>
    );
  }
}
