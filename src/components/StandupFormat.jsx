const boxes = [
  { num: '1', label: 'Done', desc: 'What I completed yesterday', color: '#E8F5F1', text: '#0F6E56' },
  { num: '2', label: 'Doing', desc: 'What I am working on today', color: '#E8F5F1', text: '#0F6E56' },
  { num: '3', label: 'Blocked?', desc: 'Raise blocker — SA resolves same day', color: '#FDF0EC', text: '#8B2500' },
]

export default function StandupFormat() {
  return (
    <>
      <h2 className="section-title">3. Sprint Standup Format</h2>
      <p className="section-subtitle">9:15 AM sharp every day · 15 min hard stop · All teams · No exceptions</p>

      <div className="sub-heading">Every person answers 3 questions — keep it short, use ticket numbers</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '20px 0' }}>
        {boxes.map(b => (
          <div key={b.num} style={{ background: b.color, borderRadius: '10px', padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: b.text, opacity: 0.6, marginBottom: '4px' }}>QUESTION {b.num}</div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: b.text, marginBottom: '8px' }}>{b.label}</div>
            <div style={{ fontSize: '13px', color: b.text, opacity: 0.8 }}>{b.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ background: '#f8f8f8', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '14px 18px', marginTop: '8px', fontSize: '13px', color: '#444' }}>
        <strong>Rule:</strong> If a blocker needs more than 1 minute to discuss — take it offline after standup. Standup is not a problem-solving session.
      </div>

      <div className="sub-heading" style={{ marginTop: '40px' }}>Monday and Friday — what gets discussed immediately after standup</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
        {[
          {
            title: 'Monday kickoff — 9:30 AM · 20 min',
            color: '#EDEBF7',
            text: '#4B3A8A',
            items: [
              'Sprint goals for this week — what must be done',
              'Any carry-over tickets from last week',
              'Priorities confirmed by SA',
              'Any dependency or risk to flag early',
            ]
          },
          {
            title: 'Friday wrap-up — 9:30 AM · 20 min',
            color: '#EDEBF7',
            text: '#4B3A8A',
            items: [
              'What was completed this week',
              'What carries over — and why',
              'Any unresolved blockers to note',
              'Prajwal sends written summary to senior dev',
            ]
          }
        ].map(card => (
          <div key={card.title} style={{ border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ background: card.color, padding: '12px 16px', fontWeight: 700, fontSize: '13px', color: card.text }}>{card.title}</div>
            <ul style={{ listStyle: 'none', padding: '12px 16px', margin: 0 }}>
              {card.items.map(item => (
                <li key={item} style={{ fontSize: '13px', color: '#555', padding: '5px 0', borderBottom: '1px solid #f0f0f0', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#888' }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
