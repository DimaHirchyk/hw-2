const obj1 = {
  numbers: [1, 2, 3, 4, 5, 20],

  findingSum() {
    return this.numbers.reduce((acc, el) => (acc += el), 0);
  },
};

document.body.innerHTML += `<p> знаходження суми : 
${obj1.findingSum()}  </p>`;

const obj2 = {
  numbers: [10, 20, 30, 40, 50],

  findingProductMinMax() {
    const min = Math.min(...this.numbers);
    const max = Math.max(...this.numbers);

    return min + max;
  },
};

document.body.innerHTML += `<p>  знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням: 
${obj2.findingProductMinMax()}  </p>`;

const sumObj2_call = obj1.findingSum.call(obj2);
const sumObj2_apply = obj1.findingSum.apply(obj2);

document.body.innerHTML += `<p>знаходження суми 2 обєкту за допомогою call: 
${sumObj2_call}  </p>`;
document.body.innerHTML += `<p>знаходження суми 2 обєкту за допомогою apply: 
${sumObj2_apply}  </p>`;

const minMaxObj1_call = obj2.findingProductMinMax.call(obj1);
const minMaxObj1_apply = obj2.findingProductMinMax.apply(obj1);

document.body.innerHTML += `<p>знаходження мін і макс 1 обєкту за допомогою call: 
${minMaxObj1_call}  </p>`;
document.body.innerHTML += `<p>знаходження мін і макс 1 обєкту за допомогою apply: 
${minMaxObj1_apply}  </p>`;
