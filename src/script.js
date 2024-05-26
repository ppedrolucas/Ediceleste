function menu() {
  const nav = document.getElementById("navbar");

  nav.classList.toggle("hidden");
  nav.classList.toggle("active");
}
function darkMode() {
  const corpo = document.documentElement;
  const img = document.getElementById("switchMode");

  corpo.classList.toggle("dark");

  //substituir imagem
  if (corpo.classList.contains("dark")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "assets/icons/lightMode.svg"); //adionar ou modificar um atributo
  } else {
    //se não, manter imagem normal
    img.setAttribute("src", "assets/icons/darkMode.svg");
  }
}
/*
let year = document.getElementById("year");
let data = new Date();
let ano = data.getFullYear();

year.innerHTML = ano;
*/
