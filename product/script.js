const id = localStorage.getItem("productId");

console.log("Product ID:", id);

const fetchProductById = async () => {
  const response = await fetch(
    "https://6810912827f2fdac2411de32.mockapi.io/products/1"
  );

  const data = await response.json();
  return data;
};

const buildScreen = async () => {
  const product = await fetchProductById();
  console.log(product);
};

buildScreen();
