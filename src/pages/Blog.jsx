import { Link } from 'react-router-dom'
import { useEffect } from 'react'

// Liste des articles — à compléter au fil du temps
const articles = [
  {
    slug: '/blog/cout-site-web-paris',
    categorie: 'Création de site web',
    titre: 'Combien coûte un site web professionnel à Paris en 2026 ?',
    description: 'Prix d\'un site vitrine, boutique en ligne ou application web à Paris. On vous explique ce qui influence les tarifs et comment éviter les mauvaises surprises.',
    date: 'Avril 2026',
    lecture: '5 min',
    accent: '#0ea5e9',
    bg: 'linear-gradient(135deg, #eff6ff, #e0f2fe)',
    photo: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=360&fit=crop&q=85',
    photoAlt: 'Écran d\'ordinateur avec interface de conception web',
  },
  {
    slug: '/blog/site-web-sans-clients',
    categorie: 'Conseils & stratégie',
    titre: 'Pourquoi votre site web ne vous ramène pas de clients (et comment y remédier)',
    description: 'Vous avez un site web mais les contacts ne viennent pas ? Voici les 5 raisons les plus fréquentes et les solutions concrètes pour inverser la tendance.',
    date: 'Avril 2026',
    lecture: '6 min',
    accent: '#22c55e',
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    photo: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=360&fit=crop&q=85',
    photoAlt: 'Professionnel analysant des statistiques sur ordinateur',
  },
  {
    slug: '/blog/choisir-agence-web-paris',
    categorie: 'Conseils & stratégie',
    titre: 'Comment choisir son agence web à Paris en 2026 ? (Le guide complet)',
    description: 'Portfolio, prix, réactivité, SEO, suivi — les 5 critères pour bien choisir votre agence web à Paris et les questions précises à poser avant de signer.',
    date: 'Avril 2026',
    lecture: '7 min',
    accent: '#6366f1',
    bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    photo: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=360&fit=crop&q=85',
    photoAlt: 'Équipe en réunion de travail autour d\'une table',
  },
]

function Blog() {
  useEffect(() => {
    document.title = 'Blog — Webotix | Conseils création de site web à Paris'
  }, [])

  const W = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }

  return (
    <div style={{ width: '100%', background: '#f8f9ff' }}>

      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section style={{
        width: '100%',
        background: 'linear-gradient(150deg, #eef2ff 0%, #f0f9ff 50%, #f8f9ff 100%)',
        padding: '140px 24px 80px',
        textAlign: 'center',
      }}>
        <div style={W}>
          <div style={{
            display: 'inline-block', padding: '5px 16px', borderRadius: '999px',
            background: '#0ea5e910', border: '1px solid #0ea5e925',
            color: '#0ea5e9', fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '20px', fontFamily: "'DM Sans', sans-serif",
          }}>
            Blog Webotix
          </div>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: '#0f172a', lineHeight: 1.15, marginBottom: '20px',
          }}>
            Conseils pour développer<br />votre activité en ligne
          </h1>
          <p style={{
            color: '#64748b', fontSize: '1rem', lineHeight: 1.8,
            maxWidth: '520px', margin: '0 auto',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Guides pratiques, stratégies et conseils concrets pour les professionnels
            qui veulent tirer le meilleur de leur présence digitale.
          </p>
        </div>
      </section>

      {/* ══════════════════════════
          GRILLE ARTICLES
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '80px 24px 100px', background: 'white' }}>
        <div style={W}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '32px',
          }}>
            {articles.map((a) => (
              <Link
                key={a.slug}
                to={a.slug}
                style={{ textDecoration: 'none' }}
              >
                <div className="card-lift will-animate" style={{
                  borderRadius: '20px',
                  background: a.bg,
                  border: `1px solid ${a.accent}18`,
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                }}>

                  {/* Photo */}
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                      src={a.photo}
                      alt={a.photoAlt}
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
                      }}
                    />
                  </div>

                  {/* Contenu */}
                  <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>

                    {/* Badge catégorie */}
                    <div style={{
                      display: 'inline-block', padding: '3px 12px', borderRadius: '999px',
                      background: `${a.accent}15`, border: `1px solid ${a.accent}30`,
                      color: a.accent, fontSize: '0.7rem', fontWeight: 700,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      marginBottom: '12px', fontFamily: "'DM Sans', sans-serif",
                      alignSelf: 'flex-start',
                    }}>
                      {a.categorie}
                    </div>

                    <h2 style={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                      fontSize: '1.15rem', color: '#0f172a', lineHeight: 1.35,
                      marginBottom: '10px', flex: 1,
                    }}>
                      {a.titre}
                    </h2>

                    <p style={{
                      color: '#64748b', fontSize: '0.88rem', lineHeight: 1.65,
                      fontFamily: "'DM Sans', sans-serif", marginBottom: '20px',
                    }}>
                      {a.description}
                    </p>

                    {/* Méta */}
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.78rem', color: '#94a3b8',
                    }}>
                      <span>{a.date}</span>
                      <span>·</span>
                      <span>{a.lecture} de lecture</span>
                      <span style={{ marginLeft: 'auto', color: a.accent, fontWeight: 600 }}>
                        Lire →
                      </span>
                    </div>

                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CTA AUDIT
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '0 24px 100px', background: 'white' }}>
        <div style={W}>
          <div className="cta-final-inner" style={{
            borderRadius: '24px', padding: '64px 48px', textAlign: 'center',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 60%, #8b5cf6 100%)',
            boxShadow: '0 24px 80px rgba(14,165,233,0.2)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-60px', right: '-60px',
              width: '260px', height: '260px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)', pointerEvents: 'none',
            }} aria-hidden="true" />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'white',
                lineHeight: 1.2, marginBottom: '14px',
              }}>
                Prêt à passer à l'action ?
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.75,
                maxWidth: '420px', margin: '0 auto 32px',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                On analyse votre site gratuitement et on vous dit exactement quoi améliorer — sous 24h.
              </p>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('ouvrir-audit'))}
                style={{
                  padding: '14px 32px', borderRadius: '12px', border: 'none',
                  background: 'white', color: '#0f172a', cursor: 'pointer',
                  fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 700,
                  boxShadow: '0 8px 28px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Demander mon audit gratuit
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Blog
