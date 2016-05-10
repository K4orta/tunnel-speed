import React from 'react';
import SVGOverlay from 'react-map-gl/dist/overlays/svg.react';
import Vehicle from './vehicle';
import kmHrToMph from '../../utils/kmhr-to-mph';

import { COLORS_SHORTNAME as colors } from '../../constants/colors';

class Vehicles extends React.Component {
  _renderVehicle(vehicle, project) {
    const numSteps = vehicle.get('stats').size;
    const positions = vehicle.get('stats').map((step, i) => {
      const vp = step.get('position');
      const projectedPosition = project([vp.get('lng'), vp.get('lat')]);
      const props = {
        lng: projectedPosition[0],
        lat: projectedPosition[1],
        // Size of the triangle, if it is the last in the list it is larger.
        scale: i === numSteps - 1 ? 0.7 : 0.4,
        color: colors[vehicle.get('route')],
        heading: step.get('heading'),
      };
      return (<Vehicle
        {...props}
        key={`${vehicle.get('id')}-${i}`}
        onClick={() => {
          const avgKmHr =
            vehicle.get('stats').reduce((r, v) => r + v.get('speedKmHr'), 0)
            / vehicle.get('stats').size;
          const mph = kmHrToMph(avgKmHr);
          this.props.selectVehicle(vehicle);
          console.log(`MPH: ${mph}`);
        }}
      />);
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
  selectVehicle: React.PropTypes.func,
};

export default Vehicles;
