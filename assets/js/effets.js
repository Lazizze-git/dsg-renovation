/* ============================================================
   DSG RÉNOVATION — EFFETS DE CONSULTATION
   Progression de lecture, accord des éléments fixes au fond qu'ils
   survolent, boutons magnétiques, parallaxe des planches photo.
   Tout est neutralisé si le visiteur demande moins de mouvement.
   ============================================================ */
(function () {
  "use strict";

  var mouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pointeurFin = window.matchMedia("(pointer: fine)").matches;
  var racine = document.documentElement;

  /* ---------- Progression de lecture (jauge du rail) ---------- */
  var enAttente = false;

  function majProgression() {
    var hauteur = document.documentElement.scrollHeight - window.innerHeight;
    var part = hauteur > 0 ? window.scrollY / hauteur : 0;
    racine.style.setProperty("--lecture", Math.max(0, Math.min(1, part)).toFixed(4));
    enAttente = false;
  }

  /* ---------- Les éléments fixes s'accordent au fond qu'ils survolent
     Réglet et barre d'action sont fixes : ils traversent aussi bien le
     papier que les blocs noirs. On leur signale lequel se trouve
     derrière eux pour qu'ils retournent leur gamme d'encres, plutôt que
     d'y poser un voile clair. */
  var zonesSombres = document.querySelectorAll(".pied, .bandeau, .sur-sombre");

  /* Chaque élément fixe est jugé à la hauteur où il se trouve : le
     réglet à mi-écran, la barre d'action tout en bas. */
  var flottants = [
    { noeud: document.querySelector(".rail"), hauteur: function () { return window.innerHeight / 2; } },
    { noeud: document.querySelector(".barre-mobile"), hauteur: function () { return window.innerHeight - 24; } }
  ];

  function majFlottants() {
    flottants.forEach(function (element) {
      if (!(element.noeud instanceof HTMLElement)) { return; }
      var y = element.hauteur();
      var sombre = false;

      Array.prototype.forEach.call(zonesSombres, function (zone) {
        var cadre = zone.getBoundingClientRect();
        if (cadre.top <= y && cadre.bottom >= y) { sombre = true; }
      });

      element.noeud.setAttribute("data-sur-sombre", sombre ? "true" : "false");
    });
  }

  window.addEventListener("scroll", function () {
    if (enAttente) { return; }
    enAttente = true;
    window.requestAnimationFrame(function () {
      majProgression();
      majFlottants();
    });
  }, { passive: true });
  window.addEventListener("resize", majFlottants, { passive: true });
  majProgression();
  majFlottants();

  if (mouvementReduit) { return; }

  /* ---------- Parallaxe des planches photo (amplitude ≤ 8 %) ---------- */
  var planches = document.querySelectorAll("[data-parallaxe]");

  function majParallaxe() {
    Array.prototype.forEach.call(planches, function (planche) {
      var cadre = planche.getBoundingClientRect();
      if (cadre.bottom < 0 || cadre.top > window.innerHeight) { return; }
      var centre = (cadre.top + cadre.height / 2 - window.innerHeight / 2) / window.innerHeight;
      var image = planche.querySelector("img");
      if (image instanceof HTMLElement) {
        /* L'agrandissement de 16 % couvre le déplacement maximal (± 6 %)
           sans jamais laisser apparaître un bord vide. */
        image.style.transform = "translate3d(0," + (centre * 6).toFixed(2) + "%,0) scale(1.16)";
      }
    });
  }

  if (planches.length) {
    window.addEventListener("scroll", function () {
      window.requestAnimationFrame(majParallaxe);
    }, { passive: true });
    majParallaxe();
  }

  if (!pointeurFin) { return; }

  /* La vignette qui suit le pointeur dans la liste des savoir-faire vit
     dans son propre module : assets/js/vignette.js */

  /* ---------- Boutons magnétiques ----------
     L'attraction se sent, elle ne se voit pas : un bouton qui fuit sous
     le curseur devient difficile à viser. Le déplacement est donc faible
     et surtout plafonné, pour que la cible reste là où l'œil l'a posée. */
  var ATTRACTION = 0.08;
  var ECART_MAX = 4;

  function borner(valeur, limite) {
    return Math.max(-limite, Math.min(limite, valeur));
  }

  var aimants = document.querySelectorAll("[data-magnetique]");

  Array.prototype.forEach.call(aimants, function (aimant) {
    if (!(aimant instanceof HTMLElement)) { return; }

    aimant.addEventListener("pointermove", function (evenement) {
      if (evenement.pointerType !== "mouse") { return; }
      var cadre = aimant.getBoundingClientRect();
      var dx = borner((evenement.clientX - (cadre.left + cadre.width / 2)) * ATTRACTION, ECART_MAX);
      var dy = borner((evenement.clientY - (cadre.top + cadre.height / 2)) * ATTRACTION, ECART_MAX);
      aimant.style.transform = "translate3d(" + dx.toFixed(1) + "px," + dy.toFixed(1) + "px,0)";
    }, { passive: true });

    aimant.addEventListener("pointerleave", function () { aimant.style.transform = ""; });
    aimant.addEventListener("blur", function () { aimant.style.transform = ""; });
  });
}());
