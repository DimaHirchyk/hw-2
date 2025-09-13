interface Company {
  companyName: string;
  owner: string;
  releaseYear: number;
  siteCost: number;
  sponsors: Sponsors[];
  surplus: number;
}

interface Sponsors {
  lastName: string;
  firstName: string;
  investment: number;
}

const companyWebsites = [
  {
    companyName: "TechVision", // назва компанії на час розробки
    owner: "Oleksandr Ivanov",
    sponsors: [
      { lastName: "Petrenko", firstName: "Andrii", investment: 5000 },
      { lastName: "Shevchenko", firstName: "Olena", investment: 3000 },
    ],
    releaseYear: 2001,
    siteCost: 120000,
    surplus: 1321658,
  },
  {
    companyName: "WebMaster Ltd",
    owner: "Svitlana Koval",
    sponsors: [
      { lastName: "Bondar", firstName: "Viktor", investment: 700000 },
      { lastName: "Melnyk", firstName: "Iryna", investment: 4000 },
    ],
    releaseYear: 2022,
    siteCost: 150000,
    surplus: 1026848,
  },
  {
    companyName: "NextGen Solutions",
    owner: "Dmytro Horbenko",
    sponsors: [
      { lastName: "Kravchenko", firstName: "Oksana", investment: 6000 },
      { lastName: "Tkachenko", firstName: "Petro", investment: 3500 },
    ],
    releaseYear: 2008,
    siteCost: 18000,
    surplus: 508465,
  },
];

const costAllSites = companyWebsites
  .map((el) => el.siteCost)
  .reduce((acc: number, site: number) => acc + site, 0);

document.body.innerHTML += `1) загальна вартість усіх сайтів - ${costAllSites} 
    <br />
`;

const siteMadeBetween = companyWebsites.filter(
  (el) => el.releaseYear > 2000 && el.releaseYear < 2009
).length;

document.body.innerHTML += `2) кількість сайтів, що було зроблено між 2000 та 2009 рр. - ${siteMadeBetween} 
    <br />
`;

const siteSponsorshipInvestments = companyWebsites
  .map(({ sponsors }) =>
    sponsors.reduce((acc, { investment }) => (acc += investment), 0)
  )
  .filter((el) => el > 100000).length;

document.body.innerHTML += `3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000 - ${siteSponsorshipInvestments} 
    <br />
`;

const generalListAllSponsors = companyWebsites
  .map(({ sponsors }) =>
    sponsors
      .map(({ lastName, firstName }) => firstName + " " + lastName)
      .join(", ")
  )
  .join(", ");
document.body.innerHTML += `4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
 - ${generalListAllSponsors} 
    <br />
`;

const yearWhenProfitsWereHighest = Math.max(
  ...companyWebsites.map((el) => el.surplus)
);
const year = companyWebsites.find(
  (site) => site.surplus === yearWhenProfitsWereHighest
)?.releaseYear;

document.body.innerHTML += `5) знайти рік, коли прибуток ${yearWhenProfitsWereHighest} був найбільшим
 - ${year}
    <br />
`;

const listDescendingOrderProfit = companyWebsites
  .map((el) => el.surplus)
  .sort((a, b) => a - b)
  .join(", ");

document.body.innerHTML += `6) упорядкувати список за спаданням прибутку
 - ${listDescendingOrderProfit} 
    <br />
`;

const copyObjectCostLess10000 = JSON.parse(
  JSON.stringify(companyWebsites.filter((el) => el.siteCost < 100000))
);

const copyObjectCostMore10000 = JSON.parse(
  JSON.stringify(companyWebsites.filter((el) => el.siteCost > 100000))
);

console.log(copyObjectCostLess10000);
console.log(copyObjectCostMore10000);

document.body.innerHTML += `7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
 - 
`;
