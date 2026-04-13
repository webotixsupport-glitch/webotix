import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Icônes SVG
const IcoCheck = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill={color} opacity="0.12"/>
    <path d="M5 9l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const IcoArrow = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 11L11 2M11 2H4.5M11 2V8.5"/>
  </svg>
)

// Badge coloré réutilisable
const Badge = ({ color, text }) => (
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

// Liens de paiement Stripe — générés via API
const STRIPE_LINKS = {
  starter: {
    mensuel: 'https://buy.stripe.com/9B65kE8GX24pb3v6Ejffy00',
    annuel:  'https://buy.stripe.com/fZu14o9L1cJ3gnPgeTffy01',
  },
  business: {
    mensuel: 'https://buy.stripe.com/4gM8wQg9p6kF9Zr1jZffy02',
    annuel:  'https://buy.stripe.com/00wcN64qHcJ3c7z2o3ffy03',
  },
  premium: {
    mensuel: 'https://buy.stripe.com/eVq6oIbT95gB5JbaUzffy04',
    annuel:  'https://buy.stripe.com/fZu00ke1h8sN8Vn9Qvffy05',
  },
}

// Données des 3 packs d'abonnement
const packs = [
  {
    nom: 'Starter',
    sousTitre: "L'essentiel pour être en ligne",
    prix: { mensuel: 49, annuel: 39 },
    accent: '#0ea5e9',
    populaire: false,
    inclus: [
      'Hébergement sur VPS Webotix',
      'Sauvegardes automatiques quotidiennes',
      'Corrections de bugs critiques',
      'Certificat SSL (cadenas HTTPS)',
      'Support par email — réponse sous 48h',
    ],
    exclus: [
      'Mises à jour de contenu',
      'Ajout de nouvelles pages',
      'SEO mensuel',
    ],
  },
  {
    nom: 'Business',
    sousTitre: 'Le plus populaire pour grandir',
    prix: { mensuel: 99, annuel: 79 },
    accent: '#6366f1',
    populaire: true,
    inclus: [
      'Tout le pack Starter',
      'Mises à jour de contenu (textes, photos)',
      'Jusqu\'à 1 nouvelle page par mois',
      'SEO mensuel de base (Google)',
      'Support prioritaire — réponse sous 24h',
      'Rapport mensuel de performance',
    ],
    exclus: [
      'Pages illimitées',
      'Support WhatsApp direct',
    ],
  },
  {
    nom: 'Premium',
    sousTitre: 'Tout inclus, zéro souci',
    prix: { mensuel: 179, annuel: 143 },
    accent: '#f59e0b',
    populaire: false,
    inclus: [
      'Tout le pack Business',
      'Ajout de pages illimité',
      'SEO avancé mensuel',
      'Support WhatsApp direct',
      'Modifications urgentes sous 4h',
      'Audit trimestriel du site',
      'Conseils stratégie digitale inclus',
    ],
    exclus: [],
  },
]

// Associe chaque pack à ses liens Stripe
const getStripeLink = (nom, annuel) => {
  const key = nom.toLowerCase()
  return annuel ? STRIPE_LINKS[key]?.annuel : STRIPE_LINKS[key]?.mensuel
}

// Composant carte d'un pack
function CartePack({ pack, annuel }) {
  const [hover, setHover] = useState(false)
  const prix = annuel ? pack.prix.annuel : pack.prix.mensuel

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        borderRadius: '24px',
        padding: pack.populaire ? '40px 32px' : '36px 32px',
        background: pack.populaire
          ? `linear-gradient(145deg, ${pack.accent}08, ${pack.accent}04)`
          : '#fff',
        border: pack.populaire
          ? `2px solid ${pack.accent}40`
          : '2px solid #e2e8f0',
        boxShadow: hover
          ? `0 20px 60px ${pack.accent}20, 0 8px 24px rgba(0,0,0,0.06)`
          : pack.populaire
            ? `0 12px 40px ${pack.accent}15`
            : '0 4px 16px rgba(0,0,0,0.04)',
        transform: hover ? 'translateY(-6px)' : pack.populaire ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Badge "Populaire" */}
      {pack.populaire && (
        <div style={{
          position: 'absolute', top: '-14px', left: '50%',
          transform: 'translateX(-50%)',
          background: `linear-gradient(90deg, ${pack.accent}, #8b5cf6)`,
          color: '#fff', padding: '5px 20px', borderRadius: '999px',
          fontSize: '0.72rem', fontWeight: 700,
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: '0.06em', textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          boxShadow: `0 4px 14px ${pack.accent}40`,
        }}>
          Le plus populaire
        </div>
      )}

      {/* En-tête du pack */}
      <div style={{ marginBottom: '28px' }}>
        <Badge color={pack.accent} text={pack.nom} />
        <h3 style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 800,
          fontSize: '1.3rem', color: '#0f172a', marginBottom: '6px',
        }}>
          {pack.sousTitre}
        </h3>

        {/* Prix */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginTop: '20px' }}>
          <span style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: '2.8rem', color: pack.accent, lineHeight: 1,
          }}>
            {prix}€
          </span>
          <span style={{
            color: '#94a3b8', fontSize: '0.9rem',
            fontFamily: "'DM Sans', sans-serif", marginBottom: '6px',
          }}>
            / mois
          </span>
        </div>
        {annuel && (
          <div style={{
            marginTop: '6px', color: '#22c55e',
            fontSize: '0.78rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
          }}>
            Économie de {(pack.prix.mensuel - pack.prix.annuel) * 12}€ par an
          </div>
        )}
      </div>

      {/* Séparateur */}
      <div style={{ height: '1px', background: '#e2e8f0', marginBottom: '24px' }} />

      {/* Liste des fonctionnalités incluses */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
        {pack.inclus.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <IcoCheck color={pack.accent} />
            <span style={{
              color: '#334155', fontSize: '0.875rem', lineHeight: 1.6,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {item}
            </span>
          </div>
        ))}
        {/* Fonctionnalités non incluses (grisées) */}
        {pack.exclus.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', opacity: 0.4 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
              <circle cx="9" cy="9" r="9" fill="#94a3b8" opacity="0.12"/>
              <path d="M6 12l6-6M12 12L6 6" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <span style={{
              color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6,
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: 'line-through',
            }}>
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Bouton CTA — redirige vers Stripe */}
      <a href={getStripeLink(pack.nom, annuel)} target="_blank" rel="noopener noreferrer" style={{
        textDecoration: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        padding: '14px 24px', borderRadius: '12px',
        background: pack.populaire
          ? `linear-gradient(135deg, ${pack.accent}, #8b5cf6)`
          : 'transparent',
        color: pack.populaire ? '#fff' : pack.accent,
        border: pack.populaire ? 'none' : `2px solid ${pack.accent}40`,
        fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 700,
        boxShadow: pack.populaire ? `0 4px 20px ${pack.accent}30` : 'none',
        transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = `0 8px 28px ${pack.accent}40`
        if (!pack.populaire) e.currentTarget.style.background = `${pack.accent}10`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = pack.populaire ? `0 4px 20px ${pack.accent}30` : 'none'
        if (!pack.populaire) e.currentTarget.style.background = 'transparent'
      }}
      >
        Choisir ce pack <IcoArrow />
      </a>
    </div>
  )
}

// Page principale Tarifs
function Tarifs() {
  const [annuel, setAnnuel] = useState(false)

  useEffect(() => {
    document.title = 'Tarifs — Webotix | Création de site, applications & abonnements maintenance'
    window.scrollTo(0, 0)
  }, [])

  const W = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }

  // Prix de création — affichés dans le hero
  const creations = [
    {
      nom: 'Site web',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="2" y="5" width="24" height="18" rx="3" stroke="#0ea5e9" strokeWidth="1.8"/>
          <path d="M2 10h24" stroke="#0ea5e9" strokeWidth="1.8"/>
          <circle cx="6" cy="7.5" r="1" fill="#0ea5e9"/>
          <circle cx="10" cy="7.5" r="1" fill="#0ea5e9"/>
          <circle cx="14" cy="7.5" r="1" fill="#0ea5e9"/>
        </svg>
      ),
      prix: '800',
      delai: '2 à 4 semaines',
      accent: '#0ea5e9',
      bg: 'linear-gradient(135deg, #eff6ff, #e0f2fe)',
      types: ['Site vitrine', 'Landing page', 'E-commerce'],
      inclus: [
        'Design sur mesure validé avant développement',
        'Responsive mobile, tablette et desktop',
        'SEO on-page + formulaire de contact',
        'Hébergement + mise en ligne inclus',
        '1 mois de support après livraison',
      ],
    },
    {
      nom: 'Application',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="8" y="2" width="12" height="24" rx="3" stroke="#6366f1" strokeWidth="1.8"/>
          <path d="M11 23h6" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round"/>
          <rect x="11" y="6" width="6" height="4" rx="1" stroke="#6366f1" strokeWidth="1.4"/>
        </svg>
      ),
      prix: '2 000',
      delai: '4 à 10 semaines',
      accent: '#6366f1',
      bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
      types: ['App web', 'Dashboard', 'Espace client'],
      inclus: [
        'Analyse & maquettes UX/UI validées',
        'Développement sur mesure (web ou mobile)',
        'Connexion à vos outils existants',
        'Tests complets avant livraison',
        'Formation + documentation',
      ],
    },
    {
      nom: 'Automatisation',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="6" cy="14" r="3" stroke="#f59e0b" strokeWidth="1.8"/>
          <circle cx="22" cy="8" r="3" stroke="#f59e0b" strokeWidth="1.8"/>
          <circle cx="22" cy="20" r="3" stroke="#f59e0b" strokeWidth="1.8"/>
          <path d="M9 14h5l4-6M14 14h3l2 6" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      prix: '400',
      delai: '1 à 3 semaines',
      accent: '#f59e0b',
      bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
      types: ['Make / Zapier', 'Chatbots IA', 'API'],
      inclus: [
        'Audit de vos processus actuels',
        'Conception + mise en place du workflow',
        'Connexion entre vos outils',
        'Tests complets avant production',
        '30 jours de support après livraison',
      ],
    },
  ]

  return (
    <div style={{ width: '100%', background: '#f8f9ff' }}>

      {/* ══════════════════════════
          HERO — Tarifs de création + intro abonnements
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '140px 24px 72px', background: 'white' }}>
        <div style={{ ...W, textAlign: 'center', maxWidth: '760px' }}>
          <div className="fade-up">
            <Badge color="#0ea5e9" text="Nos tarifs" />
          </div>
          <h1 className="fade-up-2" style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            color: '#0f172a', lineHeight: 1.15, marginBottom: '16px',
          }}>
            Des prix clairs,{' '}
            <span style={{
              background: 'linear-gradient(90deg, #0ea5e9, #6366f1)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              sans surprise.
            </span>
          </h1>
          <p className="fade-up-3" style={{
            color: '#64748b', fontSize: '1rem', lineHeight: 1.75,
            fontFamily: "'DM Sans', sans-serif", marginBottom: '44px',
          }}>
            Création (paiement unique) ou maintenance mensuelle — deux offres complémentaires,
            des tarifs transparents. Devis gratuit sous 48h, sans engagement.
          </p>

          {/* ── Tarifs de création ── */}
          <div className="fade-up-3" style={{ marginBottom: '44px' }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#94a3b8',
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: '16px',
            }}>
              Création · Paiement unique
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '12px',
            }}>
              {creations.map((c) => (
                <div key={c.nom} style={{
                  padding: '18px 20px', borderRadius: '14px',
                  background: c.bg, border: `1px solid ${c.accent}18`,
                  display: 'flex', alignItems: 'center', gap: '14px',
                  textAlign: 'left',
                }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                    background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 2px 8px ${c.accent}20`,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>
                      {c.nom}
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: c.accent, fontWeight: 600 }}>
                      dès {c.prix} €
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: '#94a3b8' }}>
                      {c.delai}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" style={{
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              marginTop: '16px',
              color: '#0ea5e9', fontSize: '0.82rem', fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Demander un devis gratuit
              <IcoArrow />
            </Link>
          </div>

          {/* ── Séparateur ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px' }}>
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
            <div style={{
              padding: '5px 16px', borderRadius: '999px',
              background: '#f1f5f9', border: '1px solid #e2e8f0',
              color: '#94a3b8', fontSize: '0.72rem', fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif", whiteSpace: 'nowrap',
            }}>
              Webotix Care · Maintenance mensuelle
            </div>
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
          </div>

          {/* ── Toggle mensuel / annuel ── */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '16px',
            background: '#f1f5f9', padding: '6px', borderRadius: '14px',
          }}>
            <button
              onClick={() => setAnnuel(false)}
              style={{
                padding: '8px 24px', borderRadius: '10px', border: 'none',
                cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: '0.875rem',
                background: !annuel ? 'white' : 'transparent',
                color: !annuel ? '#0f172a' : '#94a3b8',
                boxShadow: !annuel ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              Mensuel
            </button>
            <button
              onClick={() => setAnnuel(true)}
              style={{
                padding: '8px 24px', borderRadius: '10px', border: 'none',
                cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: '0.875rem',
                background: annuel ? 'white' : 'transparent',
                color: annuel ? '#0f172a' : '#94a3b8',
                boxShadow: annuel ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.2s ease',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}
            >
              Annuel
              <span style={{
                background: 'linear-gradient(90deg, #22c55e, #16a34a)',
                color: '#fff', padding: '2px 8px', borderRadius: '999px',
                fontSize: '0.65rem', fontWeight: 700,
              }}>
                -20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          3 CARTES PACKS
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '60px 24px 100px' }}>
        <div style={W}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '28px', alignItems: 'start',
          }}>
            {packs.map((pack) => (
              <div key={pack.nom} className="will-animate">
                <CartePack pack={pack} annuel={annuel} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CE QUI EST TOUJOURS INCLUS
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '80px 24px', background: 'white' }}>
        <div style={W}>
          <div className="will-animate" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <Badge color="#22c55e" text="Toujours inclus" />
            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              color: '#0f172a',
            }}>
              Dans tous les packs, sans exception
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '24px',
          }}>
            {[
              { ico: '🔒', titre: 'SSL & Sécurité', desc: 'Certificat HTTPS, mises à jour de sécurité, protection contre les attaques.' },
              { ico: '💾', titre: 'Sauvegardes', desc: 'Votre site est sauvegardé chaque jour. En cas de problème, on restaure en quelques minutes.' },
              { ico: '⚡', titre: 'Performances', desc: 'Serveur rapide, optimisation continue. Votre site charge vite, partout.' },
              { ico: '📊', titre: 'Monitoring', desc: 'On surveille votre site 24h/24. Si quelque chose ne va pas, on est alertés avant vous.' },
            ].map((item, i) => (
              <div key={i} className="will-animate" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div style={{
                  background: '#f8f9ff', borderRadius: '18px', padding: '28px 24px',
                  border: '1px solid #e2e8f0', height: '100%',
                  transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{item.ico}</div>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                    fontSize: '1rem', color: '#0f172a', marginBottom: '8px',
                  }}>
                    {item.titre}
                  </div>
                  <div style={{
                    color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          FAQ
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '80px 24px', background: '#f8f9ff' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <div className="will-animate" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Badge color="#6366f1" text="Vos questions" />
            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#0f172a',
            }}>
              Questions fréquentes sur l'abonnement
            </h2>
          </div>
          <div className="will-animate" style={{ display: 'flex', flexDirection: 'column', gap: '12px', transitionDelay: '0.1s' }}>
            {[
              {
                q: 'Est-ce que je suis engagé sur la durée ?',
                r: "Non. L'abonnement mensuel est sans engagement — vous pouvez l'arrêter à tout moment, sans frais ni justification. L'abonnement annuel est prépayé pour 12 mois avec une réduction de 20%.",
              },
              {
                q: 'Est-ce que l\'hébergement est inclus dans le prix ?',
                r: 'Oui, totalement. Votre site est hébergé sur nos serveurs VPS en France. Vous ne payez rien d\'autre en plus — pas de frais de nom de domaine caché (si vous avez déjà le vôtre), pas de surprises.',
              },
              {
                q: 'Que se passe-t-il si j\'arrête l\'abonnement ?',
                r: "Si vous arrêtez, on vous livre une archive complète de votre site (fichiers + base de données) pour que vous puissiez l'héberger ailleurs. On ne garde rien en otage.",
              },
              {
                q: 'Puis-je changer de pack en cours de route ?',
                r: "Oui, à tout moment. Si vos besoins évoluent, on ajuste votre pack — à la hausse comme à la baisse.",
              },
              {
                q: "L'abonnement couvre-t-il aussi les bugs liés à des mises à jour ?",
                r: "Oui. Si une mise à jour d'un plugin ou du serveur casse quelque chose, on s'en occupe. C'est exactement pour ça que l'abonnement existe.",
              },
            ].map((item, i) => (
              <FaqItem key={i} question={item.q} reponse={item.r} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CTA FINAL
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '80px 24px 120px', background: 'white' }}>
        <div style={W}>
          <div className="will-animate cta-final-inner" style={{
            borderRadius: '28px', padding: '72px 48px',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 60%, #8b5cf6 100%)',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
            boxShadow: '0 24px 80px rgba(14,165,233,0.25)',
          }}>
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} aria-hidden="true" />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} aria-hidden="true" />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: 'white', lineHeight: 1.15, marginBottom: '16px',
              }}>
                Prêt à déléguer la gestion de votre site ?
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.82)', fontSize: '1rem', lineHeight: 1.75,
                maxWidth: '460px', margin: '0 auto 36px',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Commencez par une conversation gratuite. On définit ensemble le pack adapté à votre situation.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://calendly.com/webotix-support/30min" target="_blank" rel="noopener noreferrer" style={{
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 28px', borderRadius: '12px',
                  background: 'white', color: '#0ea5e9',
                  fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 700,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.2)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)' }}
                >
                  Consultation gratuite <IcoArrow />
                </a>
                <Link to="/contact" style={{
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 28px', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.15)', color: 'white',
                  border: '1px solid rgba(255,255,255,0.3)',
                  fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 700,
                  transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  Nous écrire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

// Composant FAQ dépliable local
function FaqItem({ question, reponse }) {
  const [ouvert, setOuvert] = useState(false)
  return (
    <div style={{
      borderRadius: '14px',
      border: '1px solid #e2e8f0',
      background: ouvert ? '#fff' : '#fafbff',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
      boxShadow: ouvert ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
    }}>
      <button
        onClick={() => setOuvert(!ouvert)}
        style={{
          width: '100%', textAlign: 'left',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '18px 24px', background: 'none', border: 'none',
          cursor: 'pointer', gap: '16px',
        }}
        aria-expanded={ouvert}
      >
        <span style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 700,
          fontSize: '0.95rem', color: '#0f172a',
        }}>
          {question}
        </span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
          style={{ flexShrink: 0, transform: ouvert ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)' }}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {ouvert && (
        <div style={{
          padding: '0 24px 20px',
          color: '#64748b', fontSize: '0.9rem', lineHeight: 1.75,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {reponse}
        </div>
      )}
    </div>
  )
}

export default Tarifs
