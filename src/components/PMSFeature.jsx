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
  {
    num: 4,
    title: 'QA Test Cases — In-Ticket Testing Panel',
    desc: 'A dedicated QA Test Cases panel embedded directly inside the Ticket View. QA engineers can add test cases, document steps and expected results, record actual results, set pass/fail/blocked/pending status, and attach screenshots — all without leaving the ticket. A live progress bar and summary cards show test coverage at a glance.',
    cards: [
      { title: 'Inline Test Case Management', desc: 'Add, expand, and update test cases directly within the ticket. Each case has steps, expected result, actual result, status buttons, and screenshot upload.', color: '#F0FDF4', text: '#15803D' },
      { title: 'Live Progress Tracking', desc: 'Summary cards show total, pass, fail, blocked, and pending counts. A colour-coded progress bar updates in real time as QA marks each test case.', color: '#EFF6FF', text: '#1D4ED8' },
    ],
    file: '/nimble_qa_v2.html',
    label: 'Open Wireframe in Full Screen ↗',
  },
  {
    num: 5,
    title: 'Reporting Dashboard — Department & Hours Analytics',
    desc: 'A new Dashboard view under the Reporting module. Managers can filter by date range and department to see total hours logged, tickets worked on, and average hours per ticket. Data is broken down by department with expandable rows per ticket, a horizontal bar chart, and a donut chart showing share distribution.',
    cards: [
      { title: 'Department-wise Breakdown', desc: 'Grouped table showing hours logged per ticket for DEV, QA, System Analyst, and other teams. Expand/collapse per department. Export to report.', color: '#EFF6FF', text: '#1D4ED8' },
      { title: 'Priority Drill-Down Charts', desc: 'Bar chart and donut show total hours by department. A stacked bar chart breaks each department\'s hours by priority (Urgent, Immediate, High, Normal, Low) — click any bar to expand the full priority breakdown.', color: '#F0FDF4', text: '#15803D' },
    ],
    file: '/nimble_dashboard_c1_v2.html',
    label: 'Open Wireframe in Full Screen ↗',
  },
  {
    num: 6,
    title: 'Reporting Dashboard — User Wise Analytics',
    desc: 'A User Wise tab under the Reporting Dashboard. Managers can identify top contributors via a ranked leaderboard with stacked priority bars, see each user\'s share of total hours on a donut chart, and drill into per-user priority breakdowns — all filterable by date range and department.',
    cards: [
      { title: 'Hardworker Leaderboard', desc: 'Ranked list of users by total hours logged. Each row shows a stacked bar broken down by priority (Urgent, Immediate, High, Normal, Low) with an expandable detail panel per user.', color: '#FFF7ED', text: '#C2410C' },
      { title: 'User Share Distribution', desc: 'Donut chart showing each user\'s percentage share of total hours. Accompanied by a stacked bar chart of hours by priority per user and a grouped ticket-level table with expand/collapse rows.', color: '#F5F3FF', text: '#5B21B6' },
    ],
    file: '/nimble_dashboard_c2_1.html',
    label: 'Open Wireframe in Full Screen ↗',
  },
  {
    num: 7,
    title: 'Reporting Dashboard — Project Wise Analytics',
    desc: 'A Project Wise tab under the Reporting Dashboard. Managers can filter by date range, priority, and project to see a 2×2 panel layout — hours per ticket ranked by effort, overdue ticket tracking with days-over counts, estimation overrun comparisons, and a focused view of all urgent and immediate tickets.',
    cards: [
      { title: 'Hours & Overdue Panels', desc: 'View 1 ranks tickets by hours logged with priority-coloured bars. View 3 shows overdue tickets with a pass/fail KPI summary, days-over count, and a developer note about NULL TaskDueDate handling.', color: '#EFF6FF', text: '#1D4ED8' },
      { title: 'Estimation Overrun & Priority Alerts', desc: 'View F highlights tickets where actual time exceeded estimate, with a split bar showing estimated vs. overrun hours. View G lists all Urgent and Immediate tickets with total hours and a priority breakdown footer.', color: '#FEF2F2', text: '#DC2626' },
    ],
    file: '/nimble_dashboard_c3.html',
    label: 'Open Wireframe in Full Screen ↗',
  },
  {
    num: 8,
    title: 'Task View — Activity Log & Structured Comments',
    desc: 'A redesigned Ticket View in the My Tasks module. Replaces the flat comment thread with a split Activity & Comments feed — workflow events (status changes, merge requests, forwards, test passes) appear as a visual timeline, while staff comments show structured metadata: author, timestamp, status badge, comment type, and hours spent. An inline Add Comment form supports comment types and time logging.',
    cards: [
      { title: 'Activity Timeline', desc: 'Workflow events — Status Change, Forward for Testing, Merge Request, Testing Passed, Deployment Review — appear as a colour-coded vertical timeline with icons, actor name, and timestamp. Filterable by "Activity" tab.', color: '#EFF6FF', text: '#1D4ED8' },
      { title: 'Structured Comment Feed', desc: 'Each comment shows author avatar, date, current status badge, comment type (Comment / Analyst Document / Work Report), and hours spent. An Add Comment form at the bottom lets team members log time and select comment type inline.', color: '#F0FDF4', text: '#15803D' },
    ],
    file: '/nimble_task_reporting_2.html',
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
