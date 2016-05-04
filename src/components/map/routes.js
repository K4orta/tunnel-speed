import React from 'react';
import SVGOverlay from 'react-map-gl/dist/overlays/svg.react';

const colors = {
  'L-Taraval': 'purple',
  'N-Judah': 'blue',
  'J-Church': 'orange',
  'KT-Ingleside/Third Street': 'red',
  'M-Ocean View': 'green',
};

class RouteMap extends React.Component {
  _formatLineSegment(points, route, index) {
    return (
      <path
        key={`${route.title}-${index}`}
        d={`M${points.join('L ')}`}
        stroke={colors[route.title]}
        strokeWidth={5}
        fill="none"
      />
    );
  }
  _redraw({ project }) {
    const routes = this.props.routes.map(route => {
      const segments = route.paths.map((segment, i) => {
        const projectedPoints = segment.points.map(p => [p.lng, p.lat]).map(project);
        return this._formatLineSegment(projectedPoints, route, i);
      });
      return (
        <g key={route.title}>
          {segments}
        </g>
      );
    });

    return (
      <g>
        {routes}
      </g>
    );
  }
  render() {
    const redraw = this._redraw.bind(this);
    return <SVGOverlay {...this.props.viewport} redraw={redraw} />;
  }
}

RouteMap.propTypes = {
  viewport: React.PropTypes.object,
  routes: React.PropTypes.array,
};

export default RouteMap;
