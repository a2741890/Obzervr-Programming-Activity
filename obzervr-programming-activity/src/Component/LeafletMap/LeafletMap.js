import 'leaflet/dist/leaflet.css';
import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'react-leaflet-markercluster/dist/styles.min.css';
import CircleMarkers from '../CircleＭarkers/CircleMarkers';
import './LeafletMap.css';

const leafletMap = (props) => {

  const { markers, onMapLoad, onMoveEnd, clusterClick } = props;
  const mapPositions = [40.7501106262207, -73.993896484375];


  return (
    <Map
      className="map"
      preferCanvas={true}
      center={[mapPositions[0], mapPositions[1]]}
      zoom={15}
      whenReady={onMapLoad}
      onMoveEnd={onMoveEnd}
    >
      <TileLayer
        url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <MarkerClusterGroup 
        disableClusteringAtZoom={50}
        chunkedLoading={true}
        onClick={cluster => clusterClick(cluster)}
      >
        <CircleMarkers markers={markers}/>
      </MarkerClusterGroup>
    </Map>
  )
}

export default leafletMap;
