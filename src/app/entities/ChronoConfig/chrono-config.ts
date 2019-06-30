import {min} from 'rxjs/internal/operators';
import {DisplayElement} from '../DisplayElement/display-element';

export class ChronoConfig {
    private _targetTime: Date; // Date cible du compte à rebours (00:00:00)
    private _displayElement: DisplayElement;


    constructor(date: Date) {
        this._targetTime = new Date();
        this._targetTime.setHours(this._targetTime.getHours() + date.getHours());
        this._targetTime.setMinutes(this._targetTime.getMinutes() + date.getMinutes());
        this._targetTime.setSeconds(this._targetTime.getSeconds() + date.getSeconds());
        this._displayElement = new DisplayElement();

    }

    get targetTime() {
        return this._targetTime;
    }

    set targetTime(value) {
        this._targetTime = value;
    }

    get displayElement(): DisplayElement {
        return this._displayElement;
    }

    set displayElement(value: DisplayElement) {
        this._displayElement = value;
    }
}
