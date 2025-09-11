const namesArr: string[] = ["Olga", "Ivan", "Maria", "Petro", "Anna"];

const sortNamesArr = namesArr.sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  }
  if (a.length < b.length) {
    return -1;
  }
  return 0;
});

function searchIndexNameWithLength5(array: string[]) {
  let leftInd = 0;
  let rightInd = array.length - 1;

  while (leftInd < rightInd) {
    const mid = Math.floor((leftInd + rightInd) / 2);
    if (array[mid].length === 5) return mid;
    if (5 < array[mid].length) rightInd = mid - 1;
    else leftInd = mid + 1;
  }
  return -1;
}

const previewName = searchIndexNameWithLength5(sortNamesArr);

document.body.innerHTML += ` <p>Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.</p>`;
document.body.innerHTML += ` <h1>${previewName}</h1>`;
