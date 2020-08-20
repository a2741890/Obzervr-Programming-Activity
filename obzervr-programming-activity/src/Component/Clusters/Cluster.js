import React from 'react';
import { Marker } from 'react-leaflet';
import { divIcon } from 'leaflet';
import L from 'leaflet';
import './Cluster.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const clusters = (props) => {

  const { latLng, properties, clusterClicked, zoomLevel } = props;

  const position = L.latLng(latLng[1], latLng[0]);

  if (!properties.cluster) return <Marker data-testid="defaultMarker" position={position} />;

  const count = properties.point_count;
  const size =
    count < 100 ? 'small' :
      count < 1000 ? 'medium' : 'large';

  const customIcon = divIcon({
    html: `<div><span>${properties.point_count_abbreviated}</span></div>`,
    className: `marker-cluster marker-cluster-${size}`,
    iconSize: L.point(40, 40)
  });

  return (
    <Marker
      data-testid="customMarker"
      position={position}
      icon={customIcon}
      onClick={clusterClicked} />);

}

export default clusters;
