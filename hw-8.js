//Задание 1
const arrOne = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === 10) {
        console.log(arrOne[i]);
        break;
    }
    console.log(arrOne[i]);
}

//Задание 2
/*Способ 1
const arrayTwo = [1, 5, 4, 10, 0, 3];

console.log(arrayTwo.indexOf(4))*/

//Способ 2
const arrTwo = [1, 5, 4, 10, 0, 3];
let index = 'Нет такого значения в массиве';

for (let i = 0; i < arrTwo.length; i++) {
    if (arrTwo[i] === 4) {
        index = i;
        break;
    }
}

console.log(index);

//Задание 3
const arrTree = [1, 3, 5, 10, 20];

let joinArrTree = arrTree.join(" ");

console.log(joinArrTree)

//Задание 4
const matrix = [];

for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    
    for (let x = 0; x < 3; x++) {
        matrix[i][x] = 1;
    }
}

console.log(matrix);

//Задание 5
const arrFive = [1, 1, 1];

arrFive.push(2);
arrFive.push(2);
arrFive.push(2);

console.log(arrFive)

//Задание 6
const arrSix = [9, 8, 7, 'a', 6, 5];

arrSix.sort();
arrSix.pop();

console.log(arrSix)

//Задание 7
/*const arrSeven = [9, 8, 7, 6, 5];

const userGuess = prompt("Угадайте число:");

if (arrSeven.includes(parseInt(userGuess))) {
  alert("Угадал");
} else {
  alert("Не угадал");
}*/

//Задание 8
const strEight = 'abcdef'
const arrEight = strEight.split('');

arrEight.reverse();
const strEightTwo = arrEight.join('');

console.log(strEightTwo);

//Задание 9
const arrNine = [
    [1, 2, 3],
    [4, 5, 6]
];

const arrNineTog = [...arrNine[0], ...arrNine[1]]

console.log(arrNineTog)

//Задание 10
const arrTen = [8, 10, 1, 9, 5, 6]

for (let i = 0; i < arrTen.length; i++) {
    if (i === arrTen.length - 1) {
        console.log(arrTen[i]);
    } else {
        let sum = arrTen[i] + arrTen[i + 1];
        console.log(sum);
    }
}

//Задание 11
function squareArray(arr) {
    return arr.map(num => num ** 2);
}

const numbersOne = [1, 2, 3, 4, 5];
console.log(squareArray(numbersOne));

//Задание 12
function stringLengths(arr) {
    return arr.map(str => str.length);
}

const words = ["apple", "banana", "cherry"];
console.log(stringLengths(words));

//Задание 13
function negativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

const numbersTwo = [1, -2, 3, -4, 5, -6];
console.log(negativeNumbers(numbersTwo));

//Задание 14
const originalArray = [];
for (let i = 0; i < 10; i++) {
  originalArray.push(Math.floor(Math.random() * 11));
}

const evenNumbers = originalArray.filter(num => num % 2 === 0);

console.log("Исходный массив:", originalArray);
console.log("Массив с четными числами:", evenNumbers);

//Задание 15
const originalArrayTwo = [];
for (let i = 0; i < 6; i++) {
  originalArrayTwo.push(Math.floor(Math.random() * 10) + 1);
}

const average = originalArrayTwo.reduce((acc, curr) => acc + curr, 0) / originalArrayTwo.length;

console.log("Исходный массив:", originalArrayTwo);
console.log("Среднее арифметическое:", average);