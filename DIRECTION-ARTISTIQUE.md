# DIRECTION ARTISTIQUE — Client Construction / Bâtiment

Document de référence unique. Il doit permettre de coder le site **sans avoir vu les images d'inspiration**.
Toutes les valeurs sont normatives : si une valeur n'est pas listée ici, elle ne doit pas apparaître dans le code.

Date : 29/07/2026 — Statut : v1, prêt pour production.

---

## 0. Lecture des 6 références

Les inspirations viennent du golf, du luxe/mode, du sport et d'une plateforme de services.
Aucune ne vient du BTP — c'est volontaire et c'est la meilleure nouvelle du brief : le client ne veut pas
ressembler à un site de BTP. Le travail consiste à extraire les **principes** et à les traduire en matière.

### Inspi 1 — Club de golf (Wembley Golf Club)

- **Ambiance** : feutré, premium, club privé, naturel, installé.
- **Couleurs** : vert forêt profond (~`#243A2C`) sur fond crème/blanc cassé (~`#F4F2EC`), texte quasi noir. Ratio ~70 % fond clair / 20 % vert / 10 % photo.
- **Typo** : titre display grotesque très gras en capitales, fortement chassé, avec un léger italique ; paragraphes en **serif** centrés, petits. Contraste titre/corps énorme (~6:1).
- **Layout** : hero où le titre chevauche le haut d'une photo posée dans un conteneur arrondi ; bandeau de texte défilant (marquee) « WELCOME TO… » qui sépare les sections ; triptyque image/texte/image ; carrousel de services avec flèches ‹ ›.
- **Matières** : photos plein cadre dans des blocs à coins arrondis, aucune ombre portée, boutons en pilule à filet fin.
- **On garde** : le fond hors-blanc, le marquee comme respiration entre sections, le titre qui mord sur la photo, les boutons pilule à filet.
- **On écarte** : le serif centré pour le corps de texte (illisible en volume, connote le club fermé, pas le chantier), le vert forêt (territoire golf/écologie, pas construction).

### Inspi 2 — Éditorial Louis Vuitton (page longue historique)

- **Ambiance** : éditorial, brut, culturel, graphique, affirmé.
- **Couleurs** : noir + blanc pur + **un seul** bleu électrique saturé (~`#2B2BE8`) utilisé en aplats pleine largeur, en surlignage et en forme ondulée qui traverse la page. Photos en noir et blanc.
- **Typo** : grotesque condensée en capitales pour les intertitres, corps de texte minuscule en gris, aucune fioriture. Coins vifs partout, zéro arrondi.
- **Layout** : grille magazine assumée, collages photo qui se chevauchent, images qui coupent le texte, blocs de couleur qui vont bord à bord.
- **On garde** : la discipline **mono-accent** (une seule couleur saturée porte toute l'identité), le noir et blanc photo comme registre secondaire, le collage/chevauchement, les aplats pleine largeur.
- **On écarte** : le bleu Klein et les vagues — c'est signé Louis Vuitton, trop identifiable pour être repris tel quel. Et les coins 100 % vifs, qui sur un site BTP virent au « site institutionnel des années 2010 ».

### Inspi 3 — Académie de baseball

- **Ambiance** : chaleureux, structuré, premium décontracté, pédagogique.
- **Couleurs** : fond beige clair (~`#F4F2EE`), noir, un jaune/moutarde d'accent (~`#E3A93A`) réservé à un mot sur deux dans les titres.
- **Typo** : grotesque géométrique, titres en bas-de-casse semi-bold — beaucoup plus calme que les autres réfs. Métadonnées en très petit corps.
- **Layout** : sections numérotées `01 / 02 / 03` dans des badges pilule ; liste de programmes en lignes avec chevrons ; cartes témoignages ; pastille noire ronde avec flèche diagonale ↗ en coin de carte.
- **Matières** : coins très arrondis (~20–24 px), photos chaudes, ombres quasi nulles.
- **On garde** : **la numérotation `01/02/03`** (transposable directement en étapes de chantier), les listes-lignes avec chevron, la pastille flèche, la douceur du fond.
- **On écarte** : le côté « app/coaching » des cartes témoignages avec avatars ronds — trop SaaS pour du bâtiment.

### Inspi 4 — Complexe sportif (GYMGO)

- **Ambiance** : énergique, punchy, commercial, contrasté, direct.
- **Couleurs** : blanc, noir profond, **jaune fluo** (~`#E4FF00`) en aplats pleine section, orange (~`#FF5C1A`) en secours. Contrastes maximaux.
- **Typo** : display ultra-bold en capitales, crénage très serré, titres qui occupent 2 lignes pleines. Accents de couleur sur un mot dans un bloc noir.
- **Layout** : alternance de blocs blancs / noirs / jaunes ; cartes tarifaires en damier ; flèches ↗ omniprésentes ; badges circulaires « +10 fields » posés en biais.
- **On garde** : le titre display capitale ultra-gras en ouverture, le rythme d'alternance clair/sombre, la flèche diagonale, le badge « chiffre-clé » posé en rotation légère.
- **On écarte** : le jaune fluo saturé en aplats plein écran (fatigue rétinienne, connote la salle de sport et le low-cost) et l'orange en second accent (deux accents chauds = bouillie).

### Inspi 5 — Club cycliste

- **Ambiance** : lumineux, sportif, amical, aéré, positif.
- **Couleurs** : jaune pastel (~`#F3F386`) en grands panneaux, noir, blanc. Le jaune sert de **surface**, pas d'accent ponctuel.
- **Typo** : grotesque semi-bold, titres en bas-de-casse, 3 lignes max, corps très petit et gris.
- **Layout** : gros panneaux arrondis mi-texte mi-photo ; pilules flottantes posées sur les photos (« Cycling », « Adventure ») ; rangée de chiffres-clés (72 KM / 93 / 102+) avec libellés minuscules.
- **On garde** : **la rangée de chiffres-clés** (parfaite pour m² livrés / chantiers / années), les pilules-étiquettes posées sur photo, le panneau mixte texte+photo.
- **On écarte** : le jaune pastel comme surface dominante (mou, publicitaire) et le ton « communauté sympa », inadapté à un engagement contractuel de chantier.

### Inspi 6 — Plateforme de services (Minds)

- **Ambiance** : soft, produit, accessible, coloré, ordonné.
- **Couleurs** : gris clair (~`#EFEFEF`), noir, et une polychromie pastel (rose `#F2A8D0`, jaune `#F0C24C`, vert `#A8D89A`).
- **Typo** : grotesque géométrique, hiérarchie douce, logotype géant en pied de page.
- **Layout** : navigation en pilules, triptyque de cartes de hauteur égale, footer noir arrondi avec le nom de marque en très grand.
- **On garde** : **la nav en pilules**, le footer sombre avec logotype monumental, la rigueur des grilles de 3 cartes égales.
- **On écarte** : toute la polychromie pastel (aucune crédibilité en construction) et l'esthétique « carte dans carte ».

> **Une inspiration illisible ou manquante ?** Non : les 6 fichiers ont été lus et exploités.

---

## 1. Concept

# « LA PREUVE PAR LA MATIÈRE »

**Trois mots-clés : MATIÈRE — SIGNAL — PREUVE.**

**Hypothèse sur l'intention.** Les six références ont un point commun que le client n'a probablement pas
verbalisé : aucune ne vend un produit, toutes vendent **une appartenance et une compétence démontrée**.
Le golf vend un club, LV vend un héritage d'artisan, le baseball vend une progression, le sport vend une
performance. Le client de construction ne veut donc pas un catalogue de prestations : il veut un site qui
**prouve un savoir-faire** et donne envie de confier un chantier.

**Le territoire.** On traite le chantier comme un objet éditorial. Le site est construit comme un carnet de
chantier premium : fond couleur béton frais, typographie d'ingénierie, données factuelles affichées en
monospace (surface, durée, lot, maître d'ouvrage), photographies documentaires de matière et de gestes,
et **une seule couleur qui signale** — un jaune de signalisation, employé comme sur un chantier bien tenu :
rare, précis, toujours pour indiquer où aller.

Ni le pathos du BTP (« votre projet, notre passion » sur fond de coucher de soleil), ni la froideur du
groupe industriel. Une marque qui montre ses mains, ses matériaux et ses chiffres.

---

## 2. Ce que disent les inspirations — synthèse croisée

### Convergences (le cœur de la DA, non négociable)

| Convergence | Présente dans | Traduction pour le client |
|---|---|---|
| Fond **jamais blanc pur** (crème, beige, gris clair) | 1, 3, 6 | Fond « béton clair » `#F2EFE9` sur tout le site |
| **Un seul accent saturé** porte l'identité | 1, 2, 3, 4, 5 | Jaune signal unique, ≤ 7 % de la surface |
| **Photo plein cadre** dans un bloc, jamais détourée, jamais en vignette | 1, 3, 4, 5, 6 | Photos de chantier en grands blocs |
| Titres **grotesque gras**, contraste de taille massif avec le corps | 1, 2, 4, 5 | Ratio H1/corps ≈ 5:1 en desktop |
| **Pilules** (boutons, étiquettes, nav) | 1, 3, 4, 5, 6 | Boutons et tags en `border-radius: 999px` |
| **Flèche diagonale ↗** dans une pastille ronde | 3, 4, 5, 6 | Signalétique de lien unique du site |
| **Ombres portées quasi absentes** : la profondeur vient du contraste de blocs | 1, 2, 3, 5, 6 | Système d'ombres volontairement pauvre (2 niveaux) |
| Alternance de sections claires / sombres pleine largeur | 2, 4, 6 | Rythme de page en 4 registres |

### Divergences → tranchées

**Tension 1 — Coins vifs éditoriaux (LV) vs arrondis généreux (les 5 autres).**
→ **Tranché : arrondi maîtrisé à 16 px pour les surfaces et cartes, coins vifs (0 px) réservés aux
images et bandes qui vont bord à bord.** Justification : 5 réfs sur 6 arrondissent, donc l'arrondi est ce
que le client aime ; mais l'arrondi généreux (24 px+) infantilise un métier de structure. 16 px se lit
comme « soigné », pas comme « application mobile ». Le coin vif est conservé là où il a un sens : la
matière ne s'arrondit pas, elle se coupe.

**Tension 2 — Jaune fluo énergie (4, 5) vs vert feutré nature (1) vs bleu mono brut (2).**
→ **Tranché : jaune signalisation `#F2B10A`, en accent ponctuel uniquement.** Justification : le jaune est
le seul code chromatique légitime du bâtiment (signalisation, EPI, engins), il est présent dans 3 réfs sur 6,
et il permet de conserver la discipline mono-accent de LV sans copier son bleu. Le fluo est refusé : il
appartient au sport. Le vert est refusé : il appartient au golf et à l'écoblanchiment.

**Tension 3 — Chaleur communautaire (3, 5, 6) vs distance éditoriale (2).**
→ **Tranché : distance éditoriale pour la structure, chaleur pour la photo.** La mise en page est froide,
alignée, factuelle, chiffrée. La chaleur vient exclusivement de l'image (lumière, poussière, mains, matière)
et du fond crème. On ne cherche pas la sympathie par le graphisme.

**Tension 4 — Bas-de-casse calme (3, 5) vs capitales ultra-grasses (2, 4).**
→ **Tranché : capitales grasses pour les H1/H2 de section, bas-de-casse pour tout le reste.** La capitale
donne l'autorité attendue sur un métier de structure ; l'étendre au-delà des deux premiers niveaux
détruirait la lisibilité des textes techniques.

### Signaux faibles retenus (détails discrets, présents dans plusieurs réfs)

1. **La numérotation `01 / 02 / 03`** (réfs 3 et 4) → devient le système de repérage de tout le site : étapes de méthode, lots, chantiers.
2. **Les métadonnées en corps minuscule et gris** sous chaque élément (réfs 2, 3, 5) → deviennent la fiche technique en monospace de chaque réalisation.
3. **Le filet horizontal fin comme séparateur** plutôt que la carte (réfs 2, 3, 4) → séparateur `1px` par défaut avant toute idée de carte.
4. **Le texte défilant / logotype monumental** (réfs 1, 6) → bandeau de savoir-faire en défilement + nom de l'entreprise en très grand dans le pied de page.
5. **Le badge chiffré posé en légère rotation** (réf 4) → tampon « depuis 19XX » / « chantier livré ».

### Anti-références (aucune inspiration ne fait ça → interdit)

Aucune des six ne recourt à : dégradés, glassmorphisme, ombres diffuses colorées, icônes en trait fin dans
des cercles, illustrations vectorielles « corporate », photos détourées sur fond blanc, sliders pleine page
à autoplay rapide, plus de deux familles typographiques. Tout cela est banni (voir §9).

### Risque d'imitation à signaler

L'inspiration 2 est une refonte de **Louis Vuitton** : son bleu électrique + ses ondulations traversantes
sont une signature de marque identifiable. On en reprend la **méthode** (mono-accent, collage, aplats bord
à bord), jamais la forme. L'inspiration 4 est très proche des codes visuels des marques de boisson
énergisante : le jaune fluo en aplat est donc écarté pour cette raison aussi.

---

## 3. Palette

Toutes les couleurs sont validées AA minimum dans les usages décrits.

### Couleurs de fond et surfaces

| Token | Hex | Rôle | Part de surface |
|---|---|---|---|
| `--c-beton` | `#F2EFE9` | **Fond principal du site.** Béton frais, chaud, jamais blanc. | ~55 % |
| `--c-beton-2` | `#E6E1D7` | Surface secondaire : encarts, lignes alternées, hover de cellules. | ~10 % |
| `--c-blanc` | `#FBFAF7` | Surface haute : cartes de réalisation, champs de formulaire. Blanc cassé, **jamais `#FFFFFF`**. | ~10 % |
| `--c-bitume` | `#15171A` | Sections sombres pleine largeur, pied de page, boutons primaires. | ~15 % |
| `--c-bitume-2` | `#22262B` | Surface élevée à l'intérieur d'une section sombre. | ~2 % |

### Texte

| Token | Hex | Rôle |
|---|---|---|
| `--c-encre` | `#15171A` | Texte principal sur fond clair (contraste 15.4:1 sur béton). |
| `--c-encre-60` | `#5C6169` | Texte secondaire, chapôs, légendes sur fond clair (5.1:1). |
| `--c-encre-40` | `#8A8F97` | Métadonnées, placeholders. **Interdit sous 14 px.** |
| `--c-craie` | `#F2EFE9` | Texte principal sur fond sombre. |
| `--c-craie-60` | `#A2A7AE` | Texte secondaire sur fond sombre. |

### Accents

| Token | Hex | Rôle | Part |
|---|---|---|---|
| `--c-signal` | `#F2B10A` | **Accent unique.** Soulignement de mot-clé, pastille de flèche, état actif, puce de liste numérotée, filet d'accent. Toujours associé à `--c-encre` pour le texte posé dessus (contraste 10.8:1). | ~6 % |
| `--c-signal-sombre` | `#C08A00` | Hover du signal, bordures de focus sur fond clair. | — |
| `--c-cyanotype` | `#1B3B6F` | **Accent secondaire strictement réservé** aux sections « bureau d'études / plans / méthode » et aux fonds de schémas techniques. Ne jamais l'utiliser comme couleur de bouton. | ~2 % |

### États système

| Token | Hex | Rôle |
|---|---|---|
| `--c-valide` | `#2E7D5B` | Succès, chantier livré. |
| `--c-alerte` | `#B4441F` | Erreur de formulaire, indisponibilité. Teinte rouille, cohérente avec la matière. |
| `--c-focus` | `#1B3B6F` | Anneau de focus clavier, `outline: 2px solid; outline-offset: 3px`. |

### Combinaisons interdites

- ❌ **Jaune signal + noir en hachures diagonales** — le cliché absolu du site BTP (ruban de chantier).
- ❌ **Jaune signal en aplat de section pleine largeur** — réservé au sport ; le signal doit rester rare.
- ❌ Jaune signal sur bitume pour du **texte courant** (réservé aux mots-clés isolés et aux pastilles).
- ❌ Cyanotype + jaune signal côte à côte en surfaces égales (drapeau).
- ❌ Blanc pur `#FFFFFF` comme fond de page ou de carte.
- ❌ Tout dégradé de couleur à couleur. Seule tolérance : un voile linéaire noir transparent sur photo pour lisibilité (`rgba(21,23,26,0 → .72)`).
- ❌ Rouille `--c-alerte` en couleur décorative.

---

## 4. Typographie

### Familles (100 % Google Fonts, gratuites, self-hostables)

| Rôle | Famille | Graisses à charger | Pourquoi |
|---|---|---|---|
| **Display / titres** | **Archivo** (variable, `wght` 400–800, axe `wdth` 100–110 si disponible) | 700, 800 | Grotesque américaine large et robuste, très haute lisibilité en capitales grasses. Reprend l'autorité des réfs 2 et 4 sans leur condensé publicitaire. |
| **Corps / interface** | **IBM Plex Sans** | 400, 500, 600 | Sans-serif d'origine industrielle : personnalité d'ingénierie, excellente en petits corps et en textes techniques longs. |
| **Données / labels** | **IBM Plex Mono** | 400, 500 | Porte tous les chiffres factuels (surface, dates, lots, numérotation `01`). C'est la signature du carnet de chantier. |

Chargement : `font-display: swap`, subset latin + latin-ext, préchargement de Archivo 800 et Plex Sans 400 uniquement.
**Aucune troisième famille sans-serif. Aucune serif. Aucun italique**, sauf citation de client (Plex Sans 400 italic).

### Échelle (base 16 px, ratio 1,25 mobile / 1,333 desktop)

| Token | Desktop | Mobile | Famille / graisse | Casse | Letter-spacing | Interlignage |
|---|---|---|---|---|---|---|
| `--t-display` | 104px (clamp 56→104) | 56px | Archivo 800 | MAJUSCULES | `-0.03em` | 0.92 |
| `--t-h1` | 72px (clamp 40→72) | 40px | Archivo 800 | MAJUSCULES | `-0.025em` | 0.96 |
| `--t-h2` | 48px (clamp 32→48) | 32px | Archivo 700 | MAJUSCULES | `-0.02em` | 1.04 |
| `--t-h3` | 30px | 24px | Archivo 700 | Capitale initiale | `-0.015em` | 1.15 |
| `--t-h4` | 22px | 20px | Plex Sans 600 | Capitale initiale | `-0.01em` | 1.25 |
| `--t-chapo` | 20px | 18px | Plex Sans 400 | Capitale initiale | `0` | 1.55 |
| `--t-body` | 17px | 16px | Plex Sans 400 | Capitale initiale | `0` | 1.65 |
| `--t-small` | 14px | 14px | Plex Sans 400 | Capitale initiale | `0` | 1.5 |
| `--t-label` | 12px | 12px | Plex Mono 500 | MAJUSCULES | `+0.14em` | 1.2 |
| `--t-data` | 15px | 14px | Plex Mono 400 | — | `+0.02em` | 1.4 |
| `--t-chiffre` | 88px (clamp 48→88) | 48px | Archivo 800 | — | `-0.04em`, `font-variant-numeric: tabular-nums` | 1 |

### Règles d'usage

- **Un seul `--t-display` par page**, dans le hero. Jamais ailleurs.
- Les titres en capitales ne dépassent **jamais 4 mots par ligne** et **3 lignes au total**.
- Le **surlignage jaune** est autorisé sur **un seul mot** par titre : `box-decoration-break: clone; background: var(--c-signal); padding: 0 .12em;` — inspiré des réfs 3 et 4.
- Toute donnée chiffrée (année, m², durée, nombre de lots, référence de chantier) est en **Plex Mono**. C'est une règle absolue : c'est ce qui crée la signature du site.
- Les libellés de section (`01 — SAVOIR-FAIRE`) utilisent `--t-label` avec un tiret cadratin et le numéro en jaune.
- Longueur de ligne du corps de texte : **62 à 72 caractères** (`max-width: 66ch`).
- Pas de texte justifié. Alignement à gauche, hors chiffres-clés (centrés dans leur colonne).

---

## 5. Grille, espacement, rayons, ombres — tokens

### Grille

```
--grid-max        : 1440px   /* largeur max du conteneur */
--grid-content    : 1240px   /* largeur max du contenu aligné */
--grid-text       : 720px    /* largeur max d'un bloc de texte long */
--grid-cols       : 12 (desktop ≥1024) | 8 (tablette 768–1023) | 4 (mobile <768)
--grid-gutter     : 24px desktop | 20px tablette | 16px mobile
--grid-margin     : 64px desktop | 40px tablette | 20px mobile
```

Les blocs **image et bandes de couleur peuvent sortir de la grille** et aller bord à bord (`full-bleed`).
Le texte, jamais. Cette opposition « texte discipliné / matière débordante » est le mécanisme de composition
central, hérité des réfs 1 et 2.

Points de rupture : `480 / 768 / 1024 / 1280 / 1600`.

### Espacement (échelle 4 px)

```
--sp-1: 4px    --sp-2: 8px    --sp-3: 12px   --sp-4: 16px
--sp-5: 24px   --sp-6: 32px   --sp-7: 48px   --sp-8: 64px
--sp-9: 96px   --sp-10: 128px --sp-11: 160px --sp-12: 200px
```

Rythme vertical :
- Padding vertical de section : `--sp-11` (160px) desktop / `--sp-8` (64px) mobile.
- Entre un titre de section et son contenu : `--sp-7` (48px).
- Entre un titre et son chapô : `--sp-4` (16px).
- Entre deux items d'une liste-lignes : `--sp-5` (24px) + filet `1px`.
- **Aucune valeur d'espacement hors de cette échelle.**

### Rayons

```
--r-0    : 0px     /* photos full-bleed, bandes de couleur, filets */
--r-sm   : 4px     /* champs de formulaire, petits tags carrés */
--r-md   : 16px    /* DÉFAUT : cartes, blocs image, encarts, panneaux */
--r-lg   : 24px    /* panneaux pleine largeur (hero secondaire, bloc CTA, footer) */
--r-pill : 999px   /* boutons, étiquettes, pastilles de flèche, nav */
```

**Jamais d'arrondi imbriqué** : un élément à `--r-md` ne contient pas un enfant arrondi. Si une image
remplit une carte, elle hérite du rayon du parent (`overflow: hidden`), elle n'a pas le sien.

### Bordures et filets

```
--bd-hair  : 1px solid rgba(21,23,26,.12)   /* séparateur par défaut sur fond clair */
--bd-hair-d: 1px solid rgba(242,239,233,.16)/* idem sur fond sombre */
--bd-strong: 1.5px solid var(--c-encre)     /* boutons secondaires, cadre de mise en avant */
--bd-signal: 2px solid var(--c-signal)      /* état actif, onglet sélectionné */
```

Le **filet est l'outil de séparation par défaut**. On ne crée une carte que si l'élément est cliquable
dans son intégralité.

### Ombres (volontairement pauvres)

```
--sh-0: none;                                        /* défaut sur 90 % des éléments */
--sh-1: 0 1px 2px rgba(21,23,26,.06),
        0 8px 24px rgba(21,23,26,.05);               /* élément flottant : menu, pilule sur photo */
--sh-2: 0 2px 4px rgba(21,23,26,.08),
        0 24px 60px rgba(21,23,26,.10);              /* modale, panneau de navigation mobile */
```

Aucune ombre colorée. Aucune ombre au repos sur une carte : la profondeur vient du contraste de blocs.
Au hover d'une carte, on ne lève pas l'ombre — on assombrit le fond de `--c-beton` vers `--c-beton-2`.

---

## 6. Imagerie et matières

### Registre photographique — trois familles obligatoires

1. **LE GESTE** (40 % des visuels) — un compagnon au travail, cadrage serré à mi-corps, mains visibles,
   outil en action. Toujours en train de faire, jamais en train de poser ni de regarder l'objectif.
2. **LA MATIÈRE** (30 %) — macro sur béton banché, acier, bois, joint, ferraillage, coffrage.
   Plan très serré, quasi abstrait. Ces images servent de respirations pleine largeur entre les sections.
3. **L'OUVRAGE** (30 %) — la réalisation finie ou en cours, plan large, lignes architecturales franches,
   ciel présent mais jamais spectaculaire. Alterner « en chantier » et « livré » sur une même réalisation :
   c'est le cœur de la preuve.

### Traitement colorimétrique (LUT à appliquer uniformément)

- Saturation globale **−12 %**, saturation des ciels **−25 %** (aucun ciel bleu carte postale).
- Ombres légèrement chaudes (+4 sur le canal rouge dans les tons sombres), hautes lumières neutres.
- Contraste moyen tenu, **noirs jamais bouchés** (point noir levé à ~8/255) pour dialoguer avec le fond béton.
- Grain filmique très léger : `opacity .045`, taille 1,5 px, appliqué **sur la photo uniquement**, jamais sur le fond du site.
- Option **noir et blanc** (héritée de la réf 2) réservée aux portraits d'équipe et aux archives : elle
  distingue « les gens et l'histoire » de « les chantiers », qui restent en couleur.

### Cadrages et formats

| Usage | Ratio | Rayon |
|---|---|---|
| Hero | `16/9` desktop, `4/5` mobile | `--r-0` (bord à bord) |
| Carte de réalisation | `4/5` | `--r-md` |
| Bande de matière (respiration) | `21/9` | `--r-0` |
| Portrait d'équipe | `1/1` | `--r-md` |
| Vignette d'actualité | `3/2` | `--r-md` |

### Traitements graphiques autorisés

- **Étiquette pilule posée sur la photo** (réfs 3 et 5) : fond `rgba(251,250,247,.92)`, `--t-label`, en bas à gauche, à `--sp-4` du bord. Contenu : lieu, lot ou matériau.
- **Pastille de flèche ↗** : cercle 48 px, fond `--c-encre`, glyphe `--c-signal`, en bas à droite d'une carte cliquable.
- **Voile de lisibilité** : dégradé noir vertical `0 → .72` sur le tiers bas uniquement, appliqué seulement quand du texte est posé sur l'image.
- **Chevauchement** : le titre du hero mord de 24 à 40 px sur le haut de l'image (réf 1), en `mix-blend-mode: normal` avec un bloc de fond béton derrière la partie chevauchante.
- **Tampon rotatif** : badge circulaire jaune, `rotate(-8deg)`, texte en Plex Mono capitales, pour « 250 CHANTIERS LIVRÉS » ou « DEPUIS 1987 ».

### Interdits d'imagerie

Photos de banque d'images génériques (poignée de main, casque neuf posé sur un plan, équipe en chemise
blanche bras croisés), rendus 3D lisses présentés comme des photos, drone au coucher du soleil, casque
jaune en icône vectorielle, silhouettes détourées, filtres HDR, images de moins de 1600 px de large,
personnes ne portant pas les EPI (crédibilité et conformité).

---

## 7. Layout et structure de page type

### Principes

1. **Alternance de registres.** Une page enchaîne 4 registres, jamais deux fois le même à la suite :
   `BÉTON` (fond clair, texte) → `MATIÈRE` (photo bord à bord) → `BITUME` (section sombre) → `BÉTON`.
2. **Le texte est aligné, la matière déborde.** Cf. §5.
3. **Une idée par section.** Une section = un titre, un chapô de 2 lignes maximum, un contenu.
4. **Asymétrie contrôlée.** Titre sur les colonnes 1–5, contenu sur 7–12. On ne centre jamais un bloc de
   texte long (correction explicite de la réf 1).
5. **Densité :** aérée en haut de page, plus dense en descendant (les sections de preuve — chiffres,
   réalisations, références — sont resserrées, ce qui les rend crédibles).

### Structure de la page d'accueil (ordre imposé)

| # | Section | Registre | Contenu et mécanique |
|---|---|---|---|
| 01 | **En-tête** | transparent → béton | Logo à gauche, nav centrale en pilules (réf 6), bouton « Nous consulter » en pilule sombre à droite. Devient opaque + filet bas après 80 px de scroll. Hauteur 72 px, 64 px après réduction. |
| 02 | **Hero** | béton | `--t-display` en 3 lignes max, un mot surligné jaune. Chapô 2 lignes. Deux boutons. Image `16/9` bord à bord dessous, le titre mordant de 32 px sur son bord haut. |
| 03 | **Bandeau défilant** | bitume | Marquee horizontal des savoir-faire (`GROS ŒUVRE · CHARPENTE · RÉNOVATION · VRD ·`) en `--t-h3` craie, séparés par une puce jaune. 42 s linéaire, pause au survol. Hérité de la réf 1. |
| 04 | **Chiffres-clés** | béton | 4 colonnes : `--t-chiffre` + libellé en `--t-label`. Séparés par des filets verticaux. Compteur animé une seule fois à l'entrée. Hérité de la réf 5. |
| 05 | **Savoir-faire** | béton | Liste-lignes numérotée `01 → 06`, chaque ligne : numéro mono jaune, intitulé en `--t-h3`, chevron à droite, filet dessous. Au survol : la ligne se peuple d'une vignette photo en `4/5` qui apparaît à droite. Hérité de la réf 3. |
| 06 | **Respiration matière** | matière | Photo `21/9` bord à bord, aucun texte, ou une citation courte en `--t-h2` craie posée à gauche. |
| 07 | **Réalisations** | béton | Grille 12 col : 2 cartes larges + 1 étroite, hauteurs volontairement inégales. Chaque carte : photo `4/5`, étiquette pilule (lieu), titre `--t-h4`, fiche technique en Plex Mono (`SURFACE 2 400 m² · LIVRÉ 2025 · MAÎTRISE D'OUVRAGE …`), pastille flèche. |
| 08 | **Méthode** | bitume | 4 étapes `01 → 04` en colonnes, filets verticaux clairs, numéro jaune énorme en fond de colonne (opacité .12). Registre sombre = moment de sérieux contractuel. |
| 09 | **Preuve sociale** | béton | 2 témoignages maîtres d'ouvrage en blocs `--c-blanc`, `--r-md`, citation en `--t-h4`, signature en Plex Mono. Pas d'avatar rond (correction de la réf 3). |
| 10 | **Certifications** | béton-2 | Bande discrète : logos Qualibat / RGE / assurance décennale en niveaux de gris, opacité 0.7, hauteur uniforme 40 px. |
| 11 | **CTA final** | signal | **Le seul bloc où le jaune couvre une surface** : panneau `--r-lg` jaune, marge extérieure de 64 px (donc pas bord à bord), titre `--t-h2` encre, bouton bitume. Rare = puissant. |
| 12 | **Pied de page** | bitume | Colonnes de liens, coordonnées et zone d'intervention en Plex Mono, puis **nom de l'entreprise en `--t-display` craie occupant toute la largeur**, coupé par le bas de la page (réf 6). |

### Pages internes

- **Réalisation (détail)** : hero photo bord à bord + titre en surimpression bas ; colonne de fiche technique mono collante (`position: sticky`) à gauche, récit et galerie à droite ; galerie avant/après en glissière ; navigation « chantier suivant » en bas.
- **Métier / savoir-faire** : hero texte sur béton, sommaire numéroté collant, alternance texte/photo, encart « les points de vigilance » sur `--c-beton-2`.
- **Contact** : formulaire sur 6 colonnes, carte de zone d'intervention en cyanotype, coordonnées en mono. Champs `--r-sm`, hauteur 52 px, filet 1,5 px, focus jaune.

### Composants normalisés

- **Bouton primaire** : fond `--c-encre`, texte `--c-craie`, `--r-pill`, hauteur 52 px, padding `0 28px`, `--t-body` 500. Hover : fond `--c-signal`, texte `--c-encre`.
- **Bouton secondaire** : transparent, `--bd-strong`, mêmes dimensions. Hover : fond `--c-encre`, texte craie.
- **Bouton sur fond sombre** : fond `--c-signal`, texte `--c-encre`.
- **Étiquette / tag** : `--r-pill`, `--t-label`, hauteur 28 px, fond `--c-beton-2`, ou fond `--c-signal` si actif.
- **Carte** : `--c-blanc`, `--r-md`, `--sh-0`, padding `--sp-5`. **Interdiction absolue d'imbriquer une carte dans une carte.**

---

## 8. Motion

### Courbes

```
--e-sortie   : cubic-bezier(.22, 1, .36, 1)      /* apparitions, entrées : décélération franche */
--e-standard : cubic-bezier(.4, 0, .2, 1)        /* hover, changements d'état */
--e-entree   : cubic-bezier(.7, 0, .84, 0)       /* disparitions, sorties */
--e-mecanique: cubic-bezier(.65, 0, .35, 1)      /* glissières, accordéons : symétrique, « machine » */
```

### Durées

```
--d-instant : 120ms   /* retour tactile, changement de couleur de filet */
--d-rapide  : 200ms   /* hover de bouton, de lien, de tag */
--d-normal  : 340ms   /* accordéon, apparition de vignette, sortie de menu */
--d-ample   : 620ms   /* révélation de bloc au scroll */
--d-lent    : 900ms   /* révélation d'image, échelle de photo */
```

### Vocabulaire (exhaustif — rien d'autre n'est autorisé)

1. **Révélation au scroll** : `opacity 0→1` + `translateY(28px→0)`, `--d-ample`, `--e-sortie`, déclenchée à 15 % de visibilité, **une seule fois**. Décalage en cascade de **70 ms** entre éléments d'un même groupe, plafonné à 6 éléments.
2. **Révélation d'image** : masque qui se rétracte du bas vers le haut (`clip-path: inset(100% 0 0 0)` → `inset(0)`) sur `--d-lent`, combiné à `scale(1.06 → 1)`. C'est l'animation signature : l'image « se coffre » comme un mur qu'on décoffre.
3. **Titres display** : révélation ligne par ligne, chaque ligne masquée par `overflow: hidden` et translatée de `100% → 0`, cascade 80 ms, `--d-ample`. Jamais lettre par lettre.
4. **Marquee** : translation linéaire infinie, 42 s pour un cycle, `animation-play-state: paused` au survol.
5. **Compteurs** : chiffres-clés de 0 à la valeur, `--d-lent`, `--e-sortie`, `tabular-nums` pour éviter le tremblement. Une seule fois par session.
6. **Hover de carte** : fond `--c-beton → --c-beton-2` (`--d-rapide`) + image interne `scale(1 → 1.04)` (`--d-normal`, `--e-standard`) + pastille flèche qui tourne de `-45deg → 0`. **Aucun décollement, aucune ombre qui grandit.**
7. **Hover de ligne (liste savoir-faire)** : le filet passe de `--bd-hair` à `--bd-signal` (`--d-instant`), le chevron glisse de 6 px à droite, la vignette apparaît en `opacity + scale(.96→1)`, `--d-normal`.
8. **En-tête** : réduction de hauteur `72 → 64px` et apparition du fond béton + filet, `--d-normal`, `--e-standard`. Se masque au scroll descendant après 400 px, réapparaît au scroll ascendant.
9. **Menu mobile** : panneau plein écran bitume, entrée par `translateY(-100% → 0)` en `--d-normal` `--e-mecanique`, liens en cascade de 50 ms.
10. **Parallaxe** : uniquement sur les bandes de matière (§7-06), amplitude **maximum 8 %** de la hauteur du bloc. Nulle part ailleurs.

### Règles

- **Une seule animation en cours par zone visible.** Si deux éléments veulent bouger, ils se mettent en cascade.
- Aucune animation en boucle hors marquee.
- Rien ne bouge sur le hover d'un texte courant.
- `@media (prefers-reduced-motion: reduce)` : toutes les translations et échelles sont supprimées, ne restent que les transitions d'opacité à 120 ms ; le marquee est figé ; les compteurs affichent directement la valeur finale.
- Le motion ne doit jamais retarder la lecture : tout contenu est lisible même si le JavaScript échoue (états d'entrée appliqués via une classe posée par JS, contenu visible par défaut en CSS).

---

## 9. Interdits — anti-patterns pour CE projet

### Le cliché BTP (rédhibitoire)

- ❌ Hachures diagonales jaune/noir, rubalise, panneaux de danger décoratifs.
- ❌ Icône de casque de chantier, de grue, de truelle, de maison stylisée.
- ❌ Photo de plan avec un casque, un crayon et un mètre posés dessus.
- ❌ Fond de béton en texture générale du site (le béton est une couleur ici, pas un papier peint).
- ❌ Slogans creux : « votre projet, notre passion », « le bâtiment autrement », « bâtir l'avenir ».
- ❌ Compteur de « clients satisfaits » sans chiffre vérifiable.
- ❌ Carrousel de logos partenaires en autoplay rapide.
- ❌ Formulaire de devis en 12 champs au-dessus de la ligne de flottaison.

### Les tics d'IA (rédhibitoires)

- ❌ Dégradé violet/bleu, ou tout dégradé de couleur à couleur.
- ❌ **Inter** en police par défaut (ni Roboto, ni Open Sans, ni Poppins).
- ❌ Cartes dans des cartes, ou grilles de 3 cartes identiques avec icône + titre + 2 lignes.
- ❌ Glassmorphisme, `backdrop-filter: blur` décoratif, bordures translucides brillantes.
- ❌ Ombres colorées, `box-shadow` diffuses de 40 px au repos.
- ❌ Emoji dans l'interface ou les titres.
- ❌ Grille de « features » avec icônes en trait fin dans des cercles pastel.
- ❌ Section « Pourquoi nous choisir ? » avec des coches vertes.
- ❌ Dark mode « parce que c'est moderne » : le site a **un seul mode**, celui décrit ici.
- ❌ Bento grid généraliste sans hiérarchie.

### Discipline de système

- ❌ Toute couleur hors des tokens §3.
- ❌ Toute valeur d'espacement hors de l'échelle §5.
- ❌ Un troisième rayon dans un même composant.
- ❌ Plus de 2 boutons visibles dans une même section.
- ❌ Texte de moins de 14 px hors `--t-label` (12 px, capitales, tracking large).
- ❌ Texte centré sur plus de 2 lignes.
- ❌ Une page sans photo de chantier réelle.
- ❌ Un chiffre affiché sans sa source ou son unité.

---

## 10. En une phrase

> **Un carnet de chantier premium : fond béton, typographie d'ingénieur, chiffres en monospace, photos de matière et de gestes qui débordent de la grille — et un seul jaune de signalisation, rare, pour dire où aller.**

---

## Annexe — Tokens CSS prêts à l'emploi

```css
:root {
  /* Couleurs */
  --c-beton: #F2EFE9;
  --c-beton-2: #E6E1D7;
  --c-blanc: #FBFAF7;
  --c-bitume: #15171A;
  --c-bitume-2: #22262B;
  --c-encre: #15171A;
  --c-encre-60: #5C6169;
  --c-encre-40: #8A8F97;
  --c-craie: #F2EFE9;
  --c-craie-60: #A2A7AE;
  --c-signal: #F2B10A;
  --c-signal-sombre: #C08A00;
  --c-cyanotype: #1B3B6F;
  --c-valide: #2E7D5B;
  --c-alerte: #B4441F;
  --c-focus: #1B3B6F;

  /* Typo */
  --f-display: "Archivo", "Helvetica Neue", Arial, sans-serif;
  --f-body: "IBM Plex Sans", system-ui, sans-serif;
  --f-mono: "IBM Plex Mono", ui-monospace, monospace;

  --t-display: clamp(3.5rem, 7vw, 6.5rem);
  --t-h1: clamp(2.5rem, 5vw, 4.5rem);
  --t-h2: clamp(2rem, 3.4vw, 3rem);
  --t-h3: clamp(1.5rem, 2vw, 1.875rem);
  --t-h4: clamp(1.25rem, 1.5vw, 1.375rem);
  --t-chapo: clamp(1.125rem, 1.4vw, 1.25rem);
  --t-body: clamp(1rem, 1.1vw, 1.0625rem);
  --t-small: 0.875rem;
  --t-label: 0.75rem;
  --t-data: clamp(0.875rem, 1vw, 0.9375rem);
  --t-chiffre: clamp(3rem, 6vw, 5.5rem);

  /* Espacement */
  --sp-1: 4px;  --sp-2: 8px;   --sp-3: 12px;  --sp-4: 16px;
  --sp-5: 24px; --sp-6: 32px;  --sp-7: 48px;  --sp-8: 64px;
  --sp-9: 96px; --sp-10: 128px;--sp-11: 160px;--sp-12: 200px;

  /* Grille */
  --grid-max: 1440px;
  --grid-content: 1240px;
  --grid-text: 720px;
  --grid-gutter: 24px;
  --grid-margin: 64px;

  /* Rayons */
  --r-0: 0px; --r-sm: 4px; --r-md: 16px; --r-lg: 24px; --r-pill: 999px;

  /* Ombres */
  --sh-0: none;
  --sh-1: 0 1px 2px rgba(21,23,26,.06), 0 8px 24px rgba(21,23,26,.05);
  --sh-2: 0 2px 4px rgba(21,23,26,.08), 0 24px 60px rgba(21,23,26,.10);

  /* Motion */
  --e-sortie: cubic-bezier(.22, 1, .36, 1);
  --e-standard: cubic-bezier(.4, 0, .2, 1);
  --e-entree: cubic-bezier(.7, 0, .84, 0);
  --e-mecanique: cubic-bezier(.65, 0, .35, 1);
  --d-instant: 120ms; --d-rapide: 200ms; --d-normal: 340ms;
  --d-ample: 620ms;   --d-lent: 900ms;
}

@media (max-width: 1023px) { :root { --grid-gutter: 20px; --grid-margin: 40px; } }
@media (max-width: 767px)  { :root { --grid-gutter: 16px; --grid-margin: 20px; } }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 120ms !important;
    transition-property: opacity, color, background-color, border-color !important;
  }
}
```

---

## Points à valider avec le client

1. **Le jaune signal `#F2B10A`** : c'est le pari chromatique du projet. Si le client possède déjà une
   couleur de marque (logo, flotte de véhicules, EPI), elle prime et remplace ce token — à condition de
   rester une couleur unique et saturée.
2. **La banque photo** : cette DA ne fonctionne pas avec des images de stock. Un reportage photo sur
   deux ou trois chantiers (geste, matière, ouvrage) est une condition de réussite, pas une option.
3. **Le nom de l'entreprise en display dans le pied de page** suppose un nom court (≤ 14 caractères).
   Au-delà, on passe sur deux lignes en `--t-h1`.
