// const URL = "https://6810912827f2fdac2411de32.mockapi.io";

// export const fetchProducts = async () => {
//   const response = await fetch(`${URL}//products`);

//   const data = await response.json();
//   return data;
// };

// export const fetchProductById = async (id) => {
//   const response = await fetch(`${URL}/products/${id}`);

//   const data = await response.json();
//   return data;
// };

// export const deleteProductById = async (id) => {
//   const response = await fetch(`${URL}/products/${id}`, {
//     method: "DELETE",
//   });

//   const data = await response.json();
//   return data;
// };

// export const insertProduct = async (data) => {
//   const response = await fetch(`${URL}/products`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Product-Type": "application/json" },
//   });

//   const candies = await response.json();
//   return candies;
// };
