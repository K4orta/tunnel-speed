import React from 'react';
import MapGL from 'react-map-gl';

require('./routes.scss');

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
        mapboxApiAccessToken: 'pk.eyJ1IjoiZXN5d29uZyIsImEiOiJ1NDRVelhzIn0.xoeElIZkx4qclq5ihnzZvw',
      },
    };
  }
  _onChangeViewport(vp) {
    if (this.props.onChangeViewport) {
      return this.props.onChangeViewport(vp);
    }
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
        {this.props.children}
      </MapGL>
    );
  }
}

TileMap.propTypes = {
  onChangeViewport: React.PropTypes.func,
  children: React.PropTypes.any,
};

export default TileMap;
