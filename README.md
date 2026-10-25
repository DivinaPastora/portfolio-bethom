# Portfolio BeThom

Intégration HTML/CSS responsive d'une maquette Figma de portfolio pour un graphiste freelance. Projet réalisé dans le cadre de la formation Product Builder IA (LearningCampus).

- **Site en ligne** : À COMPLÉTER APRÈS LA MISE EN LIGNE
- **Maquette Figma** : https://www.figma.com/design/687syGebv93JgNJYw0FbPQ/LearningCampus-maquette-portfolio
- **Dépôt GitHub** : https://github.com/DivinaPastora/portfolio-bethom

## Fonctionnalités

- Page unique avec quatre sections : Accueil, Blog (articles récents), Portfolio (travaux en vedette) et Contact
- Menu fixe avec ancres et défilement doux
- Version desktop (maquette 1440 px), tablette et mobile (maquette 375 px) avec menu burger
- Bouton de téléchargement du CV
- Formulaire de contact avec liste déroulante de services et de budgets (mise en page uniquement, sans envoi)
- Accessibilité : HTML sémantique, textes alternatifs, labels de formulaire, contrastes vérifiés, navigation au clavier, respect de la préférence « réduire les animations »

## Technologies

- HTML5
- CSS3 (Flexbox, media queries)
- JavaScript (ouverture et fermeture du menu mobile)

## Police

[Heebo](https://fonts.google.com/specimen/Heebo) (Google Fonts), graisses 100 à 900, avec `sans-serif` en police de secours.

## Structure du projet

```
portfolio-bethom/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── menu.js
├── img/        logo, photo, visuels des projets, icônes des réseaux sociaux
└── docs/
    └── cv.pdf
```

## Installation et lancement

Le projet ne nécessite aucune installation ni outil de compilation.

```bash
git clone https://github.com/DivinaPastora/portfolio-bethom.git
cd portfolio-bethom
```

Ouvrir ensuite `index.html` dans un navigateur, ou lancer le dossier avec l'extension Live Server de VS Code.

## Points de rupture responsive

| Écran | Largeur | Comportement |
|---|---|---|
| Desktop | plus de 1024 px | Mise en page de la maquette, menu horizontal |
| Tablette | 769 à 1024 px | Ajustement des tailles de texte et des espacements |
| Mobile | 768 px et moins | Éléments empilés, menu burger |

## Contrôles qualité

- Validation W3C : HTML et CSS sans erreur
- Lighthouse (mobile) : Accessibilité 100, SEO 100, Bonnes pratiques 96, Performance 100
- Aucun défilement horizontal de 320 à 1440 px

## Auteur

Claudine Hausherr
