class TDate {
  #date;

  constructor(day: number, month: number, year: number) {
    this.#date = new Date(year, month, day);
  }

  increaseDate(days = 0, months = 0, years = 0): void {
    const date = new Date(this.#date);
    date.setFullYear(date.getFullYear() + years);
    date.setMonth(date.getMonth() + months);
    date.setDate(date.getDate() + days);

    this.#date = date;
  }

  reductionDate(days = 0, months = 0, years = 0): void {
    this.increaseDate(-days, -months, -years);
  }

  toString() {
    const dd = this.#date.getDate();
    const mm = this.#date.getMonth() + 1;
    const yy = this.#date.getFullYear();

    return `${dd}.${mm}.${yy}`;
  }
}

const newDate = new TDate(12, 8, 2025);

newDate.increaseDate(5, 6, 100);
console.log(newDate.toString());

newDate.reductionDate(25, 9, 2016);
console.log(newDate.toString());
