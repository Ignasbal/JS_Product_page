const url = new URL(window.location.href);
const id = url.searchParams.get("id");

// const id = localStorage.getItem("productId");

const img = document.getElementById("img");
const title = document.getElementById("title");
const price = document.getElementById("price");
const location = document.getElementById("location");
const description = document.getElementById("description");

console.log(id);

const fetchProductById = async () => {
  const response = await fetch(
    `https://6810912827f2fdac2411de32.mockapi.io/products/${id}`
  );

  const data = await response.json();
  return data;
};

const insertDataToScreen = (product) => {
  img.src = product.imgUrl;
  title.textContent = product.title;
  price.textContent = `${product.price} €`;
  location.textContent = product.location;
  description.textContent = product.description;
};
const buildScreen = async () => {
  const product = await fetchProductById();

  insertDataToScreen(product);
};

buildScreen();
