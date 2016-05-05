import React from 'react';

class Vehicle extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    return (
      <g
        transform={`translate(${this.props.lng},${this.props.lat}) scale(${this.props.scale})`}
      >
        <polygon
          points="-10,10 0,-10 10,10"
          transform={`rotate(${this.props.heading})`}
          onClick={this.props.onClick}
          style={{
            fill: this.props.color,
            pointerEvents: 'all',
            cursor: 'pointer',
          }}
        />
      </g>
    );
  }
}

Vehicle.propTypes = {
  id: React.PropTypes.string,
  color: React.PropTypes.string,
  lat: React.PropTypes.number,
  lng: React.PropTypes.number,
  heading: React.PropTypes.number,
  scale: React.PropTypes.number,
  onClick: React.PropTypes.func,
};

export default Vehicle;
