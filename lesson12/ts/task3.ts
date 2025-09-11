import { randomArray } from "./arrayNumber.js";

const numberArray: number[] = randomArray();

document.body.innerHTML += ` <h1>${numberArray}</h1>`;

function inclusionsSort(array: number[]) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    let currentEl = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currentEl) {
      array[j + 1] = array[j];
      j--;
      count++;
    }
    array[j + 1] = currentEl;
  }
  return count;
}

const calcInclusionsSort = inclusionsSort(numberArray);

document.body.innerHTML += `
                          <p> Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями -  ${calcInclusionsSort} </p>
                            `;
