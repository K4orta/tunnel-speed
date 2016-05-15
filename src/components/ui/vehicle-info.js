import React from 'react';

require('./vehicle-info.scss');

class VehicleInfo extends React.Component {
  render() {
    const sv = this.props.ui.get('selectedVehicle');
    if (!this.props || !sv) { return null; }
    console.log(sv.toJS());
    return (
      <div className="vehicle-info">
        <div>{sv.get('id')}</div>
        <div>{sv.get('route')}</div>
        <div>{sv.get('stats').size}</div>
      </div>
    );
  }
}

VehicleInfo.propTypes = {
  ui: React.PropTypes.object,
};

export default VehicleInfo;
