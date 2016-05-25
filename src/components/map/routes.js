import React from 'react';
import SVGOverlay from 'react-map-gl/dist/overlays/svg.react';

import colors from '../../constants/colors';
import alphaify from 'alphaify';

const ROUTE_WIDTH = 2;
const ROUTE_OPACITY = 0.20;

class RouteMap extends React.Component {
  _formatLineSegment(points, route, index) {
    return (
      <path
        key={`${route}-${index}`}
        d={`M${points.join('L ')}`}
        stroke={alphaify(colors[route], ROUTE_OPACITY)}
        strokeWidth={ROUTE_WIDTH}
        fill="none"
      />
    );
  }
  _redraw({ project }) {
    const routes = this.props.routes.map(route => {
      const segments = route.get('paths').map((segment, i) => {
        const projectedPoints = segment.get('points')
          .toSeq()
          .map(p => [p.get('lng'), p.get('lat')])
          .map(project);
        return this._formatLineSegment(projectedPoints, route.get('title'), i);
      });
      return (
        <g key={route.get('title')}>
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
  routes: React.PropTypes.any,
};

export default RouteMap;
