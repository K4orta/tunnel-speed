import React from 'react';
import SVGOverlay from 'react-map-gl/dist/overlays/svg.react';
import Vehicle from './vehicle';
import kmHrToMph from '../../utils/kmhr-to-mph';

class Vehicles extends React.Component {
  _redraw({ project }) {
    // Filter out trailing vehicles.
    const vehicles = this.props.vehicles.toSeq()
      .filter(v => v.get('leadingVehicleId') === '')
      .map(v => (
        <Vehicle data={v} project={project} key={`${v.get('route')}-${v.get('id')}`} />
      ));
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
