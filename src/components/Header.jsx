import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

// Header sombre transparent — reste dark même sur fond clair
function Header() {
  const [scrolle, setScrolle] = useState(false)
  const [menuOuvert, setMenuOuvert] = useState(false)
  const location = useLocation()

  // Détection du scroll
  useEffect(() => {
    const fn = () => setScrolle(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Fermer le menu quand on change de page
  useEffect(() => {
    setMenuOuvert(false)
  }, [location.pathname])

  // Bloquer le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOuvert ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOuvert])

  const liens = [
    { nom: 'Accueil',     href: '/' },
    { nom: 'Services',    href: '/services' },
    { nom: 'Réalisations',href: '/realisations' },
    { nom: 'Tarifs',      href: '/tarifs' },
    { nom: 'À propos',    href: '/a-propos' },
    { nom: 'Contact',     href: '/contact' },
  ]
  const actif = (h) => location.pathname === h

  return (
    <>
      {/* ─── Barre de navigation ─── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        padding: '14px 24px',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 20px',
          borderRadius: '16px',
          /* TOUJOURS sombre, transparent avec blur */
          background: scrolle || menuOuvert ? 'rgba(9,9,15,0.72)' : 'rgba(9,9,15,0.30)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolle ? '0 8px 32px rgba(0,0,0,0.2)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
        }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <Logo />
          </Link>

          {/* Nav desktop — cachée sur mobile */}
          <nav className="header-nav" style={{ gap: '4px', alignItems: 'center' }}>
            {liens.map((l) => (
              <Link key={l.href} to={l.href} style={{
                textDecoration: 'none',
                padding: '8px 18px',
                borderRadius: '10px',
                fontSize: '0.9rem', fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                color: '#fff',
                background: actif(l.href) ? 'rgba(14,165,233,0.55)' : 'transparent',
                boxShadow: actif(l.href) ? '0 2px 8px rgba(14,165,233,0.3)' : 'none',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!actif(l.href)) { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(-1px)' } }}
              onMouseLeave={e => { if (!actif(l.href)) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' } }}
              >
                {l.nom}
              </Link>
            ))}
          </nav>

          {/* Groupe droit : CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

            {/* Bouton audit gratuit — vert, visible desktop */}
            <div className="header-cta-desk">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('ouvrir-audit'))}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  padding: '10px 20px', borderRadius: '12px', border: 'none',
                  background: '#22c55e', color: '#fff', cursor: 'pointer',
                  fontSize: '0.85rem', fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: '0 4px 14px rgba(34,197,94,0.4)',
                  transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#16a34a'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#22c55e'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <svg width="13" height="13" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
                  <path d="M10 6v4l3 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Audit gratuit
              </button>
            </div>

            {/* CTA desktop — texte + icône */}
            <div className="header-cta-desk">
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
            <div className="header-mob">
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

            {/* Bouton hamburger — visible uniquement sur mobile */}
            <button
              className="header-mob"
              onClick={() => setMenuOuvert(!menuOuvert)}
              aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOuvert}
              style={{
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '10px',
                width: '36px', height: '36px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: menuOuvert ? '0px' : '5px',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.2s ease',
                position: 'relative',
              }}
            >
              {/* Les 3 barres du hamburger — se transforment en X */}
              <span style={{
                display: 'block', width: '18px', height: '2px',
                background: '#fff', borderRadius: '2px',
                transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                position: 'absolute',
                transform: menuOuvert ? 'rotate(45deg)' : 'translateY(-5px)',
              }} />
              <span style={{
                display: 'block', width: '18px', height: '2px',
                background: '#fff', borderRadius: '2px',
                transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                opacity: menuOuvert ? 0 : 1,
                transform: menuOuvert ? 'scaleX(0)' : 'none',
              }} />
              <span style={{
                display: 'block', width: '18px', height: '2px',
                background: '#fff', borderRadius: '2px',
                transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                position: 'absolute',
                transform: menuOuvert ? 'rotate(-45deg)' : 'translateY(5px)',
              }} />
            </button>

          </div>
        </div>
      </header>

      {/* ─── Menu mobile — panneau plein écran ─── */}
      <div
        className="header-menu-mob"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 199,
          background: 'rgba(5,7,16,0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex', flexDirection: 'column',
          padding: '108px 28px 48px',
          transform: menuOuvert ? 'translateY(0)' : 'translateY(-100%)',
          opacity: menuOuvert ? 1 : 0,
          transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease',
          pointerEvents: menuOuvert ? 'all' : 'none',
          overflowY: 'auto',
        }}
        aria-hidden={!menuOuvert}
      >
        {/* Bouton audit gratuit — en haut du menu mobile, bien visible */}
        <button
          onClick={() => { setMenuOuvert(false); window.dispatchEvent(new CustomEvent('ouvrir-audit')) }}
          style={{
            width: '100%', padding: '18px 22px', borderRadius: '16px', border: 'none',
            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
            color: '#fff', cursor: 'pointer',
            fontFamily: "'Outfit', sans-serif", fontSize: '1.1rem', fontWeight: 800,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            boxShadow: '0 6px 24px rgba(34,197,94,0.4)',
            marginBottom: '8px',
            transition: 'all 0.3s ease',
            transitionDelay: menuOuvert ? '0.04s' : '0s',
            transform: menuOuvert ? 'translateX(0) scale(1)' : 'translateX(-24px) scale(0.97)',
            opacity: menuOuvert ? 1 : 0,
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
              <path d="M10 6v4l3 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Audit gratuit — je veux en profiter
          </span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M4 9h10M10 5l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Liens de navigation */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {liens.map((l, i) => (
            <Link
              key={l.href}
              to={l.href}
              style={{
                textDecoration: 'none',
                padding: '18px 22px',
                borderRadius: '16px',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '1.45rem', fontWeight: 800,
                color: actif(l.href) ? '#0ea5e9' : '#f1f5f9',
                background: actif(l.href) ? 'rgba(14,165,233,0.12)' : 'rgba(255,255,255,0.03)',
                border: '1px solid',
                borderColor: actif(l.href) ? 'rgba(14,165,233,0.3)' : 'rgba(255,255,255,0.06)',
                transition: 'all 0.2s ease',
                /* Entrée en cascade au fur et à mesure que le menu s'ouvre */
                transitionDelay: menuOuvert ? `${0.05 + i * 0.045}s` : '0s',
                transform: menuOuvert ? 'translateX(0) scale(1)' : 'translateX(-24px) scale(0.97)',
                opacity: menuOuvert ? 1 : 0,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}
            >
              {l.nom}
              {/* Petite flèche sur l'item actif */}
              {actif(l.href) && (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 9h10M10 5l4 4-4 4" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA en bas du menu */}
        <div style={{
          marginTop: 'auto', paddingTop: '32px',
          transition: 'all 0.3s ease',
          transitionDelay: menuOuvert ? '0.35s' : '0s',
          transform: menuOuvert ? 'translateY(0)' : 'translateY(16px)',
          opacity: menuOuvert ? 1 : 0,
        }}>
          <a
            href="https://calendly.com/webotix-support/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              padding: '18px 24px', borderRadius: '16px',
              background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
              color: '#fff',
              fontFamily: "'Outfit', sans-serif", fontSize: '1.05rem', fontWeight: 700,
              boxShadow: '0 8px 32px rgba(14,165,233,0.4)',
            }}
          >
            Être rappelé gratuitement
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Petit texte rassurant */}
          <p style={{
            textAlign: 'center', marginTop: '16px',
            color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Sans engagement · Réponse sous 24h
          </p>
        </div>
      </div>
    </>
  )
}

export default Header
