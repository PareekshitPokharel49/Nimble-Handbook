export default function Nav({ sections, active, onNav }) {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <strong>Nimble Infosys</strong>
        <span>Process Guide v1.0</span>
      </div>
      {sections.map(s => (
        <button
          key={s.id}
          className={`nav-item ${active === s.id ? 'active' : ''}`}
          onClick={() => onNav(s.id)}
        >
          {s.label}
        </button>
      ))}
    </nav>
  )
}
