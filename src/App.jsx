import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BoutonCalendly from './components/BoutonCalendly'
import CookieBanner from './components/CookieBanner'
import PopupAudit from './components/PopupAudit'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Tarifs from './pages/Tarifs'
import Merci from './pages/Merci'
import MentionsLegales from './pages/MentionsLegales'
import Services from './pages/Services'
import Realisations from './pages/Realisations'
import NotFound from './pages/NotFound'

// Déclenche les animations fade au scroll sur tous les éléments .will-animate
function ScrollAnimator() {
  const location = useLocation()
  useEffect(() => {
    const elements = document.querySelectorAll('.will-animate')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])
  return null
}

// Pied de page affiché sur toutes les pages sauf /contact
function FooterConditionnel() {
  const location = useLocation()
  if (location.pathname === '/contact') return null
  return <Footer />
}

// Composant principal — orchestre toutes les pages de Webotix
function App() {
  const [popupAudit, setPopupAudit] = useState(false)

  // Écoute l'événement global pour ouvrir la popup depuis n'importe quel composant
  useEffect(() => {
    const ouvrir = () => setPopupAudit(true)
    window.addEventListener('ouvrir-audit', ouvrir)
    return () => window.removeEventListener('ouvrir-audit', ouvrir)
  }, [])

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#080b14]">
        {/* Gestionnaire d'animations au scroll */}
        <ScrollAnimator />

        {/* Popup audit gratuit — accessible depuis toutes les pages */}
        <PopupAudit ouvert={popupAudit} onFermer={() => setPopupAudit(false)} />

        {/* En-tête fixe en haut */}
        <Header />

        {/* Contenu principal selon la page */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/merci" element={<Merci />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Bouton flottant RDV Calendly — visible sur toutes les pages */}
        <BoutonCalendly />

        {/* Bandeau cookies RGPD — charge GA uniquement si accepté */}
        <CookieBanner />

        {/* Pied de page — masqué sur la page contact */}
        <FooterConditionnel />
      </div>
    </Router>
  )
}

export default App
