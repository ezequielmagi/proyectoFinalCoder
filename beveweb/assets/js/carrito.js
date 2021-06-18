class Carrito {
  comprarProducto(evento) {
    evento.preventDefault();

    if (evento.target.classList.contains("agregarAlCarrito")) {
      const producto = evento.target.parentElement;
      console.log(producto);
      this.leerDatosProducto(producto);
    }
  }

  leerDatosProducto(producto) {
    const infoProducto = {
      imagen: producto.querySelector("img").src,
      titulo: producto.querySelector("h5").textContent,
      precio: producto.querySelector(".precio--producto").textContent,
      id: producto.querySelector(".productoId").textContent,
      cantidad: 1,
    };
    console.log(infoProducto.imagen);
    console.log(infoProducto.titulo);
    console.log(infoProducto.precio);
    console.log(infoProducto.id);
    this.mostrarEnPreventa(infoProducto);
  }
  mostrarEnPreventa(infoProducto) {
    preVentaContainer.classList.toggle("preVenta-active");
    subTotalCalculado.textContent = `$ ${infoProducto.precio}`;
    imgProducto.setAttribute("src", infoProducto.img);
    articulo.textContent = infoProducto.articulo;
    precioUnitario.textContent = `$ ${infoProducto.precio}`;
    idProducto = infoProducto.id;
  }
}

//
const carro = new Carrito();
const productos = document.getElementById("products");
const preVentaContainer = document.getElementById("preventa");
const closePreventa = document.getElementById("close-button");

closePreventa.addEventListener("click", (e) => {
  e.preventDefault();
  preVentaContainer.classList.remove("preVenta-active");
});

//
const botonAbrir = document.getElementById("carrito");
const contenedorModal = document.getElementsByClassName("modal-contenedor")[0];
const botonCerrar = document.getElementById("carritoCerrar");
const modalCarrito = document.getElementsByClassName("modal-carrito")[0];

botonAbrir.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
  preVentaContainer.classList.toggle("preVenta-active");
});

botonCerrar.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});

contenedorModal.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});

modalCarrito.addEventListener("click", (event) => {
  event.stopPropagation();
});

productos.addEventListener("click", (evento) => {
  carro.comprarProducto(evento);
});
