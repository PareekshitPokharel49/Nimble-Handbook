// ─── SVG Flowchart ────────────────────────────────────────────────────────
function Flowchart() {
  // Layout constants
  const cx = 390        // center x of canvas
  const bx = 240        // box left edge (cx - 150)
  const bw = 300        // box width
  const bh = 56         // box height

  // Down arrow helper
  const DA = ({ x, y1, y2, color = '#9CA3AF' }) => (
    <g>
      <line x1={x} y1={y1} x2={x} y2={y2 - 8} stroke={color} strokeWidth="2" />
      <polygon points={`${x - 5},${y2 - 8} ${x + 5},${y2 - 8} ${x},${y2}`} fill={color} />
    </g>
  )

  // Step box: colored full-width rect + circle number + two text lines
  const Step = ({ y, fill, num, label, sub }) => (
    <g>
      <rect x={bx} y={y} width={bw} height={bh} rx={6} fill={fill} />
      <circle cx={bx + 22} cy={y + bh / 2} r={13} fill="rgba(255,255,255,0.18)" />
      <text x={bx + 22} y={y + bh / 2 + 4} textAnchor="middle" fontSize={11} fontWeight="800" fill="#fff">{num}</text>
      <text x={bx + 44} y={y + bh / 2 - 7} textAnchor="start" fontSize={12} fontWeight="700" fill="#fff">{label}</text>
      <text x={bx + 44} y={y + bh / 2 + 10} textAnchor="start" fontSize={11} fill="rgba(255,255,255,0.72)">{sub}</text>
    </g>
  )

  // Diamond shape centered at (cx, cy)
  const Dia = ({ cy, l1, l2 }) => (
    <g>
      <polygon points={`${cx - 92},${cy} ${cx},${cy - 44} ${cx + 92},${cy} ${cx},${cy + 44}`} fill="#1F2937" />
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize={11} fontWeight="700" fill="#fff">{l1}</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize={11} fontWeight="700" fill="#fff">{l2}</text>
    </g>
  )

  // Side box (orange outline)
  const SBox = ({ x, y, w, h, l1, l2, l3 }) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill="#FFF7ED" stroke="#F97316" strokeWidth="1.5" />
      <text x={x + w / 2} y={y + 18} textAnchor="middle" fontSize={11} fontWeight="700" fill="#C2410C">{l1}</text>
      {l2 && <text x={x + w / 2} y={y + 33} textAnchor="middle" fontSize={10} fill="#78350F">{l2}</text>}
      {l3 && <text x={x + w / 2} y={y + 47} textAnchor="middle" fontSize={10} fill="#78350F">{l3}</text>}
    </g>
  )

  // ── y positions (all = top of element) ──
  // START oval: cy=46, bottom=66
  // Arrow: 66→88
  // Step01: y=90, bottom=146
  // Arrow: 146→166
  // Diamond1: cy=210, top=166, bottom=254
  // Arrow: 254→276 (YES)
  // Step03: y=278, bottom=334
  // Arrow: 334→354
  // Step04: y=356, bottom=412
  // Arrow: 412→432
  // Step05: y=434, bottom=490
  // Arrow: 490→510
  // Diamond2: cy=554, top=510, bottom=598
  // Arrow: 598→618 (YES)
  // Step07: y=620, bottom=676
  // Arrow: 676→696
  // Diamond3: cy=740, top=696, bottom=784
  // Arrow: 784→804 (YES)
  // Step08: y=806, bottom=862
  // Arrow: 862→880
  // END oval: cy=898, bottom=918

  return (
    <div style={{ overflowX: 'auto', padding: '20px 0' }}>
      <svg viewBox="0 0 760 930" style={{ width: '100%', maxWidth: 760, display: 'block', margin: '0 auto' }}>

        {/* ── START ── */}
        <ellipse cx={cx} cy={46} rx={120} ry={22} fill="#F3F4F6" stroke="#374151" strokeWidth="2" />
        <text x={cx} y={52} textAnchor="middle" fontSize={12} fontWeight="700" fill="#374151">START — Requirement Received</text>

        <DA x={cx} y1={68} y2={90} />

        {/* ── 01: Record Source ── */}
        <Step y={90} fill="#334155" num="01" label="Record the Requirement Source" sub="Source, date, and raw description — no analysis yet" />

        <DA x={cx} y1={146} y2={166} />

        {/* ── DECISION 1: Bug or Feature? ── */}
        <Dia cy={210} l1="Bug Report or Feature" l2="/ Change Request?" />

        {/* LEFT branch: BUG → (290,210) going left */}
        <line x1={298} y1={210} x2={186} y2={210} stroke="#F97316" strokeWidth="2" />
        <polygon points="186,205 186,215 178,210" fill="#F97316" />
        <text x={240} y={204} textAnchor="middle" fontSize={10} fontWeight="700" fill="#F97316">BUG</text>
        <SBox x={14} y={178} w={164} h={64} l1="No SRD Required" l2="Raise as a direct ticket." l3="Handle via ticket flow." />

        {/* YES down label */}
        <text x={cx + 10} y={270} textAnchor="middle" fontSize={10} fontWeight="700" fill="#15803D">Feature / CR ↓</text>
        <DA x={cx} y1={254} y2={278} />

        {/* ── 03: Elicitation ── */}
        <Step y={278} fill="#1D4ED8" num="03" label="Requirement Elicitation" sub="Structured session — all questions answered before drafting" />

        <DA x={cx} y1={334} y2={356} />

        {/* ── 04: Wireframe ── */}
        <Step y={356} fill="#6D28D9" num="04" label="Wireframe / Design Reference" sub="Whimsical or Axure — approved by requestor before SRD" />

        <DA x={cx} y1={412} y2={434} />

        {/* ── 05: Draft SRD ── */}
        <Step y={434} fill="#0F766E" num="05" label="Draft the SRD" sub="All sections complete — plain language, N/A with reason" />

        <DA x={cx} y1={490} y2={510} />

        {/* ── DECISION 2: Internal review ── */}
        <Dia cy={554} l1="Internal Review —" l2="Checklist Passes?" />

        {/* RIGHT branch: FAIL → (482,554) going right */}
        <line x1={482} y1={554} x2={510} y2={554} stroke="#F97316" strokeWidth="2" />
        <polygon points="510,549 510,559 518,554" fill="#F97316" />
        <text x={498} y={547} textAnchor="middle" fontSize={10} fontWeight="700" fill="#F97316">NO</text>
        <SBox x={520} y={524} w={162} h={60} l1="Revise SRD" l2="Fix failing checklist items" l3="and recheck ↑" />

        {/* YES down */}
        <text x={cx + 10} y={614} textAnchor="middle" fontSize={10} fontWeight="700" fill="#15803D">YES ↓</text>
        <DA x={cx} y1={598} y2={620} />

        {/* ── 07: Sign-off ── */}
        <Step y={620} fill="#B45309" num="07" label="Submit for Written Sign-off" sub="Ram sir / Khem sir — verbal approval not accepted" />

        <DA x={cx} y1={676} y2={696} />

        {/* ── DECISION 3: Approved? ── */}
        <Dia cy={740} l1="Written Sign-off" l2="Received?" />

        {/* RIGHT branch: NO → (482,740) */}
        <line x1={482} y1={740} x2={510} y2={740} stroke="#F97316" strokeWidth="2" />
        <polygon points="510,735 510,745 518,740" fill="#F97316" />
        <text x={498} y={733} textAnchor="middle" fontSize={10} fontWeight="700" fill="#F97316">NO</text>
        <SBox x={520} y={710} w={162} h={60} l1="Revise & Resubmit" l2="Apply feedback, increment" l3="version, resubmit ↑" />

        {/* YES down */}
        <text x={cx + 10} y={800} textAnchor="middle" fontSize={10} fontWeight="700" fill="#15803D">YES ↓</text>
        <DA x={cx} y1={784} y2={806} />

        {/* ── 08: Ticket Creation ── */}
        <Step y={806} fill="#15803D" num="08" label="Create Tickets from SRD" sub="Each FR → ticket(s) · SRD ID referenced on every ticket" />

        <DA x={cx} y1={862} y2={882} />

        {/* ── END ── */}
        <ellipse cx={cx} cy={900} rx={112} ry={22} fill="#F0FDF4" stroke="#15803D" strokeWidth="2" />
        <text x={cx} y={906} textAnchor="middle" fontSize={12} fontWeight="700" fill="#15803D">DONE — Development Begins</text>

      </svg>
    </div>
  )
}

// ─── SRD Field Component ──────────────────────────────────────────────────
function SRDDocument() {
  const page = { fontFamily: "'Georgia', serif", fontSize: 13, color: '#1a1a1a', lineHeight: 1.8 }
  const h1 = { fontSize: 15, fontWeight: 700, color: '#1F2937', borderBottom: '2px solid #1F2937', paddingBottom: 6, marginBottom: 12, marginTop: 28, fontFamily: "'Segoe UI', sans-serif", letterSpacing: 0.2 }
  const h2 = { fontSize: 12, fontWeight: 700, color: '#374151', marginBottom: 4, marginTop: 14, fontFamily: "'Segoe UI', sans-serif", textTransform: 'uppercase', letterSpacing: 0.6 }
  const body = { fontSize: 13, color: '#374151', lineHeight: 1.8, margin: '0 0 10px 0' }
  const li = { fontSize: 13, color: '#374151', lineHeight: 1.8, marginBottom: 3 }
  const code = { fontFamily: 'monospace', fontSize: 12, color: '#1D4ED8', background: '#EFF6FF', padding: '1px 5px', borderRadius: 3 }
  const metaRow = { display: 'grid', gridTemplateColumns: '160px 1fr', borderBottom: '1px solid #E5E7EB', padding: '5px 0', fontSize: 12 }
  const metaKey = { color: '#6B7280', fontWeight: 600, fontFamily: "'Segoe UI', sans-serif" }
  const metaVal = { color: '#111827', fontWeight: 500, fontFamily: "'Segoe UI', sans-serif" }

  return (
    <div style={{ background: '#E8E8E8', padding: '24px 0', marginTop: 24 }}>
      {/* Paper */}
      <div style={{ ...page, background: '#fff', maxWidth: 740, margin: '0 auto', padding: '48px 56px 56px', boxShadow: '0 4px 24px rgba(0,0,0,0.15)', borderRadius: 2 }}>

        {/* Letterhead */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '3px solid #1F2937', paddingBottom: 14, marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#1F2937', letterSpacing: 0.5, fontFamily: "'Segoe UI', sans-serif" }}>Nimble Infosys Pvt. Ltd.</div>
            <div style={{ fontSize: 11, color: '#6B7280', marginTop: 2, fontFamily: "'Segoe UI', sans-serif" }}>Research & Development — System Analysis</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#fff', background: '#15803D', padding: '3px 10px', borderRadius: 3, letterSpacing: 0.8, fontFamily: "'Segoe UI', sans-serif" }}>APPROVED</div>
            <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 4, fontFamily: "'Segoe UI', sans-serif" }}>SRD-2026-014 · v1.0</div>
          </div>
        </div>

        {/* Document title */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#111827', letterSpacing: 0.3, fontFamily: "'Segoe UI', sans-serif" }}>Software Requirements Document</div>
          <div style={{ fontSize: 14, color: '#374151', marginTop: 6, fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>Leave Application on Behalf — HR Admin Feature</div>
          <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 4, fontFamily: "'Segoe UI', sans-serif" }}>Nimble HRMIS · Leave Management Module · 19 March 2026</div>
        </div>

        {/* Metadata table */}
        <div style={{ border: '1px solid #E5E7EB', borderRadius: 4, overflow: 'hidden', marginBottom: 8 }}>
          {[
            ['SRD ID', 'SRD-2026-014'], ['Version', 'v1.0'], ['Status', 'Approved'],
            ['Date', '19 March 2026'], ['Prepared By', 'Prajwal (System Analyst)'],
            ['Approved By', 'Ram sir — 20 March 2026'],
            ['Project / Module', 'Nimble HRMIS — Leave Management Module'],
            ['Requirement Type', 'Feature Request'],
            ['Requested By', 'CSD — on behalf of client (Himal Hydro)'],
            ['Tickets Raised', '#33401, #33402, #33403'],
          ].map(([k, v], i) => (
            <div key={k} style={{ ...metaRow, background: i % 2 === 0 ? '#FAFAFA' : '#fff' }}>
              <span style={metaKey}>{k}</span>
              <span style={metaVal}>{v}</span>
            </div>
          ))}
        </div>

        {/* 1. Requirement Overview */}
        <div style={h1}>1. Requirement Overview</div>
        <p style={body}>
          The client requires the ability to apply for leave on behalf of another employee. Currently, the Leave Management module only allows self-application. HR administrators at Himal Hydro frequently need to log leave entries for employees who are in the field and cannot access the portal themselves.
        </p>

        {/* 2. Business Context */}
        <div style={h1}>2. Business Context</div>
        <div style={h2}>Problem Being Solved</div>
        <p style={body}>
          HR must currently contact the developer team to manually insert leave records in the database whenever a field employee is absent. This is unsustainable, bypasses the approval workflow, and creates audit gaps.
        </p>
        <div style={h2}>Business Impact if Not Delivered</div>
        <p style={body}>
          Leave records remain inaccurate until manual intervention. The payroll module reads from leave records, so payroll calculations for field staff are incorrect each month this is unresolved.
        </p>

        {/* 3. Scope */}
        <div style={h1}>3. Scope</div>
        <div style={h2}>In Scope</div>
        <ol style={{ paddingLeft: 20, margin: '0 0 12px 0' }}>
          {[
            'HR Admin role can open a Leave Application form on behalf of any employee.',
            'The form pre-populates the employee name and department from a searchable dropdown.',
            'Leave type, start date, end date, and reason fields are included.',
            'The submitted leave follows the same approval workflow as a self-submitted leave.',
            'An audit log entry records which HR Admin submitted the leave and on whose behalf.',
          ].map((t, i) => <li key={i} style={li}>{t}</li>)}
        </ol>
        <div style={h2}>Out of Scope</div>
        <ol style={{ paddingLeft: 20, margin: '0 0 12px 0' }}>
          {[
            'Bulk leave entry for multiple employees in a single submission — deferred to a future request.',
            'Changes to the existing leave approval workflow or approval hierarchy.',
            'Mobile application — this applies to the web portal only.',
          ].map((t, i) => <li key={i} style={li}>{t}</li>)}
        </ol>

        {/* 4. Functional Requirements */}
        <div style={h1}>4. Functional Requirements</div>
        <p style={{ ...body, marginBottom: 8 }}>Each requirement is independently testable. Format: <em>The system shall [action] when [condition].</em></p>
        {[
          ['FR-01', 'The system shall display a "Submit on Behalf" button on the Leave Application page, visible only to users with the HR Admin role.'],
          ['FR-02', 'The system shall provide a searchable employee dropdown showing all active employees in the same or any department, depending on the HR Admin\'s permission level.'],
          ['FR-03', 'When submitted, the system shall record the submitting HR Admin\'s user ID in the leave record alongside the employee\'s user ID.'],
          ['FR-04', 'The system shall send a notification to the employee\'s direct supervisor for approval, identical to the notification sent for a self-submitted leave.'],
          ['FR-05', 'The leave record in the employee\'s profile shall display a "Submitted by HR" indicator visible to the employee and their supervisor.'],
        ].map(([id, text]) => (
          <div key={id} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
            <span style={{ ...code, flexShrink: 0, marginTop: 2 }}>{id}</span>
            <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.75 }}>{text}</span>
          </div>
        ))}

        {/* 5. Non-Functional Requirements */}
        <div style={h1}>5. Non-Functional Requirements</div>
        {[
          ['Performance', 'The leave submission must complete within 3 seconds under normal server load. No new database queries should execute more than once per page load.'],
          ['Security & Access Control', 'Only users with the HR Admin role may access the "Submit on Behalf" function. All actions are logged with user ID and timestamp.'],
          ['Compatibility', 'Must function correctly on Chrome (latest), Edge (latest), and Firefox (latest). Mobile view is not required for this feature.'],
          ['Data & Audit', 'Every on-behalf submission must be stored in the audit log table with fields: action_type, performed_by, on_behalf_of, timestamp.'],
        ].map(([k, v]) => (
          <div key={k} style={{ marginBottom: 10 }}>
            <div style={h2}>{k}</div>
            <p style={{ ...body, margin: 0 }}>{v}</p>
          </div>
        ))}

        {/* 6. Assumptions & Dependencies */}
        <div style={h1}>6. Assumptions & Dependencies</div>
        <div style={h2}>Assumptions</div>
        <ol style={{ paddingLeft: 20, margin: '0 0 12px 0' }}>
          {[
            'The HR Admin role and its permission flags already exist in the database — no new role needs to be created.',
            'The existing leave approval notification system can be reused without modification.',
            "The client's supervisor hierarchy data in the system is current and accurate.",
          ].map((t, i) => <li key={i} style={li}>{t}</li>)}
        </ol>
        <div style={h2}>Dependencies</div>
        <ol style={{ paddingLeft: 20, margin: '0 0 12px 0' }}>
          {[
            'Ticket #33398 (Leave type configuration update) must be deployed before this feature is built — it adds two new leave types that must appear in the dropdown.',
            'No external system dependency.',
          ].map((t, i) => <li key={i} style={li}>{t}</li>)}
        </ol>

        {/* 7. Wireframe & Design Reference */}
        <div style={h1}>7. Wireframe & Design Reference</div>
        <div style={h2}>Wireframe Link</div>
        <p style={body}>Whimsical — Leave Proxy Submission Flow<br />
          <span style={{ fontSize: 12, color: '#1D4ED8', textDecoration: 'underline' }}>https://whimsical.com/nimble/leave-proxy-v1</span><br />
          Status: <strong>Approved by CSD on 18 March 2026</strong>
        </p>
        <div style={h2}>Design Notes</div>
        <p style={body}>The "Submit on Behalf" button should appear below the standard Apply Leave button, not replace it. The employee dropdown must show both name and employee ID to avoid ambiguity between employees with similar names.</p>

        {/* 8. Acceptance Criteria */}
        <div style={h1}>8. Acceptance Criteria</div>
        <p style={{ ...body, marginBottom: 8 }}>Format: <em>Given [context], when [action], then [expected result].</em></p>
        {[
          ['AC-01', 'Given an HR Admin is logged in, when they open the Leave Application page, then a "Submit on Behalf" button is visible and clickable.'],
          ['AC-02', 'Given the HR Admin selects an employee and submits a valid leave request, when saved, then the leave record appears in the employee\'s history with a "Submitted by HR" indicator.'],
          ['AC-03', 'Given a leave submitted on behalf of an employee, when a supervisor views pending approvals, then it appears in their queue with both the employee\'s name and the HR Admin\'s name.'],
          ['AC-04', 'Given a standard employee role is logged in, when they view the Leave Application page, then the "Submit on Behalf" button is not visible.'],
        ].map(([id, text]) => (
          <div key={id} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
            <span style={{ ...code, flexShrink: 0, marginTop: 2 }}>{id}</span>
            <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.75 }}>{text}</span>
          </div>
        ))}

        {/* 9. SA Effort Estimate */}
        <div style={h1}>9. SA Effort Estimate</div>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: 4, overflow: 'hidden', marginBottom: 12 }}>
          {[
            ['Backend — DB changes + API logic + audit log', '4 hours', 'Ticket 1'],
            ['Frontend — UI button, dropdown, history indicator', '3 hours', 'Ticket 2'],
            ['QA testing', '2 hours', 'Ticket 2'],
            ['Total estimate', '9 hours', '2 tickets (≤8 hrs each)'],
          ].map(([task, hrs, note], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 140px', padding: '6px 12px', borderBottom: i < 3 ? '1px solid #F3F4F6' : 'none', background: i === 3 ? '#F9FAFB' : '#fff', fontSize: 12 }}>
              <span style={{ color: '#374151', fontWeight: i === 3 ? 700 : 400 }}>{task}</span>
              <span style={{ color: '#111827', fontWeight: 700, textAlign: 'right', paddingRight: 16 }}>{hrs}</span>
              <span style={{ color: '#6B7280', fontStyle: 'italic' }}>{note}</span>
            </div>
          ))}
        </div>

        {/* 10. Sign-off */}
        <div style={h1}>10. Sign-off</div>
        <div style={{ border: '1px solid #D1D5DB', borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #D1D5DB' }}>
            <div style={{ padding: '14px 16px', borderRight: '1px solid #D1D5DB' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#6B7280', marginBottom: 6, fontFamily: "'Segoe UI', sans-serif", textTransform: 'uppercase', letterSpacing: 0.6 }}>SA Sign-off</div>
              <div style={{ fontSize: 13, color: '#111827' }}>Prajwal</div>
              <div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>19 March 2026</div>
            </div>
            <div style={{ padding: '14px 16px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#6B7280', marginBottom: 6, fontFamily: "'Segoe UI', sans-serif", textTransform: 'uppercase', letterSpacing: 0.6 }}>Approval Sign-off</div>
              <div style={{ fontSize: 13, color: '#111827' }}>Ram sir</div>
              <div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>20 March 2026 — <em>"Approved as documented. Proceed with ticket creation."</em></div>
            </div>
          </div>
          <div style={{ padding: '10px 16px', background: '#FAFAFA' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#6B7280', marginBottom: 4, fontFamily: "'Segoe UI', sans-serif", textTransform: 'uppercase', letterSpacing: 0.6 }}>Revision History</div>
            <div style={{ fontSize: 12, color: '#374151' }}>v1.0 — 19 March 2026 — Initial draft (Prajwal)</div>
            <div style={{ fontSize: 12, color: '#374151' }}>v1.0 — Approved 20 March 2026 — No changes requested (Ram sir)</div>
          </div>
        </div>

      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
export default function SRDSection() {
  return (
    <>
      <h2 className="section-title">11. Requirements & SRD</h2>
      <p className="section-subtitle">
        Requirement analysis process and the standard Software Requirements Document format — completed before any ticket is raised
      </p>

      {/* What is an SRD */}
      <div style={{ border: '1px solid #E5E7EB', borderRadius: '6px', padding: '18px 20px', marginBottom: '36px', background: '#FAFAFA' }}>
        <div style={{ fontWeight: 700, fontSize: '14px', color: '#111827', marginBottom: '8px' }}>What is an SRD and when is it required?</div>
        <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.75, margin: '0 0 10px 0' }}>
          A Software Requirements Document is the formal record of a requirement — what needs to be built, why it is needed, who it is for, what it must and must not do, and what "done" means. It is the single source of truth for the entire development lifecycle from design through to QA sign-off.
        </p>
        <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.75, margin: 0 }}>
          An SRD is required for every <strong>Feature Request</strong> and every <strong>Change Request</strong> that involves more than a trivial configuration change. Bug fixes and minor corrections do not require an SRD — they are handled directly as tickets. If SA is unsure whether a requirement warrants an SRD, the default answer is yes.
        </p>
      </div>

      {/* Flowchart */}
      <div style={{ fontWeight: 700, fontSize: '16px', color: '#111827', marginBottom: '8px' }}>
        Requirement Analysis Process
      </div>
      <p style={{ fontSize: '13px', color: '#6B7280', margin: '0 0 16px 0' }}>
        From receiving a requirement to creating development tickets — including the classification branch and sign-off loops.
      </p>
      <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', background: '#FAFAFA', overflow: 'auto', marginBottom: '48px' }}>
        <Flowchart />
      </div>

      {/* Filled SRD Sample */}
      <div style={{ fontWeight: 700, fontSize: '16px', color: '#111827', marginBottom: '4px' }}>
        SRD Sample — Filled Example
      </div>
      <p style={{ fontSize: '13px', color: '#6B7280', margin: '0 0 0 0' }}>
        A completed example showing the expected level of detail for a Feature Request.
      </p>
      <SRDDocument />
    </>
  )
}
