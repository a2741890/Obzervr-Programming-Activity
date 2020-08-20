import 'leaflet/dist/leaflet.css';
import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'react-leaflet-markercluster/dist/styles.min.css';
import Cluster from '../Clusters/Cluster';
import './LeafletMap.css';

const leafletMap = (props) => {

  const { clusters, onMapLoad, onMoveEnd, zoomLevel } = props;
  const mapPositions = [40.7501106262207, -73.993896484375];

  const clusterGroup = clusters.map((c, index) => {
    return (
      <Cluster
        data-testid="Cluster"
        key={c.id + '-' + index}
        latLng={c.geometry.coordinates}
        properties={c.properties} />
    )
  });
  return (
    <Map
      data-testid="mainMap"
      className="map"
      preferCanvas={true}
      center={[mapPositions[0], mapPositions[1]]}
      zoom={15}
      whenReady={onMapLoad}
      onMoveEnd={onMoveEnd}
    >
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {clusterGroup}
    </Map>
  )
}

export default leafletMap;
