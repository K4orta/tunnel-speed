import React from 'react';
import haversine from 'haversine';

class VehicleTrail extends React.Component {
  render() {
    const positions = this.props.frames
      .toSeq()
      .map(x => x.get('position'));

    const tail = positions
      .map(pos => this.props.project([pos.get('lng'), pos.get('lat')]));

    if (!this.props) return null;
    return (
      <g>
        <path
          d={`M${tail.join('L')}`}
          style={{
            fill: 'none',
            stroke: 'green',
            strokeWidth: 3,
          }}
        />
      </g>
    );
  }
}

VehicleTrail.propTypes = {
  frames: React.PropTypes.object,
  project: React.PropTypes.func,
};

export default VehicleTrail;
