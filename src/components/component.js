import React from 'react';
import Map from './map/map';

require('./main.scss');

class Component extends React.Component {
  componentDidMount() {
    this.props.fetchVehicles();
  }
  render() {
    if (!this.props) { return null; }
    return (
      <div className="app-container">
        <Map routes={this.props.map} />
      </div>
    );
  }
}

Component.propTypes = {
  map: React.PropTypes.array,
  vehicles: React.PropTypes.array,
  fetchVehicles: React.PropTypes.func,
};

export default Component;
