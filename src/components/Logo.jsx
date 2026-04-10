// Logo Webotix — typographie Outfit bold
function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg width="30" height="30" viewBox="0 0 34 34" fill="none" aria-hidden="true" style={{ flexShrink: 0, minWidth: '26px' }}>
        <rect x="1" y="1" width="32" height="32" rx="9" fill="rgba(14,165,233,0.15)" stroke="rgba(14,165,233,0.5)" strokeWidth="1.5"/>
        <path d="M10 13L6 17L10 21" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 13L28 17L24 21" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 10L15 24" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span className="hidden sm:inline" style={{
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 800,
        fontSize: '1.2rem',
        letterSpacing: '0.04em',
        background: 'linear-gradient(90deg, #0ea5e9, #6366f1)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        WEBOTIX
      </span>
    </div>
  )
}

export default Logo
