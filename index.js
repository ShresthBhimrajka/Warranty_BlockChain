"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Wallet_1 = require("./Wallet");
const Chain_1 = require("./Chain");
const Nike = new Wallet_1.Wallet();
const Shresth = new Wallet_1.Wallet();
Shresth.sendTransaction('redeem warranty', Nike.publicKey);
Nike.sendTransaction('warranty redeemed', Shresth.publicKey);
console.log(Chain_1.Chain.instance);
