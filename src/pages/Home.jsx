import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Photos éditoriales Unsplash — sélection soignée pour un rendu quasi photographique
const PHOTOS = {
  hero:   'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&h=700&fit=crop&q=85',
  web:    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&h=480&fit=crop&q=85',
  app:    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&h=480&fit=crop&q=85',
  auto:   'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=480&fit=crop&q=85',
}

// Avatars témoignages — confirmés
const AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces&q=85',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=faces&q=85',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces&q=85',
]

const IcoArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12L12 2M12 2H5M12 2V9"/>
  </svg>
)
const IcoStar = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="#f59e0b">
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
      photoAlt: 'Développeur travaillant sur la conception d\'un site web moderne',
      accent: '#0ea5e9',
      bgCard: 'linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)',
    },
    {
      titre: 'Applications sur mesure',
      desc: 'Applications web et mobiles pensées pour vos utilisateurs. Dashboard, espace client, app de gestion — on conçoit et on développe du premier écran à la mise en ligne.',
      tags: ['Application web', 'App mobile', 'Dashboard', 'UX/UI'],
      photo: PHOTOS.app,
      photoAlt: 'Application mobile sur smartphone, interface soignée',
      accent: '#6366f1',
      bgCard: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
    },
    {
      titre: 'Automatisations',
      desc: 'Workflows intelligents connectés à vos outils. On supprime vos tâches répétitives pour que vous puissiez vous concentrer sur ce qui fait vraiment avancer votre activité.',
      tags: ['Make / Zapier', 'Chatbots', 'Intégrations API', 'Notifications'],
      photo: PHOTOS.auto,
      photoAlt: 'Système d\'automatisation, connexion d\'outils numériques',
      accent: '#f59e0b',
      bgCard: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
    },
  ]

  const temoignages = [
    {
      nom: 'Celine Mounous',
      poste: 'Dirigeante — Refonte site web',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&q=85',
      texte: 'Agence sollicitée pour la refonte de notre site web, tout était parfait de l\'accompagnement, au respect des demandes à la livraison du site. Très bonne communication.',
      accent: '#0ea5e9',
    },
    {
      nom: 'Virginie Robet',
      poste: 'Cliente — Création de site web',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces&q=85',
      texte: 'Travail sérieux, rapide et efficace ! Toujours disponible et réactif, propositions pertinentes, résultat au top, je recommande vivement !',
      accent: '#6366f1',
    },
    {
      nom: 'Dylan Leluan',
      poste: 'Entrepreneur — Création de site web',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&q=85',
      texte: "J'ai jamais vu un site aussi bien fait pour un petit entrepreneur. Je recommande sans hésitation.",
      accent: '#f59e0b',
    },
  ]

  const etapes = [
    { num: '01', titre: 'On écoute',    desc: 'Un échange pour comprendre votre projet, vos objectifs et vos contraintes.',              color: '#0ea5e9', bg: 'linear-gradient(135deg, #eff6ff, #e0f2fe)' },
    { num: '02', titre: 'On conçoit',   desc: 'Maquette et plan technique validés ensemble avant tout développement.',                    color: '#6366f1', bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)' },
    { num: '03', titre: 'On construit', desc: 'Développement partagé régulièrement pour que vous suiviez chaque avancée.',               color: '#f59e0b', bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)' },
    { num: '04', titre: 'On livre',     desc: 'Mise en ligne, formation et support. Vous repartez autonome et confiant.',                 color: '#22c55e', bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)' },
  ]

  const avantages = [
    { txt: 'Livraison dans les délais garantie',         color: '#0ea5e9' },
    { txt: 'Contact direct avec le développeur',         color: '#6366f1' },
    { txt: 'Modifications illimitées pendant le projet', color: '#f59e0b' },
    { txt: 'Accompagnement après la mise en ligne',      color: '#22c55e' },
    { txt: 'Technologies modernes et performantes',      color: '#0ea5e9' },
    { txt: 'Devis gratuit sans engagement',              color: '#6366f1' },
  ]

  // Formulaire lead magnet — audit gratuit
  const [audit, setAudit] = useState({ prenom: '', email: '', url: '' })
  const [auditStatut, setAuditStatut] = useState('idle') // idle | envoi | ok | erreur

  const envoyerAudit = async (e) => {
    e.preventDefault()
    setAuditStatut('envoi')
    try {
      const rep = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '5dcf7e4a-8446-480c-8c0a-1a5669b1a73e',
          subject: `🔍 Audit gratuit demandé par ${audit.prenom}`,
          from_name: audit.prenom,
          email: audit.email,
          url_site: audit.url || 'Non renseignée',
          botcheck: '',
        }),
      })
      const data = await rep.json()

      // Notification WhatsApp via n8n
      fetch('https://n8n.webotix.cloud/webhook/audit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prenom: audit.prenom, email: audit.email, url: audit.url || '' }),
      }).catch(() => {})

      setAuditStatut(data.success ? 'ok' : 'erreur')
    } catch {
      setAuditStatut('erreur')
    }
  }

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
          HERO — fond sombre éditorial
      ══════════════════════════ */}
      <section style={{
        width: '100%', minHeight: '100dvh',
        background: 'linear-gradient(140deg, #06091a 0%, #0d1530 55%, #080e20 100%)',
        display: 'flex', alignItems: 'center',
        padding: '120px 24px 90px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Halos lumineux décoratifs */}
        <div style={{ position: 'absolute', top: '0%', left: '35%', width: '700px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} aria-hidden="true" />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} aria-hidden="true" />
        {/* Grille de points */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} aria-hidden="true" />

        <div style={{ ...W, width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

            {/* ─── Colonne gauche : texte ─── */}
            <div className="fade-up">
              {/* Badge eyebrow */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px', borderRadius: '999px',
                background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.22)',
                color: '#38bdf8', fontSize: '0.72rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: '32px', fontFamily: "'DM Sans', sans-serif",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0ea5e9', display: 'inline-block', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                Agence digitale · France · Depuis 2025
              </div>

              {/* Titre principal — grand et impactant */}
              <h1 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2.8rem, 4.8vw, 5rem)',
                color: '#f1f5f9', lineHeight: 1.04, letterSpacing: '-0.03em',
                marginBottom: '28px',
              }}>
                Votre activité<br />
                mérite un web<br />
                <span style={{
                  background: 'linear-gradient(90deg, #38bdf8 0%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  qui convertit.
                </span>
              </h1>

              <p style={{
                color: 'rgba(241,245,249,0.6)', fontSize: '1.05rem', lineHeight: 1.8,
                maxWidth: '430px', marginBottom: '44px',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Sites web, applications et automatisations — conçus pour faire
                grandir votre entreprise. Livraison rapide, résultats concrets.
              </p>

              {/* Boutons CTA */}
              <div className="hero-btns" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('ouvrir-audit'))}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    padding: '15px 28px', borderRadius: '12px', border: 'none',
                    background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                    color: '#fff', cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 700,
                    boxShadow: '0 8px 32px rgba(14,165,233,0.35)',
                    transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(14,165,233,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(14,165,233,0.35)' }}
                >
                  Audit gratuit
                  <span style={{ width: 26, height: 26, borderRadius: 6, background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IcoArrow />
                  </span>
                </button>
                <Link to="/contact" style={{
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '15px 28px', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#f1f5f9',
                  fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  Demander un devis
                </Link>
              </div>

              {/* Preuves sociales — avatars + étoiles */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex' }}>
                  {AVATARS.map((src, i) => (
                    <img key={i} src={src} alt=""
                      style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', border: '2px solid #06091a', marginLeft: i > 0 ? '-10px' : 0 }} />
                  ))}
                </div>
                <div>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '3px' }}>
                    {[...Array(5)].map((_, i) => <IcoStar key={i} />)}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: "'DM Sans', sans-serif", margin: 0 }}>
                    30+ clients · Satisfaction 100%
                  </p>
                </div>
              </div>
            </div>

            {/* ─── Colonne droite : navigateur fictif avec photo réelle ─── */}
            <div className="fade-up-2" style={{ position: 'relative' }}>
              {/* Fenêtre "navigateur" */}
              <div style={{
                background: '#0f1729',
                borderRadius: '18px', overflow: 'hidden',
                boxShadow: '0 48px 96px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07)',
              }}>
                {/* Barre du navigateur */}
                <div style={{
                  padding: '12px 18px', background: '#1a2540',
                  display: 'flex', alignItems: 'center', gap: '12px',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}>
                  {/* Points de contrôle macOS */}
                  <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
                  </div>
                  {/* Barre d'adresse */}
                  <div style={{
                    flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '6px',
                    padding: '5px 14px', fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace',
                    display: 'flex', alignItems: 'center', gap: '8px',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M10 1a7 7 0 100 14A7 7 0 0010 1zM3 10h14" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                    </svg>
                    votre-site.fr
                  </div>
                </div>
                {/* Photo éditoriale */}
                <img
                  src={PHOTOS.hero}
                  alt="Équipe Webotix en réunion stratégique autour d'un projet digital"
                  style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                  loading="eager"
                />
              </div>

              {/* Badge flottant — livraison */}
              <div className="hero-badge-float" style={{
                position: 'absolute', bottom: '-20px', left: '-22px',
                background: '#fff', borderRadius: '14px',
                padding: '14px 18px', boxShadow: '0 20px 48px rgba(0,0,0,0.18)',
                display: 'flex', alignItems: 'center', gap: '12px',
                border: '1px solid rgba(0,0,0,0.06)',
                animation: 'float 5s ease-in-out infinite',
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '10px',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.82rem', color: '#0f172a', whiteSpace: 'nowrap' }}>Site livré en 2 semaines</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: "'DM Sans', sans-serif", marginTop: '2px' }}>Délai moyen pour un vitrine</div>
                </div>
              </div>

              {/* Badge flottant — réponse */}
              <div className="hero-badge-float" style={{
                position: 'absolute', top: '22px', right: '-18px',
                background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                borderRadius: '12px', padding: '10px 18px',
                boxShadow: '0 8px 28px rgba(14,165,233,0.45)',
                animation: 'float 4s ease-in-out infinite 1.5s',
              }}>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '0.78rem', fontFamily: "'DM Sans', sans-serif", whiteSpace: 'nowrap' }}>
                  Réponse sous 24h
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════
          STATS — chiffres clés sur fond sombre
      ══════════════════════════ */}
      <section style={{
        width: '100%', padding: '72px 24px',
        background: 'linear-gradient(90deg, #080e20 0%, #0d1530 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ ...W, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0' }}>
          {[
            { val: '30+',  label: 'Projets livrés',     color: '#38bdf8', desc: 'Sites, apps & automatisations' },
            { val: '100%', label: 'Clients satisfaits',  color: '#818cf8', desc: 'Zéro projet abandonné' },
            { val: '2 sem', label: 'Délai moyen',         color: '#fbbf24', desc: 'Pour un site vitrine complet' },
            { val: '24h',  label: 'Délai de réponse',    color: '#34d399', desc: 'Tous les jours de la semaine' },
          ].map((s, i) => (
            <div key={s.label} style={{
              textAlign: 'center', padding: '20px 16px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}>
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
                color: s.color, lineHeight: 1, marginBottom: '8px',
                letterSpacing: '-0.02em',
              }}>
                {s.val}
              </div>
              <div style={{ color: '#f1f5f9', fontSize: '0.85rem', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", marginBottom: '4px' }}>
                {s.label}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem', fontFamily: "'DM Sans', sans-serif" }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════
          SERVICES — zig-zag avec photos éditoriales
      ══════════════════════════ */}
      <section id="services" style={{ width: '100%', padding: '100px 24px', background: 'white' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            {badge('#0ea5e9', 'Nos services')}
            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#0f172a',
              lineHeight: 1.15, marginBottom: '16px',
            }}>
              Tout ce dont votre entreprise<br />a besoin pour exister en ligne
            </h2>
            <p style={{
              color: '#64748b', fontSize: '1rem', lineHeight: 1.75,
              maxWidth: '520px', margin: '0 auto',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Trois expertises complémentaires, une seule agence. De la conception au lancement.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {services.map((srv, i) => (
              <div key={srv.titre} className="card-lift" style={{
                borderRadius: '24px',
                background: srv.bgCard,
                border: `1px solid ${srv.accent}18`,
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
              }}>

                {/* Texte */}
                <div className="service-text-inner" style={{
                  order: i % 2 === 0 ? 1 : 2,
                  padding: '52px 48px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px',
                }}>
                  {/* Numéro décoratif */}
                  <div style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                    fontSize: '3.8rem', color: srv.accent, opacity: 0.13,
                    lineHeight: 1, marginBottom: '-8px',
                  }} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.65rem', color: '#0f172a' }}>
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
                        border: `1px solid ${srv.accent}28`,
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
                    boxShadow: `0 4px 16px ${srv.accent}38`,
                    transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    En savoir plus <IcoArrow />
                  </Link>
                </div>

                {/* Photo réelle Unsplash */}
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
                      transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(135deg, ${srv.accent}12, transparent)`,
                    pointerEvents: 'none',
                  }} aria-hidden="true" />
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          AVANTAGES — ce qui nous distingue
      ══════════════════════════ */}
      <section id="pourquoi" style={{ width: '100%', padding: '100px 24px', background: '#f8f9ff' }}>
        <div style={W}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px', alignItems: 'center' }}>

            <div>
              {badge('#6366f1', 'Pourquoi Webotix')}
              <h2 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#0f172a',
                lineHeight: 1.15, marginBottom: '20px',
              }}>
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
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(99,102,241,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.3)' }}
              >
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
                  cursor: 'default',
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
          PROCESSUS — 4 étapes
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '100px 24px', background: 'white' }}>
        <div style={W}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            {badge('#f59e0b', 'Comment on travaille')}
            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#0f172a',
            }}>
              Simple, transparent, <span style={{ color: '#f59e0b' }}>efficace.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', alignItems: 'start' }}>
            {etapes.map((et, i) => (
              <div key={et.num} style={{ position: 'relative' }}>
                <div className="card-lift will-animate" style={{
                  background: et.bg, borderRadius: '22px',
                  padding: '36px 28px', border: `1px solid ${et.color}20`,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  transitionDelay: `${i * 0.08}s`,
                }}>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                    fontSize: '4rem', color: et.color, opacity: 0.22,
                    lineHeight: 1, marginBottom: '18px',
                  }} aria-hidden="true">
                    {et.num}
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#0f172a', marginBottom: '10px' }}>
                    {et.titre}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
                    {et.desc}
                  </p>
                  <div style={{ width: '32px', height: '3px', borderRadius: '2px', background: et.color, marginTop: '22px' }} />
                </div>
                {i < etapes.length - 1 && (
                  <div style={{ display: 'none', position: 'absolute', top: '50%', right: '-18px', transform: 'translateY(-50%)', zIndex: 2 }}
                    className="etape-fleche" aria-hidden="true">
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
          TÉMOIGNAGES — style éditorial premium
      ══════════════════════════ */}
      <section id="temoignages" style={{
        width: '100%', padding: '100px 24px',
        background: 'linear-gradient(140deg, #06091a 0%, #0d1530 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Halo décoratif */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '600px', background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} aria-hidden="true" />

        <div style={{ ...W, position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'inline-block', padding: '5px 16px', borderRadius: '999px',
              background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.22)',
              color: '#38bdf8', fontSize: '0.72rem', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              marginBottom: '16px', fontFamily: "'DM Sans', sans-serif",
            }}>
              Ils nous font confiance
            </div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#f1f5f9',
            }}>
              Nos clients{' '}
              <span style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                parlent
              </span>{' '}
              pour nous
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {temoignages.map((t, i) => (
              <div key={t.nom} style={{
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '20px',
                padding: '36px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: `3px solid ${t.accent}`,
                position: 'relative', overflow: 'hidden',
                animation: `fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s both`,
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}>
                {/* Grand guillemet décoratif */}
                <div style={{
                  position: 'absolute', top: '10px', right: '20px',
                  fontFamily: 'Georgia, serif', fontSize: '8rem', lineHeight: 1,
                  color: t.accent, opacity: 0.09, userSelect: 'none', pointerEvents: 'none',
                }} aria-hidden="true">"</div>

                <div style={{ display: 'flex', gap: '3px', marginBottom: '22px' }}>
                  {[1,2,3,4,5].map(s => <IcoStar key={s} />)}
                </div>

                <p style={{
                  color: 'rgba(241,245,249,0.75)', fontSize: '0.925rem', lineHeight: 1.85,
                  marginBottom: '28px', fontFamily: "'DM Sans', sans-serif",
                  fontStyle: 'italic', position: 'relative',
                }}>
                  "{t.texte}"
                </p>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <img src={t.avatar} alt={`Photo de ${t.nom}`}
                    loading="lazy"
                    style={{ width: '46px', height: '46px', borderRadius: '50%', flexShrink: 0, border: `2px solid ${t.accent}50` }} />
                  <div>
                    <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.875rem', fontFamily: "'DM Sans', sans-serif" }}>{t.nom}</div>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', marginTop: '2px', fontFamily: "'DM Sans', sans-serif" }}>{t.poste}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          LEAD MAGNET — Audit gratuit
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '100px 24px', background: '#f8f9ff' }}>
        <div style={W}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '60px', alignItems: 'center',
          }}>

            {/* Texte gauche */}
            <div>
              {badge('#6366f1', 'Offre gratuite')}
              <h2 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#0f172a', lineHeight: 1.2, marginBottom: '16px',
              }}>
                Votre site attire-t-il vraiment des clients ?
              </h2>
              <p style={{
                color: '#64748b', fontSize: '1rem', lineHeight: 1.8,
                fontFamily: "'DM Sans', sans-serif", marginBottom: '28px',
              }}>
                On analyse votre site gratuitement — design, vitesse, SEO, et ce qui bloque vos visiteurs. Vous recevez un rapport clair et honnête sous 48h.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { txt: 'Analyse SEO et visibilité Google',            color: '#0ea5e9' },
                  { txt: 'Audit design et expérience mobile',           color: '#6366f1' },
                  { txt: 'Rapport détaillé sous 48h, sans engagement',  color: '#22c55e' },
                ].map(({ txt, color }) => (
                  <div key={txt} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ color: '#475569', fontSize: '0.92rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>{txt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulaire droite */}
            <div style={{
              background: 'white', borderRadius: '24px',
              padding: '40px', boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
              border: '1px solid #e2e8f0',
            }}>
              {auditStatut === 'ok' ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    background: '#22c55e15', margin: '0 auto 20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M6 14l6 6 10-10" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#0f172a', marginBottom: '10px' }}>
                    Demande reçue !
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
                    On analyse votre site et vous envoie un rapport complet sous 48h. Vérifiez votre boîte mail.
                  </p>
                </div>
              ) : (
                <form onSubmit={envoyerAudit}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.3rem', color: '#0f172a', marginBottom: '6px' }}>
                    Audit gratuit de votre site
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', fontFamily: "'DM Sans', sans-serif", marginBottom: '28px' }}>
                    Réponse sous 48h · Sans engagement
                  </p>

                  {/* Champ prénom */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#374151', fontFamily: "'DM Sans', sans-serif", marginBottom: '6px' }}>
                      Votre prénom *
                    </label>
                    <input
                      type="text" required
                      value={audit.prenom}
                      onChange={e => setAudit(a => ({ ...a, prenom: e.target.value }))}
                      placeholder="Ex : Marc"
                      style={{ width: '100%', padding: '11px 16px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '0.9rem', fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#f8fafc', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s ease' }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0ea5e9' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0' }}
                    />
                  </div>

                  {/* Champ email */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#374151', fontFamily: "'DM Sans', sans-serif", marginBottom: '6px' }}>
                      Votre email *
                    </label>
                    <input
                      type="email" required
                      value={audit.email}
                      onChange={e => setAudit(a => ({ ...a, email: e.target.value }))}
                      placeholder="vous@exemple.fr"
                      style={{ width: '100%', padding: '11px 16px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '0.9rem', fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#f8fafc', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s ease' }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0ea5e9' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0' }}
                    />
                  </div>

                  {/* Champ URL */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#374151', fontFamily: "'DM Sans', sans-serif", marginBottom: '6px' }}>
                      URL de votre site <span style={{ color: '#94a3b8', fontWeight: 400 }}>(optionnel)</span>
                    </label>
                    <input
                      type="url"
                      value={audit.url}
                      onChange={e => setAudit(a => ({ ...a, url: e.target.value }))}
                      placeholder="https://votre-site.fr"
                      style={{ width: '100%', padding: '11px 16px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '0.9rem', fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: '#f8fafc', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s ease' }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0ea5e9' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={auditStatut === 'envoi'}
                    style={{
                      width: '100%', padding: '13px', borderRadius: '12px',
                      background: auditStatut === 'envoi' ? '#94a3b8' : 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                      color: 'white', border: 'none', cursor: auditStatut === 'envoi' ? 'not-allowed' : 'pointer',
                      fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 700,
                      boxShadow: auditStatut === 'envoi' ? 'none' : '0 4px 14px rgba(14,165,233,0.35)',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {auditStatut === 'envoi' ? 'Envoi en cours…' : 'Demander mon audit gratuit →'}
                  </button>

                  {auditStatut === 'erreur' && (
                    <p style={{ color: '#ef4444', fontSize: '0.82rem', textAlign: 'center', fontFamily: "'DM Sans', sans-serif", marginTop: '12px' }}>
                      Une erreur est survenue. Réessayez ou écrivez-nous directement.
                    </p>
                  )}
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CTA FINAL — fond sombre assorti au hero
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '100px 24px 120px', background: 'white' }}>
        <div style={W}>
          <div className="cta-final-inner" style={{
            borderRadius: '28px', padding: '80px 64px',
            background: 'linear-gradient(140deg, #06091a 0%, #0d1530 60%, #080e20 100%)',
            position: 'relative', overflow: 'hidden', textAlign: 'center',
            boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            {/* Halos */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse, rgba(14,165,233,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} aria-hidden="true" />
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(99,102,241,0.06)', pointerEvents: 'none' }} aria-hidden="true" />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(14,165,233,0.05)', pointerEvents: 'none' }} aria-hidden="true" />
            {/* Grille de points */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} aria-hidden="true" />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px', borderRadius: '999px',
                background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.22)',
                color: '#38bdf8', fontSize: '0.72rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: '28px', fontFamily: "'DM Sans', sans-serif",
              }}>
                Première consultation gratuite
              </div>

              <h2 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.6rem)', color: '#f1f5f9',
                lineHeight: 1.1, marginBottom: '20px',
              }}>
                Votre projet mérite mieux<br />
                <span style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  qu'un template.
                </span>
              </h2>

              <p style={{
                color: 'rgba(241,245,249,0.55)', fontSize: '1.05rem', lineHeight: 1.75,
                maxWidth: '460px', margin: '0 auto 44px',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Parlez-nous de votre idée. On vous répond honnêtement sur ce qu'on peut créer ensemble.
              </p>

              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" style={{
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '15px 34px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                  color: '#fff',
                  fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 700,
                  boxShadow: '0 8px 32px rgba(14,165,233,0.35)',
                  transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(14,165,233,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(14,165,233,0.35)' }}
                >
                  Discutons de mon projet <IcoArrow />
                </Link>
                <Link to="/a-propos" style={{
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center',
                  padding: '15px 34px', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)',
                  color: 'rgba(241,245,249,0.75)',
                  fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 500,
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  )
}

export default Home
