const block = document.querySelector(".container");
const button = document.querySelector(".delete");
const form = document.querySelector(".form");



let products = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((product) => {
    console.log(product);
    products = [...product];
    render();
  });

function render() {
  block.innerText = "";
  products.forEach((product) => {
    const post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
    <p>${product.category}</p>
    <p class='title'>${product.title}</p>
    <div class='image'>
    <image src='${product.image}'
    </div>
    <p>${product.description}</p>
    <p>${product.price}</p>
    <div class="rating">
               <div class="rate">rate - ${product.rating.rate}</div>
                <div class="count">count - ${product.rating.count}</div>
     </div>
     <button class="delete">DELETE</button>

    `;

    block.append(post);
    const button = post.querySelector(".delete");

    button.addEventListener("click", () => removeProduct(product));
  });
}

function removeProduct(product) {
  products = [...products.filter((elem) => elem.id !== product.id)];
  render();
}
