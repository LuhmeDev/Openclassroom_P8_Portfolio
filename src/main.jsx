// Point d'entrée du portfolio : React affiche le composant App dans la balise <div id="racine">.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Les styles généraux sont importés une seule fois, ici, dans cet ordre :
// 1. les variables du design system, 2. les polices, 3. les règles de base
import './styles/variables.css'
import './styles/polices.css'
import './styles/base.css'

import App from './App.jsx'

const baliseRacine = document.getElementById('racine')

// StrictMode affiche des avertissements supplémentaires pendant le développement.
// Il n'a aucun effet sur le site en ligne.
createRoot(baliseRacine).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
