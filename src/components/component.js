import React from 'react';
import Map from './map';

require('./main.scss');

export default class Component extends React.Component {
  render() {
    return (
        <div>
          <Map {...this.props} />
        </div>
    );
  }
}
