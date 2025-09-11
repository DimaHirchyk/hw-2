"use strict";
const names = ["Olga", "Ivan", "Maria", "Petro", "Anna"];
names.sort();
function searchNameAndIndex(name) {
    name.toLocaleLowerCase();
    let leftInd = 0;
    let rightInd = names.length - 1;
    while (leftInd < rightInd) {
        const mid = Math.floor((leftInd + rightInd) / 2);
        if (names[mid] === name)
            return mid;
        if (name < names[mid])
            rightInd = mid - 1;
        else
            leftInd = mid + 1;
    }
    return -1;
}
const index = searchNameAndIndex("Olga");
document.body.innerHTML += `
                          <p>Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
 </p>
                            `;
document.body.innerHTML += ` <h1>${index}</h1>`;
