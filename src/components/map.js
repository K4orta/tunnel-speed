import React from 'react';
import L from 'leaflet';

require('./map.scss');

export default class Map extends React.Component {
  componentDidMount() {
    let map = L.map('map', {zoomControl: false});

    L.tileLayer('http://{s}.tiles.mapbox.com/v3/esywong.knhb1ae0/{z}/{x}/{y}.png', {
      maxZoom: 18
    }).addTo(map);
    new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

    map.setView([37.7816579, -122.4045532], 13);

    let {initMap} = this.props;
    initMap(map);
  }
  render() {
    return <div id="map"></div>;
  }
};
