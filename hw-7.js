// Задание 1
function getMin(a, b) {
    return Math.min(a, b);
}

console.log(getMin(8, 4));
console.log(getMin(6, 6));

// Задание 2
function checkEven(n) {
    if (n % 2 === 0) {
        return 'Число четное';

    } else {
        return 'Число нечетное';
    }
}

console.log(checkEven(4));
console.log(checkEven(7));

// Задание 3
let degree = 2;
function printSquare(n) {
    console.log(n ** degree);
}

function getSquare(n) {
    return n ** degree;
}

printSquare(5);
console.log(getSquare(5));

// Задание 4
function checkAge() {
    const age = prompt('Сколько вам лет?');

    if (age === null) {
        alert('Ну и не надо');
        return;
    }

  const userAge = parseInt(age, 10);

    if (isNaN(userAge)) {
        alert('Вы ввели неправильное значение.');
    } else if (userAge < 0) {
        alert('Вы ввели неправильное значение.');
    } else if (userAge >= 0 && userAge <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

checkAge();

// Задание 5
function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }
        return a * b;
}

console.log(multiply(2, 3));
console.log(multiply('a', 3));

// Задание 6
let degreeCube = 3;

function cube() {
    const n = prompt('Введите число:');

    if (n === null) {
        alert('Введены не верные данные');
        return;
    }

    const number = parseFloat(n);

    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    }
        return `${number} в кубе равняется ${number ** degreeCube}`;
}

console.log(cube());

// Задание 7
const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());