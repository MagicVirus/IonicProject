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

@Component({
    selector: 'app-hike-running',
    templateUrl: './hike-running.page.html',
    styleUrls: ['./hike-running.page.scss'],
})
export class HikeRunningPage implements OnInit {
    @ViewChild('countdown_day') dayRef: ElementRef;
    @ViewChild('countdown_hour') hourRef: ElementRef;
    @ViewChild('countdown_min') minRef: ElementRef;
    @ViewChild('countdown_sec') secRef: ElementRef;

    constructor(private hikingDetailService: HikeDetailService,
                private  router: Router,
                private mapApiService: MapApiService) {
        this.chronoConfig = new ChronoConfig();
        this.dateDiff = new DateDiff();
    }

    private hike: Hike;
    private map: L.Map;
    private chronoConfig: ChronoConfig;
    private dateDiff: DateDiff;
    result: MapAPIResult;

    // Initialisation du compte à rebours (à appeler 1 fois au chargement de la page)
    initChrono() {
        // Récupération des références vers les éléments pour l'affichage
        // La référence n'est récupérée qu'une seule fois à l'initialisation pour optimiser les performances
        console.log(this.dayRef);
        console.log(this.hourRef);
        console.log(this.minRef);
        console.log(this.secRef);
        this.chronoConfig.displayElement.day  = this.dayRef;
        this.chronoConfig.displayElement.hour = this.hourRef;
        this.chronoConfig.displayElement.min  = this.minRef;
        this.chronoConfig.displayElement.sec  = this.secRef;

        // Lancement du compte à rebours
        this.tick(); // Premier tick tout de suite
        window.setInterval('tick();', 1000); // Ticks suivant, répété toutes les secondes (1000 ms)
    }

    // Met à jour le compte à rebours (tic d'horloge)
    tick() {
        // Instant présent
        let timeNow  = new Date();

        // On s'assure que le temps restant ne soit jamais négatif (ce qui est le cas dans le futur de targetTime)
        if ( timeNow > this.chronoConfig.targetTime ) {
            timeNow = this.chronoConfig.targetTime;
        }

        // Calcul du temps restant
        const diff = this.dateDiff.dateDiff(timeNow, this.chronoConfig.targetTime);

        console.log(diff.day)
        console.log(diff.hour)
        console.log(diff.min)
        console.log(diff.sec)
        this.chronoConfig.displayElement.day.oninput(  diff.day  );
        this.chronoConfig.displayElement.hour.oninput( diff.hour );
        this.chronoConfig.displayElement.min.oninput(  diff.min  );
        this.chronoConfig.displayElement.sec.oninput(  diff.sec  );
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
        this.initChrono();

    }

    running(hike: Hike) {
        this.hikingDetailService.hike = hike;
        this.router.navigate(['hike-running']);
    }
}
