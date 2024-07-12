// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-map-view',
//   templateUrl: './map-view.component.html',
//   styleUrls: ['./map-view.component.scss'],
//   import { latLng, MapOptions, tileLayer, Map, Marker, marker } from 'leaflet';
// })
// export class MapViewComponent implements OnInit {
//   mapOptions: MapOptions;
//   map: Map;
//   markers: Marker[];

//   constructor() {
//     this.mapOptions = {
//       layers: [
//         tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//           maxZoom: 18,
//           attribution:
//             'Map data © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//         }),
//       ],
//       zoom: 12,
//       center: latLng(51.505, -0.09), // Default center coordinates
//     };

//     this.markers = [
//       marker([51.505, -0.09]).bindPopup('Marker 1'),
//       marker([51.51, -0.1]).bindPopup('Marker 2'),
//       // Add more markers as needed
//     ];
//   }

//   onMapReady(map: Map) {
//     this.map = map;
//   }

//   ngOnInit() {}
// }
