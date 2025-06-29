// Игра Угадай число
function guessNumber() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    while (true) {
        const userGuess = prompt("Угадайте число от 1 до 100:");
        attempts++;

        if (userGuess === null) {
            alert("Игра завершена.");
            break;
        }
        const guess = parseInt(userGuess, 10);
        if (isNaN(guess)) {            alert("Введите число.");
            continue;
        }
        if (guess === targetNumber) {            alert(`Вы угадали! Число было ${targetNumber}. Вы сделали ${attempts} попыток.`);
            break;
        } else if (guess < targetNumber) {
            alert("Загаданное число больше.");
        } else {
            alert("Загаданное число меньше.");
        }
    }
}
// Игра Простая арифметика
function simpleMath() {
    const operations = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    const userAnswer = prompt(`Сколько будет ${num1} ${operation} ${num2}?`);
    if (userAnswer === null) {
        alert("Игра завершена.");
        return;
    }
    const answer = parseFloat(userAnswer);
    if (isNaN(answer)) {
        alert("Введите число.");
    } else if (answer === result) {
        alert("Правильно!");
    } else {
        alert(`Неправильно. Правильный ответ: ${result}.`);
    }
}
// Игра Переверни текст
function reverseText() {
    const userInput = prompt("Введите текст:");
    if (userInput === null) {
        alert("Игра завершена.");
        return;
    }
    const reversedText = userInput.split('').reverse().join('');
    alert(`Перевернутый текст: ${reversedText}`);
}
// Игра Камень, ножницы, бумага
// Игра Простая викторина
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];
function startQuiz() {
    let correctCount = 0;
    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        const userAnswer = prompt(`${question.question}\n${question.options.join('\n')}`);
        if (userAnswer === null) {
            alert('Игра завершена.');
            return;
        }
        const answer = parseInt(userAnswer);
        if (isNaN(answer)) {
            alert('Введите число.');
            continue;
        }
        if (answer === question.correctAnswer) {
            correctCount++;
            alert('Правильно!');
        } else {
            alert(`Неправильно. Правильный ответ: ${question.correctAnswer}.`);
        }
    }
    alert(`Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов.`);
}
// Игра Генератор случайных цветов