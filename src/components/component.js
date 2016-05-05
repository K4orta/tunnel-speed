import React from 'react';
import Map from './map/map';

require('./main.scss');

class Component extends React.Component {
  componentDidMount() {
    const SECOND = 1000;
    this.props.fetchVehicles();
    setInterval(() => this.props.fetchVehicles(), SECOND * 10);
  }
  render() {
    if (!this.props) { return null; }
    return (
      <div className="app-container">
        <Map routes={this.props.map} vehicles={this.props.vehicles} />
      </div>
    );
  }
}

Component.propTypes = {
  map: React.PropTypes.array,
  vehicles: React.PropTypes.any,
  fetchVehicles: React.PropTypes.func,
};

export default Component;
