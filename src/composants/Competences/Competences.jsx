// Section « Compétences » : une carte par catégorie, générée depuis donnees/competences.js.
import listeDesCategoriesDeCompetences from '../../donnees/competences.js'
import './Competences.css'

function Competences() {
  return (
    <section className="section" id="competences" aria-labelledby="titre-competences">
      <div className="conteneur">
        <p className="section-timecode">00:00:30 — Compétences</p>
        <h2 className="section-titre" id="titre-competences">Ce que je sais faire</h2>

        <ul className="competences-grille">
          {listeDesCategoriesDeCompetences.map((categorie) => (
            // key : identifiant unique dont React a besoin pour chaque élément d'une liste
            <li className="competences-carte" key={categorie.nom}>
              <h3 className="competences-carte-titre">{categorie.nom}</h3>
              <ul className="competences-liste">
                {categorie.competences.map((competence) => (
                  <li className="competences-etiquette" key={competence}>
                    {competence}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Competences
