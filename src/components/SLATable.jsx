const priorities = [
  { name: 'Immediate', meaning: 'System down · Data loss · Nothing works',            triage: '3 – 4 hours',     resolve: 'Same day',       bg: '#FEE2E2', text: '#7F1D1D' },
  { name: 'Urgent',    meaning: 'Critical feature broken · Major client impact',       triage: '1 business day',  resolve: '1 business day', bg: '#FEF9E7', text: '#78350F' },
  { name: 'High',      meaning: 'Important feature broken · Workaround exists',        triage: '2 business days', resolve: '2 business days',bg: '#FFFDE7', text: '#713F12' },
  { name: 'Normal',    meaning: 'Minor bug or standard feature request',               triage: '4 business days', resolve: 'Current sprint', bg: '#EBF5FF', text: '#1E3A8A' },
  { name: 'Low',       meaning: 'Cosmetic issue · Nice to have',                       triage: '1 week',          resolve: 'Next sprint',    bg: '#F5F5F5', text: '#374151' },
]

const rules = [
  'SA must set priority at Gate 1 before the ticket moves to any developer.',
  'For Immediate or Urgent tickets — SA must notify the developer directly, not just via the ticket tool.',
  'SLA clock starts when CSD logs the ticket, not when SA reviews it.',
  'If an SLA is at risk of being missed — SA flags to Ram sir or Khem sir immediately.',
  'Priority can only be changed by SA with a written reason added in the ticket comments.',
]

export default function SLATable() {
  return (
    <>
      <h2 className="section-title">4. Ticket Priority &amp; SLA Guide</h2>
      <p className="section-subtitle">Every ticket must have a priority set by SA at triage — no exceptions</p>

      <p className="body-text">SLA times start from the moment CSD logs the ticket, not when SA reviews it.</p>

      <div className="table-wrap" style={{ marginTop: '20px' }}>
        <table>
          <thead>
            <tr>
              <th style={{ width: '120px' }}>Priority</th>
              <th>Meaning</th>
              <th style={{ width: '160px' }}>SA triages within</th>
              <th style={{ width: '160px' }}>Dev resolves within</th>
            </tr>
          </thead>
          <tbody>
            {priorities.map(p => (
              <tr key={p.name} style={{ background: 'transparent' }}>
                <td>
                  <span style={{ background: p.bg, color: p.text, fontWeight: 700, fontSize: '12px', padding: '3px 10px', borderRadius: '12px', display: 'inline-block' }}>
                    {p.name}
                  </span>
                </td>
                <td>{p.meaning}</td>
                <td style={{ fontWeight: 600, color: '#333' }}>{p.triage}</td>
                <td>{p.resolve}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sub-heading" style={{ marginTop: '36px' }}>Rules</div>
      <ul className="bullet-list">
        {rules.map(r => <li key={r}>{r}</li>)}
      </ul>
    </>
  )
}
