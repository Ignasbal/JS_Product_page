// const submitBtn = document.getElementById("submit_btn");
// const titleInput = document.getElementById("title");
// const priceInput = document.getElementById("price");
// const imgUrlInput = document.getElementById("imgUrl");
// const locationInput = document.getElementById("location");
// const descriptionInput = document.getElementById("description");

// const insertProduct = async (data) => {
//   try {
//     const response = await fetch(
//       "https://6810912827f2fdac2411de32.mockapi.io/products",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );
//     const result = await response.json();
//     console.log("Inserted product:", result);
//   } catch (error) {
//     console.error("Failed to insert product:", error);
//   }
// };

// submitBtn.addEventListener("click", async (e) => {
//   e.preventDefault();

//   const data = {
//     title: titleInput.value,
//     price: priceInput.value,
//     imgUrl: imgUrlInput.value,
//     location: locationInput.value,
//     description: descriptionInput.value,
//   };

//   await insertProduct(data);
// });

const submitBtn = document.getElementById("submit_btn");
const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const imgUrlInput = document.getElementById("imgUrl");
const locationInput = document.getElementById("location");
const descriptionInput = document.getElementById("description");

const insertProduct = (data) => {
  const response = fetch(
    "https://6810912827f2fdac2411de32.mockapi.io/products",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
};

submitBtn.addEventListener("click", async () => {
  const data = {
    title: titleInput.value,
    price: priceInput.value,
    imgUrl: imgUrlInput.value,
    location: locationInput.value,
    description: descriptionInput.value,
  };

  insertProduct(data);

  console.log("data", data);
});

// import { insertProduct } from "../utils/fetch.js";
// import { validateInsert } from "../utils/validation.js";

// const submitBtn = document.getElementById("sumbit-btn");
// const titleInput = document.getElementById("title");
// const ratingInput = document.getElementById("rating");
// const imgUrlInput = document.getElementById("imgUrl");
// const priceInput = document.getElementById("price");
// const descriptionInput = document.getElementById("description");
// const successMessage = document.getElementById("succsess-message");

// submitBtn.addEventListener("click", async () => {
//   const data = {
//     title: titleInput.value,
//     imgUrl: imgUrlInput.value,
//     price: +priceInput.value,
//     description: descriptionInput.value,
//     rating: +ratingInput.value,
//   };

//   const isValidationError = validateInsert(data);

//   if (isValidationError) {
//     console.log("there is validation error");
//     return;
//   }

//   const product = await insertProduct(data);

//   if (product) {
//     successMessage.textContent = "Product was added successfully";

//     setTimeout(() => {
//       window.location.replace("../index.html");
//     }, 3000);
//   }
// });
