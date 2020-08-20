import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { Component } from 'react';
import LeafletMap from '../../Component/LeafletMap/LeafletMap';
import customAxios from '../../customAxios';

class Map extends Component {

  state = {
    map: null,
    allMarkers: [],
    markers: [],
    mapChanged: false,
    isClusterClick: false
  }

  componentDidMount() {
    console.log('DidMount called');
    // customAxios.get('/getdata', {
    //   params:{
    //     boundry: 'test'
    //   }
    // })
    //   .then(res => {
    //     const updatedAllMarkers = [];
    //     console.log(res.data);
    //     for (let key in res.data) {
    //       const latlng = new LatLng(res.data[key].lat, res.data[key].lng);
    //       updatedAllMarkers.push(latlng);
    //     }
        
    //     this.displayMarkers(this.state.map, updatedAllMarkers);
    //     this.setState({ allMarkers: updatedAllMarkers });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  componentDidUpdate(prevProps, prevState){
    console.log('DidUpdate called!');
    if(this.state.mapChanged){
      // this.displayMarkers(this.state.map, this.state.allMarkers);

      customAxios.get('/getdata', {
        params:{
          bounds: this.state.map.getBounds()
        }
      })
        .then(res => {
          const updatedAllMarkers = [];
          console.log(res.data);
          for (let key in res.data) {
            const latlng = new LatLng(res.data[key].lat, res.data[key].lng);
            updatedAllMarkers.push(latlng);
          }
          
          // this.displayMarkers(this.state.map, updatedAllMarkers);
          this.setState({ allMarkers: updatedAllMarkers, mapChanged: false });
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  displayMarkers(map, allMarkers) {
    console.log('Display markers called');
    const markers = allMarkers.filter(m => 
      map.getBounds().contains(m)
      );
      //console.log(`Render ${markers.length} points`);
      this.setState({markers: markers, mapChanged: false});
  }

  onMapLoad = (event) => {
    const updatedMap = event.target;
    console.log('Load map!');
    console.log(updatedMap.getBounds());
    this.setState({map: updatedMap, mapChanged:true});
  }

  clusterClick = (cluster) => {
    this.setState({isClusterClick: true});
  }

  // onViewportChange = (event) => {
  //   this.setState({mapMoved:true});
  // }

  onMoveEnd = (event) => {
    console.log(event.target);
    this.setState({map: event.target ,mapChanged:true});
  }

  render() {
    return (
      <LeafletMap
        markers={this.state.allMarkers}
        clusterClick={cluster => this.clusterClick(cluster)}
        onMapLoad={event => this.onMapLoad(event)}
        // onViewportChange={event => this.onViewportChange(event)}
        onMoveEnd={event => this.onMoveEnd(event)} 
        />
    )
  }
}

export default Map;