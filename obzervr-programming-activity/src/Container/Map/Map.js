import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { Component } from 'react';
import LeafletMap from '../../Component/LeafletMap/LeafletMap';
import customAxios from '../../customAxios';

class Map extends Component {

  state = {
    map: null,
    clusters: [],
    mapChanged: false,
    error: false
  }

  componentDidUpdate(){
    console.log('DidUpdate called');
    if(this.state.mapChanged){
      customAxios.get('/getdata', {
        params:{
          bounds: this.state.map.getBounds(),
          zoomLevel: this.state.map.getZoom()
        }
      })
        .then(res => {
          console.log(res);
          this.setState({ clusters: res.data.clusters, mapChanged: false });
        })
        .catch(err => {
          this.setState({error: true});
        })
    }
  }

  onMapLoad = (event) => {
    const updatedMap = event.target;
    console.log('Load map!');
    this.setState({map: updatedMap, mapChanged:true});
  }


  onMoveEnd = (event) => {
    const updatedMap = event.target;
    console.log('On Move End Called');
    this.setState({map: updatedMap, mapChanged:true});
  }

  render() {
    return (
      !this.state.error ? <LeafletMap
        clusters={this.state.clusters}
        zoomLevel={this.state.zoomLevel}
        onMapLoad={event => this.onMapLoad(event)}
        onMoveEnd={event => this.onMoveEnd(event)} /> : <span style={{color:'red'}}>Network Error</span>
    )
  }
}

export default Map;