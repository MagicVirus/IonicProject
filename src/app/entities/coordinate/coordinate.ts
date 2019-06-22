export class Coordinate {
    private _latitude;
    private _longitude;

    constructor(longitude, latitude) {
        this._latitude = latitude;
        this._longitude = longitude;
    }


    get latitude() {
        return this._latitude;
    }

    set latitude(value) {
        this._latitude = value;
    }

    get longitude() {
        return this._longitude;
    }

    set longitude(value) {
        this._longitude = value;
    }
}
