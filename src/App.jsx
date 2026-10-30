// Le portfolio complet : la navigation, les sections dans l'ordre, puis le pied de page.
import { useEffect } from 'react'
import Navigation from './composants/Navigation/Navigation.jsx'
import Accueil from './composants/Accueil/Accueil.jsx'
import APropos from './composants/APropos/APropos.jsx'
import Competences from './composants/Competences/Competences.jsx'
import Projets from './composants/Projets/Projets.jsx'
import Parcours from './composants/Parcours/Parcours.jsx'
import Contact from './composants/Contact/Contact.jsx'
import PiedDePage from './composants/PiedDePage/PiedDePage.jsx'

function App() {
  // Arrivée depuis un autre site ou depuis la page 404 avec une ancre (ex. /#projets) :
  // le navigateur cherche la section dès le chargement, avant que React l'ait affichée,
  // et reste donc en haut de la page. Une fois les sections affichées, on fait défiler nous-mêmes.
  useEffect(() => {
    if (window.location.hash === '') {
      return
    }
    // window.location.hash vaut par exemple « #projets » : on retire le « # »
    // pour obtenir l'identifiant de la section, « projets »
    const identifiantDeLaSection = window.location.hash.replace('#', '')
    const sectionVisee = document.getElementById(identifiantDeLaSection)
    // behavior: 'instant' : à l'arrivée sur la page, on saute directement à la section,
    // sans le défilement doux réservé aux clics dans le menu
    if (sectionVisee !== null) {
      sectionVisee.scrollIntoView({ behavior: 'instant' })
    }
  }, [])

  return (
    <>
      {/* Premier élément atteint avec Tab : permet de sauter directement au contenu */}
      <a className="lien-evitement" href="#contenu-principal">
        Aller au contenu
      </a>

      <Navigation />

      {/* tabIndex={-1} permet au lien d'évitement de placer le focus ici */}
      <main id="contenu-principal" tabIndex={-1}>
        <Accueil />
        <APropos />
        <Competences />
        <Projets />
        <Parcours />
        <Contact />
      </main>

      <PiedDePage />
    </>
  )
}

export default App
