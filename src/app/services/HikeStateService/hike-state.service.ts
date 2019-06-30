import { Injectable } from '@angular/core';
import {StateEnum} from '../../entities/Hike/StateEnum';
import {Hike} from '../../entities/Hike/hike';
import {ChronoConfig} from '../../entities/ChronoConfig/chrono-config';
import {CanActivate} from '@angular/router';

@Injectable()
export class HikeStateService implements CanActivate {
    private _hikeState: number;
    private _hikeRunning: Hike;
    private _chronoRunning: ChronoConfig;
    constructor() {
        this._hikeState = StateEnum.notstarted;
    }


    canActivate() {
        if (this._hikeState === StateEnum.running) {
            return true;
        }else{
            return false;
        }
    }

    get hikeState(): StateEnum {
        return this._hikeState;
    }

    set hikeState(value: StateEnum) {
        this._hikeState = value;
    }

    get hikeRunning(): Hike {
        return this._hikeRunning;
    }

    set hikeRunning(value: Hike) {
        this._hikeRunning = value;
    }

    get chronoRunning(): ChronoConfig {
        return this._chronoRunning;
    }

    set chronoRunning(value: ChronoConfig) {
        this._chronoRunning = value;
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
