interface Car {
  brand: string; // марка
  tankSize: number; // розмір бака (літри)
  fuel: number; // кількість наявних літрів
  seats: number; // кількість місць
  passengers: number; // кількість пасажирів

  fillingSpecifiedNumberLitres(litr: number): number;
  displayingNumberPassengers(): number;
  addingPassengers(newPass: number): number;
  passengerDisembarkation(pass: number): number;
}

const myCar: Car = {
  brand: "Toyota",
  tankSize: 50,
  fuel: 20,
  seats: 5,
  passengers: 3,

  fillingSpecifiedNumberLitres(litr) {
    if (litr + this.fuel > this.tankSize) {
      throw new Error("не можна залити стільки пального");
    }
    return (this.fuel += litr);
  },

  displayingNumberPassengers() {
    return this.passengers;
  },

  addingPassengers(newPass) {
    if (this.passengers + newPass > this.seats) {
      throw new Error("забагато пасажирів");
    }
    return (this.passengers += newPass);
  },

  passengerDisembarkation(pass) {
    if (this.seats - pass > this.passengers) {
      throw new Error("не можна висадати стільки пасажирів");
    }
    return (this.passengers -= pass);
  },
};

document.body.innerHTML += `<p>якщо заправити на 10л то в машині буде ${myCar.fillingSpecifiedNumberLitres(
  10
)} літрів
  </p>`;

document.body.innerHTML += `<p>в машині може бути ${myCar.displayingNumberPassengers()} пасажирів
  </p>`;

document.body.innerHTML += `<p>в машині тепер ${myCar.addingPassengers(
  2
)} пасажирів
  </p>`;

document.body.innerHTML += `<p>з машини висадили 2 пасажирів і тепер там ${myCar.passengerDisembarkation(
  2
)} 
  </p>`;
