import React from 'react';
import { Circle } from 'react-leaflet';

export default function (routes, colors) {
  return routes.map(route =>
    route.stops.map(stop =>
      (<Circle
        center={[stop.lat, stop.lng]}
        radius={10} fillColor="white"
        fillOpacity={1}
        color={colors[route.title]}
        opacity={1}
      />)
    )
  );
}
