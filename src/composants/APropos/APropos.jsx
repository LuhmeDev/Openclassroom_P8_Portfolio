// Section « À propos » : le parcours, la méthode de travail et l'objectif.
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
            L'informatique m'attire depuis le lycée : Bac STI2D option Systèmes d'information et
            numérique, puis une année de BTS Informatique et réseaux. J'ai ensuite choisi l'image et
            obtenu un BTS Audiovisuel option montage et post-production, où j'ai appris à découper, rythmer
            et soigner chaque détail. J'ai ensuite été responsable et assistant
            responsable en logistique : préparation des tournées de livraison, suivi des commandes et
            des stocks, bons de livraison pour les transporteurs sous-traitants, contrôle qualité.
          </p>
          <p>
            Après cinq ans à l'étranger, au Canada puis en Nouvelle-Zélande, j'ai choisi de me former
            au développement web avec OpenClassrooms, en alternance. J'y retrouve ce qui me plaisait
            dans le montage : construire quelque chose de visuel pièce par pièce, et le reprendre
            jusqu'à ce que le rendu soit juste. Une interface se découpe en composants comme un film
            en séquences, et chaque détail compte pour la personne qui la regarde.
          </p>
          <p>
            Sur chaque projet, je pars d'une maquette quand elle existe, je découpe le travail en
            tâches, je fais une veille pour choisir les bons outils et je versionne avec des commits
            réguliers et nommés.
          </p>
          <p>
            Après la validation de ma formation, je rejoins en CDI le service TechView d'AQMO,
            consacré au développement de solutions, comme développeur Front-End.
          </p>
        </div>
      </div>
    </section>
  )
}

export default APropos
