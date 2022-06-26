import * as crypto from 'crypto';
import { Transaction } from './Transaction';
import { Chain } from './Chain';

export class Wallet {
    public publicKey: string;
    public privateKey: string;

    constructor() {
        const keypair = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: { type: 'spki', format: 'pem' },
            privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
          });
        this.publicKey = keypair.publicKey;
        this.privateKey = keypair.privateKey;
    }

    sendTransaction(action: string, senderPublicKey: string) {
        const transaction = new Transaction(action, this.publicKey, senderPublicKey);
        const sign = crypto.createSign('SHA256');
        sign.update(transaction.toString()).end();
        const signature = sign.sign(this.privateKey);
        Chain.instance.addBlock(transaction, this.publicKey, signature);
    }
}