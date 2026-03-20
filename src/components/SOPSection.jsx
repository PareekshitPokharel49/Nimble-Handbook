// ─── Document Template ────────────────────────────────────────────────────
function DocTemplate({ doc }) {
  return (
    <div style={{ marginTop: '14px', border: '1px solid #D1D5DB', borderRadius: '6px', overflow: 'hidden', background: '#fff' }}>
      <div style={{ background: '#F9FAFB', borderBottom: '1px solid #E5E7EB', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '13px', color: '#111827' }}>{doc.title}</div>
          <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>{doc.subtitle}</div>
        </div>
        <div style={{ background: '#E5E7EB', color: '#374151', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '3px', letterSpacing: '1px' }}>TEMPLATE</div>
      </div>
      <div style={{ padding: '14px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {doc.fields.map((f, i) => (
          <div key={i} style={{ gridColumn: f.wide ? 'span 2' : 'span 1', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#374151' }}>{f.label}</div>
            <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '7px 10px', fontSize: '11px', color: '#9CA3AF', lineHeight: 1.6, minHeight: f.wide ? '52px' : '34px', whiteSpace: 'pre-line' }}>{f.placeholder}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Ticket Comment Components ────────────────────────────────────────────
function FieldRow({ field }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', borderBottom: '1px solid #f0f0f0', fontSize: '13px' }}>
      <div style={{ padding: '10px 12px', fontWeight: 600, color: '#333', background: '#fafafa', borderRight: '1px solid #f0f0f0' }}>{field.label}</div>
      <div style={{ padding: '10px 12px', color: field.fixed ? '#888' : '#555', fontStyle: field.fixed ? 'italic' : 'normal' }}>{field.hint}</div>
    </div>
  )
}

function FormatCard({ fmt }) {
  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', marginBottom: '12px' }}>
      <div style={{ padding: '10px 16px', background: '#f5f5f5', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid #e0e0e0' }}>
        <span style={{ background: fmt.tagBg, color: fmt.tagText, fontSize: '11px', fontWeight: 700, padding: '2px 10px', borderRadius: '12px', letterSpacing: '0.4px' }}>{fmt.tag}</span>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#333' }}>{fmt.title}</span>
      </div>
      <div>{fmt.fields.map((f, i) => <FieldRow key={i} field={f} />)}</div>
    </div>
  )
}

function CommentFormatsBlock({ comments }) {
  if (!comments) return null
  return (
    <div style={{ marginBottom: '12px', border: '1px solid #E8E8E8', borderRadius: '8px', overflow: 'hidden', background: '#fff' }}>
      <div style={{ padding: '10px 16px', borderBottom: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ background: '#374151', color: '#fff', fontWeight: 800, fontSize: '11px', padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.5px' }}>TC</div>
        <div style={{ fontWeight: 700, fontSize: '13px', color: '#1E293B' }}>Ticket Comment Format</div>
      </div>
      <div style={{ padding: '14px 16px' }}>
        <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6, margin: '0 0 14px 0' }}>{comments.note}</p>
        {comments.formats.map((fmt, i) => <FormatCard key={i} fmt={fmt} />)}
      </div>
    </div>
  )
}

// ─── Word Doc Template ────────────────────────────────────────────────────
function WordDoc() {
  const Line = ({ count = 1 }) => Array.from({ length: count }).map((_, i) => (
    <div key={i} style={{ borderBottom: '1px solid #C9C9C9', marginTop: i === 0 ? '6px' : '10px', height: '20px' }} />
  ))
  const Section = ({ num, title, lines = 2, children }) => (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ fontSize: '12px', fontWeight: 700, color: '#1F2937', marginBottom: '2px' }}>
        {num}. {title}
      </div>
      {children || <Line count={lines} />}
    </div>
  )
  return (
    <div style={{ marginTop: '14px', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', borderRadius: '2px', overflow: 'hidden', maxWidth: '680px' }}>
      {/* Document header bar */}
      <div style={{ background: '#1F2937', padding: '8px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '11px', fontWeight: 800, color: '#fff', letterSpacing: '1.5px' }}>DEVELOPER DOCUMENT</div>
        <div style={{ fontSize: '10px', color: '#9CA3AF', letterSpacing: '0.5px' }}>INTERNAL USE ONLY</div>
      </div>

      {/* Document body */}
      <div style={{ padding: '24px 32px 28px', fontFamily: 'Georgia, serif' }}>

        {/* Meta row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '2px solid #1F2937' }}>
          {['Ticket ID', 'Developer', 'Date'].map(label => (
            <div key={label}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: '#6B7280', letterSpacing: '0.8px', marginBottom: '4px' }}>{label.toUpperCase()}</div>
              <div style={{ borderBottom: '1px solid #374151', height: '20px' }} />
            </div>
          ))}
        </div>

        <Section num={1} title="What was built" lines={3} />
        <Section num={2} title="How it works" lines={4} />
        <Section num={3} title="DB / Stored Procedure Changes">
          <Line count={2} />
          <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '4px', fontStyle: 'italic' }}>Write "None" if no database changes were made.</div>
        </Section>

        <Section num={4} title="Screenshots">
          <div style={{ marginTop: '8px', border: '1.5px dashed #D1D5DB', borderRadius: '4px', padding: '16px', textAlign: 'center', background: '#F9FAFB' }}>
            <div style={{ fontSize: '11px', color: '#9CA3AF' }}>[ Attach before / after screenshots here ]</div>
            <div style={{ fontSize: '10px', color: '#C4C4C4', marginTop: '4px', fontStyle: 'italic' }}>Minimum 1 screenshot required — more is better</div>
          </div>
        </Section>

        <Section num={5} title="Known Limitations">
          <Line count={2} />
          <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '4px', fontStyle: 'italic' }}>Write "None" if everything is fully implemented.</div>
        </Section>

        {/* Sign-off line */}
        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #E5E7EB', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div>
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#6B7280', letterSpacing: '0.8px', marginBottom: '4px' }}>DEVELOPER SIGN-OFF</div>
            <div style={{ borderBottom: '1px solid #374151', height: '20px' }} />
          </div>
          <div>
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#6B7280', letterSpacing: '0.8px', marginBottom: '4px' }}>SA REVIEWED</div>
            <div style={{ borderBottom: '1px solid #374151', height: '20px' }} />
          </div>
        </div>

      </div>
    </div>
  )
}

// ─── Owner Tag ────────────────────────────────────────────────────────────
function OwnerTag({ owner, fallback }) {
  if (!owner) return null
  return (
    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}>
      <span style={{ fontSize: '10px', fontWeight: 600, color: '#374151', background: '#F3F4F6', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '2px 7px' }}>{owner}</span>
      {fallback && (
        <>
          <span style={{ fontSize: '10px', color: '#9CA3AF' }}>↙</span>
          <span style={{ fontSize: '10px', color: '#9CA3AF', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '2px 7px' }}>{fallback}</span>
        </>
      )}
    </div>
  )
}

// ─── Annotation Sample ────────────────────────────────────────────────────
function AnnotationSample() {
  const annotations = [
    { id: 1, x: 310, y: 78,  cx: 370, cy: 65,  label: 'Change field label from "Emp Code" to "Employee ID"' },
    { id: 2, x: 310, y: 128, cx: 370, cy: 140, label: 'Add validation — field must not accept negative values' },
    { id: 3, x: 148, y: 178, cx: 80,  cy: 192, label: 'Remove this button — replaced by dropdown in header' },
    { id: 4, x: 148, y: 228, cx: 80,  cy: 242, label: 'Update colour to #1F4E79 (matches new brand guideline)' },
  ]
  return (
    <div style={{ marginTop: '14px', border: '1px solid #D1D5DB', borderRadius: '6px', overflow: 'hidden', background: '#fff' }}>
      <div style={{ background: '#F9FAFB', borderBottom: '1px solid #E5E7EB', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '13px', color: '#111827' }}>Visual Annotation Document — Sample</div>
          <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>SA prepares this before assigning to developer — attach to ticket</div>
        </div>
        <div style={{ background: '#FEF3C7', color: '#92400E', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '3px', letterSpacing: '1px' }}>SAMPLE</div>
      </div>
      <div style={{ padding: '16px', background: '#F8FAFC' }}>
        <svg viewBox="0 0 460 290" style={{ width: '100%', maxWidth: 460, display: 'block', margin: '0 auto', borderRadius: 6, border: '1px solid #E5E7EB' }}>
          {/* Screen background */}
          <rect x={0} y={0} width={460} height={290} fill="#fff" />

          {/* Browser bar */}
          <rect x={0} y={0} width={460} height={28} fill="#F3F4F6" />
          <circle cx={14} cy={14} r={5} fill="#FC5B57" />
          <circle cx={28} cy={14} r={5} fill="#FDBE2B" />
          <circle cx={42} cy={14} r={5} fill="#27C640" />
          <rect x={60} y={8} width={280} height={14} rx={3} fill="#E5E7EB" />
          <text x={200} y={19} textAnchor="middle" fontSize={8} fill="#9CA3AF">nimble-hrms.internal / employee / edit</text>

          {/* Page title */}
          <text x={20} y={52} fontSize={11} fontWeight={700} fill="#1F2937">Edit Employee Record</text>
          <line x1={20} y1={56} x2={440} y2={56} stroke="#E5E7EB" strokeWidth={1} />

          {/* Form fields */}
          {[
            { label: 'Emp Code', y: 68 },
            { label: 'Department', y: 118 },
            { label: 'Date Joined', y: 168 },
            { label: 'Status', y: 218 },
          ].map((f, i) => (
            <g key={i}>
              <text x={20} y={f.y + 10} fontSize={9} fill="#6B7280">{f.label}</text>
              <rect x={20} y={f.y + 14} width={270} height={24} rx={3} fill="#F9FAFB" stroke="#D1D5DB" strokeWidth={1} />
              <rect x={20} y={f.y + 14} width={80} height={24} rx={3} fill="#EFF6FF" stroke="#BFDBFE" strokeWidth={1} />
              <text x={62} y={f.y + 30} textAnchor="middle" fontSize={8} fill="#3B82F6">sample text</text>
            </g>
          ))}

          {/* Buttons */}
          <rect x={20} y={254} width={70} height={22} rx={3} fill="#1F4E79" />
          <text x={55} y={269} textAnchor="middle" fontSize={9} fill="#fff" fontWeight={600}>Save</text>
          <rect x={100} y={254} width={70} height={22} rx={3} fill="#F3F4F6" stroke="#D1D5DB" strokeWidth={1} />
          <text x={135} y={269} textAnchor="middle" fontSize={9} fill="#374151">Cancel</text>

          {/* Annotation arrows + circles */}
          {annotations.map(a => (
            <g key={a.id}>
              <line x1={a.x} y1={a.y} x2={a.cx} y2={a.cy} stroke="#EF4444" strokeWidth={1.5} strokeDasharray="4 2" />
              <circle cx={a.cx} cy={a.cy} r={10} fill="#EF4444" />
              <text x={a.cx} y={a.cy + 4} textAnchor="middle" fontSize={9} fontWeight={700} fill="#fff">{a.id}</text>
            </g>
          ))}
        </svg>

        {/* Legend */}
        <div style={{ marginTop: '12px', border: '1px solid #E5E7EB', borderRadius: '6px', overflow: 'hidden' }}>
          <div style={{ background: '#1F2937', padding: '7px 12px', display: 'grid', gridTemplateColumns: '32px 1fr', gap: '8px' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF' }}>#</div>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF' }}>What to change</div>
          </div>
          {annotations.map((a, i) => (
            <div key={a.id} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: '8px', padding: '8px 12px', borderTop: '1px solid #F3F4F6', background: i % 2 === 0 ? '#fff' : '#F9FAFB' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#fff' }}>{a.id}</span>
                </div>
              </div>
              <div style={{ fontSize: '12px', color: '#374151', alignSelf: 'center' }}>{a.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '10px', fontSize: '11px', color: '#6B7280', lineHeight: 1.6 }}>
          <strong>How to create this:</strong> Take a screenshot of the relevant screen → open in any image editor (Paint, Canva, Google Slides, or Snipping Tool) → add numbered circles and arrows pointing to each change → export as PNG → attach to the ticket.
        </div>
      </div>
    </div>
  )
}

// ─── Step Card ────────────────────────────────────────────────────────────
function StepCard({ step, accent }) {
  return (
    <div style={{ marginBottom: '10px', border: '1px solid #E8E8E8', borderRadius: '8px', overflow: 'hidden', background: '#fff' }}>
      <div style={{ padding: '9px 14px', borderBottom: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ background: accent, color: '#fff', fontWeight: 800, fontSize: '11px', padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.5px', flexShrink: 0 }}>{step.num}</div>
        <div style={{ fontWeight: 700, fontSize: '13px', color: '#1E293B' }}>{step.label}</div>
        <OwnerTag owner={step.owner} fallback={step.fallback} />
      </div>
      <div style={{ padding: '12px 16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {step.steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, fontSize: '10px', fontWeight: 700, color: '#9CA3AF', minWidth: '48px' }}>Step {i + 1}</div>
              <div style={{ fontSize: '13px', color: '#374151', lineHeight: 1.55 }}>{s}</div>
            </div>
          ))}
        </div>
        {step.annotation && <AnnotationSample />}
        {step.wordDoc && <WordDoc />}
        {step.doc && <DocTemplate doc={step.doc} />}
      </div>
    </div>
  )
}

// ─── Monitoring Block ─────────────────────────────────────────────────────
function MonitoringBlock({ items }) {
  return (
    <div style={{ marginBottom: '16px', border: '1px solid #E8E8E8', borderRadius: '8px', overflow: 'hidden', background: '#fff' }}>
      <div style={{ padding: '9px 14px', borderBottom: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ background: '#374151', color: '#fff', fontWeight: 800, fontSize: '11px', padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.5px' }}>MON</div>
        <div style={{ fontWeight: 700, fontSize: '13px', color: '#1E293B' }}>Monitoring & Reporting Responsibilities</div>
      </div>
      <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {items.map((item, i) => {
          const text = typeof item === 'string' ? item : item.text
          const owner = typeof item === 'object' ? item.owner : null
          const fallback = typeof item === 'object' ? item.fallback : null
          return (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, fontSize: '10px', fontWeight: 700, color: '#9CA3AF', minWidth: '48px' }}>Step {i + 1}</div>
              <div style={{ flex: 1, fontSize: '13px', color: '#374151', lineHeight: 1.55 }}>{text}</div>
              <OwnerTag owner={owner} fallback={fallback} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// SYSTEM ANALYST
// ═══════════════════════════════════════════════════════════════════════════
const saRole = {
  id: 'sa',
  title: 'System Analyst (SA)',
  owner: 'Team: Prajwol · Annant · Pareekshit · Sudesh · Gopi',
  color: '#FDF0EC', text: '#8B2500', accent: '#C0391B',
  monitoring: [
    { text: 'Check Daily Log Book entries every morning before standup ends — flag missing entries immediately.', owner: 'Prajwol', fallback: 'Pareekshit' },
    { text: 'Use Work Log Report filtered by date and team member to build the weekly summary for Ram sir.', owner: 'Prajwol', fallback: 'Pareekshit' },
    { text: 'If a ticket has exceeded its estimate — check in with the developer the same day.', owner: 'All SA' },
    { text: 'If a developer is blocked — resolve it same day. Escalate to Ram sir or Khem sir before end of day if unresolved.', owner: 'All SA' },
    { text: 'Report to Ram sir each week: tickets completed, in progress, overdue, and blocked.', owner: 'Annant', fallback: 'Sudesh' },
  ],
  steps: [
    {
      num: '01', label: 'Receive & Understand the Requirement', owner: 'All SA',
      steps: [
        'Get the requirement from CSD or an internal stakeholder.',
        'Clarify: what problem is being solved, who uses it, what the expected outcome is.',
        'For any UI requirement — create a wireframe in Whimsical (low-fi) or Axure (high-fi).',
        'Share wireframe with the requestor and get confirmation before raising a ticket.',
      ],
    },
    {
      num: '02', label: 'Raise a Ticket', owner: 'All SA',
      steps: [
        'Choose type: Bug or Feature.',
        'Bug — add: steps to reproduce, expected vs actual behaviour, environment.',
        'Feature — add: description, acceptance criteria, wireframe link, dependencies, impact areas.',
        'Set priority: Immediate / Urgent / High / Normal / Low.',
        'Any ticket over 8 hours must be broken into sub-tickets before assigning.',
      ],
    },
    {
      num: '03', label: 'Sprint Planning', owner: 'All SA',
      steps: [
        'Wednesday: run backlog refinement with Dev lead — estimate effort and confirm sprint slots (45 min).',
        'Tuesday: sprint kickoff — confirm goals, assignments, carry-overs, and early risks.',
        'Monday: week wrap-up — review carry-overs and reprioritise if context has changed.',
      ],
    },
    {
      num: '04', label: 'Prepare Visual Annotation Document', owner: 'All SA',
      steps: [
        'Required for any UI change, bug fix involving a screen, or feature that touches the frontend.',
        'Take a screenshot of the relevant screen from the system.',
        'Open in any image editor (Paint, Canva, Google Slides, or Snipping Tool).',
        'Add numbered red circles with dashed arrows pointing to each area that must change.',
        'Write a legend below the image — one line per number explaining exactly what to change.',
        'Export as PNG and attach to the ticket before assigning to the developer.',
      ],
      annotation: true,
    },
    {
      num: '05', label: 'Assign to Developer', owner: 'All SA',
      steps: [
        'Confirm all required fields are complete before assigning.',
        'For Immediate or Urgent tickets — notify the developer directly, do not rely on the ticket notification alone.',
        'Assign to the developer with the most relevant context for that module.',
      ],
    },
    {
      num: '06', label: 'Deployment Preparation', owner: 'Gopi',
      steps: [
        'Prepare a Deployment Note for every release — no deployment proceeds without one.',
        'Get written approval from Ram sir or Khem sir — verbal approval is not enough.',
        'Schedule deployment at a low-impact time — avoid peak business hours.',
        'Fill in the Deployment Note below.',
      ],
      doc: {
        title: 'Deployment Note',
        subtitle: 'To be completed by SA and approved before every production deployment',
        fields: [
          { label: 'Deployment Date & Time',  placeholder: 'Scheduled date and time' },
          { label: 'Approved By',             placeholder: 'Ram sir / Khem sir — name + date of approval' },
          { label: 'Tickets in This Release', placeholder: 'List all ticket IDs being deployed e.g. #33201, #33207', wide: true },
          { label: 'Modules Affected',        placeholder: 'Which modules or database tables are touched by this release.', wide: true },
          { label: 'Rollback Plan',           placeholder: 'Exact steps to reverse this deployment if something fails.', wide: true },
          { label: 'Post-Deploy Smoke Test',  placeholder: 'Steps QA or SA will run immediately after deployment to confirm it is working.', wide: true },
        ],
      },
    },
    {
      num: '07', label: 'Post-Deployment', owner: 'All SA',
      steps: [
        'Confirm with CSD that the issue is resolved from the client\'s perspective.',
        'Close the ticket with a comment referencing the deployment date and outcome.',
        'Log any follow-up items or known limitations as new tickets — do not leave them undocumented.',
      ],
    },
  ],
  comments: {
    note: 'SA adds a triage comment at Gate 1 when assigning the ticket. Use separate formats for bugs and feature requests.',
    formats: [
      {
        title: 'Bug Triage Comment', tag: 'SA · BUG TRIAGE', tagBg: '#FEE2E2', tagText: '#7F1D1D',
        fields: [
          { label: 'Priority',              hint: 'Immediate / Urgent / High / Normal / Low' },
          { label: 'Assigned To',           hint: 'Developer name' },
          { label: 'SLA Due',               hint: 'Date by which this must be resolved' },
          { label: 'Steps to Reproduce',    hint: 'Clear numbered steps CSD or SA confirmed' },
          { label: 'Expected vs Actual',    hint: 'What should happen vs what is happening' },
          { label: 'Notes',                 hint: 'Any context, workaround, client sensitivity, or related tickets' },
        ],
      },
      {
        title: 'Feature Request Triage Comment', tag: 'SA · FEATURE TRIAGE', tagBg: '#EDEBF7', tagText: '#4B3A8A',
        fields: [
          { label: 'Priority',              hint: 'Normal / High — features are rarely Urgent or above' },
          { label: 'Assigned To',           hint: 'Developer name' },
          { label: 'Sprint',                hint: 'Target sprint number' },
          { label: 'Acceptance Criteria',   hint: 'What must be true for this ticket to be considered done?' },
          { label: 'Dependencies',          hint: 'Any other tickets, modules, or external systems this depends on' },
          { label: 'Notes',                 hint: 'Business context, stakeholder, UI direction, or anything the developer needs to know' },
        ],
      },
    ],
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// DEVELOPER
// ═══════════════════════════════════════════════════════════════════════════
const devRole = {
  id: 'dev',
  title: 'Developer',
  owner: 'Team: Gopal (Deployment) · Prashant · Chiranjivi · Ashmita · Anu',
  color: '#EBF5FF', text: '#1F4E79', accent: '#1F4E79',
  monitoring: [
    { text: 'Fill in the Daily Log Book before standup ends — every day, no exceptions.', owner: 'All Dev' },
    { text: 'Log time per ticket honestly — this feeds the dashboard and Ram sir\'s weekly report.', owner: 'All Dev' },
    { text: 'If a ticket is taking longer than estimated — tell SA immediately, not at the end of the sprint.', owner: 'All Dev' },
    { text: 'All scope questions or changes go through SA — do not accept direct requests from clients or CSD.', owner: 'All Dev' },
  ],
  steps: [
    {
      num: '01', label: 'Pick Up a Ticket', owner: 'All Dev',
      steps: [
        'Only pick up tickets formally assigned by SA — do not self-assign from the backlog.',
        'Read the full ticket: description, acceptance criteria, wireframe, SA notes, and impact areas.',
        'If anything is unclear — ask SA in writing before starting, not during development.',
      ],
    },
    {
      num: '02', label: 'Dev Gate 1 — Before Starting', owner: 'All Dev',
      steps: [
        'Verify all SA fields are filled: Description, Acceptance Criteria, Steps to Replicate (for bugs).',
        'Confirm the ticket is ≤ 8 hours — if larger, break it into sub-tickets yourself before starting. Inform SA of the breakdown.',
        'Only start work when both checks pass.',
      ],
    },
    {
      num: '03', label: 'Development', owner: 'All Dev',
      steps: [
        'Create a branch: ticket-{id}-{short-description}.',
        'Build in local dev environment only — never work directly on staging or production.',
        'Do not modify files outside the ticket scope without telling SA first.',
      ],
    },
    {
      num: '04', label: 'Impact Analysis', owner: 'All Dev',
      steps: [
        'List every file, stored procedure, and table your change touches.',
        'Check what else reads those tables or calls those functions.',
        'If the impact is significant — inform SA so QA can broaden regression testing.',
      ],
    },
    {
      num: '05', label: 'Developer Document (New / Technical Features)', owner: 'All Dev',
      steps: [
        'Required for any completely new feature or technically complex change — not needed for simple bug fixes.',
        'Document: what the feature does, how it works (flow/architecture), key functions or classes involved.',
        'Include: DB tables and columns added or changed, APIs introduced, and any setup steps needed.',
        'Write it for another developer — assume they have no prior context on this feature.',
        'Attach the document link to the ticket before moving to Ready for QA.',
      ],
      wordDoc: true,
    },
    {
      num: '06', label: 'Dev Gate 2 — Before Sending to QA', owner: 'All Dev',
      steps: [
        'Test locally against the acceptance criteria — happy path first, then edge cases.',
        'If you discover additional bugs — log them as separate tickets, do not fix silently.'
      ]
    },
  ],
  comments: {
    note: 'Add this comment when moving a ticket to "Ready for QA". Use the Bug Fix format for defects and the Feature format for new work.',
    formats: [
      {
        title: 'Bug Fix Comment', tag: 'DEV · BUG FIX', tagBg: '#FEE2E2', tagText: '#7F1D1D',
        fields: [
          { label: 'Description',         hint: 'What was the bug? What was the root cause?' },
          { label: 'Module',              hint: 'Which module(s) were affected?' },
          { label: 'Code Changes',        hint: 'What was changed or fixed? (function names, logic changes, DB fields etc.)' },
          { label: 'Impact Analysis',     hint: 'What other modules or workflows could be affected by this change?' },
          { label: 'Tested Locally',      hint: 'Yes / No — briefly describe what you tested' },
          { label: 'Status',              hint: 'Ready for QA', fixed: true },
        ],
      },
      {
        title: 'Feature Implementation Comment', tag: 'DEV · FEATURE', tagBg: '#EBF5FF', tagText: '#1F4E79',
        fields: [
          { label: 'Description',             hint: 'What was built? Summarise the implementation.' },
          { label: 'Module',                  hint: 'Which module(s) were worked on?' },
          { label: 'Code Changes',            hint: 'Summary of what was added or modified.' },
          { label: 'Acceptance Criteria Met', hint: 'List each criterion from the ticket and confirm it is met.' },
          { label: 'Impact Analysis',         hint: 'Any potential effects on existing functionality?' },
          { label: 'Tested Locally',          hint: 'Yes / No — briefly describe what you tested' },
          { label: 'Status',                  hint: 'Ready for QA', fixed: true },
        ],
      },
    ],
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// QA
// ═══════════════════════════════════════════════════════════════════════════
const qaRole = {
  id: 'qa',
  title: 'QA Team',
  owner: 'Team: Shramila · Sadikshya · Bimala',
  color: '#F0FDF4', text: '#14532D', accent: '#15803D',
  monitoring: [
    { text: 'Report test results per ticket as a comment — include result, modules tested, and any defects found.', owner: 'All QA' },
    { text: 'Full test case detail goes in the QA Test Case Sheet — not in the ticket comment.', owner: 'All QA' },
    { text: 'Communicate blockers and missing information to SA — not directly to the developer.', owner: 'All QA' },
    { text: 'Before each deployment — confirm in writing to SA that all batch tickets have a valid QA sign-off.', owner: 'All QA' },
  ],
  steps: [
    {
      num: '01', label: 'Ticket Pickup', owner: 'All QA',
      steps: [
        'Only pick up tickets in "Ready for QA" status.',
        'Read the Developer Handoff Document in full before writing any test case.',
        'If the Handoff Document is missing or incomplete — return the ticket to the developer immediately.',
      ],
    },
    {
      num: '02', label: 'QA Pre-check Gate', owner: 'All QA',
      steps: [
        'Steps to replicate present? (Bug tickets — mandatory.)',
        'Acceptance criteria present? (Feature tickets — mandatory.)',
        'Impact analysis filled in by the developer?',
        'If anything is missing — return the ticket to SA. Do not begin testing.',
      ],
    },
    {
      num: '03', label: 'Write Test Cases', owner: 'All QA',
      steps: [
        'Write test cases before running them — not after.',
        'Minimum 3 per ticket: happy path, edge case, and regression on the developer\'s impact areas.',
        'Record all cases in the QA Test Case Sheet.',
      ],
    },
    {
      num: '04', label: 'Run Tests — 3 Branch Sequence', owner: 'All QA',
      steps: [
        'Test on QA branch — attach checklist to ticket. Fail → log bug with steps → return to developer.',
        'Pass → request Dev to merge to develop → test on develop branch.',
        'Pass → request Dev to merge to main → test on main branch.',
        'Pass on main → proceed to sign-off.',
      ],
    },
    {
      num: '05', label: 'Sign-off or Reject', owner: 'All QA',
      steps: [
        'All pass → move ticket to Approved for Deployment.',
        'Any fail → add rejection comment with test case ID and exact failure detail → return to developer.',
        'Never approve a ticket with an open defect.',
      ],
    },
    {
      num: '06', label: 'Pre-Deployment Batch Check', owner: 'All QA',
      steps: [
        'Receive the deployment batch list from SA.',
        'Verify every ticket on the list is in Approved for Deployment status.',
        'Notify SA in writing: "Confirmed — all X tickets have valid QA sign-offs."',
      ],
    },
  ],
}

const roles = [saRole, devRole, qaRole]

// ═══════════════════════════════════════════════════════════════════════════
// RENDER
// ═══════════════════════════════════════════════════════════════════════════
export default function SOPSection() {
  return (
    <>
      <h2 className="section-title">8. SOPs & Ticket Comment Templates</h2>
      <p className="section-subtitle">
        Step-by-step responsibilities for each team — with document templates and comment formats at every handoff point
      </p>

      {roles.map((role, ri) => (
        <div key={role.id} style={{ marginBottom: ri < roles.length - 1 ? '48px' : '0' }}>

          {/* Role header */}
          <div style={{ background: role.color, color: role.text, fontWeight: 800, fontSize: '16px', padding: '10px 20px', borderRadius: '8px', marginBottom: '16px' }}>
            {role.title}
            <span style={{ fontWeight: 400, fontSize: '12px', marginLeft: '12px', opacity: 0.7 }}>{role.owner}</span>
          </div>

          <MonitoringBlock items={role.monitoring} />

          {role.steps.map((step, i) => (
            <StepCard key={i} step={step} accent={role.accent} />
          ))}

          <CommentFormatsBlock comments={role.comments} />

          {/* QA Test Case Sheet link */}
          {role.id === 'qa' && (
            <div style={{ marginTop: '12px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '8px', padding: '16px 20px' }}>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#14532D', marginBottom: '6px' }}>QA Test Case Sheet</div>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 10px 0' }}>
                Write and fill test cases for <strong>every ticket</strong> before testing begins. Attach the completed sheet as part of the QA sign-off.
              </p>
              <a
                href="https://docs.google.com/spreadsheets/d/1OxTHqtPXKXxjD5cysfgicDbpSB9oBeLUqhApHkDDXRw/edit?gid=793810348#gid=793810348"
                target="_blank" rel="noreferrer"
                style={{ display: 'inline-block', background: '#15803D', color: '#fff', fontWeight: 600, fontSize: '13px', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none' }}
              >
                Open QA Test Case Sheet ↗
              </a>
            </div>
          )}

        </div>
      ))}
    </>
  )
}
