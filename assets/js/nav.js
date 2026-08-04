/* ============================================================
   DSG RÉNOVATION — NAVIGATION
   En-tête au défilement, menu plein écran, sommaire actif,
   barre d'action mobile.
   ============================================================ */
(function () {
  "use strict";

  /** @type {HTMLElement|null} */
  var entete = document.getElementById("entete");
  /** @type {HTMLElement|null} */
  var menu = document.getElementById("menu");
  /** @type {HTMLButtonElement|null} */
  var burger = document.getElementById("burger");
  /** @type {HTMLButtonElement|null} */
  var fermer = document.getElementById("menuFermer");
  /** @type {HTMLElement|null} */
  var barreMobile = document.getElementById("barreMobile");

  var enAttente = false;

  /* ---------- Menu plein écran ---------- */

  /**
   * Ouvre ou ferme le menu et verrouille le défilement de la page.
   * @param {boolean} ouvert
   */
  function basculerMenu(ouvert) {
    if (!menu || !burger) { return; }
    menu.setAttribute("data-ouvert", ouvert ? "true" : "false");
    burger.setAttribute("aria-expanded", ouvert ? "true" : "false");
    burger.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    document.body.style.overflow = ouvert ? "hidden" : "";

    if (ouvert) {
      var premier = menu.querySelector("a, button");
      if (premier instanceof HTMLElement) { premier.focus(); }
    } else {
      burger.focus();
    }
  }

  function menuEstOuvert() {
    return !!menu && menu.getAttribute("data-ouvert") === "true";
  }

  if (burger) {
    burger.addEventListener("click", function () { basculerMenu(!menuEstOuvert()); });
  }
  if (fermer) {
    fermer.addEventListener("click", function () { basculerMenu(false); });
  }
  if (menu) {
    menu.addEventListener("click", function (evenement) {
      var cible = evenement.target;
      if (cible instanceof Element && cible.closest("a")) { basculerMenu(false); }
    });
  }
  document.addEventListener("keydown", function (evenement) {
    if (evenement.key === "Escape" && menuEstOuvert()) { basculerMenu(false); }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1279 && menuEstOuvert()) { basculerMenu(false); }
  });

  /* ---------- En-tête et barre mobile au défilement ---------- */

  /* L'en-tête ne se masque jamais : les intercalaires collants viennent
     s'y accrocher, et le bouton « Devis » reste accessible en permanence. */
  function auDefilement() {
    var y = window.scrollY;

    if (entete) { entete.classList.toggle("entete--posee", y > 60); }
    if (barreMobile) {
      barreMobile.setAttribute("data-visible", y > 480 ? "true" : "false");
    }

    enAttente = false;
  }

  window.addEventListener("scroll", function () {
    if (enAttente) { return; }
    enAttente = true;
    window.requestAnimationFrame(auDefilement);
  }, { passive: true });

  auDefilement();

  /* ---------- Pièce du dossier active (nav + rail) ---------- */

  var liens = document.querySelectorAll("[data-lien-piece]");
  if (!liens.length || !("IntersectionObserver" in window)) { return; }

  /** @type {Array<{lien:Element, cible:Element}>} */
  var pieces = [];
  Array.prototype.forEach.call(liens, function (lien) {
    var ancre = lien.getAttribute("href");
    if (!ancre || ancre.charAt(0) !== "#") { return; }
    var cible = document.getElementById(ancre.slice(1));
    if (cible) { pieces.push({ lien: lien, cible: cible }); }
  });

  /**
   * Marque comme active toutes les entrées pointant vers la section visible.
   * @param {Element} cibleActive
   */
  function activer(cibleActive) {
    pieces.forEach(function (piece) {
      if (piece.cible === cibleActive) {
        piece.lien.setAttribute("aria-current", "true");
      } else {
        piece.lien.removeAttribute("aria-current");
      }
    });
  }

  var observateur = new IntersectionObserver(function (entrees) {
    entrees.forEach(function (entree) {
      if (entree.isIntersecting) { activer(entree.target); }
    });
  }, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });

  pieces.forEach(function (piece) { observateur.observe(piece.cible); });
}());
