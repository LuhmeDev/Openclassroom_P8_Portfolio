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
    periode: '[À COMPLÉTER : dates] · [À COMPLÉTER : entreprise]',
    titre: 'Responsable et assistant responsable logistique',
    description: 'Préparation des tournées de livraison, suivi des commandes et des stocks, préparation des bons de livraison pour les transporteurs sous-traitants, contrôle qualité.',
    estEnCours: false,
  },
  {
    periode: '[À COMPLÉTER : années]',
    titre: 'BTS Audiovisuel — Montage et post-production',
    description: '[À COMPLÉTER : établissement]',
    estEnCours: false,
  },
]

export default listeDesEtapesDuParcours
