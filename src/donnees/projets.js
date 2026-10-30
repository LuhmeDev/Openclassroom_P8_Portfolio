// Liste des projets affichés dans la section « Projets ».
// Pour ajouter un projet : copier un objet, le coller à la suite et modifier ses valeurs.
// Aucun composant n'est à modifier.
//
// Champs d'un projet :
// - categorie : doit correspondre à un filtre (Front-End, Back-End, Optimisation, Entreprise)
// - miseEnAvant : true = carte affichée en premier
// - image : chemin depuis le dossier public/
// - lienGithub, lienGithubComplementaire, lienDemo : chaîne vide '' si le lien n'existe pas
// - video : chemin d'une vidéo de démonstration dans public/videos, '' s'il n'y en a pas
// - fiche : le contenu de la fenêtre détaillée
//
// Chaque affirmation des fiches vient du code des dépôts.
// Les mentions [À COMPLÉTER] ou [À CONFIRMER] attendent la validation de Kenny.

const listeDesProjets = [
  {
    identifiant: 'planning-maintenance',
    titre: 'Planification des interventions de maintenance',
    categorie: 'Entreprise',
    miseEnAvant: true,
    resume: "Application métier qui planifie la maintenance d'un parc d'équipements : échéances récurrentes, campagnes, replanification, suivi de charge et notification des clients.",
    image: '/images/projets/projet-planning.webp',
    texteAlternatif: "Vue annuelle du planning : interventions par laboratoire et par mois, retards en rouge. Données fictives.",
    technologies: ['JavaScript (modules ES)', 'HTML', 'CSS', 'SQL', 'n8n'],
    donneesFictives: true,
    lienGithub: '',
    lienGithubComplementaire: '',
    lienDemo: '',
    video: '/videos/demo-planning.mp4',
    mentionSansLien: 'Code privé : projet réalisé en entreprise',
    fiche: {
      contexte: "Projet réalisé en entreprise pour un service qui assure la maintenance d'équipements de laboratoire chez des clients industriels. L'application tourne dans le bureau applicatif d'une plateforme low-code, qui fournit les données par des points d'accès HTTP.",
      objectifs: [
        "Calculer automatiquement les prochaines échéances de chaque équipement selon sa récurrence.",
        "Regrouper les échéances d'un même pilote en campagnes d'intervention.",
        "Replanifier une intervention en gardant l'historique des décalages.",
        "Comparer la charge de travail à la capacité de l'équipe.",
        "Prévenir les clients par e-mail (création, rappel, report, retard).",
      ],
      competences: [
        "Cadrage et conception d'une application métier",
        'Architecture modulaire en JavaScript natif, sans framework ni outil de build',
        'Requêtes SQL pour les points d\'accès de la plateforme',
        'Automatisation des notifications avec n8n',
        'Tests automatisés écrits sans dépendance',
        'Développement assisté par IA (Claude Code), avec relecture et tests',
      ],
      defis: [
        {
          probleme: "L'application tourne dans une iframe sécurisée où confirm(), alert() et prompt() sont ignorés en silence : une confirmation de suppression renvoyait toujours « non ».",
          solution: "Toutes les confirmations sont devenues des composants intégrés à l'écran, comme une suppression en deux clics.",
        },
        {
          probleme: "Deux fonctions lisaient les mêmes données de deux façons différentes. Après une replanification réussie, un client disparaissait de l'écran.",
          solution: "Règle du « lecteur unique » : une seule fonction lit chaque donnée. L'ancienne a été supprimée plutôt que réparée.",
        },
        {
          probleme: "La plateforme répond « succès » même quand une requête SQL est cassée : une erreur et un résultat vide se ressemblent.",
          solution: "Règles d'écriture SQL documentées, et un faux serveur de test qui rejoue des réponses réellement observées.",
        },
      ],
      resultats: [
        '37 modules JavaScript, 137 commits entre août et octobre 2026.',
        '2 747 contrôles automatisés, tous au vert (mesuré le 26 octobre 2026).',
        "[À COMPLÉTER : état actuel de l'application (bêta, en service ?)]",
      ],
      ameliorations: [
        'Ajouter un cache local pour accélérer l\'affichage (prévu après la bêta).',
        'Tester aussi le SQL exécuté côté plateforme : les tests actuels vérifient le front à partir de réponses enregistrées.',
      ],
      noteIA: "Développé avec l'assistance de Claude Code : j'ai mené le cadrage et la conception, et je relis et teste le code produit. [À CONFIRMER : formulation]",
    },
  },
  {
    identifiant: 'kasa',
    titre: 'Application de location immobilière',
    categorie: 'Front-End',
    miseEnAvant: true,
    resume: 'Application React de location de logements entre particuliers : routage, carrousel de photos, menus déroulants réutilisables.',
    image: '/images/projets/projet-kasa.webp',
    texteAlternatif: "Page À propos de l'application Kasa avec ses menus déroulants.",
    technologies: ['React', 'React Router', 'Sass', 'Vite'],
    donneesFictives: false,
    lienGithub: 'https://github.com/LuhmeDev/Openclassroom_P5_Kasa',
    lienGithubComplementaire: '',
    lienDemo: '',
    video: '',
    mentionSansLien: '',
    fiche: {
      contexte: "Projet de formation : développer en React l'interface d'une plateforme de location de logements entre particuliers, à partir d'une maquette et d'un fichier de données JSON.",
      objectifs: [
        'Créer une application monopage avec quatre pages : accueil, fiche logement, à propos et erreur 404.',
        'Construire des composants réutilisables (carte, carrousel, menu déroulant, note).',
        "Adapter l'affichage au mobile et à l'ordinateur.",
      ],
      competences: [
        'Composants React et passage de props',
        'Gestion de l\'état avec useState',
        'Routage avec paramètres (useParams) et redirection',
        'Styles Sass rangés par composant',
      ],
      defis: [
        {
          probleme: "Une adresse de logement qui n'existe pas devait mener à la page d'erreur, pas à une page vide.",
          solution: "Lecture de l'identifiant avec useParams, recherche dans les données, puis redirection vers la page 404 avec <Navigate replace> si rien n'est trouvé.",
        },
        {
          probleme: 'Le carrousel devait tourner en boucle et rester propre avec une seule photo.',
          solution: "L'index de la photo est gardé dans useState : après la dernière, on revient à la première. Flèches et compteur sont masqués s'il n'y a qu'une image.",
        },
        {
          probleme: 'Le même menu déroulant affiche tantôt un texte, tantôt une liste d\'équipements.',
          solution: 'Le composant vérifie le type de la donnée reçue (Array.isArray) et affiche un paragraphe ou une liste.',
        },
      ],
      resultats: [
        'Application complète de quatre pages.',
        'Composants réutilisés entre l\'accueil, la fiche logement et la page À propos.',
      ],
      ameliorations: [
        "Rendre les menus déroulants utilisables au clavier : l'ouverture se fait aujourd'hui au clic sur une image, un vrai bouton avec aria-expanded serait accessible.",
        'Donner un texte alternatif aux flèches du carrousel.',
      ],
      noteIA: '',
    },
  },
  {
    identifiant: 'nina-carducci',
    titre: "Optimisation d'un site de photographe",
    categorie: 'Optimisation',
    miseEnAvant: true,
    resume: "Reprise d'un site existant : images allégées, référencement local, accessibilité et correction de la galerie.",
    image: '/images/projets/projet-nina-carducci.webp',
    texteAlternatif: "Page d'accueil du site de la photographe Nina Carducci.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    donneesFictives: false,
    lienGithub: 'https://github.com/LuhmeDev/Openclassroom_P4_NinaCarducci',
    lienGithubComplementaire: '',
    lienDemo: '',
    video: '',
    mentionSansLien: '',
    fiche: {
      contexte: "Mission de formation : reprendre le site d'une photographe pour améliorer ses performances, son référencement et son accessibilité, et corriger les bugs de sa galerie.",
      objectifs: [
        'Alléger les images, de loin le plus gros poids de la page.',
        'Améliorer le référencement, en particulier local (Bordeaux).',
        "Corriger les défauts d'accessibilité.",
        'Réparer la galerie filtrable.',
      ],
      competences: [
        "Audit de performance et d'accessibilité",
        'Optimisation des images (WebP, chargement différé)',
        'Référencement : balises meta, Open Graph, données structurées',
        'Débogage de code JavaScript existant',
      ],
      defis: [
        {
          probleme: 'Les images JPG et PNG pesaient environ 31 Mo au total.',
          solution: 'Conversion en WebP (environ 11 Mo au total, près de trois fois moins), chargement différé, et priorité haute pour la première image du carrousel.',
        },
        {
          probleme: 'Hiérarchie de titres incohérente (le nom en h3, les citations en h1) et aucune description pour les moteurs de recherche.',
          solution: 'Un seul h1, des h2 par section, une meta description, les balises Open Graph et Twitter, et des données structurées Schema.org pour le référencement local.',
        },
        {
          probleme: 'Images sans texte alternatif, langue de la page non déclarée, champs du formulaire sans label relié.',
          solution: 'Textes alternatifs descriptifs, lang="fr", labels reliés aux champs avec l\'attribut for.',
        },
        {
          probleme: "Galerie : les flèches précédent et suivant et le filtre actif ne fonctionnaient pas correctement. [À CONFIRMER]",
          solution: "Correction du calcul de l'image précédente et suivante, et style du filtre actif. [À CONFIRMER]",
        },
      ],
      resultats: [
        'Poids des images divisé par près de trois.',
        '[À COMPLÉTER : scores Lighthouse avant et après, si tu les as]',
      ],
      ameliorations: [
        'Remplacer jQuery et Bootstrap par du JavaScript et du CSS natifs pour alléger encore la page.',
        "Proposer chaque image en plusieurs tailles (srcset) pour que le mobile charge moins.",
      ],
      noteIA: '',
    },
  },
  {
    identifiant: 'sophie-bluel',
    titre: 'Page web dynamique en JavaScript',
    categorie: 'Front-End',
    miseEnAvant: true,
    resume: "Portfolio d'architecte dont la galerie et les filtres sont générés depuis une API, avec connexion et gestion des projets.",
    image: '/images/projets/projet-sophie-bluel.webp',
    texteAlternatif: "Galerie de projets de l'architecte Sophie Bluel avec ses filtres par catégorie.",
    technologies: ['JavaScript', 'API Fetch', 'HTML', 'CSS'],
    donneesFictives: false,
    lienGithub: 'https://github.com/LuhmeDev/Sophie-Bluel',
    lienGithubComplementaire: '',
    lienDemo: '',
    video: '/videos/demo-sophie-bluel.mp4',
    mentionSansLien: '',
    fiche: {
      contexte: "Projet de formation : rendre dynamique le portfolio d'une architecte d'intérieur à partir d'une API fournie (Node.js, Express, SQLite).",
      objectifs: [
        "Afficher la galerie à partir des données de l'API.",
        'Filtrer les projets par catégorie sans recharger la page.',
        'Créer une page de connexion pour l\'architecte.',
        'Ajouter et supprimer des projets depuis une fenêtre modale.',
      ],
      competences: [
        'Requêtes asynchrones avec fetch',
        'Manipulation du DOM',
        'Authentification par jeton (stocké en sessionStorage)',
        "Envoi d'un fichier avec FormData",
        'Code organisé en modules et en classes',
      ],
      defis: [
        {
          probleme: "Ajouter un projet avec son image : l'API attend un formulaire « multipart » et un jeton d'authentification.",
          solution: "Construction d'un FormData, jeton envoyé dans l'en-tête Authorization, aperçu de l'image avant l'envoi.",
        },
        {
          probleme: 'Le bouton Valider ne devait être actif que si le formulaire était complet.',
          solution: 'Une vérification se lance à chaque saisie dans le titre, la catégorie et le choix du fichier.',
        },
        {
          probleme: 'Après un ajout ou une suppression, la galerie et la modale devaient se mettre à jour sans recharger la page.',
          solution: 'La galerie est vidée puis reconstruite à partir des nouvelles données.',
        },
      ],
      resultats: [
        'Galerie, filtres, connexion et gestion des projets fonctionnels.',
        'Code réparti en 9 modules JavaScript.',
      ],
      ameliorations: [
        "Fermer la modale avec la touche Échap et garder le focus à l'intérieur (ou utiliser l'élément <dialog> natif).",
        "Déconnecter automatiquement l'utilisateur quand son jeton expire.",
        'Corriger le chemin du script de login.html : le chemin absolu /FrontEnd/… ne fonctionne que si le serveur est lancé à la racine du dépôt.',
      ],
      noteIA: '',
    },
  },
  {
    identifiant: 'booki',
    titre: "Page d'accueil d'une agence de voyage",
    categorie: 'Front-End',
    miseEnAvant: false,
    resume: "Intégration responsive de la page d'accueil d'une agence de voyage à partir d'une maquette.",
    image: '/images/projets/projet-booki.webp',
    texteAlternatif: "Page d'accueil de l'agence de voyage Booki.",
    technologies: ['HTML', 'CSS'],
    donneesFictives: false,
    lienGithub: 'https://github.com/LuhmeDev/BOOKI',
    lienGithubComplementaire: '',
    lienDemo: '',
    video: '',
    mentionSansLien: '',
    fiche: {
      contexte: "Premier projet de formation : intégrer la page d'accueil d'une agence de voyage à partir d'une maquette, en HTML et CSS uniquement.",
      objectifs: [
        'Reproduire fidèlement la maquette.',
        "Adapter la page à l'ordinateur, à la tablette et au mobile.",
      ],
      competences: [
        'HTML sémantique',
        'Mise en page avec Flexbox',
        'Responsive avec des media queries (1440, 1024 et 368 px)',
      ],
      defis: [
        {
          probleme: '[À COMPLÉTER : une difficulté rencontrée sur ce projet]',
          solution: '[À COMPLÉTER : comment tu l\'as résolue]',
        },
      ],
      resultats: ['Page conforme à la maquette sur les trois tailles d\'écran.'],
      ameliorations: [
        "Passer à une approche Mobile First (le style part aujourd'hui de l'ordinateur).",
        'Corriger les fautes du texte de la page (par exemple « Famillial »).',
      ],
      noteIA: '',
    },
  },
  {
    identifiant: 'mon-vieux-grimoire',
    titre: "API d'un site de notation de livres",
    categorie: 'Back-End',
    miseEnAvant: false,
    resume: 'API REST : inscription et connexion sécurisées, gestion et notation de livres, compression automatique des images.',
    image: '/images/projets/projet-mon-vieux-grimoire.webp',
    texteAlternatif: "Liste des routes de l'API Mon Vieux Grimoire et de leurs middlewares.",
    technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Sharp'],
    donneesFictives: false,
    lienGithub: 'https://github.com/LuhmeDev/Openclassroom_P6_MonVieuxGrimoire_Soutenance',
    lienGithubComplementaire: 'https://github.com/LuhmeDev/Openclassroom_P6_MonVieuxGrimoire_Front_Soutenance',
    lienDemo: '',
    // Vidéo à enregistrer par Kenny : l'API a besoin d'une base MongoDB (Atlas) pour tourner.
    // Une fois le fichier placé dans public/videos, écrire ici '/videos/demo-mon-vieux-grimoire.mp4'
    video: '',
    mentionSansLien: '',
    fiche: {
      contexte: "Projet de formation : développer l'API d'un site de notation de livres dont l'interface React était fournie.",
      objectifs: [
        'Inscription et connexion sécurisées.',
        'Ajouter, modifier et supprimer des livres avec leur image.',
        'Noter un livre et calculer sa note moyenne.',
        'Lister les trois livres les mieux notés.',
        'Optimiser les images envoyées (démarche « green code »).',
      ],
      competences: [
        'API REST avec Express (routes, contrôleurs, middlewares)',
        'Modélisation des données avec Mongoose',
        'Sécurité : mots de passe hachés avec bcrypt, jetons JWT',
        "Traitement d'images avec Multer et Sharp",
      ],
      defis: [
        {
          probleme: 'Les images envoyées étaient lourdes et de tailles variables.',
          solution: 'Un middleware Sharp redimensionne chaque image en 463 × 595 px, la convertit en WebP et lui donne un nom unique horodaté.',
        },
        {
          probleme: "Un utilisateur ne doit pas pouvoir modifier ou supprimer le livre d'un autre.",
          solution: "L'identifiant contenu dans le jeton est comparé au créateur du livre : sinon, réponse 403.",
        },
        {
          probleme: 'La note moyenne devait rester juste, sans double vote.',
          solution: 'Une seule note par utilisateur, entière entre 1 et 5 (sinon erreur 400), et moyenne recalculée et arrondie à une décimale à chaque note.',
        },
        {
          probleme: 'Supprimer ou remplacer un livre laissait son ancienne image sur le serveur.',
          solution: "L'ancien fichier est supprimé du disque (fs.unlink) à la suppression et à la modification.",
        },
      ],
      resultats: [
        'API complète de 9 routes, dont 4 protégées par jeton.',
        'Images enregistrées en WebP à la taille exacte d\'affichage.',
      ],
      ameliorations: [
        'Limiter le nombre de tentatives de connexion (rate limiting).',
        'Ajouter des tests automatisés sur les routes.',
      ],
      noteIA: '',
    },
  },
]

export default listeDesProjets
