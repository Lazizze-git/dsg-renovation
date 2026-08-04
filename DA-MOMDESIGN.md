# DA-MOMDESIGN — Analyse de référence & direction artistique corrective

**Projet** : DSG Rénovation, one-page, HTML/CSS/JS vanilla
**Référence analysée** : https://momdesign.fr/ (studio d'architecture, Paris & Orléans, ESTD. 2025)
**Date** : 3 août 2026
**Statut du fichier** : nouveau. Ne remplace pas `DIRECTION-ARTISTIQUE.md` (DA abandonnée, conservée telle quelle à la demande du client interne). Voir § 10 pour l'articulation entre les deux.

> **Avertissement méthodologique.** Une seule inspiration a été fournie. L'analyse croisée est donc limitée : je ne peux pas isoler ce qui, chez momdesign.fr, relève d'un goût personnel récurrent chez toi et ce qui relève d'un coup de cœur ponctuel. Le croisement se fait ici entre **momdesign.fr** et **l'état réel du code DSG**, ce qui est un croisement utile mais différent. Si tu veux une DA vraiment triangulée, donne-moi deux références de plus.

---

## 1. Concept

### « LE BORDEREAU »

**Réglé · Silencieux · Daté**

Le dossier de chantier reste, mais il cesse d'être une mise en scène pour devenir une **structure**. Aujourd'hui le site *raconte* qu'il est un classeur — étiquettes, tampons, intercalaires, numéros de pièce. Il le raconte 40 fois, avec 32 blocs en capitales et 44 touches de laiton, et à force de le dire il ne l'est plus : il ressemble à un site d'agence qui a mis un thème « archive » par-dessus une grille de cartes.

momdesign.fr fait exactement l'inverse et c'est là toute la leçon : **leur page n'a presque aucun ornement, elle est simplement tracée**. Des filets de 1 px, des cellules bordées, une seule graisse, une seule couleur d'action, un label de 12 px en capitales et rien d'autre en capitales. Le caractère vient de la rigueur du tracé, pas de la décoration.

« LE BORDEREAU » applique cette discipline à ta gamme rouge nuit. Le classeur ne se signale plus par des accessoires : il se signale par **des lignes qui se tracent**, par des cellules à filets, par des données en mono et par un silence typographique presque total autour d'elles. Les photos de chantier restent la seule source de lumière — mais cette fois la page est assez sobre pour qu'on le remarque.

**La gamme rouge nuit est conservée. L'ADN dossier de chantier est conservé. Ce qui change, c'est la densité de signes.**

---

## 2. Ce que dit la référence

### 2.1 momdesign.fr — relevé technique

Le site est un Next.js/Sanity, Tailwind v4.1.14, GSAP + ScrollTrigger + Lenis + SplitType. Valeurs relevées dans le bundle `/_next/static/css/bb2d8b94012c6c9d.css` et dans le DOM.

#### Ambiance
Chaud, ascétique, tenu, feutré, un peu bourgeois. C'est un studio d'architecture d'intérieur qui parle à des marques (bijouterie MAM, showroom, méditation) : il vend du calme et du goût, pas de la performance.

#### Palette exacte

| Jeton | Hex | Rôle | Proportion à l'écran |
|---|---|---|---|
| `--color-off-white` | `#FFF5E2` | Fond dominant | ~75 % |
| `--color-brown` | `#523323` | Encre principale, fond du cadre de menu | ~15 % |
| `--color-dark-brown` | `#201610` | Rideaux de transition de page, loader plein écran | 0 % au repos |
| `--color-light-brown` | `#A96744` | **Filets** (`/30`), **remplissages de survol** (`/10`), micro-labels 10 px | ~7 % |
| `--color-orange` | `#E3762B` | **Unique couleur d'action** : fond du bouton « Contact », un lien de menu | ~2 % |
| `--color-green` | `#ABB163` | Contre-accent, quasi invisible (pictogrammes) | < 1 % |
| `--color-black` | `#000` | Remplissage de SVG | anecdotique |

Ce qui est remarquable : **une seule couleur porte l'action** (l'orange), et **une seule couleur porte la structure** (le brun clair, décliné en 10 % / 30 % / 100 %). Ces deux rôles ne se croisent jamais. Il n'y a ni « couleur de succès », ni « couleur d'alerte », ni « couleur de focus » décoratives.

#### Typographie

Une seule famille : **Satoshi Variable** (`/fonts/Satoshi-Variable.ttf`) + son italique. Payante (Fontshare, gratuite d'usage mais non Google Fonts).

| Style | Taille | Graisse | Casse |
|---|---|---|---|
| `.h1` | `clamp(46px, 6vw, 70px)` | **400** | normale |
| `.h2` | `clamp(32px, 4vw, 48px)` | **400** | normale |
| `.h3` | `clamp(20px, 2vw, 24px)` | **400** | normale |
| `.p1` | `30px` | 400 | normale |
| `.p2` | `20px` | 400 | normale |
| `.p3` / `p` | `16px` | 400 | normale |
| `.label` | `12px` | **500** | **CAPITALES** |
| micro-tag | `10px` | 400 | CAPITALES |

**C'est le point central de toute cette analyse.** Chez eux, les capitales existent à **une seule taille** (12 px, le `.label`, plus un tag de 10 px) et **tous les titres sont en casse normale à la graisse 400**. Un h1 de 70 px en Regular. Aucun gras nulle part sauf le 500 du label et du logotype. La hiérarchie est faite à 100 % par la **taille** et par le **blanc**, jamais par la graisse ni par la casse.

Le `.label` sert de micro-titre au-dessus de **chaque** liste, chaque cellule, chaque colonne : « PAGES », « RÉALISATIONS », « RÉSEAUX », « RESSOURCES », « DERNIÈRES SORTIES », « MENTIONS LÉGALES ». C'est le seul élément récurrent de tout le site.

#### Layout et grille

```css
lg:grid-cols-[var(--x-default) 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr var(--x-default)]
--x-default: clamp(20px, 7vw, 40px);
--y-default: clamp(20px, 8vh, 100px);
```

Trois choses fortes :

1. **La marge de page est une colonne de la grille**, pas un `padding` autour d'un bloc centré. Le site travaille en `w-screen`, jamais dans une boîte de 1280 px centrée.
2. **Les filets de grille sont visibles.** Le pied de page est un tableau de cellules : chaque `<nav>` porte `border-t-light-brown/30` et `border-r-light-brown/30`. Ça donne un document, pas une page.
3. **Une seule échelle d'espacement horizontal**, `--x-default`, réutilisée en `px-x-default`, `pl-x-default`, `right-x-default`. Le rythme horizontal est donc rigoureusement identique du header au footer.

Breakpoints Tailwind par défaut : 40 / 48 / 64 / 80 / 96 rem.

#### Imagerie et matières

Images portrait (441×572, 664×828, 667×836 dans le CMS), `object-cover`, hauteurs bornées (`max-h-[344px]`, `max-h-[156px]`, vignettes `h-9 w-9`). Aucun grain, aucune texture, aucune ombre portée. Coins : `rounded-md` (6 px) partout, `rounded-full` réservé aux pastilles d'icônes et au curseur. Les seules « matières » sont les filets à 30 % et les aplats à 10 %.

#### Motion (GSAP + ScrollTrigger + Lenis + SplitType)

Courbes déclarées comme jetons CSS :
```css
--ease-power2-in-out: cubic-bezier(.645,.045,.355,1)
--ease-power2-out:    cubic-bezier(.25,.46,.45,.94)
--ease-power4-in-out: cubic-bezier(.83,0,.17,1)
```
Durées relevées dans le chunk : `0.2`, `0.8`, `1.2`, `1.5`, `2.2` s côté GSAP ; `300ms` côté CSS pour tous les survols.

Quatre gestes récurrents, tous transposables :

1. **Les filets se tracent.** Chaque séparateur est un `div` de 1 px en `origin-top scale-y-0` ou `origin-left scale-x-0`, animé jusqu'à 1. La page se *dessine* à la règle.
2. **Le remplissage qui balaie.** Chaque item cliquable a un `::after` `inset-0` en `origin-top-left scale-0`, qui passe à `scale-100` en 300 ms `power2-in-out`. Le survol est un aplat qui se déploie, jamais un simple changement de couleur.
3. **Le masque qui remonte.** Chaque `<li>` de lien porte `overflow-hidden` et son `<a class="item-links">` est en `inline-block` : le lien monte derrière un masque, ligne par ligne, découpé par SplitType.
4. **L'origine est toujours en haut à gauche ou à gauche**, jamais au centre. `origin-top-left`, `origin-left`, `origin-bottom`, `origin-top`. C'est ce qui donne la sensation de « tracé » plutôt que de « pop ».

Plus : un rideau `bg-dark-brown` plein écran en `origin-bottom` pour les transitions de page, et un curseur custom `fixed z-[9999] mix-blend-difference` — pastille `off-white` de 60 px en `scale-20` au repos, qui grossit et affiche un label.

#### Navigation

Header `fixed h-[72px] w-screen px-x-default`, transparent, logotype textuel à gauche (« MOM DESIGN » en Satoshi 500, pas d'image), et à droite **deux boutons de 40 px** : un « Contact » orange et un bouton menu brun dont le libellé bascule MENU ↔ CLOSE par deux `<span>` superposés qui glissent. Aucun lien de navigation en clair dans le header. Tout passe par un panneau `bg-brown` de 6 px d'épaisseur contenant une carte `bg-off-white rounded-md`, découpée en 3–4 colonnes séparées par des filets animés.

#### Ton de la copie

Sobre, court, sans superlatif. « ESTD. 2025 », « Paris & Orléans », « Nos 3 piliers », « Vous avez un projet ? », « Prendre contact », « Architecture d'intérieur — Espaces éphémères ». Les textes longs sont du lorem anglais (le site n'est pas fini côté contenu). Le ton exploitable est celui des **labels et des micro-textes** : nominal, daté, factuel.

#### Le détail qui fait sa personnalité

**Le pied de page est un tableau à filets**, où chaque cellule porte un label de 12 px et une liste, et où les filets se tracent à l'arrivée dans le viewport. C'est le seul endroit du site qui ne ressemble à rien d'autre — et c'est précisément ce qui est le plus transposable à un dossier de chantier.

---

### 2.2 Ce qui est transposable / ce qui ne l'est pas

| Transposable tel quel | Propre à leur métier ou à leur contenu |
|---|---|
| La **discipline des capitales** : un seul style en MAJ, à 12 px | Le **fond clair** : eux vendent de la lumière naturelle, toi tu vends des photos de chantier qui doivent être la source lumineuse |
| Les **titres en graisse 400/500 en casse normale** | Le **format portrait** des images (bijouterie, showroom) : un chantier se lit en paysage |
| Les **filets de grille visibles** et le pied de page en cellules | La **navigation entièrement cachée derrière un burger** : ils ont 5 pages et une cible design ; toi tu as un one-pager qui vend une décision à 50 000 CHF à des propriétaires et des régies. Cacher la nav en desktop coûterait des devis |
| Le **remplissage de survol qui balaie** depuis le haut-gauche | Le **curseur `mix-blend-difference`** : c'est leur signature, la copier serait de l'imitation |
| **Un seul rôle par couleur** : une couleur d'action, une couleur de structure | **Lenis** (scroll lissé) : casse le `Ctrl+F`, l'impression et `prefers-reduced-motion`, et ajoute une dépendance à un site vanilla |
| Les **micro-labels au-dessus de chaque cellule** | Les **textes à 30 % et 70 % d'opacité** : mesurés à **1,73:1** et **4,45:1**, ils échouent tous les deux en AA. À ne surtout pas reprendre |
| Le **couple `--x-default` / `--y-default`** comme rythme unique | Le **blanc sur orange** de leur CTA principal : **2,82:1**, échec net |
| Les **origines de transformation en haut-gauche** | Le look Satoshi + brun + GSAP + curseur blend est devenu le **kit studio 2024-2025** : générique. Ce qui vaut, c'est leur rigueur, pas leur style |

---

### 2.3 Confrontation : ce que momdesign réussit et que DSG rate

Analyse faite sur les 14 fichiers CSS et 10 modules JS. Chiffres mesurés par comptage direct.

#### A. Le signal typographique est saturé — **le problème n°1**

- **40 déclarations `--f-mono`** et **32 déclarations `text-transform:uppercase`** dans le CSS.
- L'« étiquette dactylographiée » censée être *la signature du dossier* (`01-socle.css:82`) est portée par au moins 28 composants distincts : `.repere`, `.intercalaire__cote`, `.chemise__onglet`, `.chemise__meta`, `.releve dt`, `.releve dd`, `.depliant__tete`, `.lots li`, `.metiers__n`, `.engagement__n`, `.engagement__statut`, `.filtre`, `.chantiers__compte`, `.temoin__qui`, `.temoin__quoi`, `.pied__col h3`, `.pied__legal`, `.coordonnees h3`, `.champ__label`, `.identite dt`, `.identite dd`, `.pile__onglet`, `.pile__pied span`, `.pile__compte`, `.pile__aide`, `.rail a`, `.nav a`, `.entete__tel`, `.tampon`, `.curseur span`, `.releve-general__lab`, `.comparateur__etat`…

Un signal utilisé 28 fois n'est plus un signal, c'est le fond. Chez momdesign, ce style existe **une fois** (`.label`, 12 px) et c'est ce qui lui donne sa force.

Conséquence directe et mesurable : la navigation principale (`05-navigation.css:53`) est en **Plex Mono 12 px, `letter-spacing:.12em`, capitales, `--c-encre-60`**. C'est illisible pour la cible réelle du site — des propriétaires de 45 à 70 ans. momdesign met sa navigation en Satoshi 32-48 px casse normale.

#### B. Les titres crient, alors que la référence chuchote

`01-socle.css:69` : `h1,h2,h3{font-weight:800}`. `.h2` : `font-weight:700 + text-transform:uppercase`. `.couverture h1` : `font-weight:800 + uppercase`. `.bandeau span` : Archivo 700 uppercase à la taille d'un h3. `.pied__logotype` : Archivo 800 à `min(9.6vw,10rem)`.

Cinq voix criardes sur une page. momdesign obtient plus de présence avec un h1 de 70 px en **Regular**. La graisse 800 en capitales, c'est le registre « agence de com' » ; le dossier de chantier, lui, est imprimé, pas hurlé.

#### C. Il n'y a pas de structure visible — juste des blocs empilés

`01-socle.css:107` : `.zone{max-width:1280px; margin-inline:auto; padding-inline:64px}`. Toutes les sections utilisent la même boîte centrée, le même `--sec-y`, le même `.intercalaire`, la même révélation. Neuf sections, neuf fois le même rythme.

`.grille12` existe (`01-socle.css:113`) mais elle n'est **jamais visible** : aucun filet vertical, aucune cellule bordée. Le seul endroit où DSG s'approche du tableau à filets, c'est `.identite` (`13-pile.css:105`) et `.releve--regle` (`03-fiches.css:70`) — et ce sont les deux meilleurs éléments du site. Il faut généraliser ce traitement, pas le laisser en exception.

À 1600 px de large, `.zone` laisse 160 px de vide de chaque côté et le contenu ressemble à un gabarit. momdesign travaille en `w-screen` avec la marge comme colonne.

#### D. L'accent laiton est dilué — **44 usages de `--c-signal`**

Numéros d'engagement, numéros de métier, astérisques, le « + » du relevé, les puces du bandeau, les survols de `.depliant__tete`, `.question__tete`, `.entete__tel`, `.coordonnees a`, `.pied__col a`, `.pied__legal a`, `.metiers__ligne`, le tampon, le curseur, `.souligne`, le rail, la nav… Plus quatre autres jetons colorés (`--c-bleu`, `--c-valide`, `--c-alerte`, `--c-focus`), dont `--c-bleu` qui n'a plus aucun usage décoratif.

momdesign : **un** orange, **deux** endroits.

#### E. Le survol est pauvre

Presque tous les survols du site sont un changement de couleur de texte (`transition:color var(--d-rapide)`). Le seul survol structurel est `.metiers__ligne:hover{border-top-color:var(--c-signal)}` (`06-haut.css:126`) — et il est joli. momdesign fait déployer un aplat depuis le haut-gauche en 300 ms sur *tous* ses items. C'est ce qui donne la sensation de matière.

#### F. La pilule contredit le concept

`--r-pilule:999px` est utilisé **15 fois** : `.btn`, `.filtre`, `.lots li`, `.tampon`, `.menu__fermer`, `.pile__btn`, `.saut`, `.curseur`, `.bandeau i`, et deux fois dans `10-comparateur.css` et `11-lumineuse.css`.

Le commentaire de `00-jetons.css:95` dit : *« le carton se coupe net : rayon court »*. Puis tous les objets interactifs sont des gélules. C'est la contradiction la plus visible du site, et c'est aussi le tic visuel qui trahit le plus une DA générée par défaut.

#### G. Deux bugs concrets

**G1 — Les logos partenaires sont invisibles.** `07-chantiers.css:64` :
```css
.partenaires__grille img{ mix-blend-mode:multiply; filter:grayscale(1); opacity:.7 }
```
`multiply` sur un fond `--c-papier-2:#180810` donne `résultat = base × mélange ≤ base`. Les sept logos (Gerofinance, Privera, de Rham, Bernard Nicod…) se retrouvent en noir sur noir. C'est la section « preuve sociale » — celle qui convainc les régies — et elle ne s'affiche pas.

**G2 — La feuille d'impression ne fonctionne pas.** `01-socle.css:166` ne réinitialise que `body{background:#fff;color:#000}`. Or **tous** les composants portent une couleur explicite : `.chapo{color:var(--c-encre-60)}`, `.releve dd{color:var(--c-encre)}`, `.etiquette`, `.donnee`, `.temoin__quoi`, `.pied__col h3`… Ces règles gagnent en spécificité. À l'impression, on obtient donc du **crème `#EFE7DC` sur du papier blanc**, c'est-à-dire une page vide. Les fonds (`.formulaire{background:var(--c-fiche)}`, `.pied`, `.partenaires`) ne s'impriment pas par défaut, ce qui aggrave le problème. La contrainte « le site doit rester imprimable » n'est aujourd'hui **pas** tenue.

#### H. Ce que DSG fait déjà mieux que la référence — à protéger

- **Le contraste.** Toute la palette actuelle est mesurée et tient : minimum **5,39:1** (`--c-encre-40` sur `--c-fiche`). momdesign échoue à 1,73:1 sur ses propres labels. Ne rien casser ici.
- **La dégradation gracieuse.** `.js .revele` n'est masqué que si le JS tourne (`01-socle.css:124`), `<details>` fonctionne sans script, `toutAfficher()` en secours sans `IntersectionObserver`. C'est du travail sérieux, momdesign affiche un écran brun vide sans JS.
- **`prefers-reduced-motion`** est correctement gardé dans les 4 modules JS concernés et dans le CSS. À préserver intégralement.
- **La pile de chemises** (`13-pile.css`), **le comparateur avant/après**, **`.identite`**, **`.releve--regle`**, **le clip-path de languette** de `.chemise` : ce sont de vraies idées, spécifiques au métier, que momdesign n'a pas. Elles restent.
- **Le rail de sommaire avec jauge de lecture** (`05-navigation.css:160` + `12-planche.css:10`) : excellent, et plus utile qu'un burger sur un one-pager.

---

## 3. Palette

**Aucune couleur de fond ni d'encre n'est modifiée.** La gamme rouge nuit est validée par la référence : momdesign est également un monochrome chaud avec un unique accent chaud. Ce qui change, c'est la **distribution** et l'ajout de deux jetons de voile.

### 3.1 Surfaces (inchangées)

| Jeton | Hex | L\* | Rôle | Part visée |
|---|---|---|---|---|
| `--c-papier` | `#280E16` | 7,4 | Fond principal | ~62 % |
| `--c-papier-2` | `#180810` | 3,7 | Creux : bandeaux, chemises, section références | ~14 % |
| `--c-bitume` | `#0C0407` | 1,6 | Puits : pied de page, menu, bandeau | ~9 % |
| `--c-fiche` | `#4E1C27` | 18,4 | Relief : **formulaire et chemises uniquement** | ~5 % |
| `--c-bitume-2` | `#3A141E` | 12,6 | Surface élevée dans un puits | ~2 % |
| — | photos | — | Les tirages de chantier | ~8 % |

**Règle nouvelle : une seule surface remplie par section.** `--c-fiche` est réservé au formulaire (`08-bas.css:37`) et à rien d'autre. `.temoin` (`07-chantiers.css:79`) et `.coordonnees` (`08-bas.css:51`) perdent leur fond et leur rayon : ils deviennent des **cellules à filets**. C'est la traduction directe du pied de page de momdesign.

### 3.2 Encres (inchangées — toutes mesurées ≥ 4,5:1)

| Jeton | Hex | sur papier | sur papier-2 | sur bitume | sur fiche | sur bitume-2 |
|---|---|---|---|---|---|---|
| `--c-encre` | `#EFE7DC` | **14,71** | 15,85 | 16,54 | 11,28 | 13,19 |
| `--c-encre-60` | `#C9B4B0` | **9,14** | 9,84 | 10,27 | 7,00 | 8,19 |
| `--c-encre-40` | `#B69C97` | **7,03** | 7,58 | 7,91 | **5,39** | 6,31 |
| `--c-signal` | `#D4A863` | **8,23** | 8,86 | 9,25 | 6,31 | 7,38 |
| `--c-signal-clair` | `#E4C48C` | 10,80 | 11,63 | **12,14** | 8,28 | 9,68 |
| `--c-bleu` | `#A8C4E8` | 10,07 | 10,85 | 11,32 | **7,72** | 9,03 |
| `--c-alerte` | `#F0A07A` | 8,60 | 9,26 | 9,67 | **6,59** | 7,71 |
| `--c-valide` | `#7FCBA4` | 9,43 | 10,16 | 10,60 | 7,23 | 8,46 |
| `--c-focus` | `#FFD98A` | 13,35 | 14,38 | 15,00 | 10,23 | 11,97 |

Inversions : `#280E16` sur `#EFE7DC` = **14,71:1** ; `#280E16` sur `#E4C48C` = **10,80:1** ; `#280E16` sur `#D4A863` = **8,23:1**. Tout passe AAA.

### 3.3 Filets et voiles — **jetons à ajouter**

Reprise du système `light-brown/10 · /30 · /100` de momdesign, transposé en crème.

```css
--c-ligne:        rgba(239,231,220,.14);  /* structure : filets de grille, séparateurs */
--c-ligne-forte:  rgba(239,231,220,.34);  /* actif, survolé, tracé qui vient d'arriver */
--c-voile:        rgba(239,231,220,.05);  /* NOUVEAU — remplissage de survol, puces, chips */
--c-voile-2:      rgba(239,231,220,.08);  /* NOUVEAU — état pressé / sélectionné */
```

Contrastes composités mesurés (le voile est un fond, il faut vérifier ce qui se pose dessus) :

| Voile | sur `--c-papier` | couleur résultante | `--c-encre` dessus | `--c-encre-40` dessus |
|---|---|---|---|---|
| `.05` | `#280E16` | `#321920` | **13,24** | **6,33** |
| `.08` | `#280E16` | `#381F26` | **12,28** | **5,87** |
| `.05` | `#180810` | `#23131A` | **14,52** | **6,94** |
| `.08` | `#180810` | `#291A20` | **13,57** | **6,49** |

Tous conformes AA et AAA. Le voile ne doit jamais dépasser `.08` : à `.34` sur `#280E16`, `--c-encre-40` tombe à 2,59:1.

### 3.4 Signal — **quota strict de 8 emplois**

`--c-signal` passe de **44 usages** à **8**, et exclusivement là où il désigne un repère de dossier :

1. `.repere b` — le numéro de pièce (« N° 04 »)
2. `.chemise__onglet` et `.pile__onglet b` — la cote du dossier
3. `.souligne` — un mot du h1 de couverture, une seule fois dans la page
4. `.rail a[aria-current]` + la jauge `.rail::after`
5. `.nav a[aria-current]::after` — le filet de la pièce consultée
6. `.tampon`
7. `.curseur`
8. `.champ__label span` — l'astérisque des champs obligatoires (usage fonctionnel, à conserver)

**Retiré de** : `.engagement__n` et `.metiers__n` → `--c-encre-40` ; `.releve-general__plus` → `--c-encre` ; `.bandeau i` → `--c-ligne-forte` ; tous les `:hover{color:var(--c-signal)}` de `.depliant__tete`, `.question__tete`, `.entete__tel`, `.coordonnees a`, `.releve--regle dd a`, `.pied__col a`, `.pied address a`, `.pied__legal a` → `--c-encre` / `--c-craie`, la couleur du survol étant désormais portée par le voile.

**`--c-bleu` est déclassé** : il n'est plus un jeton de DA (« cyanotype, méthode, plans ») mais uniquement la couleur de focus des champs de formulaire (`04-formulaires.css:35`). `--c-valide`, `--c-alerte`, `--c-focus` restent des jetons système, jamais décoratifs.

### 3.5 Combinaisons interdites

- `--c-signal` sur `--c-fiche` en corps de texte (6,31:1 passe, mais le laiton sur le relief bordeaux vibre — réservé aux traits et aux numéros)
- `--c-encre-40` sur `--c-fiche` en dessous de 13 px (5,39:1 est le plancher du site, il ne supporte pas la petite taille)
- Deux surfaces remplies imbriquées (`--c-fiche` dans `--c-papier-2` dans `--c-papier`) : jamais plus de deux niveaux
- `--c-signal` et `--c-bleu` dans le même bloc
- Tout texte sur `--c-voile-2` ou plus opaque sans re-mesure
- Le laiton en fond de bouton principal (`.btn--sombre` actuel) : le crème est plus fort et plus contrasté

---

## 4. Typographie

### 4.1 Familles — inchangées, mais réassignées

| Famille | Google Fonts | Graisses à charger | Rôle |
|---|---|---|---|
| **Archivo** | oui | **500, 800** (supprimer 700) | Titres uniquement : h1, h2, h3, menu, logotype de pied |
| **IBM Plex Sans** | oui | 400, 500, 600, 400 italic | Tout le texte lisible : corps, nav, boutons, labels de formulaire, filtres, liens de pied |
| **IBM Plex Mono** | oui | 400, 500 | **Uniquement** : les données chiffrées et le style `.etiquette` de 12 px |

Nouvelle balise à mettre dans `index.html:22` :
```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
```

*Alternative si Archivo 500 manque de tenue en grand : **Instrument Sans** (Google Fonts, 400-700, grotesque suisse plus serré). À tester, pas à décider à l'aveugle.*

### 4.2 Échelle — jetons révisés

```css
--t-couverture: clamp(2.75rem, 7vw,   6.25rem);   /* h1 — Archivo 800, MAJUSCULES */
--t-piece:      clamp(2rem,    4.6vw, 4rem);      /* h2 — Archivo 500, casse normale */
--t-h3:         clamp(1.375rem,2vw,   1.75rem);   /* Archivo 500 */
--t-h4:         clamp(1.125rem,1.4vw, 1.3125rem); /* Plex Sans 600 */
--t-chapo:      clamp(1.0625rem,1.3vw,1.25rem);   /* Plex Sans 400 */
--t-texte:      clamp(1rem,    1.05vw,1.0625rem); /* Plex Sans 400 */
--t-nav:        .9375rem;                          /* NOUVEAU — nav, filtres, liens de pied */
--t-petit:      .875rem;
--t-etiquette:  .75rem;                            /* Plex Mono 500, MAJ — quota strict */
--t-donnee:     clamp(.8125rem,1vw,.875rem);       /* Plex Mono 400, casse normale */
--t-chiffre:    clamp(2.75rem, 6vw,  5.25rem);     /* Archivo 500, tabular-nums */
```

Réglages fins :
- `h2` : `font-weight:500`, `text-transform:none`, `letter-spacing:-.025em`, `line-height:1.06`
- `h1` : `font-weight:800`, `text-transform:uppercase`, `letter-spacing:-.035em`, `line-height:.88`
- `h3` : `font-weight:500`, `letter-spacing:-.015em`, `line-height:1.15`
- corps : `line-height:1.65`, `max-width:66ch`
- chapô : `line-height:1.5`, `max-width:54ch`
- `.etiquette` : `letter-spacing:.12em` (au lieu de `.14em`, trop lâche à 12 px)
- `.donnee` : `letter-spacing:.01em`, `font-variant-numeric:tabular-nums`, **jamais de capitales**

### 4.3 La règle des capitales — **le point le plus important de cette DA**

> **Il n'existe que deux styles en capitales sur le site : le h1 de couverture, et `.etiquette` à 12 px. Rien d'autre. Jamais.**

`.etiquette` est de surcroît soumise à un **quota : deux occurrences maximum par hauteur d'écran.** Elle a le droit d'exister sur :
- `.repere` (« N° 04 · SAVOIR-FAIRE ») et `.intercalaire__cote`
- `.chemise__onglet`, `.pile__onglet`, `.identite dt`
- les micro-titres de cellule de pied de page et de coordonnées (`.pied__col h3`, `.coordonnees h3`) — c'est exactement le `.label` de momdesign
- `.releve-general__lab` (une seule planche de données dans la page)
- `.tampon`, `.rail a`, `.comparateur__etat`

### 4.4 Migrations à effectuer — liste exhaustive

| Sélecteur | Fichier | Aujourd'hui | Demain |
|---|---|---|---|
| `.nav a` | `05-navigation.css:53` | Mono 12 px MAJ `.12em` | **Plex Sans 500, `--t-nav`, casse normale, `letter-spacing:0`** |
| `.entete__tel` | `05-navigation.css:88` | Mono MAJ | Plex Mono 400, 15 px, casse normale (c'est une donnée) |
| `.menu__liste a` | `05-navigation.css:144` | Archivo 700 MAJ `--t-h3` | **Archivo 500, `clamp(1.75rem,4vw,2.75rem)`, casse normale** |
| `.filtre` | `02-boutons.css:120` | Mono 12 px MAJ | Plex Sans 500, `--t-nav`, casse normale |
| `.bandeau span` | `02-boutons.css:104` | **Archivo 700 MAJ `--t-h3`** | **Plex Mono 500, 13 px, `.14em`, MAJ** (le bandeau devient un ticker, pas un cri) |
| `.releve dt` | `03-fiches.css:57` | Mono 12 px MAJ | Plex Sans 500, 14 px, casse normale, `--c-encre-40` |
| `.releve dd` | `03-fiches.css:61` | Mono | Plex Mono 400, casse normale, `tabular-nums` ✓ conservé |
| `.depliant__tete` | `03-fiches.css:90` | Mono 12 px MAJ | Plex Sans 600, 15 px, casse normale |
| `.lots li` | `03-fiches.css:117` | Mono 12 px MAJ + pilule | Plex Sans 400, 13 px, casse normale, rectangle 3 px |
| `.chemise__meta` | `03-fiches.css:42` | Mono 12 px MAJ | Plex Mono 400, 13 px, casse normale |
| `.chantiers__compte` | `07-chantiers.css:13` | Mono 12 px MAJ | Plex Sans 400, 14 px, casse normale |
| `.temoin__quoi` | `07-chantiers.css:89` | Mono 12 px MAJ | Plex Mono 400, 13 px, casse normale |
| `.champ__label` | `04-formulaires.css:11` | Mono 12 px MAJ | Plex Sans 500, 14 px, casse normale |
| `.engagement__statut` | `06-haut.css:95` | Mono 12 px MAJ | Plex Sans 400, 13 px, casse normale |
| `.pied__legal` | `08-bas.css:96` | Mono 12 px MAJ `.14em` | Plex Sans 400, 14 px, casse normale |
| `.pied__col a` | `08-bas.css:89` | Plex Sans `--t-petit` | Plex Sans 400, `--t-nav` |
| `.pile__pied span` | `13-pile.css:65` | Mono MAJ | Plex Mono 400, casse normale |
| `.identite dd` | `13-pile.css:116` | Mono | ✓ conservé, casse normale |
| `h1,h2,h3` | `01-socle.css:69` | `font-weight:800` | `font-weight:500`, sauf `.couverture h1` qui garde 800 |
| `.h2` | `01-socle.css:71` | `700 + uppercase` | `500`, `text-transform:none` |

Bilan : de **32** déclarations `uppercase` à **10**, de **40** blocs mono à **16**.

---

## 5. Layout et espace

### 5.1 Rythme unique — jetons à ajouter

Transposition du couple `--x-default` / `--y-default` de momdesign :

```css
--x-marge: clamp(20px, 4.4vw, 64px);   /* marge de page, colonne de grille */
--y-bloc:  clamp(64px, 9vw,  152px);   /* rythme vertical des sections */
```

`--grille-marge` et `--sec-y` deviennent des alias de ces deux jetons, ce qui supprime les trois surcharges de `@media` de `00-jetons.css:128-139` : le rythme devient **continu** au lieu de sauter à 1279 px et 767 px. Un seul rythme horizontal, du header au pied de page, comme chez la référence.

### 5.2 Largeurs

```css
--grille-max:     1680px;
--grille-contenu: 1560px;   /* était 1280px */
--grille-texte:   680px;
```

`.zone` passe de 1280 à **1560 px**. Tous les blocs de lecture sont déjà bornés à `54ch` / `66ch` (`01-socle.css:75,78`), la lisibilité n'est donc pas menacée ; ce qui gagne, c'est la grille des réalisations (3 colonnes de ~490 px au lieu de ~400), la planche du relevé et le pied de page. Le site cesse de ressembler à un gabarit centré sur un 27 pouces.

### 5.3 La grille devient visible — **le geste structurant n°1**

Nouvelle primitive, à ajouter dans `01-socle.css` :

```css
/* La marge de page est une colonne, comme chez la référence. */
.grille-reglee{
  display:grid;
  grid-template-columns:var(--x-marge) repeat(12,1fr) var(--x-marge);
}
/* Une cellule de bordereau : filets haut + gauche, aucun fond, aucun rayon. */
.cellule{
  border-top:1px solid var(--c-ligne);
  border-left:1px solid var(--c-ligne);
  padding:var(--sp-5);
}
.cellule:first-child{border-left:0}
```

Appliquée à :
- **`.pied__grille`** (`08-bas.css:74`) — le pied devient un tableau de cellules à filets, chaque colonne coiffée d'une `.etiquette`. C'est la traduction directe du meilleur élément de momdesign, et c'est parfaitement cohérent avec un bordereau de fin de dossier.
- **`.temoins`** (`07-chantiers.css:75`) — trois cellules à filets au lieu de trois cartes remplies avec bordure et rayon 8 px.
- **`.coordonnees`** (`08-bas.css:51`) — même traitement.
- **`.releve-general__grille`** (`06-haut.css:49`) — déjà à filets verticaux, on ajoute le filet horizontal et on aligne sur la même primitive.
- **`.identite`** (`13-pile.css:105`) — déjà correct, sert de modèle.

### 5.4 Casser la monotonie des neuf sections

Aujourd'hui : neuf sections identiques (`.zone` → `.intercalaire` → contenu, même `--sec-y`, même révélation). Décision : **alterner trois registres**, dans cet ordre fixe.

| Pièce | Registre | Traitement |
|---|---|---|
| 01 Couverture | **plein cadre** | déjà `overflow:hidden`, à étendre bord à bord |
| 02 Relevé | **réglé** | `.grille-reglee`, cellules à filets, fond `--c-papier` |
| 03 Engagements | **colonne** | `.zone`, texte à 66ch, filets horizontaux entre clauses |
| 04 Savoir-faire | **réglé** | liste bord à bord, filets qui se tracent |
| 05 Avant/Après | **plein cadre** | déjà `.plein-cadre` ✓ |
| 06 Réalisations | **plein cadre + réglé** | grille asymétrique (voir 6.2) |
| 07 Références | **réglé** | logos + témoignages en cellules |
| 08 Questions | **colonne** | max 900 px ✓ déjà correct |
| 09 Demande | **colonne + relief** | formulaire = seule surface `--c-fiche` |

### 5.5 Coins et bordures — **la fin de la pilule**

```css
--r-0:    0;
--r-net:  3px;    /* remplace --r-fiche:8px — le carton se coupe net */
--r-rond: 999px;  /* ex --r-pilule, usage restreint */
```

`--r-rond` n'est autorisé que sur des objets **réellement circulaires** : `.tampon`, `.curseur`, `.pile__btn`, `.menu__fermer`, `.bandeau i`, le bouton de la visionneuse, la poignée du comparateur. **`.btn`, `.filtre`, `.lots li`, `.saut` passent à `--r-net`.** Tous les rayons de 8 px passent à 3 px.

Épaisseurs de filets : **1 px** pour la structure, **1,5 px** pour un cadre actif (bouton, champ), **2,5 px** pour le filet du `.repere` (déjà le cas, c'est bien). Pas de quatrième épaisseur.

---

## 6. Imagerie et matières

### 6.1 Les photos redeviennent la source de lumière

Aujourd'hui les tirages sont neutres et enfermés dans des cartes. Traitement à appliquer sur `.chemise__tirage img`, `.pile__tirage img`, `.metiers__vue img`, `.signature__media img` :

```css
filter: saturate(1.06) contrast(1.02);
```
et un voile permanent qui se lève au survol :
```css
.chemise__tirage::after{
  content:"";position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(180deg, rgba(12,4,7,.30), rgba(12,4,7,0) 46%);
  opacity:1;transition:opacity var(--d-survol) var(--e-power2);
}
.chemise:hover .chemise__tirage::after{opacity:0}
```
La photo s'allume littéralement au passage de la main. C'est l'intention déclarée dans `00-jetons.css:9` ; elle n'est aujourd'hui codée nulle part.

### 6.2 Grille des réalisations asymétrique

`.chantiers__grille` (`07-chantiers.css:16`) : 3 colonnes égales × 6 fiches = une grille de cartes identiques. momdesign fait porter à ses images un champ `display: "full"` : leurs projets alternent pleine largeur et demi-largeur.

Décision : sur ≥ 1024 px, grille de 6 colonnes, rangées alternées **4/2** puis **2/4** :
```css
.chantiers__grille{grid-template-columns:repeat(6,1fr);column-gap:var(--grille-goutt);row-gap:var(--sp-8)}
.chemise{grid-column:span 2}
.chemise:nth-child(4n+1){grid-column:span 4}
.chemise:nth-child(4n+4){grid-column:span 4}
```
Le rapport d'aspect du tirage suit : `4/3` pour les fiches larges, `1/1` pour les étroites. Deux colonnes sous 1024 px, une seule sous 640 px (inchangé).

### 6.3 Matières

- **Grain** : conservé (`01-socle.css:32`), `opacity:.2`, `soft-light`. C'est la seule texture. Ne pas en ajouter.
- **Ombres** : `--om-1` et `--om-2` réservés aux objets **flottants** — la vignette qui suit le pointeur, le curseur, la visionneuse. **Aucune ombre pour créer une hiérarchie de bloc** : sur un fond de nuit, ça ne marche pas, ce sont les filets qui découpent.
- **Logos partenaires** — correction du bug G1 :
```css
.partenaires__grille img{
  filter:brightness(0) invert(1);
  opacity:.55;
  transition:opacity var(--d-survol) var(--e-power2);
}
.partenaires__grille li:hover img{opacity:1}
```
Supprimer `mix-blend-mode:multiply` et `filter:grayscale(1)`.

---

## 7. Motion

Trois nouvelles courbes, reprises de la référence, à ajouter aux jetons :

```css
--e-power2:     cubic-bezier(.645,.045,.355,1);  /* in-out : tracés, glissements */
--e-power2-out: cubic-bezier(.25,.46,.45,.94);   /* sorties courtes */
--e-power4:     cubic-bezier(.83,0,.17,1);       /* in-out ample : rideaux, filets */
--e-sortie:     cubic-bezier(.22,1,.36,1);       /* conservé — révélations */
--e-standard:   cubic-bezier(.4,0,.2,1);         /* conservé — couleurs */

--d-instant: 120ms;
--d-rapide:  200ms;
--d-survol:  300ms;   /* NOUVEAU — standard de la référence pour tous les survols */
--d-normal:  340ms;
--d-ample:   900ms;   /* était 620ms */
--d-lent:   1200ms;   /* était 900ms */
```

### 7.1 Table des gestes

| Geste | Propriété | Durée | Courbe | Décalage |
|---|---|---|---|---|
| Révélation de bloc | `opacity` + `translateY(18px→0)` | 900 ms | `--e-sortie` | 70 ms × rang, max 5 |
| Révélation de titre, ligne par ligne | `translateY(106%→0)` sous masque | 900 ms | `--e-sortie` | 80 ms / ligne |
| **Tracé de filet** | `scaleX(0→1)`, `origin:left` | 900 ms | `--e-power4` | 60 ms / filet |
| Décoffrage d'image | `clip-path inset(100%→0)` + `scale(1.06→1)` | 1200 ms | `--e-sortie` | — |
| **Survol : voile qui balaie** | `scale(0→1)`, `origin:top left` | 300 ms | `--e-power2` | — |
| Survol : couleur, bordure | `color`, `border-color` | 200 ms | `--e-standard` | — |
| Chevron / flèche | `translate(2px,-2px)` | 200 ms | `--e-standard` | — |
| Menu plein écran | `translateY(-100%→0)` | 520 ms | `--e-power4` | — |
| Items de menu | `opacity` + `translateY(10px)` | 420 ms | `--e-sortie` | 60 ms / item |
| Pile de chemises | `transform` | 340 ms | `--e-sortie` | — |
| Compteurs du relevé | valeur numérique | **1400 ms** (était 900) | `easeOutCubic` | — |
| Curseur : suivi | ressort | lerp `.18` | — | — |
| Curseur : ouverture | `scale(.2→1)` | 300 ms | `--e-power2` | — |
| Bandeau ticker | `translateX(-50%)` | **60 s** (était 46 s) | `linear` | — |

Amplitudes réduites : `translateY` de révélation **26 px → 18 px** ; parallaxe des planches **8 % → 6 %** (`effets.js:45`). La référence bouge peu en Y et beaucoup en échelle et en masque — c'est plus élégant et moins fatigant.

### 7.2 Les deux primitives à écrire

**Le filet qui se trace** — c'est le geste signature de la nouvelle DA, et c'est exactement ce qu'un dossier de chantier doit faire : se dessiner à la règle.

```css
.trace{position:relative}
.trace::before{
  content:"";position:absolute;left:0;right:0;top:-1px;height:1px;
  background:var(--c-ligne-forte);
  transform:scaleX(0);transform-origin:left center;
  transition:transform var(--d-ample) var(--e-power4);
}
.est-vu .trace::before,.trace.est-vu::before{transform:scaleX(1)}
.trace:nth-of-type(2)::before{transition-delay:60ms}
.trace:nth-of-type(3)::before{transition-delay:120ms}
/* … jusqu'à 6 */
```
À poser sur : le filet du `.repere`, chaque `.metiers__ligne`, chaque ligne de `.releve--regle`, les bordures de `.identite` et de `.cellule`, les séparateurs de `.question`.

**Le voile qui balaie** — remplace tous les survols en simple changement de couleur.

```css
.balaie{position:relative;isolation:isolate}
.balaie::after{
  content:"";position:absolute;inset:0;z-index:-1;
  background:var(--c-voile);
  transform:scale(0);transform-origin:top left;
  transition:transform var(--d-survol) var(--e-power2);
}
.balaie:hover::after,.balaie:focus-visible::after{transform:scale(1)}
```
À poser sur : `.metiers__ligne`, `.question__tete`, `.depliant__tete`, `.filtre`, `.lots li`, `.pied__col a`, `.cellule` du pied.

**Bouton principal** — le balayage devient vertical, depuis le bas :
```css
.btn{position:relative;overflow:hidden;border-radius:var(--r-net);isolation:isolate}
.btn--plein{background:var(--c-encre);color:var(--c-papier)}          /* 14,71:1 */
.btn--plein::after{
  content:"";position:absolute;inset:0;z-index:-1;
  background:var(--c-signal-clair);
  transform:scaleY(0);transform-origin:bottom;
  transition:transform var(--d-survol) var(--e-power2);
}
.btn--plein:hover::after{transform:scaleY(1)}                          /* 10,80:1 */
```

### 7.3 `prefers-reduced-motion` — règles supplémentaires obligatoires

La règle globale de `01-socle.css:151` limite `transition-property` à `opacity, color, background-color, border-color`, ce qui neutralise bien les `transform`. Mais les nouvelles primitives partent d'un `transform:scale(0)` : sans réinitialisation explicite, **les filets ne s'afficheraient jamais**. À ajouter dans le bloc existant :

```css
@media (prefers-reduced-motion:reduce){
  .trace::before{transform:none!important}
  .balaie::after,.btn--plein::after{transform:none!important;opacity:0}
  .balaie:hover::after{opacity:1}
  .btn--plein:hover::after{opacity:1}
}
```

Aucune nouvelle dépendance JS. **Pas de Lenis, pas de GSAP** : la référence en a besoin parce qu'elle a des transitions de page ; un one-pager vanilla n'en a pas besoin, et le scroll lissé casserait la recherche navigateur, l'impression et le respect du mouvement réduit.

---

## 8. Interdits

Pour **ce** projet, explicitement :

1. **Pas de capitales** en dehors du h1 de couverture et de `.etiquette` à 12 px. Aucune exception.
2. **Pas de graisse 700 ou 800** en dehors du h1 de couverture et du logotype de pied.
3. **Pas de pilule** : `border-radius:999px` uniquement sur des objets circulaires. Rayon maximum ailleurs : 3 px.
4. **Pas plus de deux surfaces remplies imbriquées.** Pas de carte dans une carte dans une section colorée.
5. **Pas d'ombre portée pour hiérarchiser un bloc.** Les ombres servent uniquement aux objets flottants (vignette, curseur, visionneuse).
6. **Pas plus de 8 usages de `--c-signal`** dans tout le CSS. Compter avant de livrer.
7. **Pas de texte en dessous de 4,5:1**, y compris composité sur un voile. Interdiction formelle de reprendre les opacités de la référence (`/30` = 1,73:1, `/70` = 4,45:1) et son blanc sur orange (2,82:1).
8. **Pas de `mix-blend-mode` sur les logos ni sur le curseur.** `multiply` sur fond sombre efface le contenu (bug actuel) ; `difference` est la signature de momdesign, la reprendre serait de l'imitation.
9. **Pas de librairie de scroll lissé** (Lenis, Locomotive) ni de GSAP. Vanilla, `IntersectionObserver`, transitions CSS.
10. **Pas de gradient violet, pas d'Inter, pas de « glassmorphism »**, pas de fond « béton » ou « blueprint » texturé. Le grain existant est la seule texture.
11. **Pas d'emoji**, ni dans l'interface, ni dans le contenu.
12. **Pas de marquee à la taille d'un h3.** Le bandeau est un ticker de 13 px ou il disparaît.
13. **Pas de nouvelle couleur.** La palette est close : 5 surfaces, 5 encres, 1 signal, 4 jetons système, 4 filets/voiles.
14. **Pas de couleur codée en dur** hors `00-jetons.css` — sauf le bloc d'impression, qui est un cas documenté.
15. **Ne pas cacher la navigation desktop derrière un burger.** Voir § 2.2 : c'est le seul parti de la référence qui serait contre-productif ici.

---

## 9. En une phrase

> **Un dossier de chantier qui ne se déguise plus en dossier : rouge nuit, filets tracés à la règle, une seule voix en capitales, un seul laiton, et des photos qui s'allument quand la main passe.**

---

## 10. Articulation avec l'existant

- **`DIRECTION-ARTISTIQUE.md`** (603 lignes) décrit une DA abandonnée. **Non modifié**, comme demandé. Conflit à connaître : il décrit une gamme et un vocabulaire qui ne correspondent plus au code, et les commentaires d'en-tête de `00-jetons.css` renvoient à la DA « ROUGE NUIT » actuelle, pas à lui. Quand tu voudras faire le ménage, c'est ce fichier-là qu'il faudra archiver, pas les commentaires du CSS.
- **`dsg-renov-claude.md`** (409 lignes) est un master prompt antérieur : il décrit un **Next.js de 8 à 10 pages** (`/services`, `/projets/[slug]`, `/about`, `/contact`, `/devis`) et renvoie à un dossier `dsg-renov-direction-artistique/` qui n'existe pas dans le projet. Le site réel est un **one-pager vanilla**. Ce document est périmé sur l'architecture ; ses sections SEO local, KPI et conformité restent valables. À signaler au client interne.
- **`inspirations/inspi-1..6.png`** : six captures rattachées à la DA abandonnée. Non analysées ici (la demande portait sur momdesign.fr). À revoir si tu veux une DA triangulée.

---

## 11. Plan d'intervention priorisé

Classé par **gain de perception par unité d'effort**. P0 sont des corrections, pas de la DA.

### P0 — Corriger ce qui est cassé (avant toute DA)

| # | Intervention | Fichier(s) | Effort |
|---|---|---|---|
| 0.1 | **Réparer la feuille d'impression** : redéfinir les jetons dans `@media print` au lieu de ne colorer que `body`. Sans ça, la page s'imprime en crème sur blanc, c'est-à-dire vide. | `01-socle.css:166` | 15 min |
| 0.2 | **Réparer les logos partenaires** : supprimer `mix-blend-mode:multiply` + `grayscale(1)`, passer en `brightness(0) invert(1); opacity:.55`. Aujourd'hui la preuve sociale est invisible. | `07-chantiers.css:62` | 5 min |

Bloc d'impression à écrire :
```css
@media print{
  :root{
    --c-papier:#fff;--c-papier-2:#fff;--c-fiche:#fff;--c-bitume:#fff;--c-bitume-2:#fff;
    --c-encre:#000;--c-encre-60:#333;--c-encre-40:#555;
    --c-craie:#000;--c-craie-60:#333;
    --c-signal:#000;--c-signal-sombre:#000;--c-signal-clair:#000;--c-bleu:#000;
    --c-ligne:#000;--c-ligne-forte:#000;--c-ligne-d:#000;
    --c-voile:transparent;--c-voile-2:transparent;
    --om-1:none;--om-2:none;
  }
  body{background:#fff;color:#000;padding:0}
  body::before,.rail,.entete,.barre-mobile,.menu,.bandeau,.filtres,.curseur{display:none!important}
  .section{padding-block:24px;break-inside:avoid}
  .chemise{clip-path:none}
  a[href^="http"]::after{content:" (" attr(href) ")";font-size:10px}
  .chemise,.temoin{break-inside:avoid;border:1px solid #000}
}
```

### P1 — Le choc typographique (80 % de la perception, 1 journée)

| # | Intervention | Fichier(s) |
|---|---|---|
| 1.1 | Nouveaux jetons de taille + `--t-nav`, graisses Archivo 500/800, nouvelle balise Google Fonts | `00-jetons.css`, `index.html:22` |
| 1.2 | `h1,h2,h3` en graisse 500 ; `.h2` perd `uppercase` ; `.couverture h1` seul garde 800 + MAJ | `01-socle.css:69-73`, `06-haut.css:15` |
| 1.3 | **Sortir 18 composants du mono-capitales** (tableau § 4.4) | `05-navigation.css`, `02-boutons.css`, `03-fiches.css`, `04-formulaires.css`, `06-haut.css`, `07-chantiers.css`, `08-bas.css`, `13-pile.css` |
| 1.4 | Navigation en Plex Sans 15 px casse normale ; menu plein écran en Archivo 500 casse normale, 2× plus grand | `05-navigation.css:44-79, 142-150` |
| 1.5 | Bandeau démoté en ticker mono 13 px, 60 s | `02-boutons.css:96-110` |

### P2 — Le tracé et la grille (l'identité, 1 à 2 jours)

| # | Intervention | Fichier(s) |
|---|---|---|
| 2.1 | Jetons `--x-marge`, `--y-bloc`, `--c-voile`, `--c-voile-2`, `--e-power2/4`, `--d-survol`, `--r-net`, nouvelles durées | `00-jetons.css` |
| 2.2 | Primitives `.trace` et `.balaie` + garde `prefers-reduced-motion` | `01-socle.css` |
| 2.3 | **Pied de page en tableau de cellules à filets**, chaque colonne coiffée d'une `.etiquette` — le geste le plus rentable de tout le lot | `08-bas.css:70-100`, `index.html:929-973` |
| 2.4 | `.temoin` et `.coordonnees` perdent fond + rayon, deviennent des `.cellule` | `07-chantiers.css:77-92`, `08-bas.css:50-65` |
| 2.5 | `.trace` sur `.repere`, `.metiers__ligne`, `.releve--regle`, `.identite`, `.question` | `02-boutons.css`, `06-haut.css`, `03-fiches.css`, `13-pile.css`, `08-bas.css` |
| 2.6 | `.balaie` sur `.metiers__ligne`, `.question__tete`, `.depliant__tete`, `.filtre`, `.lots li`, liens de pied | idem + `03-fiches.css` |

### P3 — Le nettoyage des signes (0,5 jour)

| # | Intervention | Fichier(s) |
|---|---|---|
| 3.1 | **Ramener `--c-signal` de 44 à 8 usages** (liste § 3.4) | les 14 fichiers CSS |
| 3.2 | Supprimer `--r-pilule` de `.btn`, `.filtre`, `.lots li`, `.saut` ; renommer en `--r-rond` ; `--r-fiche` 8 px → `--r-net` 3 px | `00-jetons.css`, `02-boutons.css`, `03-fiches.css`, `01-socle.css` |
| 3.3 | Nouveau `.btn` : rectangle 3 px, Plex Sans 500, balayage vertical crème → laiton clair | `02-boutons.css:10-33` |
| 3.4 | Déclasser `--c-bleu` en couleur de focus de formulaire uniquement | `00-jetons.css:45`, `04-formulaires.css:35` |

### P4 — Le rythme et la lumière (1 jour)

| # | Intervention | Fichier(s) |
|---|---|---|
| 4.1 | `.zone` 1280 → 1560 px ; `--grille-marge`/`--sec-y` alias de `--x-marge`/`--y-bloc` ; suppression des 3 surcharges `@media` de rythme | `00-jetons.css:86-92,126-139`, `01-socle.css:107` |
| 4.2 | Grille des réalisations asymétrique 4/2 · 2/4 | `07-chantiers.css:16-21` |
| 4.3 | Voile sur les tirages qui se lève au survol + `saturate(1.06)` | `03-fiches.css:29-37`, `13-pile.css:53`, `07-chantiers.css:39` |
| 4.4 | Durées de révélation 620 → 900 ms, image 900 → 1200 ms, `translateY` 26 → 18 px, parallaxe 8 → 6 %, compteurs 900 → 1400 ms | `00-jetons.css:114-118`, `01-socle.css:124-146`, `effets.js:45`, `motion.js:100` |
| 4.5 | Curseur : `scale(.2)` au repos, ouverture 300 ms `--e-power2` (sans `mix-blend-mode`) | `09-curseur.css`, `curseur.js` |

**Ordre recommandé** : P0 aujourd'hui, puis P1 en entier avant de juger quoi que ce soit — c'est la seule étape qui change la perception à elle seule. P2 ensuite. P3 et P4 peuvent être menés en parallèle.

---

## 12. Ce qui mérite une décision humaine

1. **Archivo 500 en titre.** Sur le papier c'est la bonne décision (c'est ce qui fait toute la classe de la référence), mais Archivo en Medium à 64 px peut paraître mou sur fond sombre là où Satoshi 400 tient sur fond clair. **À voir sur écran avant de valider**, avec Instrument Sans 500 en second candidat.
2. **`.zone` de 1280 à 1560 px.** Gain net d'ampleur, mais la ligne de lecture s'allonge pour les blocs non bornés. À valider sur un vrai 27 pouces.
3. **La grille asymétrique des réalisations.** Elle casse la monotonie, mais elle rend les six fiches inégales en importance visuelle alors qu'elles ont le même statut commercial. Alternative conservatrice : garder 3 colonnes égales et ne mettre en avant que le chantier signature, qui l'est déjà.
4. **Le sort du bandeau défilant.** Je le démote en ticker ; l'option « le supprimer » est défendable et allégerait encore la page.
