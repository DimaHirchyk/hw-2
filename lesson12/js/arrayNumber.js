export function randomArray() {
    let arr = [];
    for (let i = 0; i < 30; i++) {
        let num = Math.floor(Math.random() * 100) - 50;
        arr.push(num);
    }
    return arr;
}
