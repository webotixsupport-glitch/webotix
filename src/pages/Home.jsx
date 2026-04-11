import { Link } from 'react-router-dom'
import { useEffect } from 'react'

// Photos réelles Unsplash — IDs permanents, bien cadrées
const PHOTOS = {
  hero:   'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=680&fit=crop&q=85',
  web:    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&h=480&fit=crop&q=85',
  app:    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&h=480&fit=crop&q=85',
  auto:   'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=480&fit=crop&q=85',
}

const IcoArrow = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 11L11 2M11 2H4.5M11 2V8.5"/>
  </svg>
)
const IcoStar = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b">
    <path d="M7 1l1.5 3.2 3.5.5-2.5 2.4.6 3.4L7 9 3.9 10.5l.6-3.4L2 4.7l3.5-.5z"/>
  </svg>
)
const IcoCheck = ({ color = '#0ea5e9' }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill={color} opacity="0.12"/>
    <path d="M5 9l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function Home() {

  // Titre de page optimisé SEO
  useEffect(() => {
    document.title = 'Webotix — Création de sites web, applications & automatisations | Agence digitale France'
  }, [])

  const services = [
    {
      titre: 'Création de sites web',
      desc: 'Sites vitrine, landing pages et e-commerce conçus sur mesure. Design moderne, chargement rapide, bien référencé sur Google. Votre site travaille pour vous 24h/24.',
      tags: ['Site vitrine', 'E-commerce', 'Landing page', 'SEO'],
      photo: PHOTOS.web,
      photoAlt: 'Designer travaillant sur la création d\'un site web',
      accent: '#0ea5e9',
      bgCard: 'linear-gradient(135deg, #eff6ff, #e0f2fe)',
    },
    {
      titre: 'Applications sur mesure',
      desc: 'Applications web et mobiles pensées pour vos utilisateurs. Dashboard, espace client, app de gestion — on conçoit et on développe du premier écran à la mise en ligne.',
      tags: ['Application web', 'App mobile', 'Dashboard', 'UX/UI'],
      photo: PHOTOS.app,
      photoAlt: 'Développeur créant une application mobile',
      accent: '#6366f1',
      bgCard: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    },
    {
      titre: 'Automatisations',
      desc: 'Workflows intelligents connectés à vos outils. On supprime vos tâches répétitives pour que vous puissiez vous concentrer sur ce qui fait vraiment avancer votre activité.',
      tags: ['Make / Zapier', 'Chatbots', 'Intégrations API', 'Notifications'],
      photo: PHOTOS.auto,
      photoAlt: 'Système d\'automatisation et connexion d\'outils numériques',
      accent: '#f59e0b',
      bgCard: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    },
  ]

  const temoignages = [
    {
      nom: 'Marc Dupont',
      poste: 'Gérant — Dupont Menuiserie',
      avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=80&h=80&fit=crop&crop=faces&q=85',
      texte: 'Webotix a complètement transformé notre présence en ligne. Le site est moderne, rapide, et nos clients nous le font remarquer. Travail sérieux, délais respectés.',
      accent: '#0ea5e9',
    },
    {
      nom: 'Leïla Benali',
      poste: 'Fondatrice — Studio LB',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&q=85',
      texte: "J'avais une idée d'application complexe. Webotix l'a réalisée exactement comme je l'imaginais. Communication parfaite du début à la fin.",
      accent: '#6366f1',
    },
    {
      nom: 'Thomas Renard',
      poste: 'Directeur — Renard Immo',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&q=85',
      texte: "L'automatisation mise en place nous fait gagner 4 heures par semaine. Plus de relances manuelles, tout fonctionne seul. Excellent rapport qualité-prix.",
      accent: '#f59e0b',
    },
  ]

  const etapes = [
    { num: '01', titre: 'On écoute',   desc: 'Un échange pour comprendre votre projet, vos objectifs et vos contraintes.',               color: '#0ea5e9', bg: 'linear-gradient(135deg, #eff6ff, #e0f2fe)' },
    { num: '02', titre: 'On conçoit',  desc: 'Maquette et plan technique validés ensemble avant tout développement.',                     color: '#6366f1', bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)' },
    { num: '03', titre: 'On construit',desc: 'Développement propre, partagé régulièrement pour que vous suiviez chaque avancée.',        color: '#f59e0b', bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)' },
    { num: '04', titre: 'On livre',    desc: 'Mise en ligne, formation et support. Vous repartez autonome et confiant.',                  color: '#22c55e', bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)' },
  ]

  const avantages = [
    { txt: 'Livraison dans les délais garantie',        color: '#0ea5e9' },
    { txt: 'Contact direct avec le développeur',        color: '#6366f1' },
    { txt: 'Modifications illimitées pendant le projet',color: '#f59e0b' },
    { txt: 'Accompagnement après la mise en ligne',     color: '#22c55e' },
    { txt: 'Technologies modernes et performantes',     color: '#0ea5e9' },
    { txt: 'Devis gratuit sans engagement',             color: '#6366f1' },
  ]

  const W = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }
  const badge = (color, text) => (
    <div style={{
      display: 'inline-block', padding: '5px 16px', borderRadius: '999px',
      background: `${color}10`, border: `1px solid ${color}25`,
      color, fontSize: '0.72rem', fontWeight: 600,
      letterSpacing: '0.08em', textTransform: 'uppercase',
      marginBottom: '16px', fontFamily: "'DM Sans', sans-serif",
    }}>
      {text}
    </div>
  )

  return (
    <div style={{ width: '100%', background: '#f8f9ff' }}>

      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section style={{
        width: '100%', minHeight: '100dvh',
        background: 'linear-gradient(150deg, #eef2ff 0%, #f0f9ff 50%, #f8f9ff 100%)',
        display: 'flex', alignItems: 'center',
        padding: '110px 24px 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.1), transparent 70%)', pointerEvents: 'none' }} aria-hidden="true" />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,233,0.09), transparent 70%)', pointerEvents: 'none' }} aria-hidden="true" />

        <div style={{ ...W, width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>

            {/* Texte gauche */}
            <div className="fade-up">
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px', borderRadius: '999px',
                background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.25)',
                color: '#0284c7', fontSize: '0.75rem', fontWeight: 600,
                letterSpacing: '0.05em', textTransform: 'uppercase',
                marginBottom: '28px', fontFamily: "'DM Sans', sans-serif",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0ea5e9', display: 'inline-block' }} />
                Agence digitale · France · Depuis 2025
              </div>

              <h1 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2.8rem, 4.5vw, 4.4rem)',
                color: '#0f172a', lineHeight: 1.08, letterSpacing: '-0.025em',
                marginBottom: '24px',
              }}>
                Votre activité<br />
                mérite un{' '}
                <span style={{ color: '#0ea5e9' }}>digital</span><br />
                à sa hauteur.
              </h1>

              <p style={{
                color: '#475569', fontSize: '1.05rem', lineHeight: 1.8,
                maxWidth: '440px', marginBottom: '40px',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Webotix crée les <strong style={{ color: '#0f172a' }}>sites web</strong>,{' '}
                <strong style={{ color: '#0f172a' }}>applications</strong> et{' '}
                <strong style={{ color: '#0f172a' }}>automatisations</strong> qui font
                grandir votre entreprise.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '44px' }}>
                <Link to="/contact" style={{
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '14px 28px', borderRadius: '12px',
                  background: '#0ea5e9', color: '#fff',
                  fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 700,
                  boxShadow: '0 4px 20px rgba(14,165,233,0.35)',
                  transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0284c7'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#0ea5e9'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  Demander un devis
                  <span style={{ width: 26, height: 26, borderRadius: 6, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IcoArrow />
                  </span>
                </Link>
                <Link to="/a-propos" style={{
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center',
                  padding: '14px 28px', borderRadius: '12px',
                  background: 'white', color: '#475569',
                  fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 500,
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.borderColor = '#cbd5e1' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.borderColor = '#e2e8f0' }}
                >
                  Qui sommes-nous ?
                </Link>
              </div>

              {/* Mini stats */}
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                {[
                  { val: '30+',  label: 'Projets livrés',    color: '#0ea5e9' },
                  { val: '100%', label: 'Clients satisfaits', color: '#6366f1' },
                  { val: '24h',  label: 'Délai de réponse',   color: '#f59e0b' },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.8rem', color: s.color, lineHeight: 1 }}>
                      {s.val}
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '0.78rem', marginTop: '4px', fontFamily: "'DM Sans', sans-serif" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo droite */}
            <div className="fade-up-2" style={{ position: 'relative' }}>
              {/* Cadre coloré */}
              <div style={{
                padding: '4px', borderRadius: '24px',
                background: 'linear-gradient(135deg, #0ea5e9, #6366f1, #f59e0b)',
                boxShadow: '0 32px 80px rgba(14,165,233,0.18)',
              }}>
                <div style={{ borderRadius: '21px', overflow: 'hidden', lineHeight: 0 }}>
                  <img
                    src={PHOTOS.hero}
                    alt="Équipe Webotix au travail sur des projets digitaux"
                    style={{ width: '100%', height: '460px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>

              {/* Badge satisfaction */}
              <div style={{
                position: 'absolute', bottom: '28px', left: '-24px',
                background: 'white', borderRadius: '14px',
                padding: '12px 18px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                border: '1px solid #f1f5f9',
                animation: 'float 5s ease-in-out infinite',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <div style={{ display: 'flex', gap: '2px' }}>{[1,2,3,4,5].map(s => <IcoStar key={s} />)}</div>
                <div>
                  <div style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.82rem', fontFamily: "'DM Sans', sans-serif" }}>100% satisfaits</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.72rem', fontFamily: "'DM Sans', sans-serif" }}>30+ projets livrés</div>
                </div>
              </div>

              {/* Badge réponse */}
              <div style={{
                position: 'absolute', top: '20px', right: '-18px',
                background: '#0ea5e9', borderRadius: '12px',
                padding: '10px 18px', boxShadow: '0 8px 24px rgba(14,165,233,0.4)',
                animation: 'float 4s ease-in-out infinite 1.5s',
              }}>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '0.82rem', fontFamily: "'DM Sans', sans-serif" }}>
                  Réponse sous 24h
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          SERVICES — zig-zag photos réelles
      ══════════════════════════ */}
      <section id="services" style={{ width: '100%', padding: '100px 24px', background: 'white' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            {badge('#0ea5e9', 'Nos services')}
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#0f172a', lineHeight: 1.15, marginBottom: '16px' }}>
              Tout ce dont votre entreprise<br />a besoin pour exister en ligne
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto', fontFamily: "'DM Sans', sans-serif" }}>
              Trois expertises complémentaires, une seule agence. De la conception au lancement.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {services.map((srv, i) => (
              <div key={srv.titre} className="card-lift" style={{
                borderRadius: '24px',
                background: srv.bgCard,
                border: `1px solid ${srv.accent}18`,
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              }}>

                {/* Texte */}
                <div style={{
                  order: i % 2 === 0 ? 1 : 2,
                  padding: '52px 48px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px',
                }}>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                    fontSize: '3.5rem', color: srv.accent, opacity: 0.15,
                    lineHeight: 1, marginBottom: '-8px',
                  }} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.6rem', color: '#0f172a' }}>
                    {srv.titre}
                  </h3>

                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                    {srv.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {srv.tags.map(t => (
                      <span key={t} style={{
                        padding: '5px 14px', borderRadius: '999px',
                        fontSize: '0.75rem', fontWeight: 600,
                        color: srv.accent, background: 'white',
                        border: `1px solid ${srv.accent}30`,
                        fontFamily: "'DM Sans', sans-serif",
                        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link to="/contact" style={{
                    textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '12px 24px', borderRadius: '10px',
                    background: srv.accent, color: 'white',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 700,
                    width: 'fit-content',
                    boxShadow: `0 4px 14px ${srv.accent}40`,
                    transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    En savoir plus <IcoArrow />
                  </Link>
                </div>

                {/* Photo réelle */}
                <div style={{
                  order: i % 2 === 0 ? 2 : 1,
                  minHeight: 'clamp(220px, 40vw, 420px)',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <img
                    src={srv.photo}
                    alt={srv.photoAlt}
                    loading="lazy"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Overlay coloré léger */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(135deg, ${srv.accent}15, transparent)`,
                    pointerEvents: 'none',
                  }} aria-hidden="true" />
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          AVANTAGES
      ══════════════════════════ */}
      <section id="pourquoi" style={{ width: '100%', padding: '100px 24px', background: '#f8f9ff' }}>
        <div style={W}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px', alignItems: 'center' }}>

            <div>
              {badge('#6366f1', 'Pourquoi Webotix')}
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0f172a', lineHeight: 1.15, marginBottom: '20px' }}>
                Ce qui nous<br /><span style={{ color: '#6366f1' }}>distingue.</span>
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '32px', fontFamily: "'DM Sans', sans-serif" }}>
                Petite agence, grand engagement. On traite chaque projet comme si c'était le nôtre.
              </p>
              <Link to="/contact" style={{
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '12px 24px', borderRadius: '12px',
                background: '#6366f1', color: '#fff',
                fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 700,
                boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
              }}>
                Démarrer un projet <IcoArrow />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
              {avantages.map((a, i) => (
                <div key={a.txt} className="will-animate" style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '16px 20px', borderRadius: '12px',
                  background: 'white', border: '1px solid #f1f5f9',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transitionDelay: `${i * 0.07}s`,
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 6px 20px ${a.color}18`; e.currentTarget.style.borderColor = `${a.color}25` }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = '#f1f5f9' }}
                >
                  <IcoCheck color={a.color} />
                  <span style={{ color: '#334155', fontSize: '0.875rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
                    {a.txt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          PROCESSUS
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '100px 24px', background: 'white' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            {badge('#f59e0b', 'Comment on travaille')}
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#0f172a' }}>
              Simple, transparent, <span style={{ color: '#f59e0b' }}>efficace.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', alignItems: 'start' }}>
            {etapes.map((e, i) => (
              <div key={e.num} style={{ position: 'relative' }}>
                <div className="card-lift will-animate" style={{
                  background: e.bg, borderRadius: '20px',
                  padding: '32px 28px', border: `1px solid ${e.color}20`,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  transitionDelay: `${i * 0.08}s`,
                }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: '4rem', color: e.color, opacity: 0.25, lineHeight: 1, marginBottom: '16px' }} aria-hidden="true">
                    {e.num}
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#0f172a', marginBottom: '10px' }}>
                    {e.titre}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
                    {e.desc}
                  </p>
                  <div style={{ width: '32px', height: '3px', borderRadius: '2px', background: e.color, marginTop: '20px' }} />
                </div>
                {/* Flèche entre les étapes — visible uniquement sur desktop (masquée via style inline conditionnel) */}
                {i < etapes.length - 1 && (
                  <div style={{
                    display: 'none',
                    position: 'absolute', top: '50%', right: '-18px',
                    transform: 'translateY(-50%)', zIndex: 2,
                  }}
                  className="etape-fleche"
                  aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          TÉMOIGNAGES
      ══════════════════════════ */}
      <section id="temoignages" style={{ width: '100%', padding: '100px 24px', background: '#f8f9ff' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            {badge('#0ea5e9', 'Ils nous font confiance')}
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#0f172a' }}>
              Nos clients <span style={{ color: '#0ea5e9' }}>parlent</span> pour nous
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {temoignages.map((t, i) => (
              <div key={t.nom} className="card-lift" style={{
                background: `linear-gradient(135deg, ${t.accent}08, ${t.accent}04)`,
                borderRadius: '20px',
                padding: '32px', border: `1px solid ${t.accent}18`,
                borderTop: `3px solid ${t.accent}`,
                boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                animation: `fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) ${i*0.1}s both`,
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Guillemet décoratif en arrière-plan */}
                <div style={{
                  position: 'absolute', top: '12px', right: '20px',
                  fontFamily: 'Georgia, serif', fontSize: '7rem', lineHeight: 1,
                  color: t.accent, opacity: 0.07, userSelect: 'none',
                  pointerEvents: 'none',
                }} aria-hidden="true">"</div>

                <div style={{ display: 'flex', gap: '3px', marginBottom: '20px', position: 'relative' }}>
                  {[1,2,3,4,5].map(s => <IcoStar key={s} />)}
                </div>

                <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.8, marginBottom: '24px', fontFamily: "'DM Sans', sans-serif", fontStyle: 'italic', position: 'relative' }}>
                  "{t.texte}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: `1px solid ${t.accent}15` }}>
                  <img src={t.avatar} alt={`Photo de ${t.nom}`}
                    loading="lazy"
                    style={{ width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0, border: `2px solid ${t.accent}40` }} />
                  <div>
                    <div style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.875rem', fontFamily: "'DM Sans', sans-serif" }}>{t.nom}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.78rem', marginTop: '2px', fontFamily: "'DM Sans', sans-serif" }}>{t.poste}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CTA FINAL
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '100px 24px 120px', background: 'white' }}>
        <div style={W}>
          <div style={{
            borderRadius: '28px', padding: '72px 64px',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 60%, #8b5cf6 100%)',
            position: 'relative', overflow: 'hidden', textAlign: 'center',
            boxShadow: '0 24px 80px rgba(14,165,233,0.25)',
          }}>
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} aria-hidden="true" />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} aria-hidden="true" />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)',
                color: 'white', fontSize: '0.75rem', fontWeight: 600,
                letterSpacing: '0.05em', textTransform: 'uppercase',
                marginBottom: '24px', fontFamily: "'DM Sans', sans-serif",
              }}>
                Première consultation gratuite
              </div>

              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', lineHeight: 1.15, marginBottom: '20px' }}>
                Votre projet mérite mieux<br />qu'un template.
              </h2>

              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '460px', margin: '0 auto 40px', fontFamily: "'DM Sans', sans-serif" }}>
                Parlez-nous de votre idée. On vous répond honnêtement sur ce qu'on peut créer ensemble.
              </p>

              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" style={{
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '14px 32px', borderRadius: '12px',
                  background: 'white', color: '#0f172a',
                  fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 700,
                  boxShadow: '0 8px 28px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  Discutons de mon projet <IcoArrow />
                </Link>
                <Link to="/a-propos" style={{
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center',
                  padding: '14px 32px', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white', fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 500,
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  )
}

export default Home
