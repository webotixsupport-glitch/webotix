import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Photos Unsplash — mêmes IDs que Home pour cohérence
const PHOTOS = {
  web:  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=560&fit=crop&q=85',
  app:  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=560&fit=crop&q=85',
  auto: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=560&fit=crop&q=85',
}

const IcoArrow = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 11L11 2M11 2H4.5M11 2V8.5"/>
  </svg>
)
const IcoCheck = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill={color} opacity="0.12"/>
    <path d="M5 9l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Composant FAQ dépliable
function FAQ({ items }) {
  const [ouvert, setOuvert] = useState(null)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {items.map((item, i) => (
        <div key={i} style={{
          borderRadius: '14px',
          border: '1px solid #e2e8f0',
          background: ouvert === i ? '#fff' : '#fafbff',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
          boxShadow: ouvert === i ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
        }}>
          <button
            onClick={() => setOuvert(ouvert === i ? null : i)}
            style={{
              width: '100%', textAlign: 'left',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '18px 24px', background: 'none', border: 'none',
              cursor: 'pointer', gap: '16px',
            }}
            aria-expanded={ouvert === i}
          >
            <span style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 700,
              fontSize: '0.95rem', color: '#0f172a',
            }}>
              {item.q}
            </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              style={{ flexShrink: 0, transform: ouvert === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)' }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {ouvert === i && (
            <div style={{
              padding: '0 24px 20px',
              color: '#64748b', fontSize: '0.9rem', lineHeight: 1.75,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {item.r}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function Services() {
  useEffect(() => {
    document.title = 'Services — Webotix | Sites web, applications & automatisations sur mesure'
    window.scrollTo(0, 0)
  }, [])

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

  const services = [
    {
      id: 'sites-web',
      titre: 'Création de sites web',
      sousTitre: 'Votre vitrine en ligne qui travaille pour vous',
      desc: 'Un site web, c\'est souvent le premier contact que vos prospects ont avec vous. On conçoit des sites modernes, rapides et bien référencés — pensés pour convertir les visiteurs en clients.',
      photo: PHOTOS.web,
      photoAlt: 'Création de site web sur mesure',
      accent: '#0ea5e9',
      bg: 'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)',
      inclus: [
        'Design sur mesure (maquette validée avant développement)',
        'Responsive — adapté mobile, tablette et desktop',
        'Optimisation SEO on-page (titres, meta, structure)',
        'Formulaire de contact fonctionnel',
        'Hébergement et mise en ligne inclus',
        'Formation pour modifier le contenu vous-même',
        '1 mois de support après la mise en ligne',
      ],
      types: ['Site vitrine', 'Landing page', 'E-commerce', 'Portfolio'],
      prix: 'À partir de 800 €',
      delai: '2 à 4 semaines',
    },
    {
      id: 'applications',
      titre: 'Applications sur mesure',
      sousTitre: 'Des outils digitaux taillés pour votre activité',
      desc: 'Vous avez un processus métier spécifique ? Un espace client à créer ? Un outil interne dont vous rêvez ? On développe l\'application qui correspond exactement à votre besoin — pas un template, une vraie solution.',
      photo: PHOTOS.app,
      photoAlt: 'Développement d\'application mobile sur mesure',
      accent: '#6366f1',
      bg: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
      inclus: [
        'Analyse et conception fonctionnelle (cahier des charges)',
        'Maquettes UX/UI validées avant développement',
        'Application web ou mobile selon le besoin',
        'Connexion à vos outils existants (CRM, paiement, etc.)',
        'Tableau de bord d\'administration',
        'Tests et corrections avant livraison',
        'Documentation et formation à l\'utilisation',
      ],
      types: ['Application web', 'App mobile', 'Dashboard', 'Espace client'],
      prix: 'À partir de 2 000 €',
      delai: '4 à 10 semaines',
    },
    {
      id: 'automatisations',
      titre: 'Automatisations',
      sousTitre: 'Moins de tâches répétitives, plus de résultats',
      desc: 'Chaque heure passée sur une tâche répétitive est une heure de moins pour votre cœur de métier. On connecte vos outils et automatise vos workflows pour que votre activité tourne en pilote automatique.',
      photo: PHOTOS.auto,
      photoAlt: 'Automatisation de workflows et connexion d\'outils numériques',
      accent: '#f59e0b',
      bg: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
      inclus: [
        'Audit de vos processus actuels',
        'Conception du workflow automatisé',
        'Connexion entre vos outils (CRM, email, agenda, etc.)',
        'Notifications et alertes personnalisées',
        'Tests complets avant mise en production',
        'Documentation des automatisations livrées',
        'Support pendant 30 jours après livraison',
      ],
      types: ['Make / Zapier', 'Chatbots IA', 'Intégrations API', 'Emails automatiques'],
      prix: 'À partir de 400 €',
      delai: '1 à 3 semaines',
    },
  ]

  const faq = [
    {
      q: 'Comment se passe le premier contact ?',
      r: 'On commence par un appel de 30 minutes gratuit et sans engagement (via Calendly). C\'est l\'occasion d\'écouter votre projet, comprendre vos objectifs et voir si on est le bon partenaire pour vous. Ensuite, on vous envoie un devis détaillé sous 48h.',
    },
    {
      q: 'Est-ce que les prix sont négociables ?',
      r: 'Les prix indiqués sont des points de départ indicatifs. Chaque projet est unique. On adapte le périmètre et le budget ensemble — l\'important, c\'est que vous ayez exactement ce dont vous avez besoin, sans payer pour ce qui ne vous sert pas.',
    },
    {
      q: 'Combien de modifications peut-on faire pendant le projet ?',
      r: 'Les modifications sont illimitées pendant la phase de conception (maquettes). Une fois le développement commencé sur la version validée, les ajustements mineurs sont inclus. Les changements de périmètre importants font l\'objet d\'un avenant.',
    },
    {
      q: 'Que se passe-t-il une fois le projet livré ?',
      r: 'On vous forme à l\'utilisation de votre site ou application. Un support de 30 jours est inclus pour corriger d\'éventuels problèmes. Ensuite, on propose des forfaits de maintenance mensuelle si vous souhaitez un suivi continu.',
    },
    {
      q: 'Je ne suis pas technique — est-ce un problème ?',
      r: 'Pas du tout. On s\'occupe de tout : hébergement, mise en ligne, configuration. On vous explique chaque étape en langage clair, sans jargon. Vous n\'avez besoin de savoir qu\'une chose : ce que vous voulez obtenir.',
    },
    {
      q: 'Travaillez-vous à distance ou en présentiel ?',
      r: 'On travaille 100% en ligne — appels vidéo, partage d\'écran, outils collaboratifs. Ça nous permet de travailler avec des clients partout en France, avec la même qualité qu\'en présentiel.',
    },
  ]

  return (
    <div style={{ width: '100%', background: '#f8f9ff' }}>

      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '140px 24px 80px', background: 'white' }}>
        <div style={{ ...W, textAlign: 'center', maxWidth: '760px' }}>
          <div className="fade-up">
            {badge('#0ea5e9', 'Nos services')}
          </div>
          <h1 className="fade-up-2" style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            color: '#0f172a', lineHeight: 1.15, marginBottom: '20px',
          }}>
            Ce qu'on fait,{' '}
            <span style={{ background: 'linear-gradient(90deg, #0ea5e9, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              on le fait bien.
            </span>
          </h1>
          <p className="fade-up-3" style={{
            color: '#64748b', fontSize: '1.05rem', lineHeight: 1.75,
            fontFamily: "'DM Sans', sans-serif", marginBottom: '36px',
          }}>
            Trois expertises complémentaires pour construire votre présence digitale, développer vos outils métier et automatiser vos tâches répétitives. Devis gratuit, sans engagement.
          </p>
          <div className="fade-up-3" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/webotix-support/30min" target="_blank" rel="noopener noreferrer" style={{
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
              color: '#fff', fontFamily: "'Outfit', sans-serif",
              fontSize: '0.95rem', fontWeight: 700,
              boxShadow: '0 4px 20px rgba(14,165,233,0.3)',
              transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(14,165,233,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(14,165,233,0.3)' }}
            >
              Consultation gratuite <IcoArrow />
            </a>
            <Link to="/contact" style={{
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '12px',
              background: 'transparent', color: '#0f172a',
              border: '2px solid #e2e8f0',
              fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 700,
              transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#0ea5e9'; e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Nous écrire
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          3 SERVICES DÉTAILLÉS
      ══════════════════════════ */}
      {services.map((srv, i) => (
        <section key={srv.id} id={srv.id} style={{
          width: '100%', padding: '80px 24px',
          background: i % 2 === 0 ? '#f8f9ff' : 'white',
        }}>
          <div style={W}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
              gap: '64px', alignItems: 'center',
            }}>

              {/* Texte */}
              <div style={{ order: i % 2 === 0 ? 1 : 2 }} className="will-animate">
                {badge(srv.accent, srv.types[0])}
                <h2 style={{
                  fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  color: '#0f172a', lineHeight: 1.15, marginBottom: '10px',
                }}>
                  {srv.titre}
                </h2>
                <p style={{
                  color: srv.accent, fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1rem', fontWeight: 600, marginBottom: '16px',
                }}>
                  {srv.sousTitre}
                </p>
                <p style={{
                  color: '#64748b', fontSize: '0.95rem', lineHeight: 1.8,
                  fontFamily: "'DM Sans', sans-serif", marginBottom: '28px',
                }}>
                  {srv.desc}
                </p>

                {/* Tags types */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {srv.types.map(t => (
                    <span key={t} style={{
                      padding: '4px 12px', borderRadius: '999px',
                      background: `${srv.accent}10`, border: `1px solid ${srv.accent}20`,
                      color: srv.accent, fontSize: '0.78rem', fontWeight: 600,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>{t}</span>
                  ))}
                </div>

                {/* Ce qui est inclus */}
                <div style={{
                  background: srv.bg, borderRadius: '16px',
                  padding: '24px', marginBottom: '28px',
                  border: `1px solid ${srv.accent}15`,
                }}>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                    fontSize: '0.8rem', color: srv.accent,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    marginBottom: '16px',
                  }}>
                    Ce qui est inclus
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {srv.inclus.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <IcoCheck color={srv.accent} />
                        <span style={{
                          color: '#334155', fontSize: '0.875rem', lineHeight: 1.6,
                          fontFamily: "'DM Sans', sans-serif",
                        }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prix + délai + CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: "'DM Sans', sans-serif", marginBottom: '2px' }}>À partir de</div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                      fontSize: '1.5rem', color: srv.accent,
                    }}>
                      {srv.prix.replace('À partir de ', '')}
                    </div>
                  </div>
                  <div style={{ width: '1px', height: '36px', background: '#e2e8f0' }} />
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: "'DM Sans', sans-serif", marginBottom: '2px' }}>Délai moyen</div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                      fontSize: '1rem', color: '#1e293b',
                    }}>
                      {srv.delai}
                    </div>
                  </div>
                  <Link to="/contact" style={{
                    marginLeft: 'auto',
                    textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '12px 22px', borderRadius: '10px',
                    background: srv.accent, color: '#fff',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 700,
                    boxShadow: `0 4px 14px ${srv.accent}35`,
                    transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 20px ${srv.accent}45` }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 14px ${srv.accent}35` }}
                  >
                    Demander un devis <IcoArrow />
                  </Link>
                </div>
              </div>

              {/* Photo */}
              <div className="will-animate" style={{
                order: i % 2 === 0 ? 2 : 1,
                borderRadius: '20px', overflow: 'hidden',
                boxShadow: `0 20px 60px ${srv.accent}15, 0 8px 24px rgba(0,0,0,0.08)`,
                transitionDelay: '0.1s',
              }}>
                <img
                  src={srv.photo}
                  alt={srv.photoAlt}
                  loading="lazy"
                  style={{
                    width: '100%', display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                />
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ══════════════════════════
          WEBOTIX CARE — Aperçu des abonnements
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '100px 24px', background: '#f8f9ff' }}>
        <div style={W}>

          {/* En-tête */}
          <div className="will-animate" style={{ textAlign: 'center', marginBottom: '64px' }}>
            {badge('#22c55e', 'Webotix Care')}
            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#0f172a', lineHeight: 1.15, marginBottom: '16px',
            }}>
              Et après la livraison ?{' '}
              <span style={{
                background: 'linear-gradient(90deg, #0ea5e9, #6366f1)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                On reste là.
              </span>
            </h2>
            <p style={{
              color: '#64748b', fontSize: '1rem', lineHeight: 1.75,
              maxWidth: '520px', margin: '0 auto',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Un site livré, c'est un début. Webotix Care, c'est l'abonnement qui assure
              l'hébergement, la maintenance, le SEO et les mises à jour — pour que votre
              site reste rapide, sécurisé et à jour, chaque mois.
            </p>
          </div>

          {/* 3 cartes packs compactes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px', marginBottom: '48px',
          }}>
            {[
              {
                nom: 'Starter',
                prix: '49',
                desc: 'Hébergement, SSL, sauvegardes quotidiennes et support email.',
                accent: '#0ea5e9',
                inclus: ['Hébergement VPS', 'SSL + sauvegardes', 'Support email 48h'],
              },
              {
                nom: 'Business',
                prix: '99',
                desc: 'Tout Starter + mises à jour de contenu, SEO mensuel et support prioritaire.',
                accent: '#6366f1',
                populaire: true,
                inclus: ['Mises à jour contenu', 'SEO mensuel', 'Support prioritaire 24h'],
              },
              {
                nom: 'Premium',
                prix: '179',
                desc: 'Tout inclus, zéro souci : pages illimitées, SEO avancé, support WhatsApp.',
                accent: '#f59e0b',
                inclus: ['Pages illimitées', 'SEO avancé', 'Support WhatsApp direct'],
              },
            ].map((pack, i) => (
              <div key={pack.nom} className="will-animate" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div
                  style={{
                    borderRadius: '20px',
                    padding: '32px 28px',
                    background: pack.populaire
                      ? `linear-gradient(145deg, ${pack.accent}08, ${pack.accent}04)`
                      : '#fff',
                    border: pack.populaire
                      ? `2px solid ${pack.accent}40`
                      : '1px solid #e2e8f0',
                    boxShadow: pack.populaire
                      ? `0 12px 40px ${pack.accent}12`
                      : '0 2px 12px rgba(0,0,0,0.04)',
                    position: 'relative',
                    transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
                    display: 'flex', flexDirection: 'column',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 50px ${pack.accent}18, 0 8px 20px rgba(0,0,0,0.06)` }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = pack.populaire ? `0 12px 40px ${pack.accent}12` : '0 2px 12px rgba(0,0,0,0.04)' }}
                >
                  {/* Badge populaire */}
                  {pack.populaire && (
                    <div style={{
                      position: 'absolute', top: '-13px', left: '50%',
                      transform: 'translateX(-50%)',
                      background: `linear-gradient(90deg, ${pack.accent}, #8b5cf6)`,
                      color: '#fff', padding: '4px 18px', borderRadius: '999px',
                      fontSize: '0.68rem', fontWeight: 700,
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      boxShadow: `0 4px 14px ${pack.accent}40`,
                    }}>
                      Le plus populaire
                    </div>
                  )}

                  {/* Nom + Prix */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{
                      display: 'inline-block', padding: '4px 14px', borderRadius: '999px',
                      background: `${pack.accent}10`, border: `1px solid ${pack.accent}20`,
                      color: pack.accent, fontSize: '0.7rem', fontWeight: 700,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      fontFamily: "'DM Sans', sans-serif", marginBottom: '14px',
                    }}>
                      {pack.nom}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                      <span style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                        fontSize: '2.4rem', color: pack.accent, lineHeight: 1,
                      }}>
                        {pack.prix}€
                      </span>
                      <span style={{
                        color: '#94a3b8', fontSize: '0.85rem',
                        fontFamily: "'DM Sans', sans-serif", marginBottom: '5px',
                      }}>
                        / mois
                      </span>
                    </div>
                  </div>

                  {/* Description courte */}
                  <p style={{
                    color: '#64748b', fontSize: '0.86rem', lineHeight: 1.65,
                    fontFamily: "'DM Sans', sans-serif", marginBottom: '20px',
                  }}>
                    {pack.desc}
                  </p>

                  {/* 3 points inclus */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', flex: 1 }}>
                    {pack.inclus.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                          <circle cx="9" cy="9" r="9" fill={pack.accent} opacity="0.12"/>
                          <path d="M5 9l3 3 5-5" stroke={pack.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span style={{
                          color: '#334155', fontSize: '0.82rem',
                          fontFamily: "'DM Sans', sans-serif",
                        }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA vers page Tarifs */}
          <div className="will-animate" style={{ textAlign: 'center', transitionDelay: '0.25s' }}>
            <Link to="/tarifs" style={{
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 32px', borderRadius: '14px',
              background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
              color: '#fff',
              fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 700,
              boxShadow: '0 6px 24px rgba(14,165,233,0.3)',
              transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(14,165,233,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(14,165,233,0.3)' }}
            >
              Voir tous les détails des packs
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 11L11 2M11 2H4.5M11 2V8.5"/>
              </svg>
            </Link>
            <p style={{
              marginTop: '12px', color: '#94a3b8',
              fontSize: '0.78rem', fontFamily: "'DM Sans', sans-serif",
            }}>
              Sans engagement · Résiliable à tout moment
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════
          FAQ
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '100px 24px', background: '#f8f9ff' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <div className="will-animate" style={{ textAlign: 'center', marginBottom: '56px' }}>
            {badge('#6366f1', 'Vos questions')}
            <h2 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              color: '#0f172a',
            }}>
              Les réponses à vos{' '}
              <span style={{ color: '#6366f1' }}>questions fréquentes</span>
            </h2>
          </div>
          <div className="will-animate" style={{ transitionDelay: '0.1s' }}>
            <FAQ items={faq} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CTA FINAL
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '80px 24px 120px', background: 'white' }}>
        <div style={W}>
          <div className="will-animate" style={{
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
                Votre projet mérite une vraie conversation.
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.82)', fontSize: '1rem', lineHeight: 1.75,
                maxWidth: '440px', margin: '0 auto 36px',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                30 minutes, sans engagement. On écoute votre projet et on vous dit honnêtement si on peut vous aider.
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
                  Prendre RDV gratuit <IcoArrow />
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

export default Services
