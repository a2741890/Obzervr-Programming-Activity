import React from 'react';
import { CircleMarker } from 'react-leaflet';

const circleMarkers = (props) => {

  const { markers } = props;
  const circleMarkers = markers.map((marker, i) => {
    return (
      <CircleMarker
        key={i}
        radius={1}
        center={[marker.lat, marker.lng]} />
    )
  });

  return circleMarkers;
}

export default circleMarkers;
