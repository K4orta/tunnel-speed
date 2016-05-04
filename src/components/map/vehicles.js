import React from 'react';
import SVGOverlay from 'react-map-gl/dist/overlays/svg.react';

import { COLORS_SHORTNAME as colors } from '../../constants/colors';

class Vehicles extends React.Component {
  _renderVehicle(vehicle, project) {
    const vPos = vehicle.get('stats').get(0).get('position');
    const projected = project([vPos.get('lng'), vPos.get('lat')]);

    return (
      <g key={`${vehicle.get('route')}-${vehicle.get('id')}`}>
        <circle
          r="4"
          cx={projected[0]}
          cy={projected[1]}
          style={{
            fill: colors[vehicle.get('route')],
          }}
        />
      </g>
    );
  }
  _redraw({ project }) {
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
    // console.log(this.props);
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
