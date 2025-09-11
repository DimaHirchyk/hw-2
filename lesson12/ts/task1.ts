import { randomArray } from "./arrayNumber.js";

const numberArray: number[] = randomArray();

document.body.innerHTML += `<h1>${numberArray}
    </h1>`;

function bubbleSort(array: number[]) {
  let count = 0;
  let swap;
  do {
    swap = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
        swap = true;
        count++;
      }
    }
  } while (swap);

  return count;
}

const calcBubbleSort = bubbleSort(numberArray);

document.body.innerHTML += `
                          <p>  Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою - ${calcBubbleSort} </p>
                            `;
