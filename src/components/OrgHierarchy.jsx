const DEPTS = [
  { x: 140, label: 'System Analyst',   color: '#9B59B6' },
  { x: 420, label: 'Developer',        color: '#16A085' },
  { x: 680, label: 'QA',               color: '#E67E22' },
  { x: 890, label: 'Tech Writer',      color: '#0369A1' },
]

const MEMBERS = [
  { x:  40, label: 'Prajwol',    dept: 0 },
  { x:  90, label: 'Annant',     dept: 0 },
  { x: 140, label: 'Pareekshit', dept: 0 },
  { x: 190, label: 'Sudesh',     dept: 0 },
  { x: 240, label: 'Gopi',       dept: 0 },
  { x: 346, label: 'Gopal',      dept: 1, sub: 'Deployment' },
  { x: 396, label: 'Prashant',   dept: 1 },
  { x: 446, label: 'Chiranjivi', dept: 1 },
  { x: 496, label: 'Ashmita',    dept: 1 },
  { x: 546, label: 'Anu',        dept: 1 },
  { x: 630, label: 'Shramila',   dept: 2 },
  { x: 680, label: 'Sadikshya',  dept: 2 },
  { x: 730, label: 'Bimala',     dept: 2 },
  { x: 890, label: 'Tech Writer',dept: 3 },
]

function curve(x1, y1, x2, y2) {
  const mid = (y1 + y2) / 2
  return `M ${x1} ${y1} C ${x1} ${mid}, ${x2} ${mid}, ${x2} ${y2}`
}

function OrgChart() {
  const rootX = 500, rootY = 30, rootW = 164, rootH = 54
  const deptY = 170
  const memberY = 278

  return (
    <svg viewBox="0 0 1000 340" style={{ width:'100%', maxWidth:1060, display:'block', margin:'0 auto 36px', borderRadius:10 }}>
      <rect x={0} y={0} width={1000} height={340} fill="#F1F3F6" rx={10} />

      {/* root → dept curves */}
      {DEPTS.map(d => (
        <path key={d.label} d={curve(rootX, rootY + rootH, d.x, deptY - 16)}
          fill="none" stroke={d.color} strokeWidth={1.8} />
      ))}

      {/* root box */}
      <rect x={rootX - rootW/2} y={rootY} width={rootW} height={rootH} rx={7}
        fill="white" stroke="#d0d0d0" strokeWidth={1.5} />
      <text x={rootX} y={rootY + 22} textAnchor="middle" fontSize={14} fontWeight={700} fill="#1a1a1a">Ram Sapkota</text>
      <text x={rootX} y={rootY + 40} textAnchor="middle" fontSize={13} fill="#555">(Senior SE)</text>

      {/* dept labels */}
      {DEPTS.map(d => (
        <text key={d.label} x={d.x} y={deptY} textAnchor="middle" fontSize={14} fill={d.color}>{d.label}</text>
      ))}

      {/* dept → member curves */}
      {MEMBERS.map(m => (
        <path key={m.label} d={curve(DEPTS[m.dept].x, deptY + 6, m.x, memberY - 14)}
          fill="none" stroke={DEPTS[m.dept].color} strokeWidth={1.5} />
      ))}

      {/* member labels */}
      {MEMBERS.map(m => (
        <g key={m.label}>
          <text x={m.x} y={memberY} textAnchor="middle" fontSize={12} fill={DEPTS[m.dept].color}>{m.label}</text>
          {m.sub && <text x={m.x} y={memberY + 14} textAnchor="middle" fontSize={9} fill={DEPTS[m.dept].color} opacity={0.7}>{m.sub}</text>}
        </g>
      ))}
    </svg>
  )
}

export default function OrgHierarchy() {
  return (
    <>
      <h2 className="section-title">1. Organisation Hierarchy</h2>
      <p className="section-subtitle">Who is in each team and how they connect</p>

      <OrgChart />

      <div className="sub-heading">Teams</div>
      <ul className="bullet-list">
        <li><strong>CSD</strong> — Customer Support Department. First point of contact for all client issues. Responsible for logging and tracking every ticket raised.</li>
        <li><strong>System Analyst (SA)</strong> — Reviews and triages all incoming tickets. Owns sprint planning, backlog management, deployment preparation, and cross-team coordination. Prajwal is the primary SA.</li>
        <li><strong>Developer</strong> — Builds and fixes features based on tickets assigned by SA. Responsible for local testing, impact analysis, and code quality before handoff to QA. CEO leads the dev team.</li>
        <li><strong>QA</strong> — Tests all changes before they reach production. Maintains test checklists per module and provides formal sign-off before deployment.</li>
        <li><strong>Technical Writer</strong> — Activated when SA marks a ticket "Documentation Required = Yes". Writes user-facing documentation in parallel with the deployment review, and attaches it to the ticket before the sign-off gate.</li>
      </ul>

      <div className="sub-heading">Reporting and Approval Line</div>
      <ul className="bullet-list">
        <li>CSD logs ticket → SA triages and assigns → Developer builds → QA validates → SA prepares deployment → Technical Writer documents (if required) in parallel with Deployment review.</li>
        <li>Final deployment to production requires written approval from <strong>Team Lead or CEO</strong> before anything goes live.</li>
      </ul>
    </>
  )
}
