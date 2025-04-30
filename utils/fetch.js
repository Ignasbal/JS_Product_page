const URL = "https://6810912827f2fdac2411de32.mockapi.io";

export const fetchProducts = async () => {
  const response = await fetch(`${URL}//products`);

  const data = await response.json();
  return data;
};
