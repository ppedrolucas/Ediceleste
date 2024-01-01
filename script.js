const btnMobile = document.getElementById("btn-mobile")

function toggleMenu() {
  const nav = document.getElementById("nav")
  nav.classList.toggle("active")
}

btnMobile.addEventListener("click", toggleMenu)

function btnBack() {
  window.location = "../index.html"
}

function btnLink() {
  window.location.replace("https://www.instagram.com/pont.artesanal/")
}

function btnLink2() {
  window.location.replace("https://www.instagram.com/edi.maraacessorios/")
}
