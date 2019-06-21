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
  map: any;

  constructor(private hikingDetailService: HikeDetailService) {
  }

    ionViewDidEnter() {
        this.leafletMap();
    }

    leafletMap() {
        this.map = L.map('mapId').setView([1.087025, 25.777222], 13);
        L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        }).addTo(this.map);

        const markPointStart = L.marker([3.087025, 45.777222]);
        const markPointEnd = L.marker([-3.087025, -45.777222]);
        markPointStart.bindPopup(`<p> ${ this.hike.name } </p>`);
        markPointEnd.bindPopup(`<p> ${ this.hike.name } </p>`);
        this.map.addLayer(markPointStart);
        this.map.addLayer(markPointEnd);
    }

    ionViewWillLeave() {
        this.map.remove();
    }

  ngOnInit() {
    this.hike = this.hikingDetailService.hike;
  }

}
