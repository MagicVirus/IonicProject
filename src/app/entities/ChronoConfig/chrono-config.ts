import {min} from 'rxjs/internal/operators';
import {DisplayElement} from '../DisplayElement/display-element';

export class ChronoConfig {
    private _targetTime: Date; // Date cible du compte à rebours (00:00:00)
    private _displayElement: DisplayElement;


    constructor() {
        this._targetTime = new Date('2012-11-05 00:00:00');
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
