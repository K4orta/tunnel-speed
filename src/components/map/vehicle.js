import React from 'react';
import { COLORS_SHORTNAME as colors } from '../../constants/colors';

class Vehicle extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    const project = this.props.project;
    const data = this.props.data;
    const v = data.get('stats').get(0);
    const latlng = project([v.get('position').get('lng'), v.get('position').get('lat')]);

    return (
      <g
        transform={`translate(${latlng[0]},${latlng[1]})`}
      >
        <polygon
          points="-7,7 0,-7 7,7"
          transform={`rotate(${v.get('heading')})`}
          onClick={this.props.onClick}
          style={{
            fill: colors[data.get('route')],
            pointerEvents: 'all',
            cursor: 'pointer',
          }}
        />
      </g>
    );
  }
}

Vehicle.propTypes = {
  onClick: React.PropTypes.func,
  data: React.PropTypes.object,
  project: React.PropTypes.func,
};

export default Vehicle;
