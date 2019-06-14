export class Hike {


    private _id;
    private _name;
    private _date;
    private _nbPeople;
    private _image: string;
    private _hardness;
    private _address: string;
    private _timeToAchieve: Date;
    private _lenght;
    private _description;


    constructor(id, name, date, nbPeople, image, hardness, address, lenght, description) {
        this._id = id;
        this._name = name;
        this._date = date;
        this._nbPeople = nbPeople;
        this._image = image;
        this._hardness = hardness;
        this._address = address;
        this._lenght = lenght;
        this._description = description;
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

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get hardness() {
        return this._hardness;
    }

    set hardness(value) {
        this._hardness = value;
    }
    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
    get timeToAchieve(): Date {
        return this._timeToAchieve;
    }

    set timeToAchieve(value: Date) {
        this._timeToAchieve = value;
    }
    get lenght() {
        return this._lenght;
    }

    set lenght(value) {
        this._lenght = value;
    }
    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }
}
