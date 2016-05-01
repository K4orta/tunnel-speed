import React from 'react';
import Routes from './map/routes';
require('./main.scss');

class Component extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    return (
        <div className="app-container">
          <Routes />
        </div>
    );
  }
}

export default Component;
