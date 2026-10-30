// Section « Projets » : filtres par catégorie, cartes de projets,
// et fiche détaillée qui s'ouvre au clic sur « Voir la fiche ».
import { useState } from 'react'
import listeDesProjets from '../../donnees/projets.js'
import FicheProjet from '../FicheProjet/FicheProjet.jsx'
import './Projets.css'

// Les filtres proposés. « Tous » affiche tous les projets.
// Les autres noms doivent être identiques au champ « categorie » des projets.
const listeDesFiltres = ['Tous', 'Front-End', 'Back-End', 'Optimisation', 'Entreprise']

function Projets() {
  // Le filtre choisi par le visiteur
  const [filtreActif, setFiltreActif] = useState('Tous')

  // Le projet dont la fiche est ouverte (null = aucune fiche ouverte)
  const [projetOuvert, setProjetOuvert] = useState(null)

  // Projets à afficher selon le filtre
  let projetsAffiches = listeDesProjets
  if (filtreActif !== 'Tous') {
    projetsAffiches = listeDesProjets.filter((projet) => projet.categorie === filtreActif)
  }

  // Phrase lue par les lecteurs d'écran à chaque changement de filtre
  let texteNombreDeProjets = projetsAffiches.length + ' projets affichés'
  if (projetsAffiches.length === 1) {
    texteNombreDeProjets = '1 projet affiché'
  }

  function ouvrirLaFiche(projet) {
    setProjetOuvert(projet)
  }

  function fermerLaFiche() {
    setProjetOuvert(null)
  }

  return (
    <section className="section" id="projets" aria-labelledby="titre-projets">
      <div className="conteneur">
        <p className="section-timecode">00:00:45 — Projets</p>
        <h2 className="section-titre" id="titre-projets">Projets réalisés</h2>

        {/* ---------- Filtres ---------- */}
        <div className="projets-filtres" role="group" aria-label="Filtrer les projets par catégorie">
          {listeDesFiltres.map((filtre) => (
            <button
              key={filtre}
              type="button"
              className="projets-filtre"
              // aria-pressed annonce aux lecteurs d'écran si le filtre est actif
              aria-pressed={filtre === filtreActif}
              onClick={() => setFiltreActif(filtre)}
            >
              {filtre}
            </button>
          ))}
        </div>

        {/* aria-live="polite" : le lecteur d'écran lit ce texte quand il change */}
        <p className="projets-nombre" aria-live="polite">{texteNombreDeProjets}</p>

        {/* ---------- Cartes ---------- */}
        <ul className="projets-grille">
          {projetsAffiches.map((projet, position) => {
            // Numéro façon « CLIP 01 », pour rappeler un banc de montage
            let numeroDeClip = 'CLIP ' + (position + 1)
            if (position + 1 < 10) {
              numeroDeClip = 'CLIP 0' + (position + 1)
            }

            return (
              <li className="projet-carte" key={projet.identifiant}>
                <div className="projet-carte-image">
                  <img
                    src={import.meta.env.BASE_URL + projet.image}
                    alt={projet.texteAlternatif}
                    width="960"
                    height="540"
                    loading="lazy"
                  />
                  <span className="projet-carte-clip" aria-hidden="true">{numeroDeClip}</span>
                </div>

                <div className="projet-carte-contenu">
                  <div className="projet-carte-etiquettes">
                    <span className="projet-carte-categorie">{projet.categorie}</span>
                    {projet.video !== '' && (
                      <span className="projet-carte-badge">Vidéo de démo</span>
                    )}
                    {projet.lienDemo !== '' && (
                      <span className="projet-carte-badge">Démo en ligne</span>
                    )}
                    {projet.donneesFictives && (
                      <span className="projet-carte-badge">Données fictives</span>
                    )}
                  </div>

                  <h3 className="projet-carte-titre">{projet.titre}</h3>
                  <p className="projet-carte-resume">{projet.resume}</p>

                  <ul className="projet-carte-technologies" aria-label="Technologies utilisées">
                    {projet.technologies.map((technologie) => (
                      <li key={technologie}>{technologie}</li>
                    ))}
                  </ul>

                  <div className="projet-carte-actions">
                    <button
                      type="button"
                      className="bouton-secondaire"
                      onClick={() => ouvrirLaFiche(projet)}
                    >
                      Voir la fiche
                      {/* Précise le projet pour les lecteurs d'écran, sinon tous les boutons s'appellent pareil */}
                      <span className="texte-lecteur-ecran"> du projet {projet.titre}</span>
                    </button>

                    {projet.lienGithub !== '' && (
                      <a className="projet-carte-lien" href={projet.lienGithub} target="_blank" rel="noreferrer">
                        GitHub
                        <span className="texte-lecteur-ecran"> : code du projet {projet.titre} (nouvel onglet)</span>
                      </a>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      {/* La fiche n'existe dans la page que lorsqu'un projet est ouvert */}
      {projetOuvert !== null && (
        <FicheProjet projet={projetOuvert} fermer={fermerLaFiche} />
      )}
    </section>
  )
}

export default Projets
