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
import {HikeStateService} from '../../services/HikeStateService/hike-state.service';
import {StateEnum} from '../../entities/Hike/StateEnum';

@Component({
    selector: 'app-hike-running',
    templateUrl: './hike-running.page.html',
    styleUrls: ['./hike-running.page.scss'],
})

export class HikeRunningPage implements OnInit {
    @ViewChild('countdown_hour') hourRef: ElementRef;
    @ViewChild('countdown_min') minRef: ElementRef;
    @ViewChild('countdown_sec') secRef: ElementRef;

    /**
     * Page de randonnée en cours
     * @param {HikeDetailService} hikingDetailService
     * @param {Router} router
     * @param {MapApiService} mapApiService
     */
    constructor(private hikingDetailService: HikeDetailService,
                private  router: Router,
                private mapApiService: MapApiService,
                private hikeStateService: HikeStateService) {
    }


    private hike: Hike;
    private sub: Subscription;
    private map: L.Map;
    private dateDiff: DateDiff;
    result: MapAPIResult;


    configChrono() {
        this.hikeStateService.chronoRunning = new ChronoConfig(this.hike.duration);
        this.dateDiff = new DateDiff();
        this.hikeStateService.chronoRunning.displayElement.hour = this.hourRef;
        this.hikeStateService.chronoRunning.displayElement.min  = this.minRef;
        this.hikeStateService.chronoRunning.displayElement.sec  = this.secRef;
        this.tick();
    }

    tick() {
        let timeNow  = new Date();

        if ( timeNow > this.hikeStateService.chronoRunning.targetTime ) {
            timeNow = this.hikeStateService.chronoRunning.targetTime;
        }

        const diff = this.dateDiff.dateDiff(timeNow, this.hikeStateService.chronoRunning.targetTime);
        this.hikeStateService.chronoRunning.displayElement.hour = diff.hour;
        this.hikeStateService.chronoRunning.displayElement.min = diff.min;
        this.hikeStateService.chronoRunning.displayElement.sec = diff.sec;
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
        if (this.map !== undefined){
            this.map.remove();
        }
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
        this.configChrono();
        this.hikeStateService.hikeState = StateEnum.running;
        this.hikeStateService.hikeRunning = this.hike;
        this.sub = interval(1000)
            .subscribe((val) => { this.tick();console.log(this.hikeStateService); });
        this.getRoute();

    }

    finished() {
        this.sub.unsubscribe();
        this.hikeStateService.hikeState = StateEnum.finished;
        this.hikeStateService.chronoRunning = undefined;
        this.hikeStateService.hikeRunning = undefined;
        this.router.navigate(['list']);
    }

    goback() {
        this.hikingDetailService.hike = this.hike;
        this.router.navigate(['hike-detail']);
    }
}
