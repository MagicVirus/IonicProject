export class DateDiff {
    private _day;
    private _hour;
    private _min;
    private _sec;

    constructor() {
        this._day = null;
        this._hour = null;
        this._min = null;
        this._sec = null;
    }


    get day() {
        return this._day;
    }

    set day(value) {
        this._day = value;
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

    // Calcul la différence entre 2 dates, en jour/heure/minute/seconde
    dateDiff(date1, date2) {
        let tmp = date2 - date1;

        tmp = Math.floor(tmp / 1000);             // Nombre de secondes entre les 2 dates
        this._sec = tmp % 60;                    // Extraction du nombre de secondes
        tmp = Math.floor((tmp - this._sec) / 60);    // Nombre de minutes (partie entière)
        this._min = tmp % 60;                    // Extraction du nombre de minutes
        tmp = Math.floor((tmp - this._min) / 60);    // Nombre d'heures (entières)
        this._hour = tmp % 24;                   // Extraction du nombre d'heures
        tmp = Math.floor((tmp - this._hour) / 24);   // Nombre de jours restants
        this._day = tmp;

        return this;
    }
}
