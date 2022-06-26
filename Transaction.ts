import * as crypto from 'crypto';

export class Transaction {
    constructor(public action: string, public sender: string, public reciever: string) {

    }

    toString() {
        return JSON.stringify(this);
    }
}