"use strict";
const company = {
    name: "TechVision",
    founded: {
        year: 2018,
        month: "April",
    },
    services: [
        {
            title: "Веб-розробка",
            price: 1500,
            duration: "3 тижні",
        },
        {
            title: "Мобільний застосунок",
            price: 5000,
            duration: "2 місяці",
        },
    ],
    branches: [
        {
            country: "Україна",
            city: "Київ",
            street: "Хрещатик",
            building: 12,
        },
        {
            country: "Німеччина",
            city: "Берлін",
            street: "Friedrichstrasse",
            building: 45,
        },
    ],
    numberOfYearsOfCompanysExistence() {
        const date = new Date().getFullYear();
        return date - this.founded.year;
    },
    withdrawalAllBranchesCompany() {
        return this.branches.map((el) => el.city);
    },
    displayingServicesScreen() {
        return this.services.map((el) => el.title);
    },
};
console.log(company.withdrawalAllBranchesCompany());
document.body.innerHTML += `Компанії ${company.numberOfYearsOfCompanysExistence()} років   <br />`;
document.body.innerHTML += `філіал компанії ${company.withdrawalAllBranchesCompany()}  <br />`;
document.body.innerHTML += `Послуги компанії
 ${company.displayingServicesScreen()}  <br />`;
