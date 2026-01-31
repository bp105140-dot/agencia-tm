function toggleMenu() {
  var menu = document.getElementById("divListaLinksNavBurguer");
  var checkbox = document.getElementById("checkbox-menu");

  // 1. Alterna a classe visual 'menuAtivo'
  menu.classList.toggle("menuAtivo");

  // 2. Força o ícone a ficar marcado como X se o menu estiver aberto
  if (menu.classList.contains("menuAtivo")) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
}

// Aguarda a página carregar para configurar os cliques nos links
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".linksNavBurguer a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      var menu = document.getElementById("divListaLinksNavBurguer");
      var checkbox = document.getElementById("checkbox-menu");

      // Fecha o menu e volta o ícone ao normal
      menu.classList.remove("menuAtivo");
      checkbox.checked = false;
    });
  });
});
function scrollGrid(gridId, distance) {
  const grid = document.getElementById(gridId);
  grid.scrollBy({
    left: distance,
    behavior: "smooth",
  });
}
