const names: string[] = ["Olga", "Ivan", "Maria", "Petro", "Anna"];

names.sort();

function searchNameAndIndex(name: string, array: string[]) {
  let leftInd = 0;
  let rightInd = array.length - 1;

  while (leftInd < rightInd) {
    const mid = Math.floor((leftInd + rightInd) / 2);
    if (array[mid] === name) return mid;
    if (name < array[mid]) rightInd = mid - 1;
    else leftInd = mid + 1;
  }
  return -1;
}

const index = searchNameAndIndex("Olga", names);

document.body.innerHTML += `
                          <p>Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
 </p>
                            `;

document.body.innerHTML += ` <h1>${index}</h1>`;
