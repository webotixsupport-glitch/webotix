import { useEffect } from 'react'
import ArticleLayout from '../../components/ArticleLayout'

const meta = {
  titre: "Combien coûte un site web professionnel à Paris en 2026 ?",
  description: "Prix d'un site vitrine, boutique en ligne ou application web à Paris. On vous explique ce qui influence les tarifs et comment éviter les mauvaises surprises.",
  categorie: "Création de site web",
  date: "Avril 2026",
  lecture: "5 min",
}

// Styles réutilisables pour la mise en forme de l'article
const s = {
  h2: {
    fontFamily: "'Outfit', sans-serif", fontWeight: 800,
    fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', color: '#0f172a',
    marginTop: '48px', marginBottom: '16px', lineHeight: 1.3,
  },
  h3: {
    fontFamily: "'Outfit', sans-serif", fontWeight: 700,
    fontSize: '1.1rem', color: '#0f172a',
    marginTop: '28px', marginBottom: '10px',
  },
  p: {
    marginBottom: '18px', color: '#374151',
  },
  li: {
    marginBottom: '10px', paddingLeft: '8px',
  },
  encadre: {
    background: '#f0f9ff', border: '1px solid #bae6fd',
    borderLeft: '4px solid #0ea5e9',
    borderRadius: '12px', padding: '20px 24px',
    marginBottom: '24px',
  },
  tableau: {
    width: '100%', borderCollapse: 'collapse',
    marginBottom: '28px', borderRadius: '12px', overflow: 'hidden',
  },
  th: {
    background: '#0f172a', color: 'white',
    padding: '12px 16px', textAlign: 'left',
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 600,
  },
  td: {
    padding: '12px 16px', borderBottom: '1px solid #f1f5f9',
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#374151',
  },
  tdAlt: {
    padding: '12px 16px', borderBottom: '1px solid #f1f5f9',
    background: '#fafbff',
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#374151',
  },
}

function CoutSiteWebParis() {
  useEffect(() => {
    document.title = "Combien coûte un site web professionnel à Paris en 2026 ? — Webotix"
  }, [])

  return (
    <ArticleLayout meta={meta}>

      <p style={s.p}>
        C'est la question que presque tous nos clients posent en premier. Et c'est une bonne question —
        parce que les prix varient énormément : de 300 € chez un freelance débutant à 20 000 € dans
        une grande agence parisienne. Comment s'y retrouver ?
      </p>
      <p style={s.p}>
        Dans cet article, on vous donne les vrais prix du marché à Paris en 2026, ce qui les explique,
        et comment choisir l'option qui correspond à votre situation.
      </p>

      <h2 style={s.h2}>Les 3 grands types de sites et leurs prix à Paris</h2>

      <h3 style={s.h3}>1. Le site vitrine</h3>
      <p style={s.p}>
        C'est le site de présentation classique : qui vous êtes, ce que vous faites, comment vous contacter.
        Idéal pour les artisans, professions libérales, commerces et PME.
      </p>

      <table style={s.tableau}>
        <thead>
          <tr>
            <th style={s.th}>Option</th>
            <th style={s.th}>Prix indicatif</th>
            <th style={s.th}>Pour qui</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={s.td}>Constructeur (Wix, Squarespace)</td>
            <td style={s.td}>0 – 30 €/mois</td>
            <td style={s.td}>Très petits budgets, résultats limités</td>
          </tr>
          <tr>
            <td style={s.tdAlt}>Freelance débutant</td>
            <td style={s.tdAlt}>300 – 800 €</td>
            <td style={s.tdAlt}>Budget serré, risque de qualité variable</td>
          </tr>
          <tr>
            <td style={s.td}>Agence web (Paris)</td>
            <td style={s.td}>1 200 – 5 000 €</td>
            <td style={s.td}>Résultat professionnel, suivi inclus</td>
          </tr>
        </tbody>
      </table>

      <h3 style={s.h3}>2. La boutique en ligne (e-commerce)</h3>
      <p style={s.p}>
        Un site e-commerce demande plus de travail : catalogue produits, paiement sécurisé, gestion des
        commandes. Le prix monte en conséquence.
      </p>
      <div style={s.encadre}>
        <strong style={{ color: '#0f172a' }}>Fourchette à Paris :</strong> entre <strong>2 500 €</strong> pour
        une boutique simple et <strong>8 000 €+</strong> pour un projet complexe avec nombreuses
        fonctionnalités sur mesure.
      </div>

      <h3 style={s.h3}>3. L'application web sur mesure</h3>
      <p style={s.p}>
        Dashboard, espace client, app de gestion interne — ce sont des projets sur mesure qui nécessitent
        plusieurs semaines de développement.
      </p>
      <div style={s.encadre}>
        <strong style={{ color: '#0f172a' }}>Fourchette à Paris :</strong> à partir de <strong>3 500 €</strong>,
        sans plafond selon la complexité. Comptez 4 à 10 semaines de développement.
      </div>

      <h2 style={s.h2}>Ce qui fait varier le prix</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li style={s.li}><strong>Le nombre de pages</strong> — un site 5 pages coûte moins qu'un site 20 pages</li>
        <li style={s.li}><strong>Le design</strong> — template existant ou design 100% sur mesure</li>
        <li style={s.li}><strong>Les fonctionnalités</strong> — formulaire simple ou réservation en ligne complexe</li>
        <li style={s.li}><strong>Le SEO</strong> — rédaction de contenu optimisé Google incluse ou non</li>
        <li style={s.li}><strong>La maintenance</strong> — livraison seule ou suivi mensuel inclus</li>
      </ul>

      <h2 style={s.h2}>Agence vs freelance à Paris : quelles différences concrètes ?</h2>
      <p style={s.p}>
        Un freelance sera moins cher, mais vous aurez souvent un seul interlocuteur qui gère design,
        développement et SEO — avec des résultats inégaux. Une agence facture plus, mais vous avez
        une équipe dédiée, des processus éprouvés et un suivi après livraison.
      </p>
      <p style={s.p}>
        Le vrai critère ? Regardez le portfolio. Des réalisations concrètes avec des résultats mesurables
        valent mieux que n'importe quel argument commercial.
      </p>

      <h2 style={s.h2}>Ce qu'on propose chez Webotix</h2>
      <p style={s.p}>
        Nous sommes une agence web parisienne avec des tarifs transparents et sans surprise :
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
        <li style={s.li}><strong>Site vitrine</strong> — à partir de 1 200 € · livré en 2 à 4 semaines</li>
        <li style={s.li}><strong>Boutique en ligne</strong> — à partir de 2 500 € · livré en 3 à 5 semaines</li>
        <li style={s.li}><strong>Application sur mesure</strong> — à partir de 3 500 € · livré en 4 à 10 semaines</li>
        <li style={s.li}><strong>Maintenance mensuelle</strong> — à partir de 69 €/mois</li>
      </ul>
      <p style={s.p}>
        Chaque projet commence par un audit gratuit de votre situation actuelle — pour qu'on vous propose
        exactement ce dont vous avez besoin, sans vous vendre plus.
      </p>

    </ArticleLayout>
  )
}

export default CoutSiteWebParis
