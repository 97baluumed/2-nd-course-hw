//Задание 1
const str = 'js';
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

//Задание 2
function filterByStart(arr, startStr) {
    return arr.filter(str => str.toLowerCase().startsWith(startStr.toLowerCase()));
}

const strings = ["apple", "banana", "cherry", "Apricot", "Blueberry"];
const start = "a";
const result = filterByStart(strings, start);
console.log(result);

//Задание 3
const number = 32.58884;

const floor = Math.floor(number);
console.log(floor);

const ceil = Math.ceil(number);
console.log(ceil);

const round = Math.round(number);
console.log(round);

//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
console.log("Минимальное значение:", min);

const max = Math.max(...numbers);
console.log("Максимальное значение:", max);

//Задание 5
function randomNumber() {
    const num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
}

randomNumber();

//Задание 6
function randomArray(n) {
    const length = Math.floor(n / 2);
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (n + 1)));
  }

    return arr;
}

const res = randomArray(10);
console.log(res);

//Задание 7
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const resultTwo = randomNumber(1, 10);
console.log(resultTwo);

//Задание 8
const currentDate = new Date();
console.log(currentDate);

//Задание 9
let currentDateTwo = new Date ();

let days73 = 73 * 24 * 60 * 60 * 1000;

currentDate.setTime(currentDate.getTime() + days73);

console.log(currentDate);

//Задание 10
function formatDate(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const days = [
        'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${formattedTime}`;
}

const currentDateTen = new Date();
console.log(formatDate(currentDateTen));