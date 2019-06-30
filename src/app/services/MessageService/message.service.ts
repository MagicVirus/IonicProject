import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

    /**
     * Represente un message en provenant de l'api.
     * @type {any[]}
     */
    messages: string[] = [];

    add(message: string) {
        this.messages.push(message);
    }

    clear() {
        this.messages = [];
    }
}
