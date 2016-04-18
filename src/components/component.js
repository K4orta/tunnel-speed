import React from 'react';
require('./main.scss');

class Component extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    return (
        <div>
        </div>
    );
  }
}

export default Component;
