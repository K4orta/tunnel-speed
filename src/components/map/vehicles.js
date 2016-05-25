import React from 'react';
import SVGOverlay from 'react-map-gl/dist/overlays/svg.react';
import Vehicle from './vehicle';
import VehicleTrail from './vehicle-trail';

class Vehicles extends React.Component {
  _redraw({ project }) {
    const vehicles = [];
    const trails = [];

    this.props.vehicles
      .forEach(v => {
        const id = `${v.get('route')}-${v.get('id')}`;
        vehicles.push(
          <Vehicle
            data={v}
            project={project}
            key={id}
            onClick={() => this.props.selectVehicle(v)}
          />
        );
        trails.push(
          <VehicleTrail
            data={v}
            frames={v.get('stats')}
            project={project}
            key={id}
          />
        );
      });

    return (
      <g>
        <g className="trail-layer">
          {trails}
        </g>
        <g className="vehicle-layer">
          {vehicles}
        </g>
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
