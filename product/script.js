// import { fetchProductById, deleteProductById } from "../utils/fetch.js";

// const url = new URL(window.location.href);
// const id = url.searchParams.get("id");

// const title = document.getElementById("title");
// const description = document.getElementById("description");
// const img = document.getElementById("img");

// const deleteBtn = document.getElementById("delete-btn");

// const message = document.getElementById("message");

// const insertDataToScreen = (product) => {
//   title.textContent = product.title;
//   description.textContent = product.description;
//   img.src = product.imgUrl;
// };

// const buildScreen = async () => {
//   const candy = await fetchProductById(id);
//   insertDataToScreen(product);
// };

// buildScreen();

// deleteBtn.addEventListener("click", async () => {
//   const candy = await deleteProductById(id);
//   if (candy) {
//     message.textContent = "Product was added deleted";

//     setTimeout(() => {
//       window.location.replace("../index.html");
//     }, 3000);
//   }
// });
