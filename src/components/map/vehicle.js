import React from 'react';
import { COLORS_SHORTNAME as colors } from '../../constants/colors';

class Vehicle extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    const project = this.props.project;
    const data = this.props.data;
    const v = data.get('stats').get(data.get('stats').size - 1);
    const latlng = project([v.get('position').get('lng'), v.get('position').get('lat')]);

    return (
      <g

        transform={`translate(${latlng[0]},${latlng[1]}) scale(0.75)`}
      >
        <polygon
          points="-10,10 0,-10 10,10"
          transform={`rotate(${v.get('heading')})`}
          // onClick={this.props.onClick}
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
  // id: React.PropTypes.string,
  // color: React.PropTypes.string,
  // lat: React.PropTypes.number,
  // lng: React.PropTypes.number,
  // heading: React.PropTypes.number,
  // scale: React.PropTypes.number,
  onClick: React.PropTypes.func,
  data: React.PropTypes.object,
  project: React.PropTypes.func,
};

export default Vehicle;
