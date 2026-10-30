// Fiche détaillée d'un projet, affichée dans une fenêtre modale.
//
// Pourquoi l'élément <dialog> natif ? Le navigateur gère pour nous l'accessibilité :
// - le focus reste à l'intérieur de la fenêtre tant qu'elle est ouverte,
// - la touche Échap la ferme,
// - à la fermeture, le focus revient sur le bouton qui l'avait ouverte,
// - le reste de la page devient inaccessible aux lecteurs d'écran.
import { useEffect, useRef } from 'react'
import './FicheProjet.css'

function FicheProjet({ projet, fermer }) {
  // Référence vers la balise <dialog>, pour appeler showModal() et close()
  const fenetre = useRef(null)

  // À l'affichage du composant, on ouvre la fenêtre en mode modal.
  // La vérification évite une erreur en développement : StrictMode exécute
  // volontairement cet effet deux fois, et une fenêtre déjà ouverte ne peut pas être rouverte.
  useEffect(() => {
    if (fenetre.current.open === false) {
      fenetre.current.showModal()
    }
  }, [])

  // Clic en dehors de la fenêtre (sur le fond assombri) : on ferme.
  // Le fond fait partie de la balise <dialog> elle-même, d'où la comparaison.
  function quandOnCliqueSurLaFenetre(evenement) {
    if (evenement.target === fenetre.current) {
      fenetre.current.close()
    }
  }

  const fiche = projet.fiche
  const titreId = 'titre-fiche-' + projet.identifiant

  return (
    <dialog
      ref={fenetre}
      className="fiche"
      aria-labelledby={titreId}
      // onClose se déclenche pour toutes les fermetures : bouton, Échap, clic sur le fond
      onClose={fermer}
      onClick={quandOnCliqueSurLaFenetre}
    >
      <div className="fiche-contenu">
        <div className="fiche-en-tete">
          <div>
            <p className="fiche-categorie">{projet.categorie}</p>
            <h2 className="fiche-titre" id={titreId}>{projet.titre}</h2>
          </div>
          <button
            type="button"
            className="fiche-bouton-fermer"
            onClick={() => fenetre.current.close()}
          >
            <span className="texte-lecteur-ecran">Fermer la fiche</span>
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        {/* ---------- Démonstration : vidéo si elle existe, sinon la capture ---------- */}
        {projet.video !== '' && (
          <figure className="fiche-media">
            {/* preload="none" : la vidéo n'est téléchargée que si on clique sur Lecture.
                poster : l'image affichée avant la lecture. */}
            <video controls preload="none" poster={import.meta.env.BASE_URL + projet.image} width="960" height="540">
              <source src={import.meta.env.BASE_URL + projet.video} type="video/mp4" />
              Votre navigateur ne lit pas cette vidéo.
            </video>
            <figcaption className="fiche-legende">
              Démonstration vidéo, sans son.
              {projet.donneesFictives && ' Toutes les données affichées sont fictives.'}
            </figcaption>
          </figure>
        )}

        {projet.video === '' && (
          <figure className="fiche-media">
            <img src={import.meta.env.BASE_URL + projet.image} alt={projet.texteAlternatif} width="960" height="540" />
          </figure>
        )}

        {/* ---------- Liens ---------- */}
        <div className="fiche-liens">
          {projet.lienDemo !== '' && (
            <a className="bouton-principal" href={projet.lienDemo} target="_blank" rel="noreferrer">
              Voir la démo en ligne<span className="texte-lecteur-ecran"> (nouvel onglet)</span>
            </a>
          )}
          {projet.lienGithub !== '' && (
            <a className="bouton-secondaire" href={projet.lienGithub} target="_blank" rel="noreferrer">
              Code sur GitHub<span className="texte-lecteur-ecran"> (nouvel onglet)</span>
            </a>
          )}
          {projet.lienGithubComplementaire !== '' && (
            <a className="bouton-secondaire" href={projet.lienGithubComplementaire} target="_blank" rel="noreferrer">
              Front-end sur GitHub<span className="texte-lecteur-ecran"> (nouvel onglet)</span>
            </a>
          )}
          {projet.mentionSansLien !== '' && (
            <p className="fiche-mention">{projet.mentionSansLien}</p>
          )}
        </div>

        {/* ---------- Contenu de la fiche ---------- */}
        <div className="fiche-bloc">
          <h3 className="fiche-sous-titre">Contexte</h3>
          <p>{fiche.contexte}</p>
        </div>

        <div className="fiche-bloc">
          <h3 className="fiche-sous-titre">Objectifs</h3>
          <ul className="fiche-liste">
            {fiche.objectifs.map((objectif) => (
              <li key={objectif}>{objectif}</li>
            ))}
          </ul>
        </div>

        <div className="fiche-bloc">
          <h3 className="fiche-sous-titre">Technologies</h3>
          <ul className="fiche-technologies">
            {projet.technologies.map((technologie) => (
              <li key={technologie}>{technologie}</li>
            ))}
          </ul>
        </div>

        <div className="fiche-bloc">
          <h3 className="fiche-sous-titre">Compétences développées</h3>
          <ul className="fiche-liste">
            {fiche.competences.map((competence) => (
              <li key={competence}>{competence}</li>
            ))}
          </ul>
        </div>

        <div className="fiche-bloc">
          <h3 className="fiche-sous-titre">Défis et solutions</h3>
          <ul className="fiche-defis">
            {fiche.defis.map((defi) => (
              <li className="fiche-defi" key={defi.probleme}>
                <p>
                  <span className="fiche-defi-etiquette">Problème</span>
                  {defi.probleme}
                </p>
                <p>
                  <span className="fiche-defi-etiquette fiche-defi-etiquette-solution">Solution</span>
                  {defi.solution}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="fiche-bloc">
          <h3 className="fiche-sous-titre">Résultats</h3>
          <ul className="fiche-liste">
            {fiche.resultats.map((resultat) => (
              <li key={resultat}>{resultat}</li>
            ))}
          </ul>
        </div>

        <div className="fiche-bloc">
          <h3 className="fiche-sous-titre">Améliorations envisagées</h3>
          <ul className="fiche-liste">
            {fiche.ameliorations.map((amelioration) => (
              <li key={amelioration}>{amelioration}</li>
            ))}
          </ul>
        </div>

        {fiche.noteIA !== '' && (
          <p className="fiche-note">{fiche.noteIA}</p>
        )}
      </div>
    </dialog>
  )
}

export default FicheProjet
