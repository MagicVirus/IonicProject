import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {MapAPIResult} from '../../entities/MapAPIResult/map-apiresult';
import {Hike} from '../../entities/Hike/hike';
import {HandleError, HttpErrorHandler} from '../HttpErrorHandlerService/http-error-handler.service';
import {Observable} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
    })
};

@Injectable()
export class MapApiService {
    private apiKEY = '9f82d1b97139fe0299ad5d0976a8e313';
    mapAPIUrl = 'https://maps.open-street.com/api/route/';
    private handleError: HandleError;

    /**
     * Service appelant l'api des itinéraires
     *
     * @param {HttpClient} httpClient
     * @param {HttpErrorHandler} httpErrorHandler
     */
    constructor(
        private httpClient: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('MapApiService');
    }

    getRoute(hike: Hike): Observable<any> {
        return this.httpClient.get(this.mapAPIUrl
            + '?origin='
            + hike.startCoordinates.latitude
            + ','
            + hike.startCoordinates.longitude
            + '&destination='
            + hike.endCoordinates.latitude
            + ','
            + hike.endCoordinates.longitude
            + '&mode=walking'
            + '&key='
            + this.apiKEY)
            .pipe(
                catchError(this.handleError('getRoute', []))
            );
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
