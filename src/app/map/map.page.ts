import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { WimDataService } from '../wimdata.service';
import { Icon, icon } from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: L.Map | null;
  list: any[] = [];
  constructor(private wimDataService: WimDataService) { 
    this.map = null; // Initialize the map property
  }

  ngOnInit() {
    this.wimDataService.wimList$.subscribe((data: any[]) => {
      this.list = data;
    });
  }

  ionViewDidEnter() {
    this.leafletMap();
  }
  leafletMap() {
    this.map = L.map('mapId').setView([48.3794, 31.1656], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map!);
    console.log(this.list)
    // Add markers to the map
    for (let item of this.list) {
      console.log(item.lat, item.lng)
      let markerIcon: Icon;
      if (item.status === 'default') {
        markerIcon = icon({
          iconUrl: 'assets/icon/favicon.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });
      } else {
        markerIcon = icon({
          iconUrl: 'assets/icon/favicon.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });
      }
      L.marker([item.lat, item.lng], { icon: markerIcon }).addTo(this.map!).bindPopup(item.name).openPopup();
    }
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }

}
