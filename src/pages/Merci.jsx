import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Page affichée après un paiement Stripe réussi
function Merci() {
  useEffect(() => {
    document.title = 'Merci — Webotix | Abonnement confirmé'
    window.scrollTo(0, 0)

    // Tracking conversion Google Ads — abonnement confirmé
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        'send_to': 'AW-18088144429/BmcvCJyVg5wcEK3cjLFD',
        'value': 1.0,
        'currency': 'EUR'
      })
    }
  }, [])

  return (
    <div style={{
      width: '100%', minHeight: '100vh',
      background: '#f8f9ff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '120px 24px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '560px' }}>

        {/* Icône succès */}
        <div className="fade-up" style={{
          width: '80px', height: '80px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #22c55e, #16a34a)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 32px',
          boxShadow: '0 12px 40px rgba(34,197,94,0.3)',
        }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <path d="M8 18l7 7 13-13" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="fade-up-2" style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: '#0f172a', lineHeight: 1.15, marginBottom: '16px',
        }}>
          Bienvenue dans la famille Webotix !
        </h1>

        <p className="fade-up-3" style={{
          color: '#64748b', fontSize: '1.05rem', lineHeight: 1.75,
          fontFamily: "'DM Sans', sans-serif", marginBottom: '40px',
        }}>
          Votre abonnement est confirmé. Vous allez recevoir un email de confirmation sous quelques minutes.
          Notre équipe vous contactera dans les 24h pour démarrer l'onboarding.
        </p>

        <div className="fade-up-3" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" style={{
            textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 28px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
            color: '#fff', fontFamily: "'Outfit', sans-serif",
            fontSize: '0.95rem', fontWeight: 700,
            boxShadow: '0 4px 20px rgba(14,165,233,0.3)',
            transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(14,165,233,0.4)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(14,165,233,0.3)' }}
          >
            Retour à l'accueil
          </Link>
          <Link to="/contact" style={{
            textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 28px', borderRadius: '12px',
            background: 'transparent', color: '#0f172a',
            border: '2px solid #e2e8f0',
            fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 700,
            transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#0ea5e9'; e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Nous contacter
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Merci
