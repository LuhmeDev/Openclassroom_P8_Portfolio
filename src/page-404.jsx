// Point d'entrée de la page d'erreur 404 (404.html).
// GitHub Pages affiche automatiquement ce fichier quand une adresse n'existe pas.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/variables.css'
import './styles/polices.css'
import './styles/base.css'

import PageIntrouvable from './composants/PageIntrouvable/PageIntrouvable.jsx'

const baliseRacine = document.getElementById('racine')

createRoot(baliseRacine).render(
  <StrictMode>
    <PageIntrouvable />
  </StrictMode>,
)
