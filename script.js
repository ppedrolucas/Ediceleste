const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

let year = document.getElementById("year");
let data = new Date();
let ano = data.getFullYear();

year.innerHTML = ano;
