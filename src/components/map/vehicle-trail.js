import React from 'react';

function strokeSpeed(speed) {
  if (speed < 8) {
    return 'red';
  } else if (speed < 12) {
    return 'orange';
  }
  return 'green';
}

class VehicleTrail extends React.Component {
  render() {
    if (!this.props) return null;
    const positions = this.props.frames
      .toSeq()
      .map(x => x.get('position'));

    const tail = positions
      .map(pos => this.props.project([pos.get('lng'), pos.get('lat')]));

    const paths = [];
    tail.forEach((pos, i) => {
      if (tail.has(i + 1) === false) return;
      const strokeColor = strokeSpeed(this.props.frames.get(i).get('speed'));
      paths.push(
        <path
          key={i}
          d={`M${tail.get(i)}L${tail.get(i + 1)}`}
          style={{
            fill: 'none',
            stroke: strokeColor,
            strokeWidth: 3,
          }}
        />
      );
    });

    return (
      <g>
        {paths}
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
