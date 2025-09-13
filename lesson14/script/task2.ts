interface TypeDate {
  day: number;
  mounth: number;
  year: number;
}

const date: TypeDate = {
  day: 5,
  mounth: 11,
  year: 2005,
};

function determineWhatYearWillBe(
  { day, mounth, year }: TypeDate,
  numMounth: number
) {
  const date = new Date(year, mounth, day);

  date.setMonth(date.getMonth() + numMounth);

  return {
    day: date.getDate(),
    mounth: date.getMonth(),
    year: date.getFullYear(),
  };
}

const input = prompt("Введіть кількість місяців", "10");
const num = input ? parseInt(input) : 10;

const exactDate = determineWhatYearWillBe(date, num);

document.body.innerHTML += `<p> початкова дата: 
${date.day} число, ${date.mounth} місяць ${date.year} рік </p>`;

document.body.innerHTML += `<p> нова дата: 
${exactDate.day} число, ${exactDate.mounth} місяць ${exactDate.year} рік </p>`;
