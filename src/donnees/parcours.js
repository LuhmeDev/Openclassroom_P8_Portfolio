// Étapes du parcours, de la plus récente à la plus ancienne.
// estEnCours: true met l'étape en couleur d'accent sur la timeline.
// Après la validation de la formation (tâche T38 du Kanban) :
// remplacer la période par « Obtenu en [mois année] » et passer estEnCours à false.

const listeDesEtapesDuParcours = [
  {
    periode: 'En cours · obtention visée fin novembre 2026',
    titre: 'Développeur Web — OpenClassrooms',
    description: 'HTML, CSS, JavaScript, React, back-end Node.js, optimisation et gestion de projet, à travers des projets professionnalisants.',
    estEnCours: true,
  },
  {
    periode: '2021 – 2023 · SCEA de Pinchagut (Bourideys), puis Favuzzi (Montréal, Canada)',
    titre: 'Responsable et assistant responsable logistique',
    description: 'Préparation des tournées de livraison, suivi des commandes et des stocks, préparation des bons de livraison pour les transporteurs sous-traitants, contrôle qualité.',
    estEnCours: false,
  },
  {
    periode: '2016 – 2018',
    titre: 'BTS Audiovisuel — Montage et post-production',
    description: 'Lycée René Cassin, Biarritz. Stages en montage chez I.Mage Production (Bordeaux) et France 3 Bayonne.',
    estEnCours: false,
  },
  {
    periode: '2011 – 2014',
    titre: 'Bac STI2D option SIN, puis BTS Informatique et réseaux',
    description: 'Lycée Alfred Kastler, Talence. Premières bases en systèmes d\'information et en réseaux.',
    estEnCours: false,
  },
]

export default listeDesEtapesDuParcours
