import { Wallet } from './Wallet';
import { Chain } from './Chain';

const Nike = new Wallet();
const Shresth = new Wallet();

Shresth.sendTransaction('redeem warranty', Nike.publicKey);
Nike.sendTransaction('warranty redeemed', Shresth.publicKey);

console.log(Chain.instance);