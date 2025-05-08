// Fonction pour dire bonjour
function direBonjour() {
  alert("Bonjour et bienvenue sur mon site !");
}

// Fonction pour changer le texte principal
defaultText = "Je m'appelle Tom Lesage et voici ma première page web, modernisée pour 2025 ✨";

function changerTexte() {
  const p = document.getElementById("intro");
  if (p.innerText === defaultText) {
    p.innerText = "Merci d'avoir cliqué ! À très bientôt 🚀";
  } else {
    p.innerText = defaultText;
  }
}

// Fonction pour activer/désactiver le mode sombre
function toggleMode() {
  document.body.classList.toggle("dark-mode");

  // Sauvegarder la préférence dans le navigateur
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Appliquer le thème sauvegardé au chargement
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
};
