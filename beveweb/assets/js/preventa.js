const preVentaContainer = document.getElementById("preventa");
const closePreventa = document.getElementById("close-button");

closePreventa.addEventListener("click", (e) => {
  e.preventDefault();
  preVentaContainer.classList.remove("preVenta-active");
});

// referencias html
const imgProducto = document.getElementById("imgProducto");
const articulo = document.getElementById("articulo");
const precioUnitario = document.getElementById("precioUnitario");
const cantidad = document.getElementById("cantidad");
const domicilio = document.getElementById("domicilio");
const retiro = document.getElementById("retiro");
const formaEnvio = document.getElementsByName("formaenvio");

// cantidad = cantidad.parseInt();
const subTotalCalculado = document.getElementById("subTotalCalculado");
//multiplicador
let finale;
let subTotal;
let cantidadActual;
let cantidadFinal;
let formatoEnvio;

//
function preVenta(productoElegido) {
  subTotalCalculado.textContent = `$ ${productoElegido.precio}`;
  imgProducto.setAttribute("src", productoElegido.img);
  articulo.textContent = productoElegido.articulo;
  precioUnitario.textContent = `$ ${productoElegido.precio}`;
  idProducto = productoElegido.id;

  cantidad.addEventListener("change", (e) => {
    e.preventDefault();
    cantidadActual = parseInt(cantidad.value);
    subTotalCalculado.textContent = `$ ${
      productoElegido.precio * cantidadActual
    }`;
    finale = `usted se lleva ${cantidadActual} de ${
      productoElegido.articulo
    } por ${
      cantidadActual * productoElegido.precio
    } y ademas ${formatoEnvio} con el id ${idProducto}`;
    console.log(cantidadActual);
  });

  domicilio.addEventListener("change", (e) => {
    e.preventDefault();
    for (let i = 0; i < formaEnvio.length; i++) {
      if (formaEnvio[i].checked) {
        formatoEnvio = formaEnvio[i].value;
        console.log(formaEnvio[i].value);
      }
    }
  });
  retiro.addEventListener("change", (e) => {
    e.preventDefault();
    for (let i = 0; i < formaEnvio.length; i++) {
      if (formaEnvio[i].checked) {
        formatoEnvio = formaEnvio[i].value;
        console.log(formaEnvio[i].value);
      }
    }
  });
}

let carritox = [];

const iniciarCompra = () => {
  console.log(finale);
  if (formatoEnvio === "envio") {
    console.log(`y debe agregar $150 de ${formatoEnvio}`);
  } else {
    console.log(`y usted pasa a retirar el pedido`);
  }
  alert(finale);
};
