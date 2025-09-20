"use strict";
class Baner {
    constructor(webLinkAndImg) {
        this.webLinkAndImg = webLinkAndImg;
    }
    randomSelectionObject() {
        const randomNum = Math.floor(Math.random() * this.webLinkAndImg.length);
        return this.webLinkAndImg[randomNum];
    }
    displayingRandomBanner() {
        const randomBaner = Math.floor(Math.random() * this.webLinkAndImg.length);
        return this.webLinkAndImg[randomBaner];
    }
}
const imageLinks = [
    {
        title: "OpenAI",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdcgkdcDy5z4PYGx_kDJB1AvvC_x1pCBbbQ&s",
        link: "https://openai.com/",
        baner: "https://rpk-rostov.ru/wp-content/uploads/2021/10/fl1455871649-2048x1574-min-1024x787.jpg",
    },
    {
        title: "Wikipedia",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png",
        link: "https://www.wikipedia.org/",
        baner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrRG0aHREQDzpdm9cIL8kFBt4JI1_P0DY5w&s",
    },
    {
        title: "GitHub",
        imgSrc: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        link: "https://github.com/",
        baner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73wk5aOd6idlhBoVBTAVWI0sVFf6N77T1vg&s",
    },
    {
        title: "Rozetka",
        imgSrc: "https://xl-static.rozetka.com.ua/assets/img/main/rozetka.png",
        link: "https://rozetka.com.ua/",
        baner: "https://ra-sens.com.ua/wp-content/uploads/2022/05/barrier-advertising-banner-mockup_439185-2593-1.jpg",
    },
];
const firstBaner = new Baner(imageLinks);
const el = firstBaner.randomSelectionObject();
const viewBaner = firstBaner.displayingRandomBanner();
document.body.innerHTML += `
  <div style="background-image: url(${viewBaner.baner});">
        <img src="${el.imgSrc}" alt="${el.title} "  style="width: 250px; height: 250px;"></img><a href="${el.link}">Link</a>
    </div>`;
console.log(viewBaner);
