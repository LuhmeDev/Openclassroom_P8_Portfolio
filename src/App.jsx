// Le portfolio complet : la navigation, les sections dans l'ordre, puis le pied de page.
import Navigation from './composants/Navigation/Navigation.jsx'
import Accueil from './composants/Accueil/Accueil.jsx'
import APropos from './composants/APropos/APropos.jsx'
import Competences from './composants/Competences/Competences.jsx'
import Projets from './composants/Projets/Projets.jsx'
import Parcours from './composants/Parcours/Parcours.jsx'
import Contact from './composants/Contact/Contact.jsx'
import PiedDePage from './composants/PiedDePage/PiedDePage.jsx'

function App() {
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
