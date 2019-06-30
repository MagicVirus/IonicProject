export class DateDiff {
    private _hour;
    private _min;
    private _sec;

    /**
     * Classe permettant de comparer deux date
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

    dateDiff(date1, date2) {
        let tmp = date2 - date1;

        tmp = Math.floor(tmp / 1000);
        this._sec = tmp % 60;
        this._sec = (this._sec < 10 ? '0' : '') + this._sec;
        tmp = Math.floor((tmp - this._sec) / 60);
        this._min = tmp % 60;
        this._min = (this._min < 10 ? '0' : '') + this._min;
        tmp = Math.floor((tmp - this._min) / 60);
        this._hour = tmp % 24;
        this._hour = (this._hour < 10 ? '0' : '') + this._hour;

        return this;
    }
}
