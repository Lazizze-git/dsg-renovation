/* ============================================================
   DSG RÉNOVATION — BORDEREAU DE DEMANDE
   Validation côté client puis ouverture du courriel prérempli.

   NOTE TECHNIQUE : en l'absence de serveur, la demande part par
   le client de messagerie du visiteur. Au passage en production,
   remplacer « envoyer() » par un appel au point d'entrée choisi
   (Supabase, Formspree…). Le repli sans JavaScript est assuré par
   l'attribut action du formulaire.
   ============================================================ */
(function () {
  "use strict";

  var formulaire = document.getElementById("bordereau");
  if (!(formulaire instanceof HTMLFormElement)) { return; }

  var retour = document.getElementById("bordereauRetour");
  var DESTINATAIRE = "contact@dsg-renov.ch";
  var MOTIF_EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

  /** Libellés affichés dans le courriel, dans l'ordre du bordereau. */
  var CHAMPS = [
    { nom: "nom", libelle: "Nom" },
    { nom: "email", libelle: "Courriel" },
    { nom: "telephone", libelle: "Téléphone" },
    { nom: "type", libelle: "Type de bien" },
    { nom: "surface", libelle: "Surface approximative" },
    { nom: "lieu", libelle: "Commune du bien" },
    { nom: "delai", libelle: "Démarrage souhaité" },
    { nom: "message", libelle: "Description du projet" }
  ];

  /**
   * Affiche ou efface le message d'erreur d'un champ.
   * @param {Element} controle
   * @param {string} message - chaîne vide pour effacer
   */
  function signaler(controle, message) {
    var bloc = controle.closest(".champ");
    if (!bloc) { return; }
    var zone = bloc.querySelector(".champ__erreur");
    bloc.classList.toggle("champ--erreur", message !== "");
    controle.setAttribute("aria-invalid", message !== "" ? "true" : "false");
    if (zone) { zone.textContent = message; }
  }

  /**
   * Vérifie un champ et renvoie son message d'erreur (vide si valide).
   * @param {HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement} controle
   * @returns {string}
   */
  function verifier(controle) {
    var valeur = controle.value.trim();

    if (controle.type === "checkbox") {
      return controle.checked ? "" : "Merci de cocher cette case pour continuer.";
    }
    if (controle.required && valeur === "") {
      return "Ce champ est obligatoire.";
    }
    if (controle.type === "email" && valeur !== "" && !MOTIF_EMAIL.test(valeur)) {
      return "Adresse de courriel invalide.";
    }
    if (controle.name === "telephone" && valeur !== "" && valeur.replace(/[^0-9]/g, "").length < 9) {
      return "Numéro trop court pour être rappelé.";
    }
    return "";
  }

  /** @returns {Array<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>} */
  function controles() {
    return Array.prototype.filter.call(
      formulaire.querySelectorAll("input, select, textarea"),
      function (element) { return element.type !== "submit"; }
    );
  }

  /* Efface l'erreur dès que le visiteur corrige. */
  controles().forEach(function (controle) {
    controle.addEventListener("input", function () {
      if (controle.closest(".champ--erreur")) { signaler(controle, verifier(controle)); }
    });
    controle.addEventListener("blur", function () {
      if (controle.value.trim() !== "") { signaler(controle, verifier(controle)); }
    });
  });

  /**
   * Compose le courriel prérempli à partir des réponses.
   * @returns {string}
   */
  function composerLien() {
    var donnees = new FormData(formulaire);
    var lignes = ["Demande de devis déposée depuis le site dsg-renov.ch", ""];

    CHAMPS.forEach(function (champ) {
      var valeur = String(donnees.get(champ.nom) || "").trim();
      lignes.push(champ.libelle + " : " + (valeur === "" ? "—" : valeur));
    });

    var objet = "Demande de devis — " + String(donnees.get("nom") || "").trim();
    return "mailto:" + DESTINATAIRE +
      "?subject=" + encodeURIComponent(objet) +
      "&body=" + encodeURIComponent(lignes.join("\n"));
  }

  formulaire.addEventListener("submit", function (evenement) {
    evenement.preventDefault();

    var premierFautif = null;
    controles().forEach(function (controle) {
      var message = verifier(controle);
      signaler(controle, message);
      if (message !== "" && premierFautif === null) { premierFautif = controle; }
    });

    if (premierFautif) {
      if (retour) { retour.textContent = ""; }
      premierFautif.focus();
      return;
    }

    window.location.href = composerLien();

    if (retour) {
      retour.textContent = "Votre logiciel de messagerie s'ouvre avec la demande préremplie. " +
        "S'il ne s'ouvre pas, écrivez directement à " + DESTINATAIRE + " ou appelez le +41 21 847 02 02.";
      retour.focus();
    }
  });
}());
