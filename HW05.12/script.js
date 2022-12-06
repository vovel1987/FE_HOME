const textarea = document.querySelector(".input_text");
const button = document.querySelector(".btn_delete");

if (localStorage.getItem("value")) {
  textarea.innerText = localStorage.getItem("value");
}

textarea.addEventListener("input", (event) => {
  event.preventDefault();
  value_text = textarea.value;
  console.log(value_text);
  localStorage.setItem("value", value_text);
});

button.addEventListener("click", () => {
  localStorage.removeItem("value");
//   textarea.value = "kein info";
  //   textarea.placeholder = "kein info";
});
