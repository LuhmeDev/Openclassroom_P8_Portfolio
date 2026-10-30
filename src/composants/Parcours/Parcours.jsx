// Section « Parcours » : une timeline verticale, générée depuis donnees/parcours.js.
// Une liste ordonnée (<ol>) indique aux lecteurs d'écran que l'ordre compte.
import listeDesEtapesDuParcours from '../../donnees/parcours.js'
import './Parcours.css'

function Parcours() {
  return (
    <section className="section" id="parcours" aria-labelledby="titre-parcours">
      <div className="conteneur">
        <p className="section-timecode">00:01:00 — Parcours</p>
        <h2 className="section-titre" id="titre-parcours">Mon parcours</h2>

        <ol className="parcours-liste">
          {listeDesEtapesDuParcours.map((etape) => {
            // L'étape en cours est mise en valeur avec la couleur d'accent
            let classeDeLEtape = 'parcours-etape'
            if (etape.estEnCours) {
              classeDeLEtape = 'parcours-etape parcours-etape-en-cours'
            }

            return (
              <li className={classeDeLEtape} key={etape.titre}>
                <p className="parcours-periode">{etape.periode}</p>
                <h3 className="parcours-titre">{etape.titre}</h3>
                <p className="parcours-description">{etape.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Parcours
