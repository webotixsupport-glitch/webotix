import { useEffect } from 'react'

// Page Mentions légales — obligatoire pour tout site professionnel en France
function MentionsLegales() {
  // Titre de la page pour le SEO
  useEffect(() => {
    document.title = 'Mentions légales — Webotix | Agence digitale'
  }, [])

  const s = {
    page: {
      background: '#f8f9ff',
      minHeight: '100vh',
      paddingTop: '120px',
      paddingBottom: '80px',
    },
    inner: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 24px',
    },
    badge: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(99,102,241,0.1))',
      border: '1px solid rgba(14,165,233,0.25)',
      color: '#0ea5e9',
      borderRadius: '50px',
      padding: '6px 18px',
      fontSize: '0.8rem',
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      marginBottom: '24px',
    },
    h1: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 800,
      fontSize: 'clamp(2rem, 5vw, 2.8rem)',
      color: '#0f172a',
      lineHeight: 1.2,
      marginBottom: '16px',
    },
    intro: {
      color: '#64748b',
      fontSize: '1rem',
      lineHeight: '1.7',
      marginBottom: '56px',
      borderBottom: '1px solid #e2e8f0',
      paddingBottom: '32px',
    },
    section: {
      marginBottom: '48px',
    },
    h2: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
      fontSize: '1.25rem',
      color: '#0f172a',
      marginBottom: '16px',
      paddingBottom: '10px',
      borderBottom: '2px solid #0ea5e9',
      display: 'inline-block',
    },
    p: {
      color: '#475569',
      fontSize: '0.95rem',
      lineHeight: '1.8',
      marginBottom: '12px',
    },
    strong: {
      color: '#1e293b',
      fontWeight: 600,
    },
  }

  return (
    <div style={s.page}>
      <div style={s.inner}>

        {/* En-tête */}
        <div style={s.badge}>Informations légales</div>
        <h1 style={s.h1}>Mentions légales</h1>
        <p style={s.intro}>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site webotix.cloud l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>

        {/* 1. Éditeur du site */}
        <div style={s.section}>
          <h2 style={s.h2}>1. Éditeur du site</h2>
          <p style={s.p}>
            <span style={s.strong}>Nom commercial :</span> Webotix
          </p>
          <p style={s.p}>
            <span style={s.strong}>Activité :</span> Création de sites web, développement d'applications et automatisations numériques
          </p>
          <p style={s.p}>
            <span style={s.strong}>Email :</span>{' '}
            <a href="mailto:contact@webotix.cloud" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
              contact@webotix.cloud
            </a>
          </p>
          <p style={s.p}>
            <span style={s.strong}>Site web :</span>{' '}
            <a href="https://webotix.cloud" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
              https://webotix.cloud
            </a>
          </p>
        </div>

        {/* 2. Hébergement */}
        <div style={s.section}>
          <h2 style={s.h2}>2. Hébergement</h2>
          <p style={s.p}>
            Le site webotix.cloud est hébergé par :
          </p>
          <p style={s.p}>
            <span style={s.strong}>Hostinger International Ltd.</span><br />
            61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
            Site web : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9', textDecoration: 'none' }}>www.hostinger.fr</a>
          </p>
        </div>

        {/* 3. Propriété intellectuelle */}
        <div style={s.section}>
          <h2 style={s.h2}>3. Propriété intellectuelle</h2>
          <p style={s.p}>
            L'ensemble du contenu de ce site (textes, graphiques, logos, images, icônes, sons, logiciels) est la propriété exclusive de Webotix ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p style={s.p}>
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Webotix.
          </p>
        </div>

        {/* 4. Données personnelles */}
        <div style={s.section}>
          <h2 style={s.h2}>4. Données personnelles (RGPD)</h2>
          <p style={s.p}>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données personnelles.
          </p>
          <p style={s.p}>
            <span style={s.strong}>Données collectées :</span> Le formulaire de contact du site collecte votre nom, votre adresse email, et le contenu de votre message. Ces données sont utilisées uniquement pour répondre à votre demande et ne sont jamais transmises à des tiers.
          </p>
          <p style={s.p}>
            <span style={s.strong}>Durée de conservation :</span> Vos données sont conservées le temps nécessaire au traitement de votre demande, puis supprimées.
          </p>
          <p style={s.p}>
            Pour exercer vos droits ou pour toute question relative à vos données personnelles, contactez-nous à :{' '}
            <a href="mailto:contact@webotix.cloud" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
              contact@webotix.cloud
            </a>
          </p>
        </div>

        {/* 5. Cookies */}
        <div style={s.section}>
          <h2 style={s.h2}>5. Cookies</h2>
          <p style={s.p}>
            Ce site n'utilise pas de cookies de traçage ou publicitaires. Aucun cookie tiers (Google Analytics, Facebook Pixel, etc.) n'est installé sur ce site.
          </p>
          <p style={s.p}>
            Le site peut utiliser des cookies techniques strictement nécessaires au bon fonctionnement de la navigation, qui ne collectent aucune donnée personnelle.
          </p>
        </div>

        {/* 6. Liens externes */}
        <div style={s.section}>
          <h2 style={s.h2}>6. Liens hypertextes</h2>
          <p style={s.p}>
            Le site webotix.cloud peut contenir des liens vers d'autres sites (Calendly, GitHub, réseaux sociaux). Webotix n'est pas responsable du contenu de ces sites externes et ne peut être tenu responsable des dommages résultant de leur utilisation.
          </p>
        </div>

        {/* 7. Loi applicable */}
        <div style={s.section}>
          <h2 style={s.h2}>7. Droit applicable</h2>
          <p style={s.p}>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, et après toute tentative de résolution amiable, les tribunaux français seront compétents.
          </p>
          <p style={{ ...s.p, color: '#94a3b8', fontSize: '0.85rem', marginTop: '32px' }}>
            Dernière mise à jour : avril 2026
          </p>
        </div>

      </div>
    </div>
  )
}

export default MentionsLegales
