import React from 'react';
import SVGOverlay from 'react-map-gl/dist/overlays/svg.react';
import renderVehicle from './vehicle';

import { COLORS_SHORTNAME as colors } from '../../constants/colors';

class Vehicles extends React.Component {
  _renderVehicle(vehicle, project) {
    const numSteps = vehicle.get('stats').size;
    const positions = vehicle.get('stats').map((step, i) => {
      const vp = step.get('position');
      const projectedPosition = project([vp.get('lng'), vp.get('lat')]);
      // Size of the triangle, if it is the last in the list it is larger.
      const stepSize = i === numSteps - 1 ? 0.7 : 0.4;
      return renderVehicle({
        id: `${vehicle.get('id')}-${i}`,
        lng: projectedPosition[0],
        lat: projectedPosition[1],
        scale: stepSize,
        color: colors[vehicle.get('route')],
        heading: step.get('heading'),
      });
    });

    return (
      <g key={`${vehicle.get('route')}-${vehicle.get('id')}`}>
        {positions}
      </g>
    );
  }
  _redraw({ project }) {
    // Filter out trailing vehicles.
    const vehicles = this.props.vehicles.toSeq()
      .filter(v => v.get('leadingVehicleId') === '')
      .map(v => this._renderVehicle(v, project));
    return (
      <g>
        {vehicles}
      </g>
    );
  }
  render() {
    const redraw = this._redraw.bind(this);
    return (
      <SVGOverlay {...this.props.viewport} redraw={redraw} />
    );
  }
}

Vehicles.propTypes = {
  vehicles: React.PropTypes.any,
  viewport: React.PropTypes.any,
};

export default Vehicles;
