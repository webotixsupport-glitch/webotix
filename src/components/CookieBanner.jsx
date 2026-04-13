import { useState, useEffect } from 'react'

// ⚠️ Remplacer G-XXXXXXXXXX par ton vrai ID Google Analytics 4
// Tu le trouves dans : analytics.google.com → Propriété → Flux de données → ID de mesure
const GA_ID = 'G-XXXXXXXXXX'

// Injecte le script Google Analytics uniquement après consentement (conforme RGPD)
function chargerGA(id) {
  if (document.getElementById('ga-script')) return // déjà chargé
  const script = document.createElement('script')
  script.id = 'ga-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)
  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', id)
}

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const choix = localStorage.getItem('cookies-webotix')
    if (!choix) {
      // Aucun choix enregistré → afficher le bandeau après 1 seconde
      const t = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(t)
    }
    if (choix === 'accepte') {
      chargerGA(GA_ID) // déjà accepté → charger GA immédiatement
    }
  }, [])

  const accepter = () => {
    localStorage.setItem('cookies-webotix', 'accepte')
    chargerGA(GA_ID)
    setVisible(false)
  }

  const refuser = () => {
    localStorage.setItem('cookies-webotix', 'refuse')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div role="dialog" aria-label="Consentement aux cookies" style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: 'rgba(9,9,15,0.97)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '16px 24px',
      animation: 'cookieSlideUp 0.4s cubic-bezier(0.22,1,0.36,1)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '20px', flexWrap: 'wrap',
      }}>

        {/* Texte d'information */}
        <p style={{
          color: 'rgba(255,255,255,0.72)', fontSize: '0.875rem',
          fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6,
          margin: 0, flex: '1 1 280px',
        }}>
          Ce site utilise des cookies pour analyser le trafic (Google Analytics) et améliorer votre expérience.{' '}
          <a href="/mentions-legales" style={{ color: '#0ea5e9', textDecoration: 'underline' }}>
            En savoir plus
          </a>
        </p>

        {/* Boutons */}
        <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
          <button
            onClick={refuser}
            style={{
              padding: '9px 20px', borderRadius: '10px',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.7)', cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 600,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
          >
            Refuser
          </button>
          <button
            onClick={accepter}
            style={{
              padding: '9px 20px', borderRadius: '10px',
              background: '#0ea5e9', border: 'none',
              color: 'white', cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 700,
              boxShadow: '0 4px 14px rgba(14,165,233,0.35)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#38bdf8' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#0ea5e9' }}
          >
            Accepter
          </button>
        </div>

      </div>

      <style>{`
        @keyframes cookieSlideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default CookieBanner
