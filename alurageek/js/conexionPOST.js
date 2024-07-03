// Obtener referencias a los elementos del DOM
const nombreInput = document.querySelector("#product-name");
const priceInput = document.querySelector("#product-price");
const imgInput = document.querySelector("#product-image");
const enviarButton = document.querySelector("#enviar");

// Función para enviar los datos del producto
async function agregarProducto(name, price, img) {
    try {
        const res = await fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                price: price,
                img: img,
            }),
        });
        if (!res.ok) throw new Error("Error al agregar el producto");
        const data = await res.json();
        console.log("Producto agregado:", data);
    } catch (err) {
        console.error("Error al agregar el producto:", err);
    }
}

// Agregar evento de clic al botón enviar
enviarButton.addEventListener("click", () => {
    // Obtener los valores actuales de los campos de entrada
    const nombre = nombreInput.value;
    const price = priceInput.value;
    const img = imgInput.value;

    // Llamar a la función para agregar el producto
    agregarProducto(nombre, price, img);
});