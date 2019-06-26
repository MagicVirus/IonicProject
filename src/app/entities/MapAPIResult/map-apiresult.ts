import {Stats} from '../Stats/stats';

export class MapAPIResult {
    private _polyline: string;
    private _totalDistance: number;
    private _totalTime: number;
    private _status: string;
    private _stats: Stats;


    constructor(polyline: string, totalDistance: number, totalTime: number, status: string, stats: Stats) {
        this._polyline = polyline;
        this._totalDistance = totalDistance;
        this._totalTime = totalTime;
        this._status = status;
        this._stats = stats;
    }

    get polyline(): string {
        return this._polyline;
    }

    set polyline(value: string) {
        this._polyline = value;
    }

    get totalDistance(): number {
        return this._totalDistance;
    }

    set totalDistance(value: number) {
        this._totalDistance = value;
    }

    get totalTime(): number {
        return this._totalTime;
    }

    set totalTime(value: number) {
        this._totalTime = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get stats(): Stats {
        return this._stats;
    }

    set stats(value: Stats) {
        this._stats = value;
    }
}
