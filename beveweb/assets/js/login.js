const abrirlogin = $("#userLogin");
const loginModal = $(".login-contenedor");

abrirlogin.on("click", function (event) {
  event.preventDefault();
  loginModal.toggleClass("login-active");
});

const btnIngresar = $("#btnIngresar");

btnIngresar.on("click", function (event) {
  event.preventDefault();

  const userEmail = $("#userEmail").val();
  const userPassword = $("#userPassword").val();

  console.log(userEmail, userPassword);
});
