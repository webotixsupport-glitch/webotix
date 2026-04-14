import { Link } from 'react-router-dom'
import { useEffect } from 'react'

// 6 projets démo — secteurs variés, chiffres réalistes
const projets = [
  {
    id: 1,
    categorie: 'Site vitrine',
    client: 'Artisan Menuisier',
    secteur: 'Menuiserie artisanale — Seine-et-Marne',
    photo: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=700&h=480&fit=crop&q=85',
    photoAlt: 'Atelier de menuiserie artisanale avec outils et bois',
    desc: 'Refonte complète du site vitrine avec galerie de réalisations et formulaire de devis optimisé. Référencement local renforcé pour apparaître en premier sur Google dans sa zone.',
    tags: ['Site vitrine', 'Galerie photos', 'SEO local', 'Mobile-first'],
    resultat: '+68% de demandes de devis en 2 mois',
    duree: '2 semaines',
    accent: '#0ea5e9',
    bg: 'linear-gradient(135deg, #eff6ff, #e0f2fe)',
  },
  {
    id: 2,
    categorie: 'Restaurant & réservation',
    client: 'Restaurant Gastronomique',
    secteur: 'Restauration — Lyon',
    photo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&h=480&fit=crop&q=85',
    photoAlt: 'Table de restaurant gastronomique avec plat raffiné',
    desc: "Site avec présentation du menu, photos d'ambiance professionnelles et réservation en ligne intégrée. Zéro appel téléphonique pour les réservations — tout est automatisé.",
    tags: ['Restaurant', 'Réservation en ligne', 'SEO local', 'Photos ambiance'],
    resultat: 'Salle complète tous les weekends',
    duree: '3 semaines',
    accent: '#f59e0b',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
  },
  {
    id: 3,
    categorie: 'Agence immobilière',
    client: 'Agence Immobilière',
    secteur: 'Immobilier résidentiel — Bordeaux',
    photo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&h=480&fit=crop&q=85',
    photoAlt: 'Maison moderne avec jardin et architecture contemporaine',
    desc: 'Plateforme de présentation des biens avec filtres avancés par type, secteur et budget. Formulaire de contact qualifié — seules les demandes sérieuses arrivent par email.',
    tags: ['Immobilier', 'Catalogue filtrable', 'Formulaire qualifié', 'SEO'],
    resultat: '3× plus de contacts qualifiés',
    duree: '3 semaines',
    accent: '#22c55e',
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
  },
  {
    id: 4,
    categorie: 'Profession libérale',
    client: 'Coach & Consultant',
    secteur: 'Coaching professionnel — Paris',
    photo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=480&fit=crop&q=85',
    photoAlt: 'Séance de coaching professionnel en réunion de travail',
    desc: "Site personal branding avec présentation de l'approche, témoignages clients et prise de rendez-vous Calendly directement intégrée. Plus besoin d'échanger 10 emails pour fixer un créneau.",
    tags: ['Personal branding', 'Prise de RDV', 'Témoignages', 'SEO'],
    resultat: 'Planning complet 6 semaines à l\'avance',
    duree: '2 semaines',
    accent: '#6366f1',
    bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
  },
  {
    id: 5,
    categorie: 'Boutique en ligne',
    client: 'Boutique E-commerce',
    secteur: 'Cosmétiques naturels — Marseille',
    photo: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=700&h=480&fit=crop&q=85',
    photoAlt: 'Produits cosmétiques naturels artisanaux bien présentés',
    desc: 'Boutique en ligne complète avec catalogue produits, paiement sécurisé et gestion des commandes. Visuels soignés et fiches produits optimisées pour convertir les visiteurs en acheteurs.',
    tags: ['E-commerce', 'Paiement sécurisé', 'Catalogue produits', 'SEO'],
    resultat: '+127% de chiffre d\'affaires en ligne en 3 mois',
    duree: '4 semaines',
    accent: '#f43f5e',
    bg: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
  },
  {
    id: 6,
    categorie: 'Santé & bien-être',
    client: 'Cabinet Paramédical',
    secteur: 'Kinésithérapie — Nantes',
    photo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=480&fit=crop&q=85',
    photoAlt: 'Cabinet médical moderne et professionnel',
    desc: 'Site professionnel pour cabinet de kinésithérapie avec présentation des soins, informations pratiques et prise de rendez-vous en ligne. Référencement local optimisé pour la zone de chalandise.',
    tags: ['Santé', 'Prise de RDV', 'SEO local', 'Mobile-first'],
    resultat: 'Agenda complet 3 semaines à l\'avance',
    duree: '2 semaines',
    accent: '#06b6d4',
    bg: 'linear-gradient(135deg, #ecfeff, #cffafe)',
  },
]

// Statistiques globales de l'agence
const stats = [
  { valeur: '12+', label: 'Projets livrés' },
  { valeur: '98%', label: 'Clients satisfaits' },
  { valeur: '2 sem.', label: 'Délai moyen' },
  { valeur: '5★', label: 'Note moyenne' },
]

function Realisations() {

  useEffect(() => {
    document.title = 'Réalisations — Webotix | Sites web & applications créés pour nos clients'
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
            Nos réalisations
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            color: '#0f172a', lineHeight: 1.15, marginBottom: '20px',
          }}>
            Des projets concrets,<br />des résultats mesurables
          </h1>

          <p style={{
            color: '#64748b', fontSize: '1rem', lineHeight: 1.8,
            maxWidth: '540px', margin: '0 auto 40px',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Chaque site est conçu sur-mesure pour le secteur et les objectifs du client.
            Voici les résultats obtenus.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              textDecoration: 'none', padding: '13px 28px', borderRadius: '12px',
              background: '#0ea5e9', color: 'white',
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 700,
              boxShadow: '0 4px 14px rgba(14,165,233,0.35)',
              transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Démarrer mon projet
            </Link>
            <Link to="/tarifs" style={{
              textDecoration: 'none', padding: '13px 28px', borderRadius: '12px',
              background: 'white', color: '#0f172a', border: '1.5px solid #e2e8f0',
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 600,
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#0ea5e9'; e.currentTarget.style.color = '#0ea5e9' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a' }}
            >
              Voir les tarifs
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════
          BANDE STATISTIQUES
      ══════════════════════════ */}
      <section style={{ width: '100%', background: '#0f172a', padding: '0 24px' }}>
        <div style={{
          ...W,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
        }}
        className="stats-grid"
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '32px 24px',
              textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}
            className="stat-item"
            >
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                fontSize: '2rem', color: '#0ea5e9', lineHeight: 1,
                marginBottom: '6px',
              }}>
                {s.valeur}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)',
                fontWeight: 500,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════
          GRILLE PROJETS
      ══════════════════════════ */}
      <section style={{ width: '100%', padding: '80px 24px 100px', background: 'white' }}>
        <div style={W}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: '32px',
          }}>
            {projets.map((p) => (
              <div key={p.id} className="card-lift will-animate" style={{
                borderRadius: '24px',
                background: p.bg,
                border: `1px solid ${p.accent}18`,
                overflow: 'hidden',
              }}>

                {/* Image du projet */}
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img
                    src={p.photo}
                    alt={p.photoAlt}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                      transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                  />
                </div>

                {/* Contenu de la carte */}
                <div style={{ padding: '32px' }}>

                  <div style={{
                    display: 'inline-block', padding: '4px 14px', borderRadius: '999px',
                    background: `${p.accent}15`, border: `1px solid ${p.accent}30`,
                    color: p.accent, fontSize: '0.72rem', fontWeight: 700,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {p.categorie}
                  </div>

                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                    fontSize: '1.4rem', color: '#0f172a', marginBottom: '4px',
                  }}>
                    {p.client}
                  </h3>

                  <p style={{
                    color: '#94a3b8', fontSize: '0.85rem',
                    fontFamily: "'DM Sans', sans-serif", marginBottom: '14px',
                  }}>
                    {p.secteur}
                  </p>

                  <p style={{
                    color: '#475569', fontSize: '0.92rem', lineHeight: 1.75,
                    fontFamily: "'DM Sans', sans-serif", marginBottom: '20px',
                  }}>
                    {p.desc}
                  </p>

                  {/* Tags techniques */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        padding: '4px 12px', borderRadius: '999px',
                        fontSize: '0.73rem', fontWeight: 600,
                        color: p.accent, background: 'white',
                        border: `1px solid ${p.accent}25`,
                        fontFamily: "'DM Sans', sans-serif",
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Résultat + délai */}
                  <div style={{
                    padding: '14px 20px', borderRadius: '12px',
                    background: `${p.accent}08`, border: `1px solid ${p.accent}20`,
                    display: 'flex', alignItems: 'center', gap: '12px',
                  }}>
                    <div style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: p.accent, flexShrink: 0,
                    }} />
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: '0.68rem', color: '#94a3b8', fontWeight: 600,
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                        fontFamily: "'DM Sans', sans-serif", marginBottom: '2px',
                      }}>
                        Résultat obtenu
                      </div>
                      <div style={{
                        fontSize: '0.875rem', color: p.accent, fontWeight: 700,
                        fontFamily: "'DM Sans', sans-serif",
                      }}>
                        {p.resultat}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{
                        fontSize: '0.68rem', color: '#94a3b8', fontWeight: 600,
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                        fontFamily: "'DM Sans', sans-serif", marginBottom: '2px',
                      }}>
                        Délai
                      </div>
                      <div style={{
                        fontSize: '0.875rem', color: '#475569', fontWeight: 700,
                        fontFamily: "'DM Sans', sans-serif",
                      }}>
                        {p.duree}
                      </div>
                    </div>
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
      <section style={{ width: '100%', padding: '0 24px 100px', background: 'white' }}>
        <div style={W}>
          <div className="cta-final-inner" style={{
            borderRadius: '24px', padding: '64px 48px', textAlign: 'center',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 60%, #8b5cf6 100%)',
            boxShadow: '0 24px 80px rgba(14,165,233,0.25)',
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
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'white',
                lineHeight: 1.2, marginBottom: '16px',
              }}>
                Votre projet sera notre<br />prochaine réalisation.
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.75,
                maxWidth: '420px', margin: '0 auto 36px',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Dites-nous ce que vous voulez construire. On vous répond en 24h avec une estimation honnête.
              </p>
              <Link to="/contact" style={{
                textDecoration: 'none', padding: '14px 32px', borderRadius: '12px',
                background: 'white', color: '#0f172a',
                fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 700,
                boxShadow: '0 8px 28px rgba(0,0,0,0.15)',
                display: 'inline-block',
                transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Démarrer mon projet
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Realisations
