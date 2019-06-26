import {Component, OnInit} from '@angular/core';
import {Hike} from '../../entities/Hike/hike';
import {HikeDetailService} from '../../services/HikeDetailService/hike-detail.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import * as PolyUtils from './../../../../node_modules/polyline-encoded';
import {MapAPIResult} from '../../entities/MapAPIResult/map-apiresult';
import {MapApiService} from '../../services/MapAPIService/map-api.service';


@Component({
    selector: 'app-hike-detail',
    templateUrl: './hike-detail.page.html',
    styleUrls: ['./hike-detail.page.scss'],
})
export class HikeDetailPage implements OnInit {
    private hike: Hike;
    private map: L.Map;
    result: MapAPIResult;

    constructor(private hikingDetailService: HikeDetailService,
                private mapApiService: MapApiService) {
    }

    getRoute(): void {
        this.mapApiService.getRoute(this.hike)
        .subscribe(data => {
            this.result = data;
        });
    }

    ionViewDidEnter() {
        this.leafletMap();
    }

    leafletMap() {
        this.map = L.map('mapId').setView([this.hike.startCoordinates.latitude, this.hike.startCoordinates.longitude], 9);
        // L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(this.map);
        const coordinates = PolyUtils.decode(this.result.polyline);
        console.log(thgitis.result)
        L.polyline(coordinates).addTo(this.map);
        // L.Routing.control({
        //     waypoints: [
        //         L.latLng(this.Hike.startCoordinates.latitude, this.Hike.startCoordinates.longitude),
        //         L.latLng(this.Hike.endCoordinates.latitude, this.Hike.endCoordinates.latitude)
        //     ], routeWhileDragging: true
        // }).addTo(this.map);

        // const markPointStart = L.marker([48.898123, 2.345040]);
        // const markPointEnd = L.marker([48.734705, 2.394971]);
        // markPointStart.bindPopup(`<p> ${ this.Hike.name } </p>`);
        // markPointEnd.bindPopup(`<p> ${ this.Hike.name } </p>`);
        // this.map.addLayer(markPointStart);
        // this.map.addLayer(markPointEnd);
    }

    ngOnInit() {
        this.hike = this.hikingDetailService.hike;
        this.getRoute();

    }

}
