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
var _TDate_date;
class TDate {
    constructor(day, month, year) {
        _TDate_date.set(this, void 0);
        __classPrivateFieldSet(this, _TDate_date, new Date(year, month, day), "f");
    }
    increaseDate(days = 0, months = 0, years = 0) {
        const date = new Date(__classPrivateFieldGet(this, _TDate_date, "f"));
        date.setFullYear(date.getFullYear() + years);
        date.setMonth(date.getMonth() + months);
        date.setDate(date.getDate() + days);
        __classPrivateFieldSet(this, _TDate_date, date, "f");
    }
    reductionDate(days = 0, months = 0, years = 0) {
        this.increaseDate(-days, -months, -years);
    }
    toString() {
        const dd = __classPrivateFieldGet(this, _TDate_date, "f").getDate();
        const mm = __classPrivateFieldGet(this, _TDate_date, "f").getMonth() + 1;
        const yy = __classPrivateFieldGet(this, _TDate_date, "f").getFullYear();
        return `${dd}.${mm}.${yy}`;
    }
}
_TDate_date = new WeakMap();
const newDate = new TDate(12, 8, 2025);
newDate.increaseDate(5, 6, 100);
console.log(newDate.toString());
newDate.reductionDate(25, 9, 2016);
console.log(newDate.toString());
