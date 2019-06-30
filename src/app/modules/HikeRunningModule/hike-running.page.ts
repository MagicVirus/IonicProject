import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Hike} from '../../entities/Hike/hike';
import {HikeDetailService} from '../../services/HikeDetailService/hike-detail.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import * as PolyUtils from './../../../../node_modules/polyline-encoded';
import {MapAPIResult} from '../../entities/MapAPIResult/map-apiresult';
import {MapApiService} from '../../services/MapAPIService/map-api.service';
import {Router} from '@angular/router';
import {ChronoConfig} from '../../entities/ChronoConfig/chrono-config';
import {DateDiff} from '../../entities/DateDiff/date-diff';
import {interval, Subscription} from 'rxjs';

@Component({
    selector: 'app-hike-running',
    templateUrl: './hike-running.page.html',
    styleUrls: ['./hike-running.page.scss'],
})
export class HikeRunningPage implements OnInit {
    @ViewChild('countdown_hour') hourRef: ElementRef;
    @ViewChild('countdown_min') minRef: ElementRef;
    @ViewChild('countdown_sec') secRef: ElementRef;

    constructor(private hikingDetailService: HikeDetailService,
                private  router: Router,
                private mapApiService: MapApiService) {
    }

    private hike: Hike;
    private sub: Subscription;
    private map: L.Map;
    private chronoConfig: ChronoConfig;
    private dateDiff: DateDiff;
    result: MapAPIResult;


    configChrono() {
        console.log(this.hike)
        this.chronoConfig = new ChronoConfig(this.hike.duration);
        this.dateDiff = new DateDiff();
        this.chronoConfig.displayElement.hour = this.hourRef;
        this.chronoConfig.displayElement.min  = this.minRef;
        this.chronoConfig.displayElement.sec  = this.secRef;
        this.tick();
    }

    tick() {
        let timeNow  = new Date();

        if ( timeNow > this.chronoConfig.targetTime ) {
            timeNow = this.chronoConfig.targetTime;
        }

        const diff = this.dateDiff.dateDiff(timeNow, this.chronoConfig.targetTime);
        this.chronoConfig.displayElement.hour = diff.hour;
        this.chronoConfig.displayElement.min = diff.min;;
        this.chronoConfig.displayElement.sec = diff.sec;
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
        const coordinates = PolyUtils.decode(this.result.polyline, 6);
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
        this.configChrono();
        this.sub = interval(1000)
            .subscribe((val) => { this.tick(); });
        this.getRoute();

    }

    finished() {
        this.sub.unsubscribe();
        this.router.navigate(['list']);
    }
}
