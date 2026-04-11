import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Page 404 — affichée quand l'URL ne correspond à aucune page
function NotFound() {
  useEffect(() => {
    document.title = 'Page introuvable — Webotix'
  }, [])

  return (
    <div style={{
      background: '#f8f9ff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 80px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>

        {/* Grand 404 décoratif */}
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(6rem, 20vw, 10rem)',
          lineHeight: 1,
          background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '16px',
          userSelect: 'none',
        }} aria-hidden="true">
          404
        </div>

        {/* Badge */}
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(99,102,241,0.1))',
          border: '1px solid rgba(14,165,233,0.25)',
          color: '#0ea5e9',
          borderRadius: '50px',
          padding: '6px 18px',
          fontSize: '0.8rem',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          Page introuvable
        </div>

        <h1 style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          color: '#0f172a',
          lineHeight: 1.2,
          marginBottom: '16px',
        }}>
          Cette page n'existe pas
        </h1>

        <p style={{
          color: '#64748b',
          fontSize: '1rem',
          lineHeight: '1.7',
          fontFamily: "'DM Sans', sans-serif",
          marginBottom: '40px',
        }}>
          Il semble que la page que vous cherchez a été déplacée, supprimée, ou n'a jamais existé. Pas de panique — revenons sur quelque chose d'utile.
        </p>

        {/* Boutons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" style={{
            textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 28px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
            color: '#fff',
            fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 700,
            boxShadow: '0 4px 20px rgba(14,165,233,0.3)',
            transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(14,165,233,0.4)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(14,165,233,0.3)' }}
          >
            {/* Icône maison */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Retour à l'accueil
          </Link>

          <Link to="/contact" style={{
            textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 28px', borderRadius: '12px',
            background: 'transparent',
            color: '#0ea5e9',
            border: '2px solid #0ea5e9',
            fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 700,
            transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(14,165,233,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Nous contacter
          </Link>
        </div>

      </div>
    </div>
  )
}

export default NotFound
