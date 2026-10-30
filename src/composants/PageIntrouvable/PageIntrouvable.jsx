// Page « 404 » : affichée quand l'adresse demandée n'existe pas.
// Dans un logiciel de montage, un fichier introuvable apparaît sur la timeline
// avec l'écran « Média hors ligne » : c'est l'équivalent d'une erreur 404.
//
// Les liens utilisent import.meta.env.BASE_URL : cette page peut s'afficher
// à n'importe quelle adresse du site, un lien relatif mènerait donc au mauvais endroit.
import PiedDePage from '../PiedDePage/PiedDePage.jsx'
import './PageIntrouvable.css'

function PageIntrouvable() {
  return (
    <>
      <a className="lien-evitement" href="#contenu-principal">
        Aller au contenu
      </a>

      <header className="introuvable-en-tete" id="haut-de-page">
        <div className="introuvable-en-tete-barre conteneur">
          <a className="introuvable-retour" href={import.meta.env.BASE_URL}>← Retour au portfolio</a>
        </div>
      </header>

      <main className="introuvable conteneur" id="contenu-principal" tabIndex={-1}>
        <div className="introuvable-texte">
          <p className="section-timecode">Erreur 404 — Plan introuvable</p>
          <h1 className="introuvable-titre">Média hors ligne</h1>
          <p className="introuvable-description">
            {/* &nbsp; : espace insécable, pour que le « : » ne parte pas seul à la ligne */}
            Cette page n'existe pas ou a été déplacée&nbsp;: le plan a dû être coupé au montage.
          </p>

          <div className="introuvable-boutons">
            <a className="bouton-principal" href={import.meta.env.BASE_URL}>Retour à l'accueil</a>
            <a className="bouton-secondaire" href={import.meta.env.BASE_URL + '#projets'}>Voir mes projets</a>
          </div>
        </div>

        {/* Moniteur de prévisualisation : purement décoratif, donc caché aux lecteurs d'écran */}
        <div className="moniteur" aria-hidden="true">
          <div className="moniteur-mires">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="moniteur-message">Média hors ligne</p>
          <p className="moniteur-timecode">00:04:04:00</p>
        </div>
      </main>

      <PiedDePage />
    </>
  )
}

export default PageIntrouvable
