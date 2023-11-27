import { Component, OnInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { WimDataService } from '../wimdata.service';
import { Icon, icon } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, OnDestroy {
  map: L.Map | null;
  list: any[] = [];

  constructor(private wimDataService: WimDataService) {
    this.map = null; // Initialize the map property
  }

  ngOnInit() {
    this.wimDataService.wimList$.subscribe((data: any[]) => {
      this.list = data;
      // Update the map when the data changes
      if (this.map) {
        this.updateMap();
      }
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

    // Add markers to the map
    this.updateMap();
  }

  updateMap() {
    if (this.map) {
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          layer.remove();
        }
      });

      let defaultMarkerIcon: Icon = icon({
        iconUrl: 'assets/icon/defaulticon.png',
        iconSize: [25, 25],
      });

      for (let item of this.list) {
        let markerIcon: Icon = defaultMarkerIcon;

        if (item['Статус роботи'] === 'Normal') {
          markerIcon = icon({
            iconUrl: 'assets/icon/workicon.png',
            iconSize: [25, 25],
          });
        } else if (item['Статус роботи'] === 'Problem') {
          markerIcon = icon({
            iconUrl: 'assets/icon/warnicon.png',
            iconSize: [25, 25],
          });
        }

        L.marker([item['LT'], item['LN']], { icon: markerIcon }).addTo(this.map!).bindPopup(item['Майданчик WIM']).openPopup();
      }
    }
  }

  /** Remove map when we have multiple map objects */
  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }
}
