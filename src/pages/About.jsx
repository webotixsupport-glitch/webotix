import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

// Photos réelles Unsplash — équipe et travail
const PHOTOS = {
  hero:  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=85',
  team:  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&fit=crop&q=85',
}

// Icônes SVG simples — pas d'emoji
const IcoTarget = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="9" stroke="#0ea5e9" strokeWidth="1.8"/>
    <circle cx="11" cy="11" r="5" stroke="#0ea5e9" strokeWidth="1.8"/>
    <circle cx="11" cy="11" r="2" fill="#0ea5e9"/>
  </svg>
)
const IcoUsers = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="8" cy="8" r="3.5" stroke="#6366f1" strokeWidth="1.8"/>
    <path d="M2 19c0-3.3 2.7-6 6-6" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="15" cy="8" r="3.5" stroke="#6366f1" strokeWidth="1.8"/>
    <path d="M20 19c0-3.3-2.7-6-6-6" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)
const IcoRocket = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2C11 2 15 5 15 11c0 3-4 8-4 8S7 14 7 11C7 5 11 2 11 2z" stroke="#f59e0b" strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="11" cy="11" r="2" fill="#f59e0b"/>
    <path d="M7 15L4 18M15 15l3 3" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const IcoShield = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2l7 3v6c0 4-3.5 7-7 9-3.5-2-7-5-7-9V5l7-3z" stroke="#22c55e" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M8 11l2 2 4-4" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function About() {

  const valeurs = [
    {
      icone: <IcoTarget />,
      titre: 'Résultats concrets',
      desc: 'On ne crée pas juste de beaux sites. On crée des outils qui travaillent pour vous et génèrent de vrais résultats.',
      accent: '#0ea5e9',
      bg: 'linear-gradient(135deg, #eff6ff, #e0f2fe)',
    },
    {
      icone: <IcoUsers />,
      titre: 'Contact direct',
      desc: 'Vous parlez directement à la personne qui conçoit votre projet. Pas d\'intermédiaire, pas de délai inutile.',
      accent: '#6366f1',
      bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    },
    {
      icone: <IcoRocket />,
      titre: 'Technologies modernes',
      desc: 'React, Node.js, Make, Zapier — on utilise les meilleurs outils pour un résultat rapide et évolutif.',
      accent: '#f59e0b',
      bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    },
    {
      icone: <IcoShield />,
      titre: 'Honnêteté totale',
      desc: 'On vous dit ce dont vous avez vraiment besoin. Transparence sur les coûts, les délais et les possibilités.',
      accent: '#22c55e',
      bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    },
  ]

  const competences = [
    { label: 'Création web & design', pct: 95, c: '#0ea5e9' },
    { label: 'Applications sur mesure', pct: 85, c: '#6366f1' },
    { label: 'Automatisations',        pct: 90, c: '#f59e0b' },
    { label: 'SEO & Performance',      pct: 88, c: '#22c55e' },
  ]

  const techs = ['React', 'Tailwind CSS', 'Node.js', 'Vite', 'Make', 'Zapier', 'Figma', 'SEO', 'APIs']

  // Animation des barres de compétences au scroll
  const [barresVisibles, setBarresVisibles] = useState(false)
  const refBarres = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setBarresVisibles(true)
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    if (refBarres.current) obs.observe(refBarres.current)
    return () => obs.disconnect()
  }, [])

  const s = {
    section: { width: '100%', padding: '80px 24px' },
    inner:   { maxWidth: '1200px', margin: '0 auto' },
  }

  return (
    <div style={{ width: '100%', background: '#f8f9ff' }}>

      {/* ===== HERO SPLIT ===== */}
      <section style={{
        ...s.section,
        paddingTop: '140px', paddingBottom: '80px',
        background: 'linear-gradient(160deg, #f0f9ff 0%, #f8f9ff 60%)',
      }}>
        <div style={{
          ...s.inner,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px', alignItems: 'center',
        }}>

          {/* Texte gauche */}
          <div className="will-animate">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: '999px',
              border: '1px solid rgba(14,165,233,0.25)',
              background: 'rgba(14,165,233,0.06)',
              color: '#0ea5e9', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              marginBottom: '24px',
            }}>
              Notre histoire
            </div>

            <h1 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              color: '#0f172a', lineHeight: 1.1, marginBottom: '20px',
            }}>
              Passionnés par{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                le digital
              </span>
            </h1>

            <p style={{
              color: '#475569', fontSize: '1.1rem', lineHeight: 1.8,
              maxWidth: '520px', marginBottom: '32px',
            }}>
              Webotix, c'est l'alliance entre créativité et technologie —
              au service de votre réussite en ligne depuis 2025.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 28px', borderRadius: '12px',
                background: '#0ea5e9', color: '#fff',
                fontSize: '0.95rem', fontWeight: 700,
                boxShadow: '0 4px 16px rgba(14,165,233,0.35)',
                transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='#38bdf8'; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background='#0ea5e9'; e.currentTarget.style.transform='translateY(0)' }}
              >
                Travaillons ensemble
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 11L11 2M11 2H4.5M11 2V8.5"/></svg>
              </Link>
            </div>
          </div>

          {/* Photo droite */}
          <div className="will-animate" style={{ transitionDelay: '0.12s', position: 'relative' }}>
            {/* Cadre coloré derrière */}
            <div style={{
              position: 'absolute', inset: '-12px', borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(99,102,241,0.15))',
              zIndex: 0,
            }} />
            <img
              src={PHOTOS.hero}
              alt="Équipe Webotix au travail"
              style={{
                width: '100%', height: 'auto', borderRadius: '18px',
                display: 'block', position: 'relative', zIndex: 1,
                boxShadow: '0 24px 60px rgba(14,165,233,0.12)',
                objectFit: 'cover', maxHeight: '420px',
              }}
              loading="lazy"
            />
            {/* Badge flottant */}
            <div style={{
              position: 'absolute', bottom: '-18px', left: '24px', zIndex: 2,
              background: '#fff', borderRadius: '14px',
              padding: '12px 20px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.10)',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l1.5 3L13 4.5l-2.5 2.5.5 3.5L8 9l-3 1.5.5-3.5L3 4.5 6.5 4z" fill="white"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>Fondée en 2025</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Agence digitale · France</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== QUI SOMMES-NOUS ===== */}
      <section style={{ ...s.section, background: '#fff' }}>
        <div style={{
          ...s.inner,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px', alignItems: 'start',
        }}>

          {/* Texte */}
          <div className="will-animate">
            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              color: '#0f172a', marginBottom: '28px',
            }}>
              Webotix, c'est{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>qui ?</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ color: '#475569', fontSize: '0.97rem', lineHeight: 1.8 }}>
                Webotix est née en <strong style={{ color: '#0f172a' }}>2025</strong> d'une conviction simple : chaque entreprise mérite une présence digitale qui lui ressemble et qui travaille pour elle.
              </p>
              <p style={{ color: '#475569', fontSize: '0.97rem', lineHeight: 1.8 }}>
                On est une <strong style={{ color: '#0ea5e9' }}>petite agence, et on l'assume fièrement</strong>. Pas de chef de projet fantôme, pas de réunions sans fin. Vous êtes en contact direct avec la personne qui construit votre projet.
              </p>
              <p style={{ color: '#475569', fontSize: '0.97rem', lineHeight: 1.8 }}>
                Notre force ? Comprendre votre activité avant de toucher au code. On pose les bonnes questions, on comprend vos enjeux, et on vous livre quelque chose qui <strong style={{ color: '#0f172a' }}>a du sens pour votre business</strong>.
              </p>
              <p style={{ color: '#475569', fontSize: '0.97rem', lineHeight: 1.8 }}>
                Sites web, applications, automatisations — on maîtrise les trois. Et on adore les projets qui combinent tout ça.
              </p>
            </div>
          </div>

          {/* Carte compétences — thème clair */}
          <div className="will-animate" style={{ transitionDelay: '0.1s',
            background: '#f8f9ff',
            border: '1px solid rgba(14,165,233,0.15)',
            borderRadius: '20px', padding: '32px',
            position: 'relative',
            boxShadow: '0 4px 24px rgba(14,165,233,0.06)',
          }}>
            {/* Badge flottant */}
            <div style={{
              position: 'absolute', top: '-14px', right: '24px',
              background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
              borderRadius: '10px', padding: '7px 16px',
              color: '#fff', fontSize: '0.75rem', fontWeight: 700,
              boxShadow: '0 6px 20px rgba(14,165,233,0.35)',
            }}>
              Nos expertises
            </div>

            {/* En-tête carte */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              paddingBottom: '20px', marginBottom: '24px',
              borderBottom: '1px solid rgba(14,165,233,0.12)',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l1.5 3.5 3.5.5-2.5 2.5.6 3.5L9 10.5l-3.1 1.5.6-3.5L4 6l3.5-.5z" fill="white"/></svg>
              </div>
              <div>
                <div style={{ color: '#0f172a', fontWeight: 700, fontFamily: "'Outfit', sans-serif", fontSize: '1rem' }}>Webotix</div>
                <div style={{ color: '#0ea5e9', fontSize: '0.75rem', marginTop: '2px' }}>Agence digitale · France</div>
              </div>
            </div>

            {/* Barres de compétences — animées au scroll via IntersectionObserver */}
            <div ref={refBarres} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
              {competences.map((comp, i) => (
                <div key={comp.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#475569', fontSize: '0.875rem', fontWeight: 500 }}>{comp.label}</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: comp.c }}>{comp.pct}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(14,165,233,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: barresVisibles ? `${comp.pct}%` : '0%',
                      background: `linear-gradient(90deg, ${comp.c}, ${comp.c}aa)`,
                      borderRadius: '3px',
                      transition: `width 1s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s`,
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div style={{ borderTop: '1px solid rgba(14,165,233,0.12)', paddingTop: '20px' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                Technologies
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {techs.map((t) => (
                  <span key={t} style={{
                    padding: '4px 12px', borderRadius: '999px',
                    fontSize: '0.72rem', fontWeight: 600,
                    color: '#0ea5e9', background: 'rgba(14,165,233,0.07)',
                    border: '1px solid rgba(14,165,233,0.2)',
                    transition: 'all 0.2s cubic-bezier(0.22,1,0.36,1)',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(14,165,233,0.18)'; e.currentTarget.style.borderColor = 'rgba(14,165,233,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(14,165,233,0.07)'; e.currentTarget.style.borderColor = 'rgba(14,165,233,0.2)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALEURS ===== */}
      <section style={{ ...s.section, background: '#f8f9ff' }}>
        <div style={{ ...s.inner, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: '999px',
            border: '1px solid rgba(99,102,241,0.25)',
            background: 'rgba(99,102,241,0.06)',
            color: '#6366f1', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Ce qui nous guide
          </div>

          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            color: '#0f172a', marginBottom: '12px',
          }}>
            Nos{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>valeurs</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '48px' }}>
            Ce qui nous différencie au quotidien.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {valeurs.map((v, i) => (
              <div key={v.titre} className="will-animate" style={{ transitionDelay: `${i * 0.08}s`,
                background: v.bg,
                borderRadius: '20px', padding: '32px 28px',
                textAlign: 'left',
                border: `1px solid ${v.accent}18`,
                transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s cubic-bezier(0.22,1,0.36,1), opacity 0.6s cubic-bezier(0.22,1,0.36,1)',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow=`0 20px 50px ${v.accent}15` }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                  boxShadow: `0 4px 14px ${v.accent}20`,
                }}>
                  {v.icone}
                </div>
                <div style={{ color: '#0f172a', fontWeight: 700, fontSize: '1rem', marginBottom: '10px', fontFamily: "'Outfit', sans-serif" }}>
                  {v.titre}
                </div>
                <div style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHOTO ÉQUIPE + CITATION ===== */}
      <section style={{ ...s.section, background: '#fff' }}>
        <div style={{
          ...s.inner,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px', alignItems: 'center',
        }}>

          {/* Photo */}
          <div className="will-animate" style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-10px', borderRadius: '22px',
              background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(14,165,233,0.12))',
            }} />
            <img
              src={PHOTOS.team}
              alt="Collaboration et travail d'équipe chez Webotix"
              style={{
                width: '100%', height: 'auto', maxHeight: '380px',
                objectFit: 'cover', borderRadius: '18px',
                display: 'block', position: 'relative', zIndex: 1,
                boxShadow: '0 20px 50px rgba(99,102,241,0.12)',
              }}
              loading="lazy"
            />
          </div>

          {/* Citation */}
          <div className="will-animate" style={{ transitionDelay: '0.1s' }}>
            <div style={{ fontSize: '5rem', color: 'rgba(14,165,233,0.15)', lineHeight: 0.7, marginBottom: '20px', fontFamily: 'Georgia, serif' }} aria-hidden="true">"</div>
            <blockquote style={{
              fontStyle: 'italic',
              fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
              color: '#334155', lineHeight: 1.75,
              marginBottom: '24px',
            }}>
              Vous n'êtes pas un numéro chez Webotix. Votre projet reçoit toute notre
              attention, du premier message jusqu'à la mise en ligne.
            </blockquote>
            <div style={{ color: '#0ea5e9', fontWeight: 700, fontSize: '0.95rem', marginBottom: '36px' }}>
              — L'équipe Webotix
            </div>

            <Link to="/contact" style={{
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 28px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
              color: '#fff', fontSize: '0.95rem', fontWeight: 700,
              boxShadow: '0 6px 24px rgba(14,165,233,0.28)',
              transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(14,165,233,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 6px 24px rgba(14,165,233,0.28)' }}
            >
              Démarrer un projet
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 11L11 2M11 2H4.5M11 2V8.5"/></svg>
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}

export default About
