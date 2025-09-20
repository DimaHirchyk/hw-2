"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TMoney_money;
const priceDollar = 41.25;
class TMoney {
    constructor(money) {
        _TMoney_money.set(this, void 0);
        __classPrivateFieldSet(this, _TMoney_money, money / priceDollar, "f");
    }
    additionTheMoneySupply(sum = 0) {
        __classPrivateFieldSet(this, _TMoney_money, __classPrivateFieldGet(this, _TMoney_money, "f") + sum / priceDollar, "f");
    }
    withdrawalTheMoneySupply(sum = 0) {
        const sumUSD = sum / priceDollar;
        if (sumUSD > __classPrivateFieldGet(this, _TMoney_money, "f"))
            throw new Error("Недостатньо коштів");
        __classPrivateFieldSet(this, _TMoney_money, __classPrivateFieldGet(this, _TMoney_money, "f") - sumUSD, "f");
    }
    toString() {
        return `Баланс ${__classPrivateFieldGet(this, _TMoney_money, "f").toFixed(2)} USD`;
    }
}
_TMoney_money = new WeakMap();
const money = new TMoney(5369);
console.log(money);
console.log(money.additionTheMoneySupply(602800));
console.log(money.toString());
console.log(money.withdrawalTheMoneySupply(591852));
console.log(money.toString());
