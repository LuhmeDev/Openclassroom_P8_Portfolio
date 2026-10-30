// Pied de page, utilisé sur le portfolio et sur la page des mentions légales.
import informations from '../../donnees/informations.js'
import './PiedDePage.css'

function PiedDePage() {
  // L'année se calcule à chaque affichage : pas besoin de la changer chaque 1er janvier
  const anneeCourante = new Date().getFullYear()

  return (
    <footer className="pied-de-page">
      <div className="pied-de-page-contenu conteneur">
        <p>© {anneeCourante} {informations.prenomEtNom}</p>

        <ul className="pied-de-page-liens">
          <li>
            <a href={informations.lienGithub} target="_blank" rel="noreferrer">
              GitHub<span className="texte-lecteur-ecran"> (nouvel onglet)</span>
            </a>
          </li>
          <li>
            <a href="/mentions-legales/">Mentions légales</a>
          </li>
          <li>
            <a href="#haut-de-page">Retour en haut ↑</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default PiedDePage
