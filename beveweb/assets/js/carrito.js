const botonAbrir = document.getElementById("carrito");
const contenedorModal = document.getElementsByClassName("modal-contenedor")[0];
botonAbrir.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
  preVentaContainer.classList.toggle("preVenta-active");
});

const botonCerrar = document.getElementById("carritoCerrar");
botonCerrar.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});

contenedorModal.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});

const modalCarrito = document.getElementsByClassName("modal-carrito")[0];
modalCarrito.addEventListener("click", (event) => {
  event.stopPropagation();
});
