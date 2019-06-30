import {Component, OnInit} from '@angular/core';
import {Hike} from '../../entities/Hike/hike';
import {HikeDetailService} from '../../services/HikeDetailService/hike-detail.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import * as PolyUtils from './../../../../node_modules/polyline-encoded';
import {MapAPIResult} from '../../entities/MapAPIResult/map-apiresult';
import {MapApiService} from '../../services/MapAPIService/map-api.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-hike-detail',
    templateUrl: './hike-detail.page.html',
    styleUrls: ['./hike-detail.page.scss'],
})
export class HikeDetailPage implements OnInit {
    private hike: Hike;
    private map: L.Map;
    result: MapAPIResult;

    /**
     * Module initialisant la page de detail ainsi sur la map
     * @param {HikeDetailService} hikingDetailService
     * @param {Router} router
     * @param {MapApiService} mapApiService
     */
    constructor(private hikingDetailService: HikeDetailService,
                private  router: Router,
                private mapApiService: MapApiService) {
    }

    getRoute(): void {
        this.mapApiService.getRoute(this.hike)
        .subscribe(data => {
            this.result = data;
        });
    }

    leafletMap() {
        this.map = L.map('mapId').setView([this.hike.startCoordinates.latitude, this.hike.startCoordinates.longitude], 9);
        // L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(this.map);
        const coordinates = PolyUtils.decode(this.result.polyline, 6);
        console.log(coordinates);
        L.polyline(coordinates).addTo(this.map);

        const markPointStart = L.marker([this.hike.startCoordinates.latitude, this.hike.startCoordinates.longitude]);
        const markPointEnd = L.marker([this.hike.endCoordinates.latitude, this.hike.endCoordinates.longitude]);
        markPointStart.bindPopup(`<p>Départ : ${ this.hike.name } </p>`);
        markPointEnd.bindPopup(`<p>Arrivée :  ${ this.hike.name } </p>`);
        this.map.addLayer(markPointStart);
        this.map.addLayer(markPointEnd);
    }

    ngOnInit() {
        this.hike = this.hikingDetailService.hike;
        if (this.hike === undefined) {
            this.router.navigate(['list']);
        }
        this.getRoute();
        this.leafletMap();
    }

    running(hike: Hike) {
        this.hikingDetailService.hike = hike;
        this.router.navigate(['hike-running']);
    }

}
