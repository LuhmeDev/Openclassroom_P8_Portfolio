// Point d'entrée de la page « Mentions légales » (mentions-legales/index.html).
// Même principe que main.jsx, mais on affiche le composant MentionsLegales.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/variables.css'
import './styles/polices.css'
import './styles/base.css'

import MentionsLegales from './composants/MentionsLegales/MentionsLegales.jsx'

const baliseRacine = document.getElementById('racine')

createRoot(baliseRacine).render(
  <StrictMode>
    <MentionsLegales />
  </StrictMode>,
)
