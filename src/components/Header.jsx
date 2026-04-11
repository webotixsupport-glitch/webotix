import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

// Header sombre transparent — reste dark même sur fond clair
function Header() {
  const [scrolle, setScrolle] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolle(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const liens = [
    { nom: 'Accueil', href: '/' },
    { nom: 'Services', href: '/services' },
    { nom: 'À propos', href: '/a-propos' },
    { nom: 'Contact', href: '/contact' },
  ]
  const actif = (h) => location.pathname === h

  return (
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '14px 24px',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 20px',
          borderRadius: '16px',
          /* TOUJOURS sombre, transparent avec blur */
          background: scrolle ? 'rgba(9,9,15,0.55)' : 'rgba(9,9,15,0.30)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolle ? '0 8px 32px rgba(0,0,0,0.2)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
        }}>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>

          {/* Nav — visible partout */}
          <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            {liens.map((l) => (
              <Link key={l.href} to={l.href} style={{
                textDecoration: 'none',
                padding: 'clamp(5px, 1.5vw, 8px) clamp(8px, 2.5vw, 18px)',
                borderRadius: '10px',
                fontSize: 'clamp(0.72rem, 2.5vw, 0.9rem)', fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                color: '#fff',
                background: actif(l.href) ? 'rgba(14,165,233,0.55)' : 'transparent',
                boxShadow: actif(l.href) ? '0 2px 8px rgba(14,165,233,0.3)' : 'none',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!actif(l.href)) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(-1px)' } }}
              onMouseLeave={e => { if (!actif(l.href)) { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' } }}
              >
                {l.nom}
              </Link>
            ))}
          </nav>

          {/* CTA desktop — texte + icône */}
          <div className="hidden md:block">
            <a href="https://calendly.com/webotix-support/30min" target="_blank" rel="noopener noreferrer" style={{
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 22px', borderRadius: '12px',
              background: '#0ea5e9', color: '#fff',
              fontSize: '0.875rem', fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
              boxShadow: '0 4px 14px rgba(14,165,233,0.35)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#38bdf8'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#0ea5e9'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Être rappelé
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* CTA mobile — icône téléphone uniquement */}
          <div className="flex md:hidden">
            <a href="https://calendly.com/webotix-support/30min" target="_blank" rel="noopener noreferrer"
              aria-label="Être rappelé"
              style={{
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px', borderRadius: '10px',
                background: '#0ea5e9',
                boxShadow: '0 4px 14px rgba(14,165,233,0.35)',
                transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#38bdf8' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0ea5e9' }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>

      </header>
  )
}

export default Header
