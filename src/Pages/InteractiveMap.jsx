// import { Component } from 'react';
// import ReactMapGl, {Marker, Popup} from 'react-map-gl'
// import Geocoder from 'react-map-gl-geocoder'
// import 'mapbox-gl/dist/mapbox-gl.css';

// const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN

// class InteractiveMap extends Component {
// constructor() {
//     super()
//     this.state = {
//     viewport: {
//         width: '100vw',
//         height: '100vh',
//         latitude: 40.78343,
//         longitude: -73.96625,
//         zoom: 11
//     },
//     currMarker: null,
//     markers: [],
//     selectedMarker: null
//     }
//     this.handleViewportChange = this.handleViewportChange.bind(this)
//     this.handleGeocoderViewportChange = this.handleGeocoderViewportChange.bind(this)
//     this.handleResult = this.handleResult.bind(this)
//     this.addMarker = this.addMarker.bind(this)
//     this.handleClose = this.handleClose.bind(this)
//     this.handleMarkerClick = this.handleMarkerClick.bind(this)
//   }
//   mapRef = createRef()

//   handleViewportChange(viewport) {
//     this.setState(prevState => ({
//       viewport: {...prevState.viewport, ...viewport}
//     }))
//   }
//   handleGeocoderViewportChange(viewport) {
//     const geocoderDefaultOverrides = {transitionDuration: 1000}
//     return this.handleViewportChange({
//       ...viewport,
//       ...geocoderDefaultOverrides
//     })
//   }
//   handleResult (result) {
//     this.setState({
//       currMarker: {
//         name: result.result.place_name,
//         latitude: result.result.center[1],
//         longitude: result.result.center[0]
//       }
//     })
//   }
//   addMarker() {
//     const {currMarker} = this.state
//     this.setState(prevState => ({
//       markers: [...prevState.markers, currMarker],
//       currMarker: null
//     }))
//   }
//   handleMarkerClick(marker) {
//     this.setState({
//       selectedMarker: marker
//     })
//   }
//   handleClose = () => {
//     this.setState({
//       selectedMarker: null
//     })
//   }
//   render() {
//     const {viewport, markers, selectedMarker} = this.state
//     return (
//       <ReactMapGl
//         ref={this.mapRef}
//         {...viewport}
//         onViewportChange={viewport => this.setState({viewport})}
//         mapboxApiAccessToken={mapboxToken}
//         mapStyle="mapbox://styles/mapbox/streets-v10"
//       >
//         <button className="add-btn" onClick={this.addMarker}>Add</button>
//         {markers.map((marker, idx) => {
//           return (
//             <Marker
//               key={idx}
//               latitude={marker.latitude}
//               longitude={marker.longitude}
//               onClick={() => this.handleMarkerClick(marker)}
//             >
//               <img src="pin.png" alt="marker"/>
//             </Marker>
//           )
//         })
//         }
//         <Geocoder
//           onSelected={this.handleResult}
//           mapRef={this.mapRef}
//           placeholder="Search here!"
//           onViewportChange={this.handleGeocoderViewportChange}
//           onResult={this.handleResult}
//           mapboxApiAccessToken={mapboxToken}
//           countries="us"
//           position="top-right"
//         />
//         {this.state.selectedMarker &&
//           <Popup
//           mapRef={this.mapRef}
//           latitude={selectedMarker.latitude}
//           longitude={selectedMarker.longitude}
//           closeButton={true}
//           closeOnClick={false}
//           onClose={this.handleClose}
//         >
//             <h3>{selectedMarker.name}</h3>
//         </Popup>
//       }
//       </ReactMapGl>
//     )
//   }
// }

// export default InteractiveMap;