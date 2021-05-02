//tomamos el contenedor html donde renderizamos los productos
const listaProductos = document.getElementById("products");

//Renderizamos los productos tomados del products.js
ListarProductos(products);

//funcion que crea la lista de productos
function ListarProductos(arrayProductos) {
  arrayProductos.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("products");
    div.innerHTML = `
    <img src="${producto.img}"/>
    <h5>${producto.articulo}</h5>
    <p>${producto.description}</p>
    <p class="precio--producto">Precio: $ ${producto.precio}</p>
    <button class="boton-agregar">Agregar al carrito</button>
    `;

    listaProductos.appendChild(div);
  });
}
