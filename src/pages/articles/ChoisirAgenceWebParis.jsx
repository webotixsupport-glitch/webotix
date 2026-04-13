import { useEffect } from 'react'
import ArticleLayout from '../../components/ArticleLayout'

const meta = {
  titre: "Comment choisir son agence web à Paris en 2026 ? (Le guide complet)",
  description: "Portfolio, transparence des prix, réactivité, suivi après livraison — voici les 5 critères indispensables pour bien choisir votre agence web à Paris et éviter les pièges.",
  categorie: "Conseils & stratégie",
  date: "Avril 2026",
  lecture: "7 min",
}

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
    marginBottom: '12px', paddingLeft: '8px',
  },
  encadreBleu: {
    background: '#f0f9ff', border: '1px solid #bae6fd',
    borderLeft: '4px solid #0ea5e9',
    borderRadius: '12px', padding: '20px 24px',
    marginBottom: '24px', color: '#374151',
  },
  encadreOrange: {
    background: '#fffbeb', border: '1px solid #fde68a',
    borderLeft: '4px solid #f59e0b',
    borderRadius: '12px', padding: '20px 24px',
    marginBottom: '24px', color: '#374151',
  },
  question: {
    background: '#f8f9ff', borderRadius: '12px',
    padding: '16px 20px', marginBottom: '12px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem', color: '#374151',
    borderLeft: '3px solid #6366f1',
  },
}

function ChoisirAgenceWebParis() {
  useEffect(() => {
    document.title = "Comment choisir son agence web à Paris en 2026 ? — Webotix"
  }, [])

  return (
    <ArticleLayout meta={meta}>

      <p style={s.p}>
        Paris compte des centaines d'agences web. Certaines livrent des sites exceptionnels qui
        génèrent de vrais résultats. D'autres prennent votre argent et disparaissent après la
        livraison. Comment faire la différence ?
      </p>
      <p style={s.p}>
        Après avoir accompagné de nombreux professionnels parisiens, voici les 5 critères qui
        permettent de distinguer une bonne agence web d'une mauvaise — et les questions précises
        à poser avant de signer quoi que ce soit.
      </p>

      <h2 style={s.h2}>Critère n°1 — Le portfolio avec des résultats concrets</h2>
      <p style={s.p}>
        N'importe quelle agence peut montrer de beaux screenshots. Ce qui compte, c'est ce que
        ces sites ont produit comme résultats pour leurs clients.
      </p>
      <div style={s.encadreBleu}>
        <strong>Ce qu'il faut chercher :</strong> des témoignages clients avec des chiffres
        concrets — "+X% de contacts", "planning complet", "CA multiplié". Si l'agence ne peut
        pas vous montrer de résultats mesurables, c'est un signal d'alarme.
      </div>
      <p style={s.p}>
        Demandez aussi à voir des sites récents — pas des projets vieux de 5 ans. Les standards
        du web évoluent vite, et une agence qui n'évolue pas livre des sites dépassés.
      </p>

      <h2 style={s.h2}>Critère n°2 — La transparence sur les prix</h2>
      <p style={s.p}>
        Une bonne agence affiche ses tarifs clairement, ou vous donne une estimation précise
        rapidement. Si on vous répond "ça dépend" sans vous expliquer de quoi ça dépend, méfiance.
      </p>
      <div style={s.encadreOrange}>
        <strong>Le piège classique :</strong> un devis très bas pour décrocher le contrat, puis
        des "suppléments" qui s'accumulent — hébergement, maintenance, modifications, formation...
        Le prix final peut doubler ou tripler le devis initial.
      </div>
      <p style={s.p}>
        Exigez un devis détaillé qui liste précisément ce qui est inclus et ce qui ne l'est pas.
        Notamment : l'hébergement, le nom de domaine, les modifications pendant le projet, et
        le support après livraison.
      </p>

      <h2 style={s.h2}>Critère n°3 — La réactivité et la communication</h2>
      <p style={s.p}>
        Combien de temps l'agence met-elle à répondre à vos emails ? Avez-vous un interlocuteur
        dédié ou vous passez d'un inconnu à l'autre ? Est-ce qu'on vous explique les choix
        techniques ou on vous noie sous le jargon ?
      </p>
      <div style={s.encadreBleu}>
        <strong>Le test simple :</strong> envoyez une demande de contact avant de signer. Si vous
        n'avez pas de réponse sous 24h, c'est révélateur de comment se passera la relation client
        pendant le projet.
      </div>

      <h2 style={s.h2}>Critère n°4 — L'expertise SEO incluse</h2>
      <p style={s.p}>
        Un beau site sans référencement est un beau site invisible. Le SEO doit être intégré dès
        la conception — pas ajouté après coup comme une option payante supplémentaire.
      </p>
      <p style={s.p}>
        Vérifiez que l'agence parle de structure des titres, de mots-clés locaux, de vitesse de
        chargement et d'optimisation mobile dans son offre de base. Sinon vous aurez un site
        bien fait que personne ne trouvera.
      </p>

      <h2 style={s.h2}>Critère n°5 — Le suivi après livraison</h2>
      <p style={s.p}>
        La livraison du site c'est le début, pas la fin. Qui appelle-t-on si le site tombe en
        panne un dimanche ? Qui fait les mises à jour de contenu ? Qui suit les performances
        sur Google ?
      </p>
      <div style={s.encadreBleu}>
        <strong>Ce qu'il faut demander :</strong> est-ce qu'il y a une offre de maintenance
        mensuelle ? Quels sont les délais d'intervention ? Y a-t-il un rapport de performance
        mensuel inclus ?
      </div>

      <h2 style={s.h2}>Les questions à poser avant de signer</h2>
      <p style={s.p}>
        Voici une liste de questions concrètes à poser à n'importe quelle agence parisienne
        avant de vous engager :
      </p>
      <div style={s.question}>Pouvez-vous me montrer 3 sites récents avec les résultats obtenus pour le client ?</div>
      <div style={s.question}>Qu'est-ce qui est inclus dans le prix et qu'est-ce qui est facturé en plus ?</div>
      <div style={s.question}>Qui sera mon interlocuteur principal pendant le projet ?</div>
      <div style={s.question}>Combien de temps après la livraison puis-je vous contacter gratuitement ?</div>
      <div style={s.question}>Est-ce que le SEO local est inclus dans la prestation de base ?</div>
      <div style={s.question}>Que se passe-t-il si le site a un problème après la livraison ?</div>
      <div style={s.question}>Le site m'appartient complètement après la livraison ?</div>

      <h2 style={s.h2}>Notre approche chez Webotix</h2>
      <p style={s.p}>
        On répond "oui" à toutes ces questions. Notre portfolio montre des résultats concrets,
        nos tarifs sont affichés publiquement, vous avez un interlocuteur unique du début à
        la fin, et on propose un suivi mensuel transparent.
      </p>
      <p style={s.p}>
        Pour vous aider à faire le bon choix — que vous choisissiez Webotix ou non — on propose
        un audit gratuit de votre situation actuelle. On analyse vos besoins et on vous dit
        honnêtement ce qu'on peut faire pour vous.
      </p>

    </ArticleLayout>
  )
}

export default ChoisirAgenceWebParis
