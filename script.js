async function fetchProducts() {
  try {
    const response = await fetch(
      "https://6810912827f2fdac2411de32.mockapi.io/v1/products"
    );
    const products = await response.json();
    const container = document.getElementById("product-container");

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
          <div class="product-image">
            <img src="${product.imgUrl}" alt="Img" />
          </div>
          <div class="product-info">
            <div class="product-title">${product.title}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-location">${product.location}</div>
            <div class="product-price">€${product.price}</div>
          </div>
        `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();
