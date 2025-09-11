import { randomArray } from "./arrayNumber.js";

const arrayNumber: number[] = randomArray();

document.body.innerHTML += `<h1>${arrayNumber}
    </h1>`;

const swap = (arr: number[], i: number, j: number) => {
  const akum = arr[i];
  arr[i] = arr[j];
  arr[j] = akum;
};

function mixxingSort(array: number[]) {
  let count = 0;
  let leftInd = 0;
  let rightInd = array.length - 1;

  while (leftInd < rightInd) {
    for (let i = leftInd; i < rightInd; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        count++;
      }
    }
    rightInd--;

    for (let i = rightInd; i > leftInd; i--) {
      if (array[i] < array[i - 1]) {
        swap(array, i, i - 1);
        count++;
      }
    }
    leftInd++;
  }

  return count;
}

const calcMixxingSort = mixxingSort(arrayNumber);

document.body.innerHTML += ` <p> Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням - ${calcMixxingSort} </p>
                            `;
