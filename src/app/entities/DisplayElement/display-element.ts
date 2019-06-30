import {min} from 'rxjs/internal/operators';

export class DisplayElement {
    private _hour;
    private _min;
    private _sec;

    /**
     * Classe représentant le temps a afficher dans l'appli
     */
    constructor() {
        this._hour = null;
        this._min = null;
        this._sec = null;
    }

    get hour() {
        return this._hour;
    }

    set hour(value) {
        this._hour = value;
    }

    get min() {
        return this._min;
    }

    set min(value) {
        this._min = value;
    }

    get sec() {
        return this._sec;
    }

    set sec(value) {
        this._sec = value;
    }
}
