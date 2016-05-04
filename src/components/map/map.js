import React from 'react';
import MapGL from 'react-map-gl';
import SVGOverlay from 'react-map-gl/dist/overlays/svg.react';

require('./routes.scss');

const colors = {
  'L-Taraval': 'purple',
  'N-Judah': 'blue',
  'J-Church': 'orange',
  'KT-Ingleside/Third Street': 'red',
  'M-Ocean View': 'green',
};

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
        mapboxApiAccessToken: 'pk.eyJ1IjoiZXN5d29uZyIsImEiOiJjaW5yeDJ0M2ExMG8wdHRtMzVwdmR6Z3JlIn0.qYHKtkiks0M8hSKbtlW_Ag',
      },
    };
  }
  _onChangeViewport(vp) {
    this.setState({ viewport: Object.assign({}, this.state.viewport, vp) });
    return true;
  }
  _redraw({ project }) {
    const lines = this.props.routes.map(route => {
      const segments = route.paths.map((segment, i) => {
        const points = segment.points.map(p => [p.lng, p.lat]).map(project);
        return (
          <path
            key={`${route.title}-${i}`}
            d={`M${points.join('L ')}`}
            stroke={colors[route.title]}
            strokeWidth={3}
            fill="none"
          />
        );
      });
      return (
        <g key={route.title}>
          {segments}
        </g>
      );
    });
    return (
      <g>
        {lines}
      </g>
    );
  }
  render() {
    if (!this.props) {
      return null;
    }

    const chagevp = this._onChangeViewport.bind(this);
    const redraw = this._redraw.bind(this);
    return (
      <MapGL {...this.state.viewport} onChangeViewport={chagevp}>
        <SVGOverlay {...this.state.viewport} redraw={redraw} />
        {this.props.children}
      </MapGL>
    );
  }
}

TileMap.propTypes = {
  onChangeViewport: React.PropTypes.func,
  children: React.PropTypes.any,
  routes: React.PropTypes.array,
};

export default TileMap;
