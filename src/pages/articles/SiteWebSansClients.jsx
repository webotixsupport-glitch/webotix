import { useEffect } from 'react'
import ArticleLayout from '../../components/ArticleLayout'

const meta = {
  titre: "Pourquoi votre site web ne vous ramène pas de clients (et comment y remédier)",
  description: "Vous avez un site web mais les contacts ne viennent pas ? Voici les 5 raisons les plus fréquentes et les solutions concrètes pour inverser la tendance.",
  categorie: "Conseils & stratégie",
  date: "Avril 2026",
  lecture: "6 min",
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
    marginTop: '32px', marginBottom: '10px',
  },
  p: {
    marginBottom: '18px', color: '#374151',
  },
  li: {
    marginBottom: '10px', paddingLeft: '8px',
  },
  encadreRouge: {
    background: '#fff1f2', border: '1px solid #fecdd3',
    borderLeft: '4px solid #f43f5e',
    borderRadius: '12px', padding: '20px 24px',
    marginBottom: '24px', color: '#374151',
  },
  encadreVert: {
    background: '#f0fdf4', border: '1px solid #bbf7d0',
    borderLeft: '4px solid #22c55e',
    borderRadius: '12px', padding: '20px 24px',
    marginBottom: '24px', color: '#374151',
  },
  numero: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: '32px', height: '32px', borderRadius: '50%',
    background: '#0ea5e9', color: 'white',
    fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '0.9rem',
    marginRight: '12px', flexShrink: 0,
  },
}

function SiteWebSansClients() {
  useEffect(() => {
    document.title = "Pourquoi votre site web ne ramène pas de clients — Webotix"
  }, [])

  return (
    <ArticleLayout meta={meta}>

      <p style={s.p}>
        Vous avez investi dans un site web. Il est en ligne. Il est propre. Et pourtant, le téléphone
        ne sonne pas, les emails ne rentrent pas, les devis ne partent pas. Vous vous demandez si
        le web ça marche vraiment.
      </p>
      <p style={s.p}>
        Ça marche. Mais seulement si certaines conditions sont réunies. On a analysé des dizaines
        de sites de professionnels parisiens et les problèmes sont presque toujours les mêmes. En voici
        les 5 plus fréquents — avec les solutions concrètes.
      </p>

      <h2 style={s.h2}>Raison n°1 — Votre site est invisible sur Google</h2>
      <p style={s.p}>
        Un site qui n'apparaît pas sur Google n'existe pas pour vos futurs clients. Le SEO
        (référencement naturel) ne s'installe pas tout seul — il se travaille.
      </p>
      <div style={s.encadreRouge}>
        <strong>Le symptôme :</strong> tapez votre activité + votre ville sur Google. Si vous
        n'apparaissez pas dans les 10 premiers résultats, vous êtes invisible pour 95% de vos
        clients potentiels.
      </div>
      <div style={s.encadreVert}>
        <strong>La solution :</strong> optimiser vos balises titre et description, créer du contenu
        autour de vos mots-clés locaux, et obtenir des avis Google. Un travail de 2 à 4 semaines
        qui change tout.
      </div>

      <h2 style={s.h2}>Raison n°2 — Votre site n'est pas adapté au mobile</h2>
      <p style={s.p}>
        Plus de 65% des recherches locales se font depuis un smartphone. Si votre site est difficile
        à lire ou à naviguer sur mobile, vos visiteurs partent en moins de 10 secondes.
      </p>
      <div style={s.encadreRouge}>
        <strong>Le symptôme :</strong> ouvrez votre site sur votre téléphone. Est-ce qu'il faut
        zoomer pour lire ? Les boutons sont-ils trop petits ? Le formulaire est-il facile à remplir ?
      </div>
      <div style={s.encadreVert}>
        <strong>La solution :</strong> un site "responsive" qui s'adapte automatiquement à toutes
        les tailles d'écran. C'est un standard en 2026, pas une option.
      </div>

      <h2 style={s.h2}>Raison n°3 — Votre site charge trop lentement</h2>
      <p style={s.p}>
        Google pénalise les sites lents dans son classement. Et les visiteurs abandonnent une page
        qui met plus de 3 secondes à charger. C'est brutal mais c'est la réalité.
      </p>
      <div style={s.encadreRouge}>
        <strong>Le symptôme :</strong> testez votre site sur PageSpeed Insights (gratuit). Un score
        en dessous de 70 sur mobile est un problème sérieux.
      </div>
      <div style={s.encadreVert}>
        <strong>La solution :</strong> optimisation des images, mise en cache, hébergement performant.
        Des ajustements techniques qui peuvent doubler votre trafic organique.
      </div>

      <h2 style={s.h2}>Raison n°4 — Il n'y a pas d'appel à l'action clair</h2>
      <p style={s.p}>
        Un visiteur qui arrive sur votre site ne sait pas toujours quoi faire. Si vous ne lui dites
        pas clairement "appelez-nous", "demandez un devis", "réservez une séance" — il part sans
        rien faire.
      </p>
      <div style={s.encadreRouge}>
        <strong>Le symptôme :</strong> regardez votre page d'accueil. En 5 secondes, est-ce qu'un
        inconnu comprend ce que vous proposez et comment vous contacter ?
      </div>
      <div style={s.encadreVert}>
        <strong>La solution :</strong> un bouton d'action visible dès l'ouverture de la page, un
        numéro de téléphone cliquable, un formulaire de contact simple. Moins de clics = plus de
        conversions.
      </div>

      <h2 style={s.h2}>Raison n°5 — Le design donne une mauvaise première impression</h2>
      <p style={s.p}>
        Un visiteur se fait une opinion sur votre sérieux en moins de 50 millisecondes. Un design
        vieillissant, des photos de mauvaise qualité ou un manque de cohérence visuelle font fuir
        les clients avant même qu'ils aient lu une ligne.
      </p>
      <div style={s.encadreRouge}>
        <strong>Le symptôme :</strong> regardez votre site avec les yeux d'un inconnu. Est-ce que
        ça inspire confiance ? Est-ce que ça donne envie de rester ?
      </div>
      <div style={s.encadreVert}>
        <strong>La solution :</strong> refonte du design avec de vraies photos, une typographie
        lisible et une structure claire. Ce n'est pas une question d'esthétique — c'est une question
        de crédibilité.
      </div>

      <h2 style={s.h2}>Par où commencer ?</h2>
      <p style={s.p}>
        Avant de tout refaire, il faut savoir exactement où est le problème. Un audit complet
        de votre site — vitesse, SEO, mobile, design, conversions — vous donnera une feuille de
        route claire avec les actions prioritaires.
      </p>
      <p style={s.p}>
        Chez Webotix, on propose cet audit gratuitement. On analyse votre site et on vous envoie
        un rapport détaillé sous 24h — sans engagement d'aucune sorte.
      </p>

    </ArticleLayout>
  )
}

export default SiteWebSansClients
