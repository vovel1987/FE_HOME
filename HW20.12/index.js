const form = document.querySelector(".form");
const button = document.querySelector(".add_button");
const root = document.querySelector(".root");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { id_name } = event.target;
  console.log(id_name.value);
  // fetch(`https://fakestoreapi.com/products/${id_name.value}`)
  //   .then((resp) => resp.json())
  //   .then(({ title, price, description }) =>
  //     createPost(title, price, description)
  //   );
  //   .then((data) => console.log(data));
  data(`https://fakestoreapi.com/products/${id_name.value}`);

  id_name.value = "";
});

// function Newdata(userId){
//     fetch('https://fakestoreapi.com/products', {

// method:'POST',
// body

//     })
// }

function createPost(title, price, description) {
  setLocal([...retrunLocal(), { title, price, description, id: Date.now() }]);
  rerender();
  // const container = document.createElement("div");
  // const title_post = document.createElement("p");
  // const price_post = document.createElement("p");
  // const description_post = document.createElement("p");

  // container.append(title_post, price_post, description_post);
  // root.append(container);

  // title_post.innerText = title;
  // price_post.innerText = "Price = " + price;
  // console.log(price_post);
  // description_post.innerText = description;
  // container.classList.add("container_style");
  // title_post.classList.add("title_style");
  // price_post.classList.add("price_style");
  // description_post.classList.add("description_style");
}

function rerender() {
  root.innerText = "";
  retrunLocal().forEach(({ title, price, description,id }) => {
    const container = document.createElement("div");
    const title_post = document.createElement("p");
    const price_post = document.createElement("p");
    const description_post = document.createElement("p");
    const btn_delete = document.createElement("button");

    container.append(title_post, price_post, description_post, btn_delete);
    root.append(container);
    btn_delete.innerText = "DELETE";
    title_post.innerText = title;
    price_post.innerText = "Price = " + price;
    console.log(price_post);
    description_post.innerText = description;
    container.classList.add("container_style");
    title_post.classList.add("title_style");
    price_post.classList.add("price_style");
    description_post.classList.add("description_style");
    btn_delete.classList.add('btn_style')
    btn_delete.addEventListener("click", () => {
      postDelete(id);
    });
  });
}

rerender();

function postDelete(id) {
  const add = retrunLocal().filter((item) => item.id != id);
 
  setLocal(add);
  rerender();
}

function data(element) {
  // fetch("https://fakestoreapi.com/products/")
  fetch(element)
    .then((resp) => resp.json())
    .then(({ title, price, description }) =>
      createPost(title, price, description)
    );
}
// //   .then((data) => console.log(data));

function setLocal(a) {
  return localStorage.setItem("storage", JSON.stringify(a));
}
function retrunLocal() {
  return JSON.parse(localStorage.getItem("storage")) ?? [];
}
