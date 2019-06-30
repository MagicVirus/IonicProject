import {Coordinate} from '../Coordinate/coordinate';
import {ChronoConfig} from "../ChronoConfig/chrono-config";
import {StateEnum} from "./StateEnum";
import {Time} from '@angular/common';

export class Hike {
    private _address: string;
    private _description;
    private _duration: Date;
    private _elevation;
    private _hardness;
    private _id;
    private _image: string;
    private _name;
    private _nbPeople;
    private _startCoordinates: Coordinate;
    private _endCoordinates: Coordinate;
    private _chronoconfig: ChronoConfig;
    private _state;

    constructor(id, name, duration, nbPeople, image, hardness, address, description, elevation, endCoordinates, startCoordinates) {
        this._address = address;
        this._description = description;
        this._duration = duration;
        this._elevation = elevation;
        this._hardness = hardness;
        this._id = id;
        this._image = image;
        this._name = name;
        this._nbPeople = nbPeople;
        this._startCoordinates = startCoordinates;
        this._endCoordinates = endCoordinates;
        this._state = StateEnum.notstarted;
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

    get duration() {
        return this._duration;
    }

    set duration(value) {
        this._duration = value;
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
    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }
    get elevation() {
        return this._elevation;
    }

    set elevation(value) {
        this._elevation = value;
    }

    get startCoordinates() {
        return this._startCoordinates;
    }

    set startCoordinates(value) {
        this._startCoordinates = value;
    }

    get endCoordinates() {
        return this._endCoordinates;
    }

    set endCoordinates(value) {
        this._endCoordinates = value;
    }

}
