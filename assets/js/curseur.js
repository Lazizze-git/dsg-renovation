/* ============================================================
   DSG RÉNOVATION — CURSEUR D'ARCHIVE
   Sur les éléments consultables, le pointeur devient une pastille
   encrée portant l'action à faire (« Consulter », « Glisser »).
   Actif uniquement à la souris, désactivé si le mouvement est réduit.
   ============================================================ */
(function () {
  "use strict";

  var pointeurFin = window.matchMedia("(pointer: fine)").matches;
  var mouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!pointeurFin || mouvementReduit) { return; }

  var cibles = document.querySelectorAll("[data-curseur]");
  if (!cibles.length) { return; }

  var pastille = document.createElement("div");
  pastille.className = "curseur";
  pastille.setAttribute("aria-hidden", "true");
  var texte = document.createElement("span");
  pastille.appendChild(texte);
  document.body.appendChild(pastille);
  document.body.classList.add("a-curseur");

  var sourisX = 0, sourisY = 0;
  var posX = 0, posY = 0;
  var actif = false;
  var boucleEnCours = false;

  /** Interpole la position pour donner une inertie légère au suivi. */
  function suivre() {
    posX += (sourisX - posX) * 0.22;
    posY += (sourisY - posY) * 0.22;
    pastille.style.transform = "translate3d(" + posX + "px," + posY + "px,0) translate(-50%,-50%)";

    if (actif || Math.abs(sourisX - posX) > 0.5 || Math.abs(sourisY - posY) > 0.5) {
      window.requestAnimationFrame(suivre);
    } else {
      boucleEnCours = false;
    }
  }

  function demarrerBoucle() {
    if (boucleEnCours) { return; }
    boucleEnCours = true;
    window.requestAnimationFrame(suivre);
  }

  document.addEventListener("pointermove", function (evenement) {
    if (evenement.pointerType !== "mouse") { return; }
    sourisX = evenement.clientX;
    sourisY = evenement.clientY;
    demarrerBoucle();
  }, { passive: true });

  /**
   * Affiche la pastille avec le libellé de la cible survolée.
   * @param {Element} cible
   */
  function activer(cible) {
    texte.textContent = cible.getAttribute("data-curseur") || "";
    posX = sourisX;
    posY = sourisY;
    actif = true;
    pastille.setAttribute("data-actif", "true");
    demarrerBoucle();
  }

  function desactiver() {
    actif = false;
    pastille.setAttribute("data-actif", "false");
  }

  Array.prototype.forEach.call(cibles, function (cible) {
    cible.addEventListener("pointerenter", function (evenement) {
      if (evenement.pointerType === "mouse") { activer(cible); }
    });
    cible.addEventListener("pointerleave", desactiver);
    cible.addEventListener("pointerdown", function () {
      pastille.setAttribute("data-presse", "true");
    });
  });

  document.addEventListener("pointerup", function () {
    pastille.setAttribute("data-presse", "false");
  });

  /* Le curseur n'a plus de sens si la fenêtre perd le focus. */
  window.addEventListener("blur", desactiver);
  document.addEventListener("pointerleave", desactiver);
}());
