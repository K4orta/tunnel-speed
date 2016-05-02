import React from 'react';
import { Polyline } from 'react-leaflet';

export default function (routes, colors) {
  return routes.map(route =>
    route.paths.map(path =>
      (<Polyline
        color={colors[route.title]}
        opacity={0.2}
        weight={8}
        positions={path.points.map(ll => [ll.lat, ll.lng])}
      />)
    )
  );
}
