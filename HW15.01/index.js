const block = document.querySelector(".container");
const button = document.querySelector(".delete");
const form = document.querySelector(".form");

//----------------------------------------------------------------------

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTitle = title.value;
  const newDescr = description.value;
  const newPrice = price.value;
  const newProduct = {
    title: newTitle,
    description: newDescr,
    price: newPrice,
  };
  console.log(newProduct);
  addPost(newProduct);
});

const addPost = (post) => {
  fetch(`https://fakestoreapi.com/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      showNewProduct(data);
      // clearInputs();
    });
};

const showNewProduct = (elem) => {
  block.innerHTML += `
     <div class='post'>
     <p> ${elem.title}</p>
     <p> ${elem.price}</p>
      <p>${elem.description} </p>
     <button class='delete'>Delete</button>
     </div>
  `;
};

function createElement(data) {
  block.innerHTML = "";
  data.map((elem) => {
    block.innerHTML += `
     <div class='post'>
     <p> ${elem.title}</p>
     <p> ${elem.price}</p>
      <p>${elem.description} </p>
     <button class='delete'>Delete</button>
     </div>
  `;
  });
}

const fetchData = () => {
  fetch(`https://fakestoreapi.com/products`)
    .then((resp) => resp.json())
    .then((data) => createElement(data));
};
fetchData();
