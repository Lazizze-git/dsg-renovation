/* ============================================================
   DSG RÉNOVATION — VIGNETTE QUI SUIT LE POINTEUR
   Liste des savoir-faire : le tirage photo accompagne la main.

   Le mouvement est calculé image par image par un ressort
   critiquement amorti — il rattrape vite, ne rebondit pas et
   garde la même allure quel que soit le rafraîchissement de
   l'écran (60 Hz comme 120 Hz). Aucune transition CSS n'agit
   sur la position : les deux lissages se cumuleraient et la
   vignette traînerait derrière le curseur.
   ============================================================ */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { return; }
  if (!window.matchMedia("(min-width:1024px) and (pointer:fine)").matches) { return; }

  /* Le suivi repose sur les propriétés translate/rotate/scale séparées.
     Sans elles, on laisse la vignette à sa position fixe d'origine
     plutôt que de la voir atterrir dans un coin. */
  if (!(window.CSS && CSS.supports && CSS.supports("translate", "1px 1px"))) { return; }

  var liste = document.querySelector("[data-suivi-vignette]");
  if (!(liste instanceof HTMLElement)) { return; }

  /* Le tirage suit la main sur toute la largeur de la liste, à gauche
     comme à droite. Il n'est retenu qu'aux bords, pour ne jamais sortir
     du cadre — et encore, en résistant plutôt qu'en butant net. */
  var MARGE_BORD = 8, RESISTANCE = 0.2, DEBORD_MAX = 28, MARGE_HAUTE = 64;

  /* Ressort : raideur élevée pour coller à la main, amortissement réglé
     juste au-dessus du critique pour supprimer tout rebond parasite. */
  var RAIDEUR = 210, AMORTI = 30;
  var PAS_MAX = 1 / 120, TEMPS_MAX = 0.064;

  /* Inclinaison tirée de la vitesse réelle du tirage : il penche dans le
     sens du déplacement, comme une feuille tenue par le haut. */
  var INCLINAISON_PAR_VITESSE = 0.012, INCLINAISON_MAX = 11, BIAIS_REPOS = -2;

  var SEUIL_VITESSE = 4, SEUIL_ECART = 0.4;

  var cibleX = 0, cibleY = 0, posX = 0, posY = 0;
  var vitesseX = 0, vitesseY = 0, pointeurX = 0, pointeurY = 0;
  var cadre = null, boucle = 0, dernierTemps = 0;
  var survol = false, amorce = false;

  liste.setAttribute("data-suivi", "actif");

  /* ---------- Mesures ---------- */
  var vignette = liste.querySelector(".metiers__vue");
  var demiLargeur = 79;

  function mesurer() {
    cadre = liste.getBoundingClientRect();
    if (vignette instanceof HTMLElement && vignette.offsetWidth) {
      demiLargeur = vignette.offsetWidth / 2;
    }
  }

  function brider(valeur, min, max, resistance, debord) {
    if (valeur < min) {
      return min - Math.min((min - valeur) * resistance, debord);
    }
    if (valeur > max) {
      return max + Math.min((valeur - max) * resistance, debord);
    }
    return valeur;
  }

  /* Recalcule la cible depuis la dernière position connue du pointeur.
     Appelé au mouvement, mais aussi au défilement et au redimensionnement :
     le cadre de la liste bouge, la vignette doit rester sous la main. */
  function viser() {
    if (!cadre) { mesurer(); }

    var garde = demiLargeur + MARGE_BORD;

    cibleX = brider(
      pointeurX - cadre.left,
      garde,
      Math.max(garde, cadre.width - garde),
      RESISTANCE,
      DEBORD_MAX
    );
    cibleY = brider(
      pointeurY - cadre.top,
      MARGE_HAUTE,
      Math.max(MARGE_HAUTE, cadre.height - MARGE_HAUTE),
      0.5,
      DEBORD_MAX * 2
    );
  }

  /* ---------- Intégration du ressort ---------- */
  function integrer(duree) {
    var reste = Math.min(duree, TEMPS_MAX);

    /* Sous-pas fixes : même après une image perdue, le ressort reste
       stable et ne part jamais en oscillation. */
    while (reste > 0) {
      var pas = Math.min(reste, PAS_MAX);
      vitesseX += ((cibleX - posX) * RAIDEUR - vitesseX * AMORTI) * pas;
      vitesseY += ((cibleY - posY) * RAIDEUR - vitesseY * AMORTI) * pas;
      posX += vitesseX * pas;
      posY += vitesseY * pas;
      reste -= pas;
    }
  }

  function ecrire() {
    var inclinaison = Math.max(
      -INCLINAISON_MAX,
      Math.min(INCLINAISON_MAX, vitesseX * INCLINAISON_PAR_VITESSE)
    );

    liste.style.setProperty("--vx", posX.toFixed(2) + "px");
    liste.style.setProperty("--vy", posY.toFixed(2) + "px");
    liste.style.setProperty("--vr", (BIAIS_REPOS + inclinaison).toFixed(2) + "deg");
  }

  function auRepos() {
    return Math.abs(vitesseX) < SEUIL_VITESSE && Math.abs(vitesseY) < SEUIL_VITESSE
      && Math.abs(cibleX - posX) < SEUIL_ECART && Math.abs(cibleY - posY) < SEUIL_ECART;
  }

  function animer(temps) {
    var duree = dernierTemps ? (temps - dernierTemps) / 1000 : PAS_MAX;
    dernierTemps = temps;

    integrer(duree);
    ecrire();

    /* La boucle ne s'arrête pas au moment où la main quitte la liste :
       elle laisse le ressort finir sa course, sinon la vignette se fige
       en plein vol et saute à la visite suivante. */
    if (survol || !auRepos()) {
      boucle = window.requestAnimationFrame(animer);
      return;
    }

    boucle = 0;
    dernierTemps = 0;
    vitesseX = 0;
    vitesseY = 0;
  }

  function lancer() {
    if (boucle) { return; }
    dernierTemps = 0;
    boucle = window.requestAnimationFrame(animer);
  }

  /* ---------- Écoutes ---------- */
  function poser() {
    posX = cibleX;
    posY = cibleY;
    vitesseX = 0;
    vitesseY = 0;
    ecrire();
  }

  function suivre(evenement) {
    if (evenement.pointerType !== "mouse") { return; }

    /* Le tirage est placé d'emblée sous la main à la première visite et
       aux retours espacés. Si le ressort courait encore — aller-retour
       rapide au bord de la liste — on le laisse rattraper : un saut
       serait visible pendant le fondu. */
    var arrivee = !amorce || (!survol && !boucle);

    survol = true;
    amorce = true;
    if (!cadre) { mesurer(); }
    pointeurX = evenement.clientX;
    pointeurY = evenement.clientY;
    viser();

    if (arrivee) { poser(); }
    lancer();
  }

  liste.addEventListener("pointerenter", suivre, { passive: true });
  liste.addEventListener("pointermove", suivre, { passive: true });
  liste.addEventListener("pointerleave", function () { survol = false; });

  /* Le cadre de la liste se déplace au défilement : on le remesure et on
     réajuste la cible, main immobile comprise. */
  var recalculPrevu = false;

  function replacer() {
    recalculPrevu = false;
    if (!survol) { return; }
    mesurer();
    viser();
    lancer();
  }

  window.addEventListener("scroll", function () {
    if (recalculPrevu || !survol) { return; }
    recalculPrevu = true;
    window.requestAnimationFrame(replacer);
  }, { passive: true });

  window.addEventListener("resize", function () {
    cadre = null;
    amorce = false;
  }, { passive: true });
}());
