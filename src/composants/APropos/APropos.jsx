// Section « À propos » : le parcours, la méthode de travail et l'objectif.
// Les passages [À COMPLÉTER] attendent les mots de Kenny.
import './APropos.css'

function APropos() {
  return (
    <section className="section" id="a-propos" aria-labelledby="titre-a-propos">
      <div className="a-propos conteneur">
        <div className="a-propos-en-tete">
          <p className="section-timecode">00:00:15 — À propos</p>
          <h2 className="section-titre" id="titre-a-propos">De la salle de montage à l'éditeur de code</h2>
        </div>

        <div className="a-propos-texte">
          <p>
            Titulaire d'un BTS Audiovisuel option montage et post-production, j'ai appris à découper,
            rythmer et soigner chaque détail d'une image. J'ai ensuite été responsable et assistant
            responsable en logistique : préparation des tournées de livraison, suivi des commandes et
            des stocks, bons de livraison pour les transporteurs sous-traitants, contrôle qualité.
          </p>
          <p>
            Je me suis ensuite formé au développement web avec OpenClassrooms.
            [À COMPLÉTER : ce qui t'a donné envie de passer au développement.]
          </p>
          <p>
            Sur chaque projet, je pars d'une maquette quand elle existe, je découpe le travail en
            tâches, je fais une veille pour choisir les bons outils et je versionne avec des commits
            réguliers et nommés.
          </p>
          <p>
            Après la validation de ma formation, je rejoins [À COMPLÉTER : entreprise ou « une entreprise »]
            en CDI comme développeur Front-End.
          </p>
        </div>
      </div>
    </section>
  )
}

export default APropos
