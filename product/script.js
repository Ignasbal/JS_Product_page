import { fetchProductById, deleteProductById } from "../utils/fetch.js";

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

// const id = localStorage.getItem("productId");

const img = document.getElementById("img");
const title = document.getElementById("title");
const price = document.getElementById("price");
const location = document.getElementById("location");
const description = document.getElementById("description");

const deleteBtn = document.getElementById("delete-btn");

const message = document.getElementById("message");

console.log(id);

const insertDataToScreen = (product) => {
  img.src = product.imgUrl;
  title.textContent = product.title;
  price.textContent = `${product.price} €`;
  location.textContent = product.location;
  description.textContent = product.description;
};
const buildScreen = async () => {
  const product = await fetchProductById(id);

  insertDataToScreen(product);
};

buildScreen();

deleteBtn.addEventListener("click", async () => {
  try {
    const deleted = await deleteProductById(id);

    if (deleted && deleted.id) {
      // Check if the API returned a deleted object
      message.textContent = "Produktas ištrintas!";

      setTimeout(() => {
        window.location.replace("../index.html");
      }, 2000);
    } else {
      message.textContent = "Klaida trinant produktą.";
    }
  } catch (error) {
    console.error("Delete failed:", error);
    message.textContent = "Įvyko klaida trinant.";
  }
});
