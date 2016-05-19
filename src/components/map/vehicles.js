import React from 'react';
import SVGOverlay from 'react-map-gl/dist/overlays/svg.react';
import Vehicle from './vehicle';
import VehicleTrail from './vehicle-trail';

class Vehicles extends React.Component {
  _redraw({ project }) {
    const vehicles = this.props.vehicles
      .map(v => (
        <Vehicle
          data={v}
          project={project}
          key={`${v.get('route')}-${v.get('id')}`}
          onClick={() => this.props.selectVehicle(v)}
        >
          <VehicleTrail frames={v.get('stats')} project={project} />
        </Vehicle>
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
