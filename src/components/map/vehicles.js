import React from 'react';
import { Circle } from 'react-leaflet';


const colors = {
  L: 'purple',
  N: 'blue',
  J: 'orange',
  KT: 'red',
  M: 'green',
};

export default function (vehicles) {
  const out = [];
  vehicles.forEach(v => {
    v.stats.forEach((step, i) => {
      let size = i === (v.stats.length - 1) ? 30 : 10;
      const cir = (
        <Circle
          key={`${v.id}-${i}`}
          center={[step.position.lat, step.position.lng]}
          radius={size}
          fillColor={colors[v.route]}
          fillOpacity={1}
          stroke={false}
        />
      );
      out.push(cir);
    });
  });
  return out;
}
