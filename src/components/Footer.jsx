import { Link } from 'react-router-dom'
import Logo from './Logo'

// Pied de page Webotix
function Footer() {
  const annee = new Date().getFullYear()

  const s = {
    footer: {
      background: '#04060b',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    },
    inner: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '64px 24px 32px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '48px',
      marginBottom: '48px',
    },
    titre: {
      fontFamily: "'Outfit', sans-serif",
      color: '#fff',
      fontWeight: 600,
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '20px',
    },
    lien: {
      display: 'block',
      textDecoration: 'none',
      color: '#64748b',
      fontSize: '0.9rem',
      marginBottom: '12px',
      transition: 'color 0.25s cubic-bezier(0.22,1,0.36,1)',
    },
    bas: {
      borderTop: '1px solid rgba(255,255,255,0.05)',
      paddingTop: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
    },
    copy: {
      color: '#334155',
      fontSize: '0.8rem',
    },
  }

  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        <div style={s.grid}>

          {/* Colonne 1 — Logo + description */}
          <div className="will-animate">
            <div style={{ marginBottom: '16px' }}><Logo /></div>
            <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.7', maxWidth: '260px' }}>
              Votre partenaire digital pour des sites web, applications et automatisations qui font vraiment la différence.
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div className="will-animate" style={{ transitionDelay: '0.08s' }}>
            <div style={s.titre}>Navigation</div>
            {[
              { nom: 'Accueil', href: '/' },
              { nom: 'Nos services', href: '/#services' },
              { nom: 'Pourquoi nous', href: '/#pourquoi' },
              { nom: 'À propos', href: '/a-propos' },
              { nom: 'Contact', href: '/contact' },
            ].map((l) => (
              <a key={l.href} href={l.href} style={s.lien}
                onMouseEnter={e => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.paddingLeft = '4px' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.paddingLeft = '0' }}
              >
                {l.nom}
              </a>
            ))}
          </div>

          {/* Colonne 3 — Services */}
          <div className="will-animate" style={{ transitionDelay: '0.16s' }}>
            <div style={s.titre}>Services</div>
            {[
              { nom: 'Sites web', href: '/#services' },
              { nom: 'Applications', href: '/#services' },
              { nom: 'Automatisations', href: '/#services' },
              { nom: 'Avis clients', href: '/#temoignages' },
            ].map((l) => (
              <a key={l.nom} href={l.href} style={s.lien}
                onMouseEnter={e => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.paddingLeft = '4px' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.paddingLeft = '0' }}
              >
                {l.nom}
              </a>
            ))}
          </div>

          {/* Colonne 4 — Contact */}
          <div className="will-animate" style={{ transitionDelay: '0.24s' }}>
            <div style={s.titre}>Contact</div>
            <a href="mailto:webotix.support@gmail.com" style={{ ...s.lien, marginBottom: '10px' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.paddingLeft = '4px' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.paddingLeft = '0' }}
            >
              webotix.support@gmail.com
            </a>
            <p style={{ color: '#475569', fontSize: '0.875rem', marginBottom: '10px' }}>Réponse sous 24h</p>
            <p style={{ color: '#475569', fontSize: '0.875rem' }}>France — 100% en ligne</p>
          </div>
        </div>

        {/* Bas de page */}
        <div style={s.bas}>
          <span style={s.copy}>© {annee} Webotix. Tous droits réservés.</span>
          <span style={s.copy}>Créé avec passion · Depuis 2025</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
