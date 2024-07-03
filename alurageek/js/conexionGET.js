const products = document.querySelector(".product-list");

async function fetchProducts() {
  try {
    const res = await fetch("http://localhost:3000/products");
    if (!res.ok) throw new Error("Error al solicitar los productos");
    const data = await res.json();

    if(data.length === 0) {
        products.innerHTML = `<h2>Añade un nuevo producto</h2>`;
        }
    else{
    data.forEach((product) => {
        const li = document.createElement("li");
        li.classList.add("product-item");
        li.setAttribute("data-product-id", product.id);

        li.innerHTML = `
            <img src=${product.img} alt="imagen de producto" />
            <div class="info">
                <h2>${product.name}</h2>
                <div class="price">
                <p>Q${product.price}</p>
                <img src="public/basura.svg" alt="eliminar producto" class="borrar" id="borrar" />
                </div>
            </div>
        `; 
        products.appendChild(li);
    });
}
  } catch (err) {
    console.error(err);
  }
}

fetchProducts();