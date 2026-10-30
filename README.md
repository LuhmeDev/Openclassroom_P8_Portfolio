# Portfolio — Kenny Lucas

Portfolio de Kenny Lucas, développeur web Front-End à Bordeaux.
Projet final de la formation Développeur Web d'OpenClassrooms.

Direction artistique : **« la salle de montage »**. Le site reprend l'univers d'un logiciel de post-production
(fond sombre, accent ambre, repères timecode, timeline en pistes) pour relier un BTS Audiovisuel
au métier de développeur.

**En ligne :** [luhmedev.github.io/Openclassroom_P8_Portfolio](https://luhmedev.github.io/Openclassroom_P8_Portfolio/)

## Technologies

| Besoin | Choix | Pourquoi |
| --- | --- | --- |
| Interface | React 19 + Vite 7 | React validé en formation, Vite rapide à lancer et à déployer |
| Styles | CSS natif, un fichier par composant | Les variables CSS suffisent, une dépendance de moins que Sass |
| Animations | CSS natif | Légères, coupées si le visiteur réduit les animations |
| Formulaire | Formspree | Envoi réel par e-mail sans serveur à coder |
| Hébergement | GitHub Pages | Gratuit, et GitHub Actions met le site à jour à chaque push sur main |

Dépendances : `react` et `react-dom`, plus `vite` et `@vitejs/plugin-react` pour le développement. Rien d'autre.

## Lancer le projet

Prérequis : Node.js 20 ou plus récent.

```bash
npm install       # installe les dépendances (une seule fois)
npm run dev       # lance le site en développement sur http://localhost:5173
npm run build     # construit la version en ligne dans le dossier dist/
npm run preview   # affiche la version construite, pour la tester avant de la publier
```

## Structure

```
portfolio-kenny-lucas/
├── index.html                 Page du portfolio (balises SEO, Open Graph, données structurées)
├── mentions-legales/
│   └── index.html             Page des mentions légales
├── public/                    Fichiers copiés tels quels dans le site
│   ├── images/projets/        Captures des projets (WebP, 960 × 540)
│   ├── images/apercu-partage.jpg   Image affichée quand on partage le lien
│   ├── videos/                Vidéos de démonstration (MP4, sans son)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── main.jsx               Point d'entrée du portfolio
│   ├── mentions-legales.jsx   Point d'entrée des mentions légales
│   ├── App.jsx                Assemble les sections dans l'ordre
│   ├── composants/            Un fichier .jsx et un fichier .css par section
│   ├── donnees/               Contenus : projets, compétences, parcours, informations
│   ├── styles/                Design system (variables), polices, règles de base
│   └── assets/polices/        Polices hébergées dans le projet (woff2)
└── vite.config.js             Déclare les deux pages HTML
```

## Choix techniques à retenir

- **Les contenus sont séparés du code.** Ajouter un projet = ajouter un objet dans `src/donnees/projets.js`.
  Aucun composant n'est à modifier.
- **Un design system en variables CSS** (`src/styles/variables.css`) : aucune couleur ni taille n'est écrite
  en dur dans les composants.
- **La fiche projet utilise l'élément `<dialog>` natif.** Le navigateur gère le focus, la touche Échap et
  le retour du focus sur le bouton d'ouverture.
- **Deux pages HTML plutôt qu'un routeur.** Les mentions légales sont la seule page secondaire :
  Vite sait construire plusieurs pages, ce qui évite d'installer React Router.
- **Polices hébergées dans le projet** : aucun appel à Google Fonts, donc plus rapide et aucune donnée envoyée.
- **Formulaire honnête** : tant que l'identifiant Formspree est vide, le formulaire l'indique au lieu de simuler
  un envoi.

## Accessibilité

Visé : WCAG 2.2 niveau AA.

- HTML sémantique, un seul `h1`, titres hiérarchisés, lien « Aller au contenu »
- Navigation complète au clavier, focus visible en ambre
- Menu mobile avec `aria-expanded`, fermeture avec Échap et retour du focus
- Filtres avec `aria-pressed`, nombre de projets annoncé (`aria-live`)
- Formulaire : labels reliés, erreurs annoncées (`aria-invalid`, `aria-describedby`, `role="status"`),
  focus placé sur le premier champ en erreur
- Contrastes mesurés : 4,5:1 minimum pour tout le texte (détail dans `variables.css`)
- Animations coupées avec `prefers-reduced-motion`, aucune animation de plus de 5 secondes

## Résultats des audits

| Mesure | Mobile | Ordinateur | Conditions |
| --- | --- | --- | --- |
| Lighthouse : performance | 96 | 100 | Version construite, servie en local, 26/10/2026 |
| Lighthouse : accessibilité | 100 | 100 | idem |
| Lighthouse : bonnes pratiques | 100 | 100 | idem |
| Lighthouse : SEO | 100 | 100 | idem |
| Lighthouse en ligne (4 catégories) | 100 | 100 | Navigation privée, sur GitHub Pages, octobre 2026 |
| WAVE | [À MESURER] | | |
| axe DevTools | [À MESURER] | | |

Un score mesuré en local n'est qu'indicatif : refaire les mesures sur le site en ligne avant la soutenance.

## Configuration du formulaire

Le formulaire n'est pas relié à Formspree pour la soutenance : il vérifie les champs, puis indique
qu'il n'est pas encore configuré au lieu de simuler un envoi. Pour l'activer :

1. Créer un compte gratuit sur [formspree.io](https://formspree.io) avec l'adresse kennylucaspro@gmail.com.
2. Créer un formulaire : Formspree donne une adresse du type `https://formspree.io/f/abcdwxyz`.
3. Copier la fin (`abcdwxyz`) dans `identifiantFormspree`, dans `src/donnees/informations.js`.
4. Envoyer un message de test depuis le site en ligne et confirmer la réception.

## Auteur

Kenny Lucas — [kennylucaspro@gmail.com](mailto:kennylucaspro@gmail.com) — [github.com/LuhmeDev](https://github.com/LuhmeDev)
