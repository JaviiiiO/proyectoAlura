const products = document.querySelector(".product-list");

async function deleteProduct(id) {
    try {
        const res = await fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
        });
        if (!res.ok) throw new Error("Error al eliminar el producto");
        console.log("Producto eliminado");
        
        // Opcional: Remover el elemento del DOM después de eliminarlo del servidor
        const listItem = document.querySelector(`.product-item[data-product-id="${id}"]`);
        if (listItem) {
            listItem.remove();
        }
    } catch (err) {
        console.error("Error al eliminar el producto:", err);
    }
}

products.addEventListener("click", (event) => {
    if (event.target.classList.contains("borrar")) {
        const listItem = event.target.closest(".product-item");
        console.log(listItem)
        if (listItem) {
            const productId = listItem.getAttribute("data-product-id");
            console.log(productId)
            deleteProduct(productId);
        }
    }
});
