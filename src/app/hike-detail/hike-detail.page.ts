import { Component, OnInit } from '@angular/core';
import {Hike} from '../entities/hike';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';


@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.page.html',
  styleUrls: ['./hike-detail.page.scss'],
})
export class HikeDetailPage implements OnInit {
    map: Map;
  constructor() {
    this.hike =     new Hike(1, 'Paris-Dakar', '2019-05-17', 26),
        console.log(this.hike);
    //this.navParams.get('hikingParams');
    //const list = new ListPage();
    //console.log(this.list);
  }

    ionViewDidEnter() {
        this.leafletMap();
    }

    leafletMap() {
        this.map = new Map('mapId').setView([3.087025, 45.777222], 13);

        tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: 'edupala.com'
        }).addTo(this.map);

        const markPoint = marker([3.087025, 45.777222]);
        markPoint.bindPopup('<p>Tashi Delek - Bangalore.</p>');
        this.map.addLayer(markPoint);
    }

    ionViewWillLeave() {
        this.map.remove();
    }

  ngOnInit() {
  }

}
