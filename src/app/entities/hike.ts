export class Hike {
    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }
    private _id;
    private _name;
    private _date;
    private _nbPeople;
    private _image: string;

    constructor(id, name, date, nbPeople, image) {
        this._id = id;
        this._name = name;
        this._date = date;
        this._nbPeople = nbPeople;
        this._image = image;
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
