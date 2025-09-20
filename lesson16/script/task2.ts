const priceDollar: number = 41.25;

class TMoney {
  #money: number;
  constructor(money: number) {
    this.#money = money / priceDollar;
  }

  additionTheMoneySupply(sum: number = 0) {
    this.#money += sum / priceDollar;
  }
  withdrawalTheMoneySupply(sum: number = 0) {
    const sumUSD = sum / priceDollar;

    if (sumUSD > this.#money) throw new Error("Недостатньо коштів");
    this.#money -= sumUSD;
  }
  toString() {
    return `Баланс ${this.#money.toFixed(2)} USD`;
  }
}
const money = new TMoney(5369);

console.log(money);

console.log(money.additionTheMoneySupply(602800));
console.log(money.toString());
console.log(money.withdrawalTheMoneySupply(591852));
console.log(money.toString());
