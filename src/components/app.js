import React from 'react';
import Map from '../containers/map-container';
import UILayer from '../containers/ui-container';

require('./main.scss');

class App extends React.Component {
  render() {
    if (!this.props) { return null; }
    return (
      <div className="app-container">
        <Map {...this.props} />
        <UILayer />
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
