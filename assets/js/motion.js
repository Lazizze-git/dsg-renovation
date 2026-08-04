/* ============================================================
   DSG RÉNOVATION — MOUVEMENT
   Révélations au défilement, compteurs du relevé, année courante.
   Tout contenu reste lisible si ce fichier ne s'exécute pas.
   ============================================================ */
(function () {
  "use strict";

  var mouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Année du copyright ---------- */
  var annee = document.getElementById("annee");
  if (annee) { annee.textContent = String(new Date().getFullYear()); }

  /* ---------- Découpe des titres en lignes masquées ----------
     Chaque <br> devient une ligne indépendante, révélée en cascade. */
  var titres = document.querySelectorAll("[data-lignes]");

  Array.prototype.forEach.call(titres, function (titre) {
    var lignes = titre.innerHTML.split(/<br\s*\/?>/i);
    if (lignes.length < 1) { return; }
    titre.innerHTML = lignes.map(function (ligne) {
      return '<span class="ligne"><span>' + ligne + "</span></span>";
    }).join("");
  });

  /* ---------- Révélations ---------- */
  var aReveler = document.querySelectorAll(".revele, .revele-img");
  var couverture = document.querySelector(".couverture");

  function toutAfficher() {
    Array.prototype.forEach.call(aReveler, function (element) {
      element.classList.add("est-vu");
    });
    if (couverture) { couverture.classList.add("est-vu"); }
  }

  if (!("IntersectionObserver" in window)) {
    toutAfficher();
  } else {
    var observateur = new IntersectionObserver(function (entrees) {
      var rang = 0;
      entrees.forEach(function (entree) {
        if (!entree.isIntersecting) { return; }
        var element = entree.target;
        if (element instanceof HTMLElement) {
          element.style.transitionDelay = (mouvementReduit ? 0 : Math.min(rang, 5) * 70) + "ms";
        }
        element.classList.add("est-vu");
        rang += 1;
        observateur.unobserve(element);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -5% 0px" });

    Array.prototype.forEach.call(aReveler, function (element) { observateur.observe(element); });

    /* La couverture se révèle dès le premier rendu. */
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        if (couverture) { couverture.classList.add("est-vu"); }
      });
    });
  }

  /* ---------- Vignettes des savoir-faire (tactile) ----------
     Faute de survol sur téléphone, chaque vignette se décoffre quand sa
     ligne est bien montée dans l'écran — en plein geste de défilement.
     La marge basse retarde le déclenchement pour que la révélation ne
     soit jamais déjà faite quand la ligne arrive à hauteur de lecture. */
  var lignesMetiers = document.querySelectorAll(".metiers__ligne");
  var REGLAGE_VUE = { threshold: 0.5, rootMargin: "0px 0px -12% 0px" };

  if (lignesMetiers.length && "IntersectionObserver" in window) {
    var observateurMetiers = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (entree) {
        if (!entree.isIntersecting) { return; }
        entree.target.setAttribute("data-vue-visible", "true");
        observateurMetiers.unobserve(entree.target);
      });
    }, REGLAGE_VUE);

    Array.prototype.forEach.call(lignesMetiers, function (ligne) {
      observateurMetiers.observe(ligne);
    });
  }

  /* ---------- Compteurs du relevé ---------- */
  var releve = document.getElementById("releveGeneral");
  var dejaCompte = false;

  /**
   * Anime un nombre de 0 vers sa valeur cible.
   * @param {HTMLElement} noeud
   */
  function compter(noeud) {
    var cible = parseInt(noeud.getAttribute("data-compteur") || "", 10);
    if (isNaN(cible)) { return; }
    if (mouvementReduit) { noeud.textContent = String(cible); return; }

    var duree = 1400;
    var depart = null;

    function pas(horodatage) {
      if (depart === null) { depart = horodatage; }
      var avancee = Math.min((horodatage - depart) / duree, 1);
      var adouci = 1 - Math.pow(1 - avancee, 3);
      noeud.textContent = String(Math.round(cible * adouci));
      if (avancee < 1) { window.requestAnimationFrame(pas); }
    }

    noeud.textContent = "0";
    window.requestAnimationFrame(pas);
  }

  function lancerCompteurs() {
    if (dejaCompte || !releve) { return; }
    dejaCompte = true;
    var noeuds = releve.querySelectorAll("[data-compteur]");
    Array.prototype.forEach.call(noeuds, function (noeud) {
      if (noeud instanceof HTMLElement) { compter(noeud); }
    });
  }

  if (releve) {
    if (!("IntersectionObserver" in window)) {
      lancerCompteurs();
    } else {
      var observateurReleve = new IntersectionObserver(function (entrees) {
        entrees.forEach(function (entree) {
          if (entree.isIntersecting) {
            lancerCompteurs();
            observateurReleve.disconnect();
          }
        });
      }, { threshold: 0.4 });
      observateurReleve.observe(releve);
    }
  }
}());
