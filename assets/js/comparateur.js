/* ============================================================
   DSG RÉNOVATION — COMPARATEUR AVANT / APRÈS
   Glissière accessible : souris, tactile et clavier (flèches,
   Origine, Fin). Sans JavaScript, la vue reste coupée à 50 %.
   ============================================================ */
(function () {
  "use strict";

  var blocs = document.querySelectorAll("[data-comparateur]");
  if (!blocs.length) { return; }

  /**
   * Installe une glissière sur un bloc de comparaison.
   * @param {HTMLElement} bloc
   */
  function installer(bloc) {
    var poignee = bloc.querySelector(".comparateur__poignee");
    if (!(poignee instanceof HTMLElement)) { return; }

    var position = 50;
    var enCours = false;

    /**
     * Applique une position en pourcentage, bornée à [0, 100].
     * @param {number} valeur
     */
    function placer(valeur) {
      position = Math.max(0, Math.min(100, valeur));
      bloc.style.setProperty("--pos", position + "%");
      poignee.setAttribute("aria-valuenow", String(Math.round(position)));
      /* C'est l'état livré qui se découvre depuis la gauche : le
         pourcentage annoncé est donc celui de la vue après travaux. */
      poignee.setAttribute("aria-valuetext", Math.round(position) + " % de la vue après travaux");
    }

    /**
     * Convertit une abscisse écran en pourcentage de la largeur du bloc.
     * @param {number} x
     */
    function depuisX(x) {
      var cadre = bloc.getBoundingClientRect();
      if (cadre.width === 0) { return position; }
      return ((x - cadre.left) / cadre.width) * 100;
    }

    bloc.addEventListener("pointerdown", function (evenement) {
      enCours = true;
      bloc.setAttribute("data-glisse", "true");
      bloc.setPointerCapture(evenement.pointerId);
      placer(depuisX(evenement.clientX));
    });

    bloc.addEventListener("pointermove", function (evenement) {
      if (!enCours) { return; }
      evenement.preventDefault();
      placer(depuisX(evenement.clientX));
    });

    function relacher(evenement) {
      if (!enCours) { return; }
      enCours = false;
      bloc.setAttribute("data-glisse", "false");
      if (evenement.pointerId !== undefined && bloc.hasPointerCapture(evenement.pointerId)) {
        bloc.releasePointerCapture(evenement.pointerId);
      }
    }
    bloc.addEventListener("pointerup", relacher);
    bloc.addEventListener("pointercancel", relacher);

    poignee.addEventListener("keydown", function (evenement) {
      var pas = evenement.shiftKey ? 10 : 2;
      var touches = {
        ArrowLeft: -pas, ArrowDown: -pas,
        ArrowRight: pas, ArrowUp: pas
      };

      if (Object.prototype.hasOwnProperty.call(touches, evenement.key)) {
        evenement.preventDefault();
        placer(position + touches[evenement.key]);
      } else if (evenement.key === "Home") {
        evenement.preventDefault();
        placer(0);
      } else if (evenement.key === "End") {
        evenement.preventDefault();
        placer(100);
      }
    });

    placer(50);
  }

  Array.prototype.forEach.call(blocs, function (bloc) {
    if (bloc instanceof HTMLElement) { installer(bloc); }
  });
}());
