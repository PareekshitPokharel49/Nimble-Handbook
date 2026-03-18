const features = [
  {
    num: 1,
    title: 'Daily Log Book & Work Log Report',
    desc: 'A Reporting module added to the Nimble HRMIS ESS Portal. Includes a Daily Log Book for team members to fill in standup entries, and a Work Log Report for managers to filter and review work progress across the team.',
    cards: [
      { title: 'Daily Log Book', desc: 'Each team member fills their Done / Doing / Blocked entry daily before standup ends. Monitored by Prajwol.', color: '#EBF5FF', text: '#1F4E79' },
      { title: 'Work Log Report', desc: 'Filter by date range, team, or member and export a full attendance and work log report.', color: '#F0FDF4', text: '#14532D' },
    ],
    file: '/nimble_reporting.html',
    label: 'Open Wireframe in Full Screen ↗',
  },
  {
    num: 2,
    title: 'Add Task — Structured Ticket Form',
    desc: 'An enhanced Add Task form in the My Tasks module. Replaces the current freeform description with structured, type-aware fields — separate formats for Feature, Bug, and Task — ensuring every ticket has the required information before it is submitted.',
    cards: [
      { title: 'Feature Form', desc: 'Guided fields: Description, Expected Behaviour, Acceptance Criteria, Dependencies, Notes.', color: '#EFF6FF', text: '#2563eb' },
      { title: 'Bug Form', desc: 'Guided fields: Bug Description, Actual Behaviour, Expected Behaviour, Steps to Replicate, Environment.', color: '#FEF2F2', text: '#dc2626' },
    ],
    file: '/nimble_add_task.html',
    label: 'Open Wireframe in Full Screen ↗',
  },
  {
    num: 3,
    title: 'Ticket View — Subtask Management',
    desc: 'An enhanced Ticket View page in the My Tasks module. Introduces inline subtask management — team members can add, track, and complete subtasks directly within a ticket, with a progress bar and status dropdowns for each subtask. Ensures large tickets are properly broken down and progress is visible at a glance.',
    cards: [
      { title: 'Subtask Breakdown', desc: 'Add subtasks inline within a ticket. Each subtask has its own status dropdown (To Do, In Progress, Done) and can be ticked off independently.', color: '#F5F3FF', text: '#5B21B6' },
      { title: 'Progress Tracking', desc: 'A visual progress bar shows completion percentage based on subtask status. Helps SA and managers monitor effort distribution without opening every ticket.', color: '#FFF7ED', text: '#C2410C' },
    ],
    file: '/nimble_ticket_view.html',
    label: 'Open Wireframe in Full Screen ↗',
  },
]

export default function PMSFeature() {
  return (
    <>
      <h2 className="section-title">8. PMS Feature Requests</h2>
      <p className="section-subtitle">Wireframe proposals for Nimble HRMIS — ESS Portal enhancements</p>

      {features.map((f, i) => (
        <div key={f.num} style={{ marginBottom: i < features.length - 1 ? '56px' : '0' }}>

          {/* Heading */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#FF4D00', color: '#fff', fontWeight: 900, fontSize: '16px', padding: '4px 12px', borderRadius: '4px', letterSpacing: '0.5px' }}>
              FEATURE REQUEST {f.num}
            </div>
            <div style={{ fontWeight: 900, fontSize: '28px', color: '#1a1a1a' }}>{f.title}</div>
          </div>

          <p className="body-text" style={{ marginBottom: '16px' }}>{f.desc}</p>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            {f.cards.map(c => (
              <div key={c.title} style={{ background: c.color, border: `1px solid ${c.text}22`, borderRadius: '8px', padding: '14px 18px' }}>
                <div style={{ fontWeight: 700, fontSize: '14px', color: c.text, marginBottom: '6px' }}>{c.title}</div>
                <p style={{ fontSize: '13px', color: '#444', margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Link */}
          <div style={{ marginBottom: '16px', display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a
              href={f.file}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-block', background: '#1F4E79', color: '#fff', fontWeight: 600, fontSize: '13px', padding: '8px 18px', borderRadius: '6px', textDecoration: 'none' }}
            >
              {f.label}
            </a>
            <span style={{ fontSize: '12px', color: '#888' }}>Opens in a new tab — fully interactive</span>
          </div>

          {/* Embedded wireframe */}
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', height: '600px' }}>
            <iframe
              src={f.file}
              style={{ width: '100%', height: '100%', border: 'none' }}
              title={`Feature Request ${f.num} Wireframe`}
            />
          </div>
        </div>
      ))}
    </>
  )
}
