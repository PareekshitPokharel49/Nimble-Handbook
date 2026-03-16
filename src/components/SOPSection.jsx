const roles = [
  {
    id: 'sa',
    title: 'System Analyst (SA)',
    owner: 'Owner: Prajwal',
    color: '#FDF0EC',
    text: '#8B2500',
    accent: '#C0391B',
    steps: [
      {
        label: 'Gate 1 — Triage',
        items: [
          'Review every new ticket within the SLA window for that priority.',
          'Confirm the ticket has enough information — if not, request clarification from CSD before proceeding.',
          'Set the priority level. Priority can only be set or changed by SA with a written reason in the ticket.',
          'For Immediate or Urgent tickets — notify the assigned developer directly, do not rely on the ticket tool alone.',
        ],
      },
      {
        label: 'Sprint Planning & Backlog',
        items: [
          'Add triaged tickets to the backlog with correct priority tags.',
          'Every Wednesday — run backlog refinement with Dev lead (45 min). Estimate effort and confirm sprint slot.',
          'Carry-overs from the previous sprint must be reviewed on Monday kickoff and reprioritised if needed.',
        ],
      },
      {
        label: 'Assignment to Developer',
        items: [
          'Assign ticket to the correct developer with a clear description and acceptance criteria.',
          'For feature tickets — include expected outcome, edge cases, and any UI/UX direction.',
          'For bug tickets — include steps to reproduce, expected vs actual behaviour, and environment details.',
        ],
      },
      {
        label: 'Mid-Sprint Monitoring',
        items: [
          'Track all active tickets daily via standup and the daily work record sheet.',
          'Unblock developers immediately — if a blocker cannot be resolved within the day, escalate to Ram sir or Khem sir.',
          'If any SLA is at risk of being missed — flag it immediately. Do not wait for it to breach.',
        ],
      },
      {
        label: 'Gate 2 — QA Handoff',
        items: [
          'Verify the developer has completed local testing and added their ticket comment before moving to QA.',
          'Confirm QA has received and acknowledged the ticket.',
          'If QA rejects the ticket back to dev — SA coordinates the fix and re-review.',
        ],
      },
      {
        label: 'Deployment Preparation',
        items: [
          'Prepare deployment notes: what is being deployed, affected modules, rollback plan.',
          'Obtain written approval from Ram sir or Khem sir before anything goes to production.',
          'Schedule deployment at a low-impact time where possible.',
        ],
      },
      {
        label: 'Post-Deployment',
        items: [
          'Confirm with CSD that the issue is resolved from the client\'s perspective.',
          'Close the ticket with a closing comment referencing the deployment.',
          'Log any follow-up items or known limitations for future sprints.',
        ],
      },
    ],
  },
  {
    id: 'dev',
    title: 'Developer',
    owner: 'Ram Sapkota',
    color: '#EBF5FF',
    text: '#1F4E79',
    accent: '#1F4E79',
    steps: [
      {
        label: 'Ticket Pickup',
        items: [
          'Only pick up tickets that have been assigned by SA — do not self-assign from the backlog.',
          'Read the full ticket description, acceptance criteria, and any SA notes before starting.',
          'If anything is unclear — ask SA before writing a single line of code.',
        ],
      },
      {
        label: 'Development',
        items: [
          'Build the fix or feature in the development environment only.',
          'Follow existing code conventions and module structure.',
          'Do not touch modules outside the scope of the ticket without informing SA.',
        ],
      },
      {
        label: 'Local Testing',
        items: [
          'Test your own work before handing off to QA — do not push untested code.',
          'Cover the happy path, edge cases, and regression of directly affected areas.',
          'If you find additional bugs while working — log them as separate tickets, do not fix them silently.',
        ],
      },
      {
        label: 'Impact Analysis',
        items: [
          'Before moving to QA, document what modules or workflows could be affected by your change.',
          'If the impact is significant — inform SA so they can coordinate broader regression testing.',
          'Impact analysis must be included in your ticket comment.',
        ],
      },
      {
        label: 'Handoff to QA',
        items: [
          'Update the ticket status to "Ready for QA".',
          'Add your full developer comment in the ticket using the standard format (see Section 8).',
          'Be available to QA during their testing — respond to queries on the same day.',
        ],
      },
      {
        label: 'Post-Deployment',
        items: [
          'Verify the fix or feature works correctly in production after deployment.',
          'If any issue appears post-deployment — notify SA immediately and be ready to roll back.',
        ],
      },
    ],
  },
  {
    id: 'qa',
    title: 'QA Team',
    owner: 'Sign-off authority: QA lead',
    color: '#F0FDF4',
    text: '#14532D',
    accent: '#15803D',
    steps: [
      {
        label: 'Ticket Pickup',
        items: [
          'Pick up tickets in "Ready for QA" status only.',
          'Read the developer comment in full — understand what was changed and what the impact analysis says.',
          'If the developer comment is missing or incomplete — send the ticket back to dev before starting.',
        ],
      },
      {
        label: 'Test Execution',
        items: [
          'Run test cases for the specific module using the module test checklist.',
          'Test the reported bug fix or the acceptance criteria of the feature.',
          'Run regression on all areas identified in the developer\'s impact analysis.',
        ],
      },
      {
        label: 'Logging',
        items: [
          'Record all test results in the separate QA log — not in the ticket itself.',
          'The QA log must include: test case name, input, expected result, actual result, pass/fail.',
          'The ticket comment should contain only the summary (see Section 7 for format).',
        ],
      },
      {
        label: 'Sign-off or Rejection',
        items: [
          'If all test cases pass — add the QA summary comment and move ticket to "Approved for Deployment".',
          'If any test case fails — add a rejection comment with the specific failure details and move back to dev.',
          'Do not approve a ticket with known open defects unless SA has explicitly documented an exception.',
        ],
      },
      {
        label: 'Pre-Deployment Check',
        items: [
          'Before each deployment — confirm with SA which tickets are included and that all have QA sign-off.',
          'Any ticket without a QA sign-off comment must not go to production.',
        ],
      },
    ],
  },
]

function StepCard({ step, accent }) {
  return (
    <div style={{ marginBottom: '16px', border: '1px solid #e8e8e8', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ background: '#f5f5f5', padding: '10px 16px', fontWeight: 700, fontSize: '13px', color: accent, borderBottom: '1px solid #e8e8e8' }}>
        {step.label}
      </div>
      <ul style={{ listStyle: 'none', padding: '12px 16px', margin: 0 }}>
        {step.items.map((item, i) => (
          <li key={i} style={{ fontSize: '13px', color: '#444', padding: '5px 0 5px 18px', position: 'relative', borderBottom: i < step.items.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
            <span style={{ position: 'absolute', left: 0, color: accent, fontWeight: 700 }}>›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SOPSection() {
  return (
    <>
      <h2 className="section-title">6. Standard Operating Procedures</h2>
      <p className="section-subtitle">Step-by-step responsibilities for each team — aligned with the To-Be ticket flow</p>

      {roles.map((role, ri) => (
        <div key={role.id} style={{ marginBottom: ri < roles.length - 1 ? '48px' : '0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ background: role.color, color: role.text, fontWeight: 800, fontSize: '16px', padding: '10px 20px', borderRadius: '8px', flex: 1 }}>
              {role.title}
              <span style={{ fontWeight: 400, fontSize: '12px', marginLeft: '12px', opacity: 0.7 }}>{role.owner}</span>
            </div>
          </div>
          {role.steps.map((step, i) => (
            <StepCard key={i} step={step} accent={role.accent} />
          ))}
          {role.id === 'qa' && (
            <div style={{ marginTop: '20px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '10px', padding: '20px 24px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#14532D', marginBottom: '8px' }}>QA Test Case Sheet</div>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 12px 0' }}>
                QA must write and fill test cases in the standard format for <strong>every ticket</strong> before testing begins.
                The completed sheet must be attached to the ticket as part of the QA sign-off. Do not mark a ticket as passed without a filled test case log.
              </p>
              <a
                href="https://docs.google.com/spreadsheets/d/1OxTHqtPXKXxjD5cysfgicDbpSB9oBeLUqhApHkDDXRw/edit?gid=793810348#gid=793810348"
                target="_blank"
                rel="noreferrer"
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
