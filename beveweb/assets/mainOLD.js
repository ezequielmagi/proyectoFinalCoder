//inicializamos los arrays
let carrito = [];
let total = [];
let totalValue = 0;

//creamos el objeto producto
function producto(item, price) {
  this.item = item;
  this.price = price;
}

//harcodeamos productos para probar el proceso
let budin = new producto("budin", 150);
let medallon = new producto("medallon", 200);
let guiso = new producto("guiso", 300);

//creamos el proceso de venta
const buyProcess = () => {
  let cuantity;
  let subCarrito;
  let subtotal = 0;
  let item;
  let choice = prompt(
    "ingrese el producto elegido:\n1 - Budin $150\n2 - Medallon $200\n3 - Guiso $300"
  );

  switch (choice) {
    case "budin":
      cuantity = parseInt(
        prompt(`ingrese la cantidad de ${choice} que desea:`)
      );
      subtotal = cuantity * budin.price;
      item = `${cuantity} unidades de ${choice} subtotal: $ ${subtotal}  `;
      totalValue = totalValue + subtotal;
      subCarrito = carrito.push(item);
      break;
    case "medallon":
      cuantity = parseInt(
        prompt(`ingrese la cantidad de ${choice} que desea:`)
      );
      subtotal = cuantity * medallon.price;
      item = `${cuantity} unidades de ${choice} subtotal: $ ${subtotal}`;
      totalValue = totalValue + subtotal;
      subCarrito = carrito.push(item);
      break;
    case "guiso":
      cuantity = parseInt(
        prompt(`ingrese la cantidad de ${choice} que desea:`)
      );
      subtotal = cuantity * guiso.price;
      item = `${cuantity} unidades de ${choice} subtotal: $ ${subtotal}  `;
      totalValue = totalValue + subtotal;
      subCarrito = carrito.push(item);
      break;
    default:
      alert("Dato mal ingresado");
      break;
  }
};

//creamos el proceso que muestra la factura
const showBilling = () => {
  while (carrito.length > 0) {
    let compra = carrito.shift();
    console.log(compra);
  }
};

//creamos el proceso del metodo de pago
const paymentMethod = () => {
  let payment = prompt(
    `El total de la compra es $ ${totalValue}\nIngrese la forma de pago:\nefectivo (20% OFF)\ndebito (sin descuento)\ntarjeta (recargo de 15%)`
  );

  switch (payment) {
    case "efectivo":
      console.log(
        `Su importe con el descuento del 20% es de $ ${
          totalValue * 0.8
        } y ha sido procesado con exito!\nMuchas gracias por su compra!`
      );
      alert(
        `Su importe con el descuento es de $ ${
          totalValue * 0.8
        } y ha sido procesado con exito!\nMuchas gracias por su compra!`
      );
      break;
    case "debito":
      console.log(
        `su pago de $ ${totalValue} ha sido procesado con exito!\nMuchas gracias por su compra!`
      );
      alert(
        `su pago de $ ${totalValue} ha sido procesado con exito!\nMuchas gracias por su compra!`
      );
      break;
    case "tarjeta":
      console.log(
        `Su importe con el recargo del 15% es de $ ${
          totalValue * 1.15
        } y ha sido procesado con exito!\nMuchas gracias por su compra!`
      );
      alert(
        `Su importe con el recargo del 15% es de $ ${
          totalValue * 1.15
        } y ha sido procesado con exito!\nMuchas gracias por su compra!`
      );
      break;

    default:
      break;
  }
};

//iteramos hasta que el usuario decida terminar la compra
do {
  buyProcess();
  var salir = prompt("desea realizar otra compra?");
} while (salir !== "no");

//mostramos el resultado de la compra
showBilling();
console.log(`El total de la compra es $ ${totalValue}`);

paymentMethod();
