import { useState, useEffect } from 'react'

// Icônes SVG de contact
const IcoMail = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2" y="4" width="16" height="13" rx="2.5" stroke="#0ea5e9" strokeWidth="1.6"/>
    <path d="M2 7l8 5.5L18 7" stroke="#0ea5e9" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)
const IcoClock = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke="#6366f1" strokeWidth="1.6"/>
    <path d="M10 6v4l2.5 2.5" stroke="#6366f1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const IcoPin = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2a5.5 5.5 0 015.5 5.5C15.5 11.5 10 18 10 18S4.5 11.5 4.5 7.5A5.5 5.5 0 0110 2z" stroke="#f59e0b" strokeWidth="1.6"/>
    <circle cx="10" cy="7.5" r="2" fill="#f59e0b"/>
  </svg>
)
const IcoSend = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M15 3L2 8.5l5.5 2L15 3zM7.5 10.5L10 15l5-12" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function Contact() {
  // Titre de page optimisé SEO
  useEffect(() => {
    document.title = 'Contact — Webotix | Devis gratuit pour votre site web ou application'
  }, [])

  // État du formulaire
  const [formulaire, setFormulaire] = useState({ nom: '', email: '', sujet: '', message: '' })
  const [envoye, setEnvoye] = useState(false)
  const [envoi, setEnvoi] = useState(false)
  const [erreur, setErreur] = useState('')
  const [focus, setFocus] = useState('')

  // Met à jour un champ
  const gererChangement = (e) => {
    setFormulaire({ ...formulaire, [e.target.name]: e.target.value })
    setErreur('')
  }

  // Soumission du formulaire — envoi réel via Web3Forms
  const gererSoumission = async (e) => {
    e.preventDefault()
    if (!formulaire.nom || !formulaire.email || !formulaire.message) {
      setErreur('Merci de remplir tous les champs obligatoires.')
      return
    }
    if (!formulaire.email.includes('@')) {
      setErreur("L'adresse email ne semble pas valide.")
      return
    }
    setEnvoi(true)
    try {
      const reponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '5dcf7e4a-8446-480c-8c0a-1a5669b1a73e',
          subject: formulaire.sujet ? `[Webotix] ${formulaire.sujet}` : '[Webotix] Nouveau message',
          from_name: 'Formulaire Webotix',
          replyto: formulaire.email,
          message: [
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            '📬  NOUVELLE DEMANDE — WEBOTIX',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            '',
            `👤  Nom      :  ${formulaire.nom}`,
            `📧  Email    :  ${formulaire.email}`,
            `📌  Sujet    :  ${formulaire.sujet || 'Non précisé'}`,
            '',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            '💬  MESSAGE',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            '',
            formulaire.message,
            '',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            '🌐  Envoyé depuis webotix.cloud',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
          ].join('\n'),
        }),
      })
      const data = await reponse.json()
      if (data.success) {
        // Signaler la conversion à Google Ads
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', { send_to: 'AW-18088144429/joRtCNSyk5wcEK3cjLFD' })
        }
        setEnvoye(true)
      } else {
        setErreur('Une erreur est survenue. Merci de réessayer ou de nous écrire directement.')
      }
    } catch {
      setErreur('Impossible d\'envoyer le message. Vérifiez votre connexion et réessayez.')
    } finally {
      setEnvoi(false)
    }
  }

  const sujets = ['Site vitrine', 'Site e-commerce', 'Application web/mobile', 'Automatisation', 'Refonte de site', 'Autre']

  const infos = [
    { icone: <IcoMail />, label: 'Email', valeur: 'contact@webotix.cloud', accent: '#0ea5e9', bg: 'linear-gradient(135deg, #eff6ff, #e0f2fe)' },
    { icone: <IcoClock />, label: 'Temps de réponse', valeur: 'Moins de 24 heures', accent: '#6366f1', bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)' },
    { icone: <IcoPin />, label: 'Localisation', valeur: 'France — 100% en ligne', accent: '#f59e0b', bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)' },
  ]

  // Style pour les champs du formulaire
  const champStyle = (nom) => ({
    width: '100%', padding: '13px 16px', borderRadius: '12px',
    background: focus === nom ? '#fff' : '#f8f9ff',
    border: focus === nom ? '1.5px solid #0ea5e9' : '1.5px solid #e2e8f0',
    color: '#0f172a', fontSize: '0.9rem',
    outline: 'none',
    boxShadow: focus === nom ? '0 0 0 3px rgba(14,165,233,0.1)' : 'none',
    transition: 'all 0.2s ease',
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: 'border-box',
  })

  const labelStyle = {
    display: 'block', fontSize: '0.85rem', fontWeight: 600,
    color: '#334155', marginBottom: '8px',
  }

  const s = {
    section: { width: '100%', padding: '80px 24px' },
    inner:   { maxWidth: '1200px', margin: '0 auto' },
  }

  return (
    <div style={{ width: '100%', background: '#f8f9ff' }}>

      {/* ===== EN-TÊTE ===== */}
      <section style={{
        ...s.section,
        paddingTop: '140px', paddingBottom: '64px',
        background: 'linear-gradient(160deg, #f0f9ff 0%, #f8f9ff 60%)',
        textAlign: 'center',
      }}>
        <div className="will-animate" style={{ ...s.inner, maxWidth: '680px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: '999px',
            border: '1px solid rgba(14,165,233,0.25)',
            background: 'rgba(14,165,233,0.06)',
            color: '#0ea5e9', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Parlons de votre projet
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            color: '#0f172a', lineHeight: 1.1, marginBottom: '20px',
          }}>
            Prenons{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>contact</span>
          </h1>

          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Une idée en tête ? Un projet à lancer ? Décrivez-nous votre besoin —
            on vous répond sous 24h, sans engagement.
          </p>
        </div>
      </section>

      {/* ===== FORMULAIRE + INFOS ===== */}
      <section style={{ ...s.section, paddingTop: '0', paddingBottom: '120px' }}>
        <div style={{ ...s.inner }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px', alignItems: 'start',
          }}>

            {/* Colonne gauche — Infos */}
            <div className="will-animate" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                fontSize: '1.25rem', color: '#0f172a', marginBottom: '8px',
              }}>
                Comment nous joindre
              </h2>

              {infos.map((info) => (
                <div key={info.label} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '18px 20px', borderRadius: '16px',
                  background: info.bg,
                  border: `1px solid ${info.accent}18`,
                  transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s cubic-bezier(0.22,1,0.36,1)',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 30px ${info.accent}15` }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '12px',
                    background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: `0 2px 10px ${info.accent}15`,
                  }}>
                    {info.icone}
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                      {info.label}
                    </div>
                    <div style={{ color: '#1e293b', fontSize: '0.9rem', fontWeight: 600 }}>
                      {info.valeur}
                    </div>
                  </div>
                </div>
              ))}

              {/* Message de réassurance */}
              <div style={{
                padding: '20px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(14,165,233,0.06), rgba(99,102,241,0.06))',
                border: '1px solid rgba(14,165,233,0.15)',
                marginTop: '4px',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '12px',
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l1.5 3L12 4.5l-2.5 2.5.5 3.5L7 9 4 10.5l.5-3.5L2 4.5 5.5 4z" fill="white"/></svg>
                </div>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem', marginBottom: '6px' }}>
                  Première consultation gratuite
                </div>
                <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  Partagez votre projet sans engagement — on vous dit honnêtement ce qu'on peut faire pour vous.
                </p>
              </div>
            </div>

            {/* Colonne droite — Formulaire */}
            <div className="will-animate" style={{
              background: '#fff',
              borderRadius: '24px', padding: '40px',
              boxShadow: '0 4px 30px rgba(14,165,233,0.07)',
              border: '1px solid rgba(14,165,233,0.1)',
              gridColumn: 'span 2',
              transitionDelay: '0.1s',
            }}>

              {envoye ? (
                /* Confirmation envoi */
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{
                    width: '72px', height: '72px', borderRadius: '20px',
                    background: 'linear-gradient(135deg, #0ea5e9, #22c55e)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M8 16l5 5 11-10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                    fontSize: '1.6rem', color: '#0f172a', marginBottom: '12px',
                  }}>
                    Message envoyé !
                  </h3>
                  <p style={{ color: '#475569', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto 32px' }}>
                    Merci <strong style={{ color: '#0f172a' }}>{formulaire.nom}</strong> !
                    On a bien reçu votre message et on vous répond sous 24h.
                  </p>
                  <button
                    onClick={() => { setEnvoye(false); setFormulaire({ nom: '', email: '', sujet: '', message: '' }) }}
                    style={{
                      padding: '12px 28px', borderRadius: '12px',
                      background: 'transparent',
                      color: '#0ea5e9', border: '1.5px solid rgba(14,165,233,0.4)',
                      fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer',
                      transition: 'all 0.2s ease', fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background='rgba(14,165,233,0.06)' }}
                    onMouseLeave={e => { e.currentTarget.style.background='transparent' }}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={gererSoumission} noValidate>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>

                    {/* Nom */}
                    <div>
                      <label htmlFor="nom" style={labelStyle}>
                        Nom complet <span style={{ color: '#0ea5e9' }}>*</span>
                      </label>
                      <input
                        id="nom" type="text" name="nom"
                        value={formulaire.nom} onChange={gererChangement}
                        placeholder="Votre nom"
                        onFocus={() => setFocus('nom')} onBlur={() => setFocus('')}
                        style={champStyle('nom')}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" style={labelStyle}>
                        Email <span style={{ color: '#0ea5e9' }}>*</span>
                      </label>
                      <input
                        id="email" type="email" name="email"
                        value={formulaire.email} onChange={gererChangement}
                        placeholder="votre@email.fr"
                        onFocus={() => setFocus('email')} onBlur={() => setFocus('')}
                        style={champStyle('email')}
                      />
                    </div>
                  </div>

                  {/* Type de projet */}
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="sujet" style={labelStyle}>Type de projet</label>
                    <select
                      id="sujet" name="sujet"
                      value={formulaire.sujet} onChange={gererChangement}
                      onFocus={() => setFocus('sujet')} onBlur={() => setFocus('')}
                      style={{ ...champStyle('sujet'), appearance: 'none', cursor: 'pointer' }}
                    >
                      <option value="">Sélectionnez un type de projet</option>
                      {sujets.map((sujet) => <option key={sujet} value={sujet}>{sujet}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="message" style={labelStyle}>
                      Votre message <span style={{ color: '#0ea5e9' }}>*</span>
                    </label>
                    <textarea
                      id="message" name="message"
                      value={formulaire.message} onChange={gererChangement}
                      placeholder="Décrivez votre projet, vos objectifs, votre budget approximatif..."
                      rows={5}
                      onFocus={() => setFocus('message')} onBlur={() => setFocus('')}
                      style={{ ...champStyle('message'), resize: 'vertical', minHeight: '130px' }}
                    />
                  </div>

                  {/* Erreur */}
                  {erreur && (
                    <div style={{
                      padding: '12px 16px', borderRadius: '10px', marginBottom: '20px',
                      background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)',
                      color: '#ef4444', fontSize: '0.875rem',
                    }}>
                      {erreur}
                    </div>
                  )}

                  {/* Bouton d'envoi */}
                  <button
                    type="submit" disabled={envoi}
                    style={{
                      width: '100%', padding: '15px 24px',
                      borderRadius: '14px', border: 'none', cursor: envoi ? 'not-allowed' : 'pointer',
                      background: envoi ? '#94a3b8' : 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                      color: '#fff', fontSize: '1rem', fontWeight: 700,
                      fontFamily: "'DM Sans', sans-serif",
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                      boxShadow: envoi ? 'none' : '0 6px 24px rgba(14,165,233,0.3)',
                      transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
                    }}
                    onMouseEnter={e => { if (!envoi) { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(14,165,233,0.4)' }}}
                    onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow=envoi?'none':'0 6px 24px rgba(14,165,233,0.3)' }}
                  >
                    {envoi ? (
                      <>
                        <svg style={{ animation: 'spin 1s linear infinite' }} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                          <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2" strokeDasharray="22 12"/>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <IcoSend />
                        Envoyer le message
                      </>
                    )}
                  </button>

                  <p style={{ color: '#94a3b8', fontSize: '0.78rem', textAlign: 'center', marginTop: '14px' }}>
                    Vos données sont confidentielles et ne seront jamais partagées.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
