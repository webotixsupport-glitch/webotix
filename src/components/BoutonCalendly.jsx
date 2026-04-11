import { useState, useEffect } from 'react'

// Bouton flottant "Prendre RDV" — visible sur toutes les pages
function BoutonCalendly() {
  const [visible, setVisible] = useState(false)
  const [survol, setSurvol] = useState(false)

  // Apparaît après 2 secondes sur la page
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href="https://calendly.com/webotix-support/30min"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Prendre un rendez-vous gratuit avec Webotix"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: survol
          ? 'linear-gradient(135deg, #0284c7, #4f46e5)'
          : 'linear-gradient(135deg, #0ea5e9, #6366f1)',
        color: '#fff',
        textDecoration: 'none',
        padding: '14px 22px',
        borderRadius: '50px',
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 700,
        fontSize: '0.9rem',
        letterSpacing: '0.01em',
        boxShadow: survol
          ? '0 8px 32px rgba(14,165,233,0.5), 0 2px 8px rgba(0,0,0,0.3)'
          : '0 4px 20px rgba(14,165,233,0.35), 0 2px 8px rgba(0,0,0,0.2)',
        transform: visible
          ? survol ? 'translateY(-3px) scale(1.03)' : 'translateY(0) scale(1)'
          : 'translateY(80px) scale(0.9)',
        opacity: visible ? 1 : 0,
        transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={() => setSurvol(true)}
      onMouseLeave={() => setSurvol(false)}
    >
      {/* Icône calendrier SVG */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      RDV gratuit
    </a>
  )
}

export default BoutonCalendly
