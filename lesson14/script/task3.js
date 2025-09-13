import { dataList } from "./prodObj.js";
const totalPrice = dataList
    .map((el) => el)
    .reduce((acc, { price }) => (acc += price), 0);
document.body.innerHTML += `<p>Загальна вартість: 
${totalPrice} </p>`;
const numberGoods = dataList
    .filter((el) => el.price < el.old_price)
    .reduce((acc) => (acc += 1), 0);
document.body.innerHTML += `<p>Кількість товарів, у яких ціна зменшилась: 
${numberGoods} </p>`;
const productsThatAvailable = dataList
    //   .map((el) => el)
    .filter((el) => el.sell_status === "available");
console.log(productsThatAvailable);
console.log(dataList);
document.body.innerHTML += `<p>Товари, які доступні : 
${productsThatAvailable.length} з ${dataList.length}</p>`;
const newObj = dataList.map(({ id, price, old_price, usd_price }) => {
    return { id, price, old_price, usd_price };
});
console.log(newObj);
