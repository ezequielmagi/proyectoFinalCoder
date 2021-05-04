//tomamos el contenedor html donde renderizamos los productos
const listaProductos = document.getElementById("products");

//Renderizamos los productos tomados del products.js
ListarProductos(products);

//inicializamos el carrito
let carrito = [];

//funcion que crea la lista de productos
function ListarProductos(arrayProductos) {
  //inicializamos vacio el contenedor para evitar que se dupliquen los productos al
  //filtrar con filtrarPorTipoDeComida
  listaProductos.innerHTML = "";

  arrayProductos.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("products");
    div.innerHTML = `
    <img src="${producto.img}"/>
    <h5>${producto.articulo}</h5>
    <p>${producto.description}</p>
    <p class="precio--producto">Precio: $ ${producto.precio}</p>
    <button onclick=agregarAlCarrito(${producto.id}) class="boton-agregar">Agregar al carrito</button>
    `;

    listaProductos.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const productoElegido = products.find((p) => p.id == id);
  if (productoElegido) {
    carrito.push(productoElegido);
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  const precioTotal = document.getElementById("precioTotal");
  const contadorCarrito = document.getElementById("contadorCarrito");
  const contenedorCarrito = document.getElementById("carrito-contenedor");
  contenedorCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    contenedorCarrito.innerHTML += `
    <div class="productoEnCarrito">
            <p class="productoEnCarrito--articulo">${producto.articulo}</p>
            <p>Precio: $ ${producto.precio}</p>
            <button onclick=eliminarProducto(${producto.id}) class="boton-eliminar">
              <i class="material-icons">delete</i>
            </button>
          </div>
    `;
  });

  precioTotal.innerText = carrito.reduce(
    (acumulador, elemento) => (acumulador += elemento.precio),
    0
  );
  contadorCarrito.innerText = carrito.length;
}

function eliminarProducto(id) {
  const productoEliminar = carrito.find((producto) => producto.id == id);
  const indice = carrito.indexOf(productoEliminar);
  carrito.splice(indice, 1);
  actualizarCarrito();
}

function filtrarPorTipoDeComida() {
  const listaFiltrada = products.filter(
    (el) => el.categoria == tipoComidas.value
  );

  if (tipoComidas.value == "Todas") {
    ListarProductos(products);
  } else {
    ListarProductos(listaFiltrada);
  }
}

const tipoComidas = document.getElementById("tipoComidas");

tipoComidas.addEventListener("change", () => {
  filtrarPorTipoDeComida();
});
