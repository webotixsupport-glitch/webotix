import { Link } from 'react-router-dom'

// Mise en page commune à tous les articles de blog
function ArticleLayout({ meta, children }) {
  const W = { maxWidth: '780px', margin: '0 auto', padding: '0 24px' }

  return (
    <div style={{ width: '100%', background: '#f8f9ff' }}>

      {/* ── En-tête article ── */}
      <section style={{
        width: '100%',
        background: 'linear-gradient(150deg, #eef2ff 0%, #f0f9ff 50%, #f8f9ff 100%)',
        padding: '140px 24px 60px',
      }}>
        <div style={W}>

          {/* Fil d'Ariane */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            marginBottom: '24px', fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.82rem', color: '#94a3b8',
          }}>
            <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Accueil</Link>
            <span>›</span>
            <Link to="/blog" style={{ color: '#94a3b8', textDecoration: 'none' }}>Blog</Link>
            <span>›</span>
            <span style={{ color: '#475569' }}>{meta.categorie}</span>
          </div>

          {/* Badge catégorie */}
          <div style={{
            display: 'inline-block', padding: '4px 14px', borderRadius: '999px',
            background: '#0ea5e910', border: '1px solid #0ea5e925',
            color: '#0ea5e9', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            marginBottom: '16px', fontFamily: "'DM Sans', sans-serif",
          }}>
            {meta.categorie}
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#0f172a', lineHeight: 1.2, marginBottom: '16px',
          }}>
            {meta.titre}
          </h1>

          <p style={{
            color: '#64748b', fontSize: '1.05rem', lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif", marginBottom: '24px',
          }}>
            {meta.description}
          </p>

          {/* Méta : date + temps de lecture */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: '#94a3b8',
          }}>
            <span>{meta.date}</span>
            <span>·</span>
            <span>{meta.lecture} de lecture</span>
          </div>

        </div>
      </section>

      {/* ── Contenu de l'article ── */}
      <section style={{ width: '100%', background: 'white', padding: '60px 24px' }}>
        <div style={W}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem', lineHeight: 1.85,
            color: '#374151',
          }}>
            {children}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ width: '100%', background: '#f8f9ff', padding: '60px 24px 100px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            borderRadius: '24px', padding: '48px 40px', textAlign: 'center',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
            boxShadow: '0 20px 60px rgba(14,165,233,0.2)',
          }}>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'white',
              lineHeight: 1.2, marginBottom: '12px',
            }}>
              Votre site web mérite mieux.
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.7,
              marginBottom: '28px', fontFamily: "'DM Sans', sans-serif",
            }}>
              On analyse votre site gratuitement et on vous dit exactement quoi améliorer — sous 24h.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('ouvrir-audit'))}
              style={{
                padding: '13px 32px', borderRadius: '12px', border: 'none',
                background: 'white', color: '#0f172a', cursor: 'pointer',
                fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 700,
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Demander mon audit gratuit
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ArticleLayout
