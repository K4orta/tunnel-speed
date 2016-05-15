import React from 'react';
import VehicleInfo from './vehicle-info';

require('./ui-layer.scss');

class UILayer extends React.Component {
  render() {
    if (!this.props) { return null; }
    return (
      <div className="ui-layer">
        <VehicleInfo {...this.props} />
      </div>
    );
  }
}

export default UILayer;
