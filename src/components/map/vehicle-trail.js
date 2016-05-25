import React from 'react';
import haversine from 'haversine';

class VehicleTrail extends React.Component {
  render() {
    if (!this.props) return null;
    const positions = this.props.frames
      .toSeq()
      .map(x => x.get('position'));

    const tail = positions
      .map(pos => this.props.project([pos.get('lng'), pos.get('lat')]));

    const strokeColor = this.props.data.get('speed') < 7 ? 'red' : 'green';

    return (
      <g>
        <path
          d={`M${tail.join('L')}`}
          style={{
            fill: 'none',
            stroke: strokeColor,
            strokeWidth: 3,
          }}
        />
      </g>
    );
  }
}

VehicleTrail.propTypes = {
  frames: React.PropTypes.object,
  data: React.PropTypes.object,
  project: React.PropTypes.func,
};

export default VehicleTrail;
