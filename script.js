import { fetchProducts } from "./utils/fetch.js";

const productsWrapper = document.getElementById("product-wrapper");

const buildCards = (data) => {
  data.forEach((d) => {
    const card = document.createElement("a");
    card.href = `./product/index.html?id=${d.id}`;

    card.classList.add("card");

    // card.addEventListener("click", () => {
    //   localStorage.setItem("productId", d.id);

    //   console.log("Product ID:", d.id);
    // });

    const img = document.createElement("img");
    img.src = d.imgUrl;

    const content = document.createElement("div");
    content.classList.add("card-content");

    const title = document.createElement("h2");
    title.textContent = d.title;

    const description = document.createElement("p");
    description.textContent = d.description;
    description.classList.add("description");

    const location = document.createElement("p");
    location.textContent = d.location;
    location.classList.add("location");

    const price = document.createElement("p");
    price.textContent = `${d.price} €`;
    price.classList.add("price");

    content.append(title, description, location, price);
    card.append(img, content);
    productsWrapper.append(card);
  });
};

const buildScreen = async () => {
  const products = await fetchProducts();

  // Sort by price (ascending)
  products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

  buildCards(products);
};
// const buildScreen = async () => {
//   const products = await fetchProducts();
//   buildCards(products);
// };

buildScreen();
