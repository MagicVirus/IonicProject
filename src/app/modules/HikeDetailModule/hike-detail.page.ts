import { Component, OnInit } from '@angular/core';
import {Hike} from '../../entities/hike';
import {HikeDetailService} from './hike-detail.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.page.html',
  styleUrls: ['./hike-detail.page.scss'],
})
export class HikeDetailPage implements OnInit {
  hike: Hike;
  map: L.Map;

  constructor(private hikingDetailService: HikeDetailService) {
  }

    ionViewDidEnter() {
        this.leafletMap();
    }

    leafletMap() {
        this.map = L.map('mapId').setView([48.898123, 2.345040], 9);
        L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        }).addTo(this.map);

        L.Routing.control({
            waypoints: [
                L.latLng(48.898123, 2.345040),
                L.latLng(48.734705, 2.394971)
            ], routeWhileDragging: true
        }).addTo(this.map);

        const markPointStart = L.marker([48.898123, 2.345040]);
        const markPointEnd = L.marker([48.734705, 2.394971]);
        markPointStart.bindPopup(`<p> ${ this.hike.name } </p>`);
        markPointEnd.bindPopup(`<p> ${ this.hike.name } </p>`);
        this.map.addLayer(markPointStart);
        this.map.addLayer(markPointEnd);
    }

  ngOnInit() {
    this.hike = this.hikingDetailService.hike;
  }

}
