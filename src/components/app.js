import React from 'react';
import Map from './map/map';

require('./main.scss');

class App extends React.Component {
  componentDidMount() {
    const SECOND = 1000;
    this.props.fetchVehicles();
    setInterval(() => this.props.fetchVehicles(), SECOND * 10);
  }
  render() {
    if (!this.props) { return null; }
    return (
      <div className="app-container">
        <Map {...this.props} />
      </div>
    );
  }
}

App.propTypes = {
  map: React.PropTypes.any,
  vehicles: React.PropTypes.any,
  fetchVehicles: React.PropTypes.func,
};

export default App;
