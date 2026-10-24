const bouton = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-links");

function definirEtat(ouvert) {
  menu.classList.toggle("open", ouvert);
  bouton.setAttribute("aria-expanded", ouvert);
  bouton.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
}

// Clic sur le burger : ouvre ou ferme le menu
bouton.addEventListener("click", function () {
  definirEtat(!menu.classList.contains("open"));
});

// Clic sur un lien : on referme le menu
menu.querySelectorAll("a").forEach(function (lien) {
  lien.addEventListener("click", function () {
    definirEtat(false);
  });
});

// Touche Échap : on referme le menu
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    definirEtat(false);
  }
});