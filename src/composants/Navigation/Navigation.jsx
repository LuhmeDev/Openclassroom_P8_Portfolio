// Barre de navigation fixe en haut de la page.
// Sur mobile, les liens sont cachés derrière un bouton « Menu ».
// Sur ordinateur (à partir de 1024 px), ils sont toujours visibles.
import { useState, useEffect, useRef } from 'react'
import informations from '../../donnees/informations.js'
import './Navigation.css'

function Navigation() {
  // true quand le menu mobile est ouvert
  const [menuEstOuvert, setMenuEstOuvert] = useState(false)

  // Référence vers le bouton Menu, pour lui rendre le focus quand on ferme avec Échap
  const boutonMenu = useRef(null)

  function basculerLeMenu() {
    setMenuEstOuvert(!menuEstOuvert)
  }

  function fermerLeMenu() {
    setMenuEstOuvert(false)
  }

  // Touche Échap : ferme le menu et remet le focus sur le bouton.
  // L'écouteur n'existe que pendant que le menu est ouvert.
  useEffect(() => {
    if (menuEstOuvert === false) {
      return
    }

    function quandUneToucheEstAppuyee(evenement) {
      if (evenement.key === 'Escape') {
        setMenuEstOuvert(false)
        boutonMenu.current.focus()
      }
    }

    document.addEventListener('keydown', quandUneToucheEstAppuyee)

    // Nettoyage : on retire l'écouteur quand le menu se ferme
    return () => {
      document.removeEventListener('keydown', quandUneToucheEstAppuyee)
    }
  }, [menuEstOuvert])

  // La classe change selon l'état du menu, pour l'afficher ou le cacher en CSS
  let classeDuMenu = 'navigation-menu'
  if (menuEstOuvert) {
    classeDuMenu = 'navigation-menu navigation-menu-ouvert'
  }

  let texteDuBouton = 'Ouvrir le menu'
  if (menuEstOuvert) {
    texteDuBouton = 'Fermer le menu'
  }

  return (
    <header className="navigation" id="haut-de-page">
      <nav className="navigation-barre conteneur" aria-label="Navigation principale">
        <a className="navigation-logo" href="#accueil" onClick={fermerLeMenu}>
          <span className="navigation-logo-point" aria-hidden="true"></span>
          {informations.prenomEtNom}
        </a>

        <button
          ref={boutonMenu}
          className="navigation-bouton-menu"
          type="button"
          aria-expanded={menuEstOuvert}
          aria-controls="menu-principal"
          onClick={basculerLeMenu}
        >
          <span className="texte-lecteur-ecran">{texteDuBouton}</span>
          {/* Les trois barres de l'icône « hamburger », dessinées en CSS */}
          <span className="navigation-icone-menu" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <ul className={classeDuMenu} id="menu-principal">
          <li>
            <a className="navigation-lien" href="#a-propos" onClick={fermerLeMenu}>À propos</a>
          </li>
          <li>
            <a className="navigation-lien" href="#competences" onClick={fermerLeMenu}>Compétences</a>
          </li>
          <li>
            <a className="navigation-lien" href="#projets" onClick={fermerLeMenu}>Projets</a>
          </li>
          <li>
            <a className="navigation-lien" href="#parcours" onClick={fermerLeMenu}>Parcours</a>
          </li>
          <li>
            <a className="bouton-principal navigation-contact" href="#contact" onClick={fermerLeMenu}>Me contacter</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
