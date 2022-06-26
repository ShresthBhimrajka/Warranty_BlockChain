"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(action, sender, reciever) {
        this.action = action;
        this.sender = sender;
        this.reciever = reciever;
    }
    toString() {
        return JSON.stringify(this);
    }
}
exports.Transaction = Transaction;
