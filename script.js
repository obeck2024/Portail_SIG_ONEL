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

// Changement automatique chaque 4 secondes
setInterval(changerImageAccueil, 4000);




// Carte modele

function ouvrirListeCartographie() {
  document.getElementById("cartographieModal").style.display = "block";
}

function fermerListeCartographie() {
  document.getElementById("cartographieModal").style.display = "none";
}

function ouvrirArcGISDepuisCatalogue(url, titre) {
  document.getElementById("cartographieModal").style.display = "none";

  document.getElementById("arcgisViewerTitle").textContent = titre;
  document.getElementById("arcgisViewerFrame").src = url;
  document.getElementById("arcgisViewerModal").style.display = "block";
}

function fermerArcGISViewer() {
  document.getElementById("arcgisViewerModal").style.display = "none";
  document.getElementById("arcgisViewerFrame").src = "";
}

function filtrerCartes() {
  const input = document.getElementById("searchCarte");
  const filter = input.value.toLowerCase();
  const cartes = document.querySelectorAll(".cartographie-item");

  cartes.forEach(function(carte) {
    const titre = carte.getAttribute("data-title").toLowerCase();
    const texte = carte.innerText.toLowerCase();

    if (titre.includes(filter) || texte.includes(filter)) {
      carte.style.display = "block";
    } else {
      carte.style.display = "none";
    }
  });
}

function trierCartes() {
  const select = document.getElementById("sortCarte");
  const grid = document.getElementById("listeCartesArcGIS");
  const cartes = Array.from(grid.querySelectorAll(".cartographie-item"));

  if (select.value === "az") {
    cartes.sort((a, b) =>
      a.getAttribute("data-title").localeCompare(b.getAttribute("data-title"))
    );
  }

  if (select.value === "za") {
    cartes.sort((a, b) =>
      b.getAttribute("data-title").localeCompare(a.getAttribute("data-title"))
    );
  }

  cartes.forEach(carte => grid.appendChild(carte));
}

/* Fermer si on clique à l’extérieur */
window.addEventListener("click", function(event) {
  const cartographieModal = document.getElementById("cartographieModal");
  const arcgisViewerModal = document.getElementById("arcgisViewerModal");

  if (event.target === cartographieModal) {
    fermerListeCartographie();
  }

  if (event.target === arcgisViewerModal) {
    fermerArcGISViewer();
  }
});













function ouvrirApropos() {
  document.getElementById("aproposModal").style.display = "block";
}

function fermerApropos() {
  document.getElementById("aproposModal").style.display = "none";
}
