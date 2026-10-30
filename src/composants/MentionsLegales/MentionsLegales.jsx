// Page « Mentions légales ».
// En France, tout site doit indiquer qui l'édite et qui l'héberge (loi pour la confiance
// dans l'économie numérique). Le formulaire de contact collecte des données personnelles :
// on explique lesquelles, pourquoi, et comment les faire supprimer (RGPD).
import informations from '../../donnees/informations.js'
import PiedDePage from '../PiedDePage/PiedDePage.jsx'
import './MentionsLegales.css'

function MentionsLegales() {
  return (
    <>
      <a className="lien-evitement" href="#contenu-principal">
        Aller au contenu
      </a>

      <header className="mentions-en-tete" id="haut-de-page">
        <div className="mentions-en-tete-barre conteneur">
          <a className="mentions-retour" href={import.meta.env.BASE_URL}>← Retour au portfolio</a>
        </div>
      </header>

      <main className="mentions conteneur" id="contenu-principal" tabIndex={-1}>
        <p className="section-timecode">Informations légales</p>
        <h1 className="mentions-titre">Mentions légales</h1>

        <section className="mentions-bloc" aria-labelledby="titre-editeur">
          <h2 id="titre-editeur">Éditeur du site</h2>
          <p>
            Ce site est un portfolio personnel, édité par {informations.prenomEtNom}, particulier,
            domicilié à {informations.ville}.
          </p>
          <p>
            Contact : <a href={'mailto:' + informations.email}>{informations.email}</a>
          </p>
          <p>Directeur de la publication : {informations.prenomEtNom}.</p>
        </section>

        <section className="mentions-bloc" aria-labelledby="titre-hebergeur">
          <h2 id="titre-hebergeur">Hébergeur</h2>
          <p>{informations.hebergeur.nom}</p>
          <p>{informations.hebergeur.adresse}</p>
          <p>
            <a href={informations.hebergeur.site}>{informations.hebergeur.site}</a>
          </p>
        </section>

        <section className="mentions-bloc" aria-labelledby="titre-donnees">
          <h2 id="titre-donnees">Données personnelles</h2>
          <p>
            Le formulaire de contact recueille votre nom, votre adresse e-mail et votre message.
            Ces informations servent uniquement à vous répondre. Elles ne sont ni revendues ni
            utilisées à des fins commerciales.
          </p>
          <p>
            Les messages transitent par le service Formspree, qui les transmet par e-mail.
            Ils ne sont pas enregistrés sur ce site.
          </p>
          <p>
            Vous pouvez demander à consulter ou à faire supprimer vos messages en écrivant
            à <a href={'mailto:' + informations.email}>{informations.email}</a>.
          </p>
        </section>

        <section className="mentions-bloc" aria-labelledby="titre-cookies">
          <h2 id="titre-cookies">Cookies et mesure d'audience</h2>
          <p>Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience.</p>
        </section>

        <section className="mentions-bloc" aria-labelledby="titre-propriete">
          <h2 id="titre-propriete">Propriété intellectuelle</h2>
          <p>
            Les textes et le code de ce site appartiennent à {informations.prenomEtNom}.
            Les captures d'écran présentent des projets réalisés pendant la formation
            Développeur Web d'OpenClassrooms. Les photographies visibles dans ces captures
            restent la propriété de leurs auteurs.
          </p>
          <p>
            Polices utilisées : Archivo, Inter et JetBrains Mono, sous licence SIL Open Font License.
          </p>
        </section>
      </main>

      <PiedDePage />
    </>
  )
}

export default MentionsLegales
