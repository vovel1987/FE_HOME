// First level: 1)Создайте кнопку в html при нажатию на которую в консоль выводится "привет".

// 2)Создайте блок в html c картинкой и кнопку. При нажатии на кнопку блок с картинкой должен получать
// border-radius 50px и overflow hidden. При нажатии второй раз на кнопку стили должны убираться
// и возвращаться к исходным. Реализуйте через classList.toggle()

let buttonClick = document.querySelector(".hallo");
buttonClick.addEventListener("click", showConsole);
function showConsole(event) {
  console.log("Privet");
  buttonClick.removeEventListener("click", showConsole);
}

let imageEvent = document.querySelector(".image1");
let buttonImage = document.querySelector(".clickImage");

buttonImage.addEventListener("click", changeBorder);

function changeBorder(event) {
  imageEvent.classList.toggle("image");
  imageEvent.classList.toggle("image1");
}