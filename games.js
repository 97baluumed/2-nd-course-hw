// Игра Угадай число
function guessNumber() {
    event.preventDefault();
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
    event.preventDefault();
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
    event.preventDefault();
    const userInput = prompt("Введите текст:");
    if (userInput === null) {
        alert("Игра завершена.");
        return;
    }
    const reversedText = userInput.split('').reverse().join('');
    alert(`Перевернутый текст: ${reversedText}`);
}
//Игра Камень, ножницы, бумага
function playGame() {
    event.preventDefault();
    const choices = ["камень", "ножницы", "бумага"];

    const userChoice = prompt("Выберите: камень, ножницы или бумага?");

    if (userChoice === null) {
        alert("Игра завершена.");
        return;
    }

    const normalizedUserChoice = userChoice.toLowerCase();

    if (!choices.includes(normalizedUserChoice)) {
        alert("Выберите камень, ножницы или бумагу.");
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (normalizedUserChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (normalizedUserChoice === "камень" && computerChoice === "ножницы") ||
        (normalizedUserChoice === "ножницы" && computerChoice === "бумага") ||
        (normalizedUserChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы выиграли!";
    } else {
        result = "Вы проиграли!";
    }

    alert(`Вы выбрали ${normalizedUserChoice}, компьютер выбрал ${computerChoice}. ${result}`);
}
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
    event.preventDefault();
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
