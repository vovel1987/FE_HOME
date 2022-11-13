// 1)
// Создать две кнопки - одна из них блокирует input с помощью атрибута disabled, а другая разблокирует.
// Заблокировать Разблокировать -
// Какой-то текст! - input
const activElement = document.querySelector(".activ");
const notActivElement = document.querySelector(".notActiv");
const newInput = document.querySelector("#inputActiv");

activElement.addEventListener("click", inputActiv);
notActivElement.addEventListener("click", inputNotActiv);

function inputActiv(event) {
  newInput.disabled = false;
}

function inputNotActiv(event) {
  newInput.disabled = true;
}

// 2)
// Задача querySelectorAll
// Поменяйте содержимое абзацев на их порядковый номер в коде.
// Используйте перебор, индексы и textContent

// Заголовок, не поменяется.

// Абзац, поменяется.

// Абзац, поменяется.

// Абзац, поменяется.

// Second level:

const elements = document.querySelectorAll(".item");
const inputSubmit = document.querySelector("#sub");
console.log(elements);
inputSubmit.addEventListener("click", changeValue);

function changeValue(event) {
  elements.forEach((item, index) => (item.textContent = index + 1));
}
