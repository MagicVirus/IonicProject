import { Component, OnInit } from '@angular/core';
import {Hike} from '../entities/hike';
import {HikeDetailService} from './hike-detail.service';
import { Map, tileLayer, marker, latLng } from 'leaflet';
import 'leaflet-routing-machine';


@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.page.html',
  styleUrls: ['./hike-detail.page.scss'],
})
export class HikeDetailPage implements OnInit {
  hike: Hike;
  map: Map;
  L: any;

  constructor(private hikingDetailService: HikeDetailService) {
      console.log(hikingDetailService.hike.name);
  }

    ionViewDidEnter() {
        this.leafletMap();
    }

    leafletMap() {
        this.map = new Map('mapId').setView([1.087025, 25.777222], 13);

        tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        }).addTo(this.map);

        const markPointStart = marker([3.087025, 45.777222]);
        const markPointEnd = marker([-3.087025, -45.777222]);
        markPointStart.bindPopup(`<p> ${ this.hike.name } </p>`);
        markPointEnd.bindPopup(`<p> ${ this.hike.name } </p>`);
        this.map.addLayer(markPointStart);
        this.map.addLayer(markPointEnd);
        L.Routing.control({
            waypoints: [
                latLng(57.74, 11.94),
                latLng(57.6792, 11.949)
            ],
            routeWhileDragging: trueg
        }).addTo(this.map);
    }

    ionViewWillLeave() {
        this.map.remove();
    }

  ngOnInit() {
    this.hike = this.hikingDetailService.hike;
  }

}
