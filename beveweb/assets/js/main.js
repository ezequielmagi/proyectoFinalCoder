//tomamos el contenedor html donde renderizamos los productos
const tipoComidas = document.getElementById("tipoComidas");
const listaProductos = document.getElementById("products");

tipoComidas.addEventListener("change", () => {
  // filtrarPorTipoDeComida();
  listarproductos();
});

//inicializamos el carrito
let carrito = [];

const listarproductos = async () => {
  if (tipoComidas.value === "Todas") {
    const resp = await fetch(
      "https://beve02-b2200-default-rtdb.firebaseio.com/productos.json"
    );
    const element = await resp.json();

    listaProductos.innerHTML = "";

    element.forEach((producto) => {
      let div = document.createElement("div");
      div.classList.add("products");
      div.innerHTML = `
    <div class="individual">
    <img src="${producto.img}"/>
    <h5 class="producto-titulo">${producto.articulo}</h5>
    <p class="producto-description">${producto.description}</p>
    <p class="precio--producto">Precio: $ ${producto.precio}</p>
    <button onclick=agregarAlCarrito(${producto.id}) class="boton-agregar">Agregar al carrito</button>
    </div>
    `;

      listaProductos.appendChild(div);
    });
  } else {
    //

    const resp = await fetch(
      "https://beve02-b2200-default-rtdb.firebaseio.com/productos.json"
    );
    const element = await resp.json();

    const listaFiltrada = element.filter(
      (el) => el.categoria === tipoComidas.value
    );

    listaProductos.innerHTML = "";

    listaFiltrada.forEach((producto) => {
      let div = document.createElement("div");
      div.classList.add("products");
      div.innerHTML = `
    <div class="individual">
    <img src="${producto.img}"/>
    <h5 class="producto-titulo">${producto.articulo}</h5>
    <p class="producto-description">${producto.description}</p>
    <p class="precio--producto">Precio: $ ${producto.precio}</p>
    <button onclick=agregarAlCarrito(${producto.id}) class="boton-agregar">Agregar al carrito</button>
    </div>
    `;

      listaProductos.appendChild(div);
    });
  }
};

//refactorizar
// function agregarAlCarrito(id) {

//   const productoElegido = products.find((p) => p.id === id);
//   if (productoElegido) {
//     carrito.push(productoElegido);
//   }
//   actualizarCarrito();
// }

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
  const productoEliminar = carrito.find((producto) => producto.id === id);
  const indice = carrito.indexOf(productoEliminar);
  carrito.splice(indice, 1);
  actualizarCarrito();
}
listarproductos();
