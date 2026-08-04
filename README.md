# DSG Rénovation — site vitrine

Site d'une page pour **DSG Rénovation Sàrl**, entreprise de rénovation
clé en main à Lausanne (arc lémanique).

HTML, CSS et JavaScript natifs — aucun framework, aucune étape de build.
Ouvrir `index.html` suffit.

## Structure

```
index.html            le dossier complet, en sept pièces
assets/css/           feuilles numérotées, chargées dans l'ordre
assets/js/            un module par comportement
assets/images/        tirages du comparateur avant / après
```

Les feuilles de style se lisent dans l'ordre de leur numéro :
`00-jetons.css` porte **toutes** les valeurs du site (couleurs,
typographie, espacements, durées). Les autres n'y puisent que des
jetons — aucune valeur n'est écrite en dur ailleurs, hors cas commenté.

## Direction artistique

Papier blanc, encre noire, rouge de marque, répartis 60 / 30 / 10.
Le rouge n'est pas une matière : il ne sert qu'à l'action — boutons
d'appel, repère de la section lue, surlignage du titre.

Les blocs sombres redéfinissent la gamme d'encres localement
(`.sur-sombre`) : aucun composant n'a à connaître la couleur de son
fond, il demande `--c-encre` et obtient la bonne.

Chaque couleur de texte porte son rapport de contraste en commentaire.
Le plancher du site est de 4,5:1 — seuil AA.

## Comportements

| Fichier | Rôle |
|---|---|
| `nav.js` | navigation, section courante, menu plein écran |
| `motion.js` | révélations au défilement, compteurs du relevé |
| `effets.js` | jauge de lecture, accord des éléments fixes au fond, parallaxe |
| `vignette.js` | tirage qui suit le pointeur dans la liste des savoir-faire |
| `comparateur.js` | glissière avant / après (souris, tactile, clavier) |
| `lumineuse.js` | visionneuse plein écran des réalisations |
| `formulaire.js` | validation de la demande de devis |
| `dossier.js` | filtres des réalisations |

Tout est neutralisé si le visiteur demande moins de mouvement
(`prefers-reduced-motion`), et le contenu reste lisible sans
JavaScript.

## Documents de travail

`DA-MOMDESIGN.md` — analyse de référence et direction corrective.
`DIRECTION-ARTISTIQUE.md` et `dsg-renov-claude.md` décrivent des états
antérieurs du projet : ils sont conservés pour mémoire mais **ne
correspondent plus au site actuel**.
