// Informations personnelles affichées à plusieurs endroits du site.
// Les modifier ici les met à jour partout (navigation, contact, pied de page, mentions légales).

const informations = {
  prenomEtNom: 'Kenny Lucas',
  metier: 'Développeur Web Front-End',
  ville: 'Bordeaux',
  email: 'kennylucaspro@gmail.com',
  lienGithub: 'https://github.com/LuhmeDev',
  texteGithub: 'github.com/LuhmeDev',

  // Formulaire de contact : identifiant fourni par Formspree après création du formulaire
  // (il ressemble à « xyzabcde »). Tant qu'il est vide, le formulaire indique
  // qu'il n'est pas encore configuré : aucun faux envoi n'est simulé.
  identifiantFormspree: '',

  // Hébergeur, obligatoire dans les mentions légales.
  // À VÉRIFIER avant la mise en ligne : l'adresse officielle figure dans les conditions de GitHub
  // (les sites qui la citent ne donnent pas tous la même).
  hebergeur: {
    nom: 'GitHub, Inc.',
    adresse: '88 Colin P Kelly Jr Street, San Francisco, CA 94107, États-Unis',
    site: 'https://pages.github.com',
  },
}

export default informations
