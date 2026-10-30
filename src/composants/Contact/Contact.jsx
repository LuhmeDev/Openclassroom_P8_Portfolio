// Section « Contact » : coordonnées et formulaire.
//
// Le formulaire envoie le message au service Formspree, qui le transfère par e-mail.
// Il n'y a donc aucun serveur à coder. Tant que l'identifiant Formspree n'est pas
// renseigné dans donnees/informations.js, le formulaire le dit clairement :
// on ne fait jamais croire à un envoi qui n'a pas eu lieu.
import { useState, useRef } from 'react'
import informations from '../../donnees/informations.js'
import './Contact.css'

// Vérifie le format d'une adresse e-mail : du texte, un @, du texte, un point, du texte
const formatEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Contact() {
  // Ce que le visiteur a tapé dans chaque champ
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // Les messages d'erreur de chaque champ ('' = pas d'erreur)
  const [erreurNom, setErreurNom] = useState('')
  const [erreurEmail, setErreurEmail] = useState('')
  const [erreurMessage, setErreurMessage] = useState('')

  // Étape de l'envoi : 'attente', 'envoi-en-cours', 'succes', 'erreur' ou 'non-configure'
  const [etatEnvoi, setEtatEnvoi] = useState('attente')

  // Références vers les champs, pour placer le focus sur le premier champ en erreur
  const champNom = useRef(null)
  const champEmail = useRef(null)
  const champMessage = useRef(null)

  // Vérifie les trois champs, affiche les erreurs, et renvoie true si tout est bon
  function verifierLesChamps() {
    let nouvelleErreurNom = ''
    let nouvelleErreurEmail = ''
    let nouvelleErreurMessage = ''

    if (nom.trim() === '') {
      nouvelleErreurNom = 'Indiquez votre nom.'
    }

    if (email.trim() === '') {
      nouvelleErreurEmail = 'Indiquez votre adresse e-mail.'
    } else if (formatEmail.test(email.trim()) === false) {
      nouvelleErreurEmail = "L'adresse e-mail doit ressembler à nom@exemple.fr."
    }

    if (message.trim().length < 10) {
      nouvelleErreurMessage = 'Écrivez un message d\'au moins 10 caractères.'
    }

    setErreurNom(nouvelleErreurNom)
    setErreurEmail(nouvelleErreurEmail)
    setErreurMessage(nouvelleErreurMessage)

    // Focus sur le premier champ en erreur : le visiteur sait tout de suite quoi corriger
    if (nouvelleErreurNom !== '') {
      champNom.current.focus()
      return false
    }
    if (nouvelleErreurEmail !== '') {
      champEmail.current.focus()
      return false
    }
    if (nouvelleErreurMessage !== '') {
      champMessage.current.focus()
      return false
    }
    return true
  }

  async function envoyerLeFormulaire(evenement) {
    // Empêche le navigateur de recharger la page
    evenement.preventDefault()

    const lesChampsSontValides = verifierLesChamps()
    if (lesChampsSontValides === false) {
      return
    }

    if (informations.identifiantFormspree === '') {
      setEtatEnvoi('non-configure')
      return
    }

    setEtatEnvoi('envoi-en-cours')

    // Le champ « _gotcha » est un piège à robots : invisible pour les humains,
    // s'il est rempli, Formspree ignore le message.
    const champPiege = evenement.target.elements._gotcha.value

    try {
      const reponse = await fetch('https://formspree.io/f/' + informations.identifiantFormspree, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          nom: nom,
          email: email,
          message: message,
          _gotcha: champPiege,
        }),
      })

      if (reponse.ok) {
        setEtatEnvoi('succes')
        setNom('')
        setEmail('')
        setMessage('')
      } else {
        setEtatEnvoi('erreur')
      }
    } catch {
      // Pas de connexion internet, ou Formspree injoignable
      setEtatEnvoi('erreur')
    }
  }

  // Message affiché sous le bouton selon l'étape de l'envoi
  let messageDEtat = ''
  if (etatEnvoi === 'envoi-en-cours') {
    messageDEtat = 'Envoi en cours…'
  }
  if (etatEnvoi === 'succes') {
    messageDEtat = 'Merci, votre message est bien envoyé. Je vous réponds rapidement.'
  }
  if (etatEnvoi === 'erreur') {
    messageDEtat = "Le message n'a pas pu être envoyé. Réessayez, ou écrivez-moi directement à " + informations.email + '.'
  }
  if (etatEnvoi === 'non-configure') {
    messageDEtat = "Le formulaire n'est pas encore relié à ma boîte mail. Écrivez-moi directement à " + informations.email + '.'
  }

  let classeDuMessageDEtat = 'contact-etat'
  if (etatEnvoi === 'succes') {
    classeDuMessageDEtat = 'contact-etat contact-etat-succes'
  }
  if (etatEnvoi === 'erreur' || etatEnvoi === 'non-configure') {
    classeDuMessageDEtat = 'contact-etat contact-etat-erreur'
  }

  return (
    <section className="section" id="contact" aria-labelledby="titre-contact">
      <div className="contact conteneur">
        {/* ---------- Coordonnées ---------- */}
        <div className="contact-texte">
          <p className="section-timecode">00:01:15 — Contact</p>
          <h2 className="section-titre" id="titre-contact">Échangeons</h2>
          <p className="contact-invitation">
            Une question sur un projet, une collaboration ou simplement l'envie d'échanger ?
            Écrivez-moi.
          </p>
          <ul className="contact-coordonnees">
            <li>
              <a href={'mailto:' + informations.email}>{informations.email}</a>
            </li>
            <li>
              <a href={informations.lienGithub} target="_blank" rel="noreferrer">
                {informations.texteGithub}
                <span className="texte-lecteur-ecran"> (nouvel onglet)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* ---------- Formulaire ----------
            noValidate : on remplace les bulles d'erreur du navigateur
            par nos propres messages, plus clairs et lus par les lecteurs d'écran. */}
        <form className="contact-formulaire" onSubmit={envoyerLeFormulaire} noValidate>
          <div className="contact-champ">
            <label htmlFor="champ-nom">Nom</label>
            <input
              ref={champNom}
              id="champ-nom"
              name="nom"
              type="text"
              autoComplete="name"
              value={nom}
              onChange={(evenement) => setNom(evenement.target.value)}
              // aria-invalid et aria-describedby relient le champ à son message d'erreur
              aria-invalid={erreurNom !== ''}
              aria-describedby="erreur-nom"
            />
            <p className="contact-erreur" id="erreur-nom">{erreurNom}</p>
          </div>

          <div className="contact-champ">
            <label htmlFor="champ-email">E-mail</label>
            <input
              ref={champEmail}
              id="champ-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(evenement) => setEmail(evenement.target.value)}
              aria-invalid={erreurEmail !== ''}
              aria-describedby="erreur-email"
            />
            <p className="contact-erreur" id="erreur-email">{erreurEmail}</p>
          </div>

          <div className="contact-champ">
            <label htmlFor="champ-message">Message</label>
            <textarea
              ref={champMessage}
              id="champ-message"
              name="message"
              rows="5"
              value={message}
              onChange={(evenement) => setMessage(evenement.target.value)}
              aria-invalid={erreurMessage !== ''}
              aria-describedby="erreur-message"
            ></textarea>
            <p className="contact-erreur" id="erreur-message">{erreurMessage}</p>
          </div>

          {/* Piège à robots : caché aux humains et aux lecteurs d'écran */}
          <input className="contact-piege" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <button className="bouton-principal" type="submit" disabled={etatEnvoi === 'envoi-en-cours'}>
            Envoyer le message
          </button>

          {/* role="status" : le lecteur d'écran annonce ce message dès qu'il change */}
          <p className={classeDuMessageDEtat} role="status">{messageDEtat}</p>

          <p className="contact-mention">
            Vos informations servent uniquement à vous répondre. Elles transitent par le service
            Formspree. Détails dans les <a href="/mentions-legales/">mentions légales</a>.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
