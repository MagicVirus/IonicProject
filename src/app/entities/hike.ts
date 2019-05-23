export class Hike {
    private _id;
    private _name;
    private _date;
    private _nbPeople;
    constructor(id, name, date, nbPeople) {
        this._id = id;
        this._name = name;
        this._date = date;
        this._nbPeople = nbPeople;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get nbPeople() {
        return this._nbPeople;
    }

    set nbPeople(value) {
        this._nbPeople = value;
    }
}
