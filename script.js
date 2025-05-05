const productsWrapper = document.getElementById("product-wrapper");

const fetchProducts = async () => {
  const response = await fetch(
    "https://6810912827f2fdac2411de32.mockapi.io/products"
  );

  const data = await response.json();
  return data;
};

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

// const buildCards = (data) => {
//   data.forEach((d) => {
//     const card = document.createElement("div");
//     // CSS class
//     card.classList.add("card");

//     card.addEventListener("click", () => {});

//     const title = document.createElement("h2");
//     title.textContent = d.title;

//     const img = document.createElement("img");
//     img.src = d.imgUrl;

//     const price = document.createElement("p");
//     price.textContent = `$${d.price}`;

//     const description = document.createElement("p");
//     description.textContent = d.description;

//     const location = document.createElement("p");
//     location.textContent = d.location;

//     card.append(img);
//     card.append(title);
//     card.append(price);
//     card.append(location);
//     card.append(description);

//     productsWrapper.append(card);
//   });
// };

const buildScreen = async () => {
  const products = await fetchProducts();
  buildCards(products);
};

buildScreen();

// import { fetchProducts } from "./utils/fetch.js";

// const candiesWrapper = document.getElementById("product-container");

// const buildCards = (data) => {
//   data.forEach((d) => {
//     const card = document.createElement("a");
//     card.href = `./product/index.html?id=${d.id}`;

//     card.classList.add("card");

//     const title = document.createElement("h2");
//     title.textContent = d.title;

//     const img = document.createElement("img");
//     img.src = d.imgUrl;

//     card.append(img);
//     card.append(title);

//     candiesWrapper.append(card);
//   });
// };

// const buildScreen = async () => {
//   const candies = await fetchCandies();
//   buildCards(candies);
// };

// buildScreen();

// async function fetchProducts() {
//   try {
//     const response = await fetch(
//       "https://6810912827f2fdac2411de32.mockapi.io/v1/products"
//     );
//     const products = await response.json();
//     const container = document.getElementById("product-container");

//     products.forEach((product) => {
//       const card = document.createElement("div");
//       card.className = "product-card";

//       card.innerHTML = `
//           <div class="product-image">
//             <img src="${product.imgUrl}" alt="Img" />
//           </div>
//           <div class="product-info">
//             <div class="product-title">${product.title}</div>
//             <div class="product-description">${product.description}</div>
//             <div class="product-location">${product.location}</div>
//             <div class="product-price">€${product.price}</div>
//           </div>
//         `;

//       container.appendChild(card);
//     });
//   } catch (error) {
//     // console.error("Error fetching products:", error);
//   }
// }

// fetchProducts();
