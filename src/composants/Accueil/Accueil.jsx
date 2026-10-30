// Section d'accueil : nom, métier, accroche, deux boutons,
// et une « piste de montage » décorative qui raconte le parcours.
import informations from '../../donnees/informations.js'
import './Accueil.css'

function Accueil() {
  return (
    <section className="accueil conteneur" id="accueil" aria-labelledby="titre-accueil">
      <div className="accueil-texte">
        <p className="section-timecode">00:00:00 — Accueil</p>

        {/* Le seul h1 de la page : le nom */}
        <h1 className="accueil-titre" id="titre-accueil">{informations.prenomEtNom}</h1>

        <p className="accueil-sous-titre">
          {informations.metier}
          <span className="accueil-ville"> · {informations.ville}</span>
        </p>

        <p className="accueil-accroche">
          Du montage vidéo au développement web : je construis des interfaces claires,
          rythmées et soignées jusqu'au moindre détail, avec React et JavaScript.
        </p>

        <div className="accueil-boutons">
          <a className="bouton-principal" href="#projets">Voir mes projets</a>
          <a className="bouton-secondaire" href="#contact">Me contacter</a>
        </div>
      </div>

      {/* Piste de montage : purement décorative, donc cachée aux lecteurs d'écran
          (aria-hidden). Les informations qu'elle montre sont détaillées plus bas. */}
      <div className="piste" aria-hidden="true">
        <div className="piste-graduations">
          <span>00:00</span>
          <span>00:15</span>
          <span>00:30</span>
          <span>00:45</span>
          <span>01:00</span>
        </div>

        <div className="piste-ligne">
          <span className="piste-nom">V1</span>
          <div className="piste-clips">
            <span className="piste-clip piste-clip-taille-2">HTML · CSS</span>
            <span className="piste-clip piste-clip-taille-3">JavaScript</span>
            <span className="piste-clip piste-clip-taille-4 piste-clip-accent">React</span>
          </div>
        </div>

        <div className="piste-ligne">
          <span className="piste-nom">V2</span>
          <div className="piste-clips">
            <span className="piste-vide piste-clip-taille-3"></span>
            <span className="piste-clip piste-clip-secondaire piste-clip-taille-2">Sass</span>
            <span className="piste-clip piste-clip-secondaire piste-clip-taille-4">Accessibilité · SEO</span>
          </div>
        </div>

        <div className="piste-ligne">
          <span className="piste-nom">A1</span>
          <div className="piste-clips">
            <span className="piste-clip piste-clip-audio piste-clip-taille-3">Montage</span>
            <span className="piste-clip piste-clip-audio piste-clip-taille-3">Logistique</span>
            <span className="piste-clip piste-clip-audio piste-clip-taille-3">Développement web</span>
          </div>
        </div>

        {/* La tête de lecture : une ligne ambre qui avance une seule fois au chargement */}
        <span className="piste-tete-de-lecture"></span>
      </div>
    </section>
  )
}

export default Accueil
