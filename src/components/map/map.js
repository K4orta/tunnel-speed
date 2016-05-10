import React from 'react';
import MapGL from 'react-map-gl';
import RouteMap from './routes';
import Vehicles from './vehicles';

class TileMap extends React.Component {
  constructor() {
    super();
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 37.7736092599127,
        longitude: -122.42312591099463,
        zoom: 12.011557070552028,
        startDragLngLat: null,
        isDragging: false,
        // Temp key here so this works on gh-pages
        mapboxApiAccessToken: 'pk.eyJ1IjoiZXN5d29uZyIsImEiOiJjaW5yeDJ0M2ExMG8wdHRtMzVwdmR6Z3JlIn0.qYHKtkiks0M8hSKbtlW_Ag',
      },
    };
  }
  _onChangeViewport(vp) {
    this.setState({ viewport: Object.assign({}, this.state.viewport, vp) });
    return true;
  }

  render() {
    if (!this.props) {
      return null;
    }
    const chagevp = this._onChangeViewport.bind(this);
    return (
      <MapGL {...this.state.viewport} onChangeViewport={chagevp}>
        <RouteMap viewport={this.state.viewport} routes={this.props.map} />
        <Vehicles
          viewport={this.state.viewport}
          vehicles={this.props.vehicles}
          selectVehicle={this.props.selectVehicle}
        />
      </MapGL>
    );
  }
}

TileMap.propTypes = {
  onChangeViewport: React.PropTypes.func,
  children: React.PropTypes.any,
  vehicles: React.PropTypes.any,
  map: React.PropTypes.any,
  selectVehicle: React.PropTypes.any,
};

export default TileMap;
