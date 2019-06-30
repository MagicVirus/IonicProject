export class Stats {
    private _time: number;

    /**
     *
     * @param {number} time
     */
    constructor(time: number) {
        this._time = time;
    }


    get time(): number {
        return this._time;
    }

    set time(value: number) {
        this._time = value;
    }
}
