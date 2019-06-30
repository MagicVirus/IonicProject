export class Coordinate {
    private _latitude;
    private _longitude;

    /**
     * Objet représantant une coordonnée
     * @param latitude
     * @param longitude
     */
    constructor(latitude, longitude) {
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
