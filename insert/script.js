const submitBtn = document.getElementById("submit_btn");
const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const imgUrlInput = document.getElementById("imgUrl");
const locationInput = document.getElementById("location");
const descriptionInput = document.getElementById("description");
const messageDiv = document.getElementById("message");

const insertProduct = async (data) => {
  try {
    const response = await fetch(
      "https://6810912827f2fdac2411de32.mockapi.io/products",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Failed to insert product:", error);
    messageDiv.textContent =
      "Nepavyko pateikti produkto. Bandykite dar kartą vėliau. ;( ";
    messageDiv.style.color = "red";
  }
};

submitBtn.addEventListener("click", async () => {
  const data = {
    title: titleInput.value.trim(),
    price: +priceInput.value,
    imgUrl: imgUrlInput.value.trim(),
    location: locationInput.value.trim(),
    description: descriptionInput.value.trim(),
  };

  // Input Validation
  if (!data.title || !data.imgUrl || !data.location || !data.description) {
    messageDiv.textContent = "Užpildykite informacija.";
    messageDiv.style.color = "#bd1b05";
    return;
  }

  if (isNaN(data.price) || data.price <= 0) {
    messageDiv.textContent = "Įveskite kainą, didesnę nei 0.";
    messageDiv.style.color = "#bd1b05";
    return;
  }

  const products = await insertProduct(data);

  if (products) {
    console.log("products", products);

    // Kai sėkmingas siuntimas restartuoja laukus
    titleInput.value = "";
    priceInput.value = "";
    imgUrlInput.value = "";
    locationInput.value = "";
    descriptionInput.value = "";

    // Sėkmingas siuntimas
    messageDiv.textContent = "Produktas pridėtas sėkmingai!";
    messageDiv.style.color = "green";

    // Žinutė išnyksta
    setTimeout(() => {
      messageDiv.textContent = "";
    }, 5000);
  }
});
