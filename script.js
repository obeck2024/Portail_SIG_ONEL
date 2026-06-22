function ouvrirArcGIS(url) {
  const modal = document.getElementById("modalArcGIS");
  const frame = document.getElementById("arcgisFrame");

  frame.src = url;
  modal.style.display = "block";
}

function fermerArcGIS() {
  const modal = document.getElementById("modalArcGIS");
  const frame = document.getElementById("arcgisFrame");

  modal.style.display = "none";
  frame.src = "";
}

// Fermer la fenêtre si l'utilisateur clique à l'extérieur
window.onclick = function(event) {
  const modal = document.getElementById("modalArcGIS");

  if (event.target === modal) {
    fermerArcGIS();
  }
};



function ouvrirListeDashboards() {
  document.getElementById("listeDashboardsModal").style.display = "block";
}

function fermerListeDashboards() {
  document.getElementById("listeDashboardsModal").style.display = "none";
}

function ouvrirDashboardArcGIS(url, titre) {
  // Fermer la liste des dashboards
  document.getElementById("listeDashboardsModal").style.display = "none";

  // Ouvrir la fenêtre du dashboard
  document.getElementById("dashboardViewerTitle").textContent = titre;
  document.getElementById("dashboardViewerFrame").src = url;
  document.getElementById("dashboardViewerModal").style.display = "block";
}

function fermerDashboardArcGIS() {
  document.getElementById("dashboardViewerModal").style.display = "none";
  document.getElementById("dashboardViewerFrame").src = "";
}


// Fermer les fenêtres si on clique à l'extérieur
window.addEventListener("click", function(event) {
  const listeModal = document.getElementById("listeDashboardsModal");
  const viewerModal = document.getElementById("dashboardViewerModal");

  if (event.target === listeModal) {
    fermerListeDashboards();
  }

  if (event.target === viewerModal) {
    fermerDashboardArcGIS();
  }
});


// Images de fond de la section accueil
const heroImages = [
   "images/onel2.png", 
  "images/onel.png",
  "images/onel1.png"
];

let currentHeroImage = 0;
const hero = document.querySelector(".hero");

function changerImageAccueil() {
  if (!hero) return;

  hero.style.backgroundImage = `url('${heroImages[currentHeroImage]}')`;

  currentHeroImage = (currentHeroImage + 1) % heroImages.length;
}

// Première image au chargement
changerImageAccueil();

// Changement automatique chaque 1.5 secondes
setInterval(changerImageAccueil, 1500);








