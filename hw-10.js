function functionWithCallback(callback) {
   // Передаем в колбэк-функцию 2 аргумента: "Глеб" и "Фокин"
   callback("Глеб", "Фокин");
}

functionWithCallback((name, surname) => {
   // Внутри колбэк-функции мы можем использовать данные,
   // которые передает в него код, который его вызывает
   console.log(`Привет, ${name} ${surname}!`);
   // Выведет в консоль «Привет, Глеб Фокин!»
});

function add(number1, number2) {
   return number1 + number2;
}

console.log(add(5, 3)); // 8
console.log(add(10, 3)); // 13