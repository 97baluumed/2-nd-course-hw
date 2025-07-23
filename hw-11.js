//Задание 1
const title = document.querySelector('#title-hw11');
const toggleButton = document.querySelector('#toggle-button-hw11');

toggleButton.addEventListener('click', () => {
    if (title.style.display === 'none') {
        title.style.display = 'block';
        toggleButton.textContent = 'Скрыть';
    } else {
        title.style.display = 'none';
        toggleButton.textContent = 'Показать';
    }
});

//Задание 2
const text = document.querySelector('#text-hw11');
const changeColorButton = document.querySelector('#change-color-button-hw11');

changeColorButton.addEventListener('click', () => {
    text.style.color = 'blue';
});
//Задание 3
const title3 = document.querySelector('#title-task3-hw11');
const changeTextButton = document.querySelector('#change-text-button-task3-hw11');

changeTextButton.addEventListener('click', () => {
    title3.textContent = 'Привет, мир!';
});

//Задание 4
const descriptions = document.querySelectorAll('.description-task4-hw11');

descriptions.forEach(description => {
    description.textContent = 'Измененный текст';
});
//Задание 5
const descriptions5 = document.querySelectorAll('.description-task5-hw11');

descriptions5.forEach(description5 => {
    description5.textContent = 'Новый текст';
});

//Задание 6
const addElementButton = document.querySelector('#add-element-button-task6-hw11');

addElementButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';

    document.body.appendChild(newParagraph);
});

//Задание 7
const removeElementButton = document.querySelector('#remove-element-button-task7-hw11');

removeElementButton.addEventListener('click', () => {
    const firstDescription = document.querySelector('.description-task7-hw11');

    if (firstDescription) {
        firstDescription.remove();
    }
});