const form_prod = document.querySelector(".form_prod");
const product_cards = document.querySelector(".product_cards");
const summeAll = document.querySelector(".summeAll");
const quantityAll = document.querySelector(".quantityAll");

let products_basa = [];

form_prod.classList.add("form_prod");

form_prod.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = form_prod.title.value;
  const price = form_prod.price.value;
  const quantity = form_prod.quantity.value;

  products_basa.push({
    title,
    price,
    quantity,
  });

  form_prod.title.value = "";
  form_prod.price.value = "";
  form_prod.quantity.value = "";
  rerender();
});

function rerender() {
  const infoSumme = document.createElement("p");
  const infoQuantity = document.createElement("p");
  product_cards.innerText = "";
  infoSumme.innerText = "";
  summeAll.innerText = "";
  infoQuantity.innerText = "";
  quantityAll.innerText = "";

  if (products_basa.length === 0) {
    const info = document.createElement("p"); //Не работает проверка на пустой массив не понимаю почему  _?
    // info.classList.add("product_card");
    info.innerText = "Kein Produkt";
    product_cards.append(info);
  } else {
    products_basa.forEach((elem) => {
      const container = document.createElement("div");
      const title_p = document.createElement("p");
      const price_p = document.createElement("p");
      const quantity_p = document.createElement("p");

      container.append(title_p, price_p, quantity_p);
      product_cards.append(container);
      container.classList.add("product_card");

      title_p.innerText = elem.title;
      price_p.innerText = elem.price;
      quantity_p.innerText =
        ` ${elem.price} x ${elem.quantity} = ` + elem.price * elem.quantity;

      const totalSumme = products_basa.reduce(
        (acc, elem) => acc + elem.price * elem.quantity,
        0
      );
      const tottalQuantity = products_basa.reduce(
        (acc, elem) => acc + Number(elem.quantity),
        0
      );

      infoSumme.innerText = `Gesamtkosten : ${totalSumme}`;
      summeAll.append(infoSumme);
      infoQuantity.innerText = "Gesamt : " + tottalQuantity;
      quantityAll.append(infoQuantity);

      summeAll.classList.add("summeAll");
      quantityAll.classList.add("quantityAll");
    });
  }
}
