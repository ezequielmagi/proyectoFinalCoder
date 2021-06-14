const main = document.getElementById("mainPage");
const about = document.getElementById("aboutMePage");
const contact = document.getElementById("contactMe");
const myProducts = document.getElementById("myProducts");
const filter = document.getElementById("filter");

const linkInicio = document.getElementById("lnkInicio");
const linkAboutMe = document.getElementById("lnkAboutMe");
const linkContactMe = document.getElementById("lnkContactMe");
const linkMyProducts = document.getElementById("lnkMyProducts");

linkInicio.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (screen.width >= 1022) {
    about.style.display = "none";
    main.style.display = "flex";
    contact.style.display = "none";
    filter.style.display = "none";
    myProducts.style.display = "none";
  } else {
    about.style.display = "none";
    main.style.display = "block";
    contact.style.display = "none";
    filter.style.display = "none";
    myProducts.style.display = "none";
  }
});
linkAboutMe.addEventListener("click", (evento) => {
  evento.preventDefault();

  if (screen.width >= 1022) {
    main.style.display = "none";
    contact.style.display = "none";
    about.style.display = "flex";
    filter.style.display = "none";
    myProducts.style.display = "none";
  } else {
    main.style.display = "none";
    contact.style.display = "none";
    about.style.display = "block";
    filter.style.display = "none";
    myProducts.style.display = "none";
  }
});

linkContactMe.addEventListener("click", (evento) => {
  evento.preventDefault();
  contact.style.display = "block";
  main.style.display = "none";
  about.style.display = "none";
  filter.style.display = "none";
  myProducts.style.display = "none";
});

linkMyProducts.addEventListener("click", (evento) => {
  evento.preventDefault();
  filter.style.display = "block";
  myProducts.style.display = "block";
  contact.style.display = "none";
  main.style.display = "none";
  about.style.display = "none";
  let target = evento.target.id;
  console.log(target);
});
