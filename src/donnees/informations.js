// Informations personnelles affichées à plusieurs endroits du site.
// Les modifier ici les met à jour partout (navigation, contact, pied de page, mentions légales).
 
const informations = {
  prenomEtNom: 'Kenny Lucas',
  metier: 'Développeur Web Front-End',
  ville: 'Bordeaux',
  email: 'kennylucaspro@gmail.com',
  lienGithub: 'https://github.com/LuhmeDev',
  texteGithub: 'github.com/LuhmeDev',
 
  // Formulaire de contact : adresse à laquelle FormSubmit (formsubmit.co) transfère les messages.
  // Service gratuit, sans inscription. Au tout premier envoi, FormSubmit envoie un e-mail
  // d'activation à cette adresse : il faut cliquer sur le lien une seule fois.
  // Cet e-mail d'activation contient aussi un alias (une suite de lettres et de chiffres) :
  // on peut le coller ici à la place de l'adresse pour qu'elle n'apparaisse plus dans le code.
  // Si la valeur est vide, le formulaire indique qu'il n'est pas configuré : aucun faux envoi.
  destinataireFormulaire: 'kennylucaspro@gmail.com',
 
  // Hébergeur, obligatoire dans les mentions légales.
  // Adresse vérifiée le 30/10/2026 dans la déclaration de confidentialité de GitHub :
  // https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
  hebergeur: {
    nom: 'GitHub, Inc.',
    adresse: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
    site: 'https://github.com',
  },
}
 
export default informations
 
