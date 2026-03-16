const templates = [
  {
    role: 'Developer',
    color: '#EBF5FF',
    text: '#1F4E79',
    note: 'Add this comment when moving a ticket to "Ready for QA". Use the Bug Fix format for defects and the Feature format for new work.',
    formats: [
      {
        title: 'Bug Fix Comment',
        tag: 'DEV · BUG FIX',
        tagBg: '#FEE2E2',
        tagText: '#7F1D1D',
        fields: [
          { label: 'Description', hint: 'What was the bug? What was the root cause?' },
          { label: 'Module', hint: 'Which module(s) were affected?' },
          { label: 'Code Changes', hint: 'What was changed or fixed? (be specific — function names, logic changes, DB fields etc.)' },
          { label: 'Impact Analysis', hint: 'What other modules or workflows could be affected by this change?' },
          { label: 'Tested Locally', hint: 'Yes / No — briefly describe what you tested' },
          { label: 'Status', hint: 'Ready for QA', fixed: true },
        ],
      },
      {
        title: 'Feature Implementation Comment',
        tag: 'DEV · FEATURE',
        tagBg: '#EBF5FF',
        tagText: '#1F4E79',
        fields: [
          { label: 'Description', hint: 'What was built? Summarise the implementation.' },
          { label: 'Module', hint: 'Which module(s) were worked on?' },
          { label: 'Code Changes', hint: 'Summary of what was added or modified.' },
          { label: 'Acceptance Criteria Met', hint: 'List each criterion from the ticket and confirm it is met.' },
          { label: 'Impact Analysis', hint: 'Any potential effects on existing functionality?' },
          { label: 'Tested Locally', hint: 'Yes / No — briefly describe what you tested' },
          { label: 'Status', hint: 'Ready for QA', fixed: true },
        ],
      },
    ],
  },
  {
    role: 'System Analyst',
    color: '#FDF0EC',
    text: '#8B2500',
    note: 'SA adds a triage comment at Gate 1 when assigning the ticket. Use separate formats for bugs and feature requests.',
    formats: [
      {
        title: 'Bug Triage Comment',
        tag: 'SA · BUG TRIAGE',
        tagBg: '#FEE2E2',
        tagText: '#7F1D1D',
        fields: [
          { label: 'Priority', hint: 'Immediate / Urgent / High / Normal / Low' },
          { label: 'Assigned To', hint: 'Developer name' },
          { label: 'Sprint', hint: 'Sprint number or "Current sprint"' },
          { label: 'SLA Due', hint: 'Date by which this must be resolved' },
          { label: 'Steps to Reproduce', hint: 'Clear steps CSD or SA confirmed' },
          { label: 'Expected vs Actual', hint: 'What should happen vs what is happening' },
          { label: 'Notes', hint: 'Any context, workaround in place, client sensitivity, or related tickets' },
        ],
      },
      {
        title: 'Feature Request Triage Comment',
        tag: 'SA · FEATURE TRIAGE',
        tagBg: '#EDEBF7',
        tagText: '#4B3A8A',
        fields: [
          { label: 'Priority', hint: 'Normal / High — features are rarely Urgent or above' },
          { label: 'Assigned To', hint: 'Developer name' },
          { label: 'Sprint', hint: 'Target sprint number' },
          { label: 'Acceptance Criteria', hint: 'What must be true for this ticket to be considered done?' },
          { label: 'Dependencies', hint: 'Any other tickets, modules, or external systems this depends on' },
          { label: 'Notes', hint: 'Business context, stakeholder, UI direction, or anything the developer needs to know' },
        ],
      },
    ],
  },
  {
    role: 'QA',
    color: '#F0FDF4',
    text: '#14532D',
    note: 'QA adds one summary comment in the ticket. Full test case details are maintained in the separate QA log — not in the ticket.',
    formats: [
      {
        title: 'QA Test Summary Comment',
        tag: 'QA · TEST SUMMARY',
        tagBg: '#F0FDF4',
        tagText: '#14532D',
        fields: [
          { label: 'Result', hint: 'PASS ✓  or  FAIL ✗' },
          { label: 'Modules Tested', hint: 'List all modules covered in this test round' },
          { label: 'Test Cases Run', hint: 'e.g. 12 passed · 0 failed' },
          { label: 'Regression', hint: 'Areas checked for regression based on dev impact analysis' },
          { label: 'Issues Found', hint: 'If PASS — "None". If FAIL — brief description of each defect found.' },
          { label: 'Sign-off', hint: 'QA name + date', fixed: false },
          { label: 'Detailed Log', hint: 'Maintained in QA Register — not stored in ticket', fixed: true },
        ],
      },
    ],
  },
]

function FieldRow({ field }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', borderBottom: '1px solid #f0f0f0', fontSize: '13px' }}>
      <div style={{ padding: '10px 12px', fontWeight: 600, color: '#333', background: '#fafafa', borderRight: '1px solid #f0f0f0' }}>
        {field.label}
      </div>
      <div style={{ padding: '10px 12px', color: field.fixed ? '#888' : '#555', fontStyle: field.fixed ? 'italic' : 'normal' }}>
        {field.hint}
      </div>
    </div>
  )
}

function FormatCard({ fmt }) {
  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px' }}>
      <div style={{ padding: '10px 16px', background: '#f5f5f5', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid #e0e0e0' }}>
        <span style={{ background: fmt.tagBg, color: fmt.tagText, fontSize: '11px', fontWeight: 700, padding: '2px 10px', borderRadius: '12px', letterSpacing: '0.4px' }}>{fmt.tag}</span>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#333' }}>{fmt.title}</span>
      </div>
      <div>
        {fmt.fields.map((f, i) => (
          <FieldRow key={i} field={f} />
        ))}
      </div>
    </div>
  )
}

export default function TicketComments() {
  return (
    <>
      <h2 className="section-title">8. Ticket Comment Templates</h2>
      <p className="section-subtitle">Standard format every team member must follow when adding comments to a ticket</p>

      <p className="body-text">
        Consistent comments make it easy to review history, hand off work, and audit decisions.
        Every team uses the format for their role — no freeform comments on status changes.
      </p>

      {templates.map((t, ti) => (
        <div key={t.role} style={{ marginBottom: ti < templates.length - 1 ? '48px' : '0' }}>
          <div style={{ background: t.color, color: t.text, fontWeight: 700, fontSize: '15px', padding: '12px 18px', borderRadius: '8px', marginBottom: '12px' }}>
            {t.role} — Comment Format
          </div>
          <p style={{ fontSize: '13px', color: '#666', marginBottom: '16px', paddingLeft: '4px' }}>{t.note}</p>
          {t.formats.map((fmt, i) => (
            <FormatCard key={i} fmt={fmt} />
          ))}
        </div>
      ))}
    </>
  )
}
