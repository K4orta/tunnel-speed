import React from 'react';

export default function (spec) {
  return (
    <g
      key={spec.id}
      transform={`translate(${spec.lng},${spec.lat}) scale(${spec.scale})`}
    >
      <polygon
        points="-10,10 0,-10 10,10"
        transform={`rotate(${spec.heading})`}
        style={{
          fill: spec.color,
        }}
      />
    </g>
  );
}
