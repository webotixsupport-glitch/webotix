import { useState, useEffect } from 'react'

// Popup formulaire audit gratuit — déclenchée depuis le header et le hero
function PopupAudit({ ouvert, onFermer }) {
  const [form, setForm] = useState({ prenom: '', email: '', url: '' })
  const [statut, setStatut] = useState('idle') // idle | envoi | ok | erreur

  // Bloquer le scroll quand la popup est ouverte
  useEffect(() => {
    document.body.style.overflow = ouvert ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [ouvert])

  // Réinitialiser le formulaire à la fermeture
  useEffect(() => {
    if (!ouvert) {
      setTimeout(() => {
        setForm({ prenom: '', email: '', url: '' })
        setStatut('idle')
      }, 400)
    }
  }, [ouvert])

  const envoyer = async (e) => {
    e.preventDefault()
    setStatut('envoi')
    try {
      const rep = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '5dcf7e4a-8446-480c-8c0a-1a5669b1a73e',
          subject: `🔍 Audit gratuit demandé par ${form.prenom}`,
          from_name: form.prenom,
          email: form.email,
          url_site: form.url || 'Non renseignée',
          botcheck: '',
        }),
      })
      const data = await rep.json()
      // Notification WhatsApp via n8n (fire-and-forget)
      fetch('https://n8n.webotix.cloud/webhook/audit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prenom: form.prenom, email: form.email, url: form.url || '' }),
      }).catch(() => {})
      setStatut(data.success ? 'ok' : 'erreur')
    } catch {
      setStatut('erreur')
    }
  }

  if (!ouvert) return null

  return (
    /* Fond sombre — clic pour fermer */
    <div
      onClick={onFermer}
      style={{
        position: 'fixed', inset: 0, zIndex: 500,
        background: 'rgba(5,7,16,0.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      {/* Carte popup — stoppe la propagation du clic */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: '480px',
          background: '#fff', borderRadius: '24px',
          padding: '40px 36px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
          position: 'relative',
          animation: 'popupIn 0.3s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Bouton fermer */}
        <button
          onClick={onFermer}
          aria-label="Fermer"
          style={{
            position: 'absolute', top: '16px', right: '16px',
            width: '32px', height: '32px', borderRadius: '8px',
            background: '#f1f5f9', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#e2e8f0' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#f1f5f9' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="#64748b" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {statut === 'ok' ? (
          /* ── État succès ── */
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'rgba(34,197,94,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14l6 6 10-10" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: '1.4rem', color: '#0f172a', marginBottom: '10px',
            }}>
              Demande envoyée !
            </h3>
            <p style={{
              color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif", marginBottom: '28px',
            }}>
              On revient vers vous sous <strong style={{ color: '#0f172a' }}>24h</strong> avec
              votre audit personnalisé. Vérifiez votre boîte mail.
            </p>
            <button
              onClick={onFermer}
              style={{
                padding: '12px 28px', borderRadius: '12px', border: 'none',
                background: '#22c55e', color: '#fff', cursor: 'pointer',
                fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 700,
              }}
            >
              Fermer
            </button>
          </div>
        ) : (
          /* ── Formulaire ── */
          <>
            {/* En-tête */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '4px 12px', borderRadius: '999px',
                background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)',
                color: '#16a34a', fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.07em', textTransform: 'uppercase',
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: '14px',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                100% gratuit · Sans engagement
              </div>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                fontSize: '1.5rem', color: '#0f172a', lineHeight: 1.2, marginBottom: '8px',
              }}>
                Votre audit gratuit
              </h2>
              <p style={{
                color: '#64748b', fontSize: '0.875rem', lineHeight: 1.65,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                On analyse votre site web et on vous envoie un rapport personnalisé
                sous 24h — vitesse, SEO, design, conversions.
              </p>
            </div>

            <form onSubmit={envoyer} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Prénom */}
              <div>
                <label style={{
                  display: 'block', fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.78rem', fontWeight: 600, color: '#374151', marginBottom: '6px',
                }}>
                  Votre prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Thomas"
                  value={form.prenom}
                  onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))}
                  style={{
                    width: '100%', padding: '11px 14px', borderRadius: '10px',
                    border: '1.5px solid #e2e8f0', outline: 'none',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#0f172a',
                    background: '#fafbff', boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#22c55e' }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0' }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{
                  display: 'block', fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.78rem', fontWeight: 600, color: '#374151', marginBottom: '6px',
                }}>
                  Votre email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="thomas@monentreprise.fr"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={{
                    width: '100%', padding: '11px 14px', borderRadius: '10px',
                    border: '1.5px solid #e2e8f0', outline: 'none',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#0f172a',
                    background: '#fafbff', boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#22c55e' }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0' }}
                />
              </div>

              {/* URL */}
              <div>
                <label style={{
                  display: 'block', fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.78rem', fontWeight: 600, color: '#374151', marginBottom: '6px',
                }}>
                  URL de votre site <span style={{ color: '#94a3b8', fontWeight: 400 }}>(optionnel)</span>
                </label>
                <input
                  type="url"
                  placeholder="https://monsite.fr"
                  value={form.url}
                  onChange={e => setForm(f => ({ ...f, url: e.target.value }))}
                  style={{
                    width: '100%', padding: '11px 14px', borderRadius: '10px',
                    border: '1.5px solid #e2e8f0', outline: 'none',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#0f172a',
                    background: '#fafbff', boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#22c55e' }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0' }}
                />
              </div>

              {/* Bouton envoi */}
              <button
                type="submit"
                disabled={statut === 'envoi'}
                style={{
                  marginTop: '6px',
                  padding: '14px 24px', borderRadius: '12px', border: 'none',
                  background: statut === 'envoi' ? '#86efac' : '#22c55e',
                  color: '#fff', cursor: statut === 'envoi' ? 'not-allowed' : 'pointer',
                  fontFamily: "'Outfit', sans-serif", fontSize: '1rem', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  boxShadow: '0 4px 16px rgba(34,197,94,0.35)',
                  transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
                }}
                onMouseEnter={e => { if (statut !== 'envoi') e.currentTarget.style.background = '#16a34a' }}
                onMouseLeave={e => { if (statut !== 'envoi') e.currentTarget.style.background = '#22c55e' }}
              >
                {statut === 'envoi' ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                      <path d="M8 2a6 6 0 016 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    Recevoir mon audit gratuit
                    <svg width="14" height="14" viewBox="0 0 13 13" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 11L11 2M11 2H4.5M11 2V8.5"/>
                    </svg>
                  </>
                )}
              </button>

              {statut === 'erreur' && (
                <p style={{
                  color: '#ef4444', fontSize: '0.82rem', textAlign: 'center',
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  Une erreur s'est produite. Réessayez ou écrivez-nous à contact@webotix.cloud
                </p>
              )}
            </form>
          </>
        )}
      </div>

      {/* Animations CSS via style injecté */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popupIn { from { opacity: 0; transform: scale(0.95) translateY(12px) } to { opacity: 1; transform: scale(1) translateY(0) } }
      `}</style>
    </div>
  )
}

export default PopupAudit
