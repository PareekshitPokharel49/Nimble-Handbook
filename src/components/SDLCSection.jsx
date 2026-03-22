// ─── Sprint phases ────────────────────────────────────────────────────────
const sprintPhases = [
  {
    num: '01',
    name: 'Pre-Sprint Gate',
    when: 'Monday',
    owner: 'SA',
    what: [
      'SA verifies all tickets entering the sprint have complete requirements — wireframe confirmed, acceptance criteria written, hours estimated',
      'No ticket enters the sprint without SA sign-off — incomplete tickets are returned to backlog',
      'Capacity check: total planned hours must not exceed 70% of available dev capacity',
      'Remaining 30% is reserved as live issue buffer — one developer assigned as Live Issue Owner for the week',
    ],
  },
  {
    num: '02',
    name: 'Sprint Kickoff',
    when: 'Tuesday',
    owner: 'SA + All Teams',
    what: [
      'SA confirms sprint goals, capacity allocation, and live issue buffer for the week',
      'All tickets verified as assigned with priority and estimate',
      'Carry-over tickets from previous sprint reviewed and reprioritised',
      'Live Issue Owner announced — all live production issues go to them first this week',
      'Any dependency or delivery risk flagged early',
    ],
  },
  {
    num: '03',
    name: 'Active Development',
    when: 'Tue – Fri',
    owner: 'Developer',
    what: [
      'Developers pick up assigned tickets — Dev Gate 1 check before starting',
      'Daily standup 9:15 AM — Done / Doing / Blocked per ticket number',
      'SA monitors Daily Log Book entries each morning — resolves blockers same day',
      'Code review required before any ticket moves to Ready for QA — reviewer rotates weekly, senior dev reviews high-risk tickets only',
      'Live issues picked up by Live Issue Owner — all other developers continue planned sprint work',
    ],
  },
  {
    num: '04',
    name: 'Backlog Refinement',
    when: 'Wednesday',
    owner: 'SA + Dev Lead',
    what: [
      'SA and Dev lead review the backlog together — 45 minutes',
      'Tickets estimated, sequenced, and sprint slots confirmed for next sprint',
      'Tickets exceeding 8 hours broken into sub-tickets before the session closes',
      'Output feeds directly into next week\'s Pre-Sprint Gate',
    ],
  },
  {
    num: '05',
    name: 'QA Testing Window',
    when: 'Wed – Fri',
    owner: 'QA',
    what: [
      'As developers complete Dev Gate 2 + code review, tickets flow into QA immediately',
      'QA pre-check → write test cases → test QA branch → develop branch → main branch',
      'QA sync Thursday — SA informed of testing status and open defects',
      'Failed tickets return to developer — SA coordinates the fix cycle',
    ],
  },
  {
    num: '06',
    name: 'Deployment Preparation',
    when: 'Friday',
    owner: 'Gopi',
    what: [
      'Gopi collects all QA sign-offs and assembles the deployment batch',
      'Deployment Prep Log completed — tickets, SQL scripts, impact analysis, rollback plan',
      'Deployment Note prepared and submitted for written approval from Team Lead / CEO',
      'No deployment proceeds without written approval — verbal approval is not accepted',
      'If any ticket is marked Documentation Required = Yes — Technical Writer writes and attaches documentation in parallel with the deployment review. Both must be complete before the sign-off gate.',
    ],
  },
  {
    num: '07',
    name: 'Deployment',
    when: 'Monday',
    owner: 'Gopi + SA',
    what: [
      '9-step deployment: HRMIS export → Git Analyser → internal deploy → verify → production → verify',
      'Post-deployment smoke test — SA and QA verify critical paths are working in production',
      'Release Note published — CSD notified in writing, all departments informed of what went live',
      'Tickets formally closed with deployment date and outcome recorded in comment',
    ],
  },
  {
    num: '08',
    name: 'Sprint Retrospective',
    when: 'Monday',
    owner: 'SA + All Teams',
    what: [
      'Held after deployment confirmation — 20 to 30 minutes',
      'Review: tickets completed, pushed, and why — live issue volume vs planned work ratio noted',
      'Identify one concrete process improvement to carry into the next sprint',
      'SA documents lessons learned and shares summary with Team Lead',
    ],
  },
]

// ═══════════════════════════════════════════════════════════════════════════
export default function SDLCSection() {
  return (
    <>
      <h2 className="section-title">7. SDLC — Sprint Lifecycle</h2>
      <p className="section-subtitle">
        How the team operates across a 1-week sprint — phase handoffs from kickoff to deployment
      </p>

      {/* Phase strip */}
      <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', minWidth: '640px' }}>
          {sprintPhases.map((p, i) => (
            <div key={p.num} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{ flex: 1, border: '1px solid #D1D5DB', borderRadius: '6px', padding: '8px 6px', textAlign: 'center', background: '#fff' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.5px', marginBottom: '2px' }}>{p.num}</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>{p.name}</div>
                <div style={{ fontSize: '9px', color: '#6B7280', marginTop: '2px' }}>{p.when}</div>
              </div>
              {i < sprintPhases.length - 1 && (
                <div style={{ fontSize: '14px', color: '#9CA3AF', padding: '0 3px', flexShrink: 0 }}>→</div>
              )}
              {i === sprintPhases.length - 1 && (
                <div style={{ fontSize: '9px', color: '#9CA3AF', padding: '0 3px', textAlign: 'center', lineHeight: 1.4, flexShrink: 0 }}>↺<br />next<br />sprint</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Phase detail table */}
      <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '90px 110px 80px 1fr', background: '#1F2937', padding: '10px 16px', gap: '12px' }}>
          {['Phase', 'Name', 'Owner', 'What happens'].map(h => (
            <div key={h} style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.5px' }}>{h}</div>
          ))}
        </div>
        {sprintPhases.map((p, i) => (
          <div key={p.num} style={{
            display: 'grid', gridTemplateColumns: '90px 110px 80px 1fr',
            gap: '12px', padding: '12px 16px',
            borderBottom: i < sprintPhases.length - 1 ? '1px solid #F3F4F6' : 'none',
            background: i % 2 === 1 ? '#FAFAFA' : '#fff',
            alignItems: 'start',
          }}>
            <div>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF', marginBottom: '2px' }}>{p.num}</div>
              <div style={{ fontSize: '10px', color: '#6B7280' }}>{p.when}</div>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>{p.name}</div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#374151', background: '#F3F4F6', borderRadius: '4px', padding: '3px 7px', alignSelf: 'start' }}>{p.owner}</div>
            <ul style={{ margin: 0, padding: '0 0 0 14px' }}>
              {p.what.map((w, j) => (
                <li key={j} style={{ fontSize: '12px', color: '#374151', lineHeight: 1.65, marginBottom: '2px' }}>{w}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div style={{ marginTop: '20px', border: '1px solid #E5E7EB', borderRadius: '6px', padding: '14px 18px', background: '#FAFAFA' }}>
        <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.75, margin: 0 }}>
          <strong>How this connects to the Ticket Flow:</strong> Section 6 shows how a single ticket moves from CSD through SA, Dev, QA, and Deployment. This section shows how the whole team operates in parallel across a sprint — multiple tickets at different stages running simultaneously within the same 1-week cycle.
        </p>
      </div>
    </>
  )
}
