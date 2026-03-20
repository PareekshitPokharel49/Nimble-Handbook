const departments = [
  {
    id: 'csd',
    name: 'CSD — Customer Support Department',
    subtitle: 'First point of contact for all client tickets',
    problems: [
      {
        title: 'No clear definition of priority levels',
        points: [
          'There is no agreed definition of what constitutes Immediate, Urgent, High, Normal, or Low.',
          'Priority is assigned by feel — different CSD staff assign different levels to the same type of issue.',
          'Wrong priority assignment causes urgent issues to sit in queue and non-urgent issues to disrupt developer sprint work.',
          'Example: "Unable to login" should be Immediate. "Report not downloading" should be Normal.',
        ],
      },
      {
        title: 'CSD cannot distinguish ticket type — bug, feature, or how-to question',
        points: [
          'CSD cannot always tell if a ticket is a real system bug, a missing feature, or a client who does not know how to use the system.',
          'Tickets that CSD could resolve with a phone call or FAQ link are sent to developers instead.',
          'Developers stop planned sprint work to handle tickets that should never have reached them.',
          'No pre-escalation checklist exists before a ticket is raised to System Analysis.',
        ],
      },
      {
        title: 'No guide or FAQ available for new client questions',
        points: [
          'Newly onboarded clients ask basic how-to questions (e.g. "how do I generate a leave report") and CSD answers from memory.',
          'There is no document or guide CSD can share with clients to answer common questions.',
          'Analysts and senior staff lose time answering repeated queries that could be self-served.',
        ],
      },
      {
        title: 'No response time target communicated to clients',
        points: [
          'Clients do not know the expected resolution time for each priority level.',
          'CSD receives repeated follow-up calls because no SLA or ETA is set or communicated at ticket creation.',
          'CSD and the R&D team are not working from the same shared expectations on response timelines.',
        ],
      },
    ],
  },
  {
    id: 'sa',
    name: 'System Analysis Team',
    subtitle: 'Validates tickets and writes requirements for developers',
    problems: [
      {
        title: 'No buffer allocated for live issues in weekly milestone planning',
        points: [
          'On average 53 live issues arrive per month (roughly 12–13 per week), yet no buffer hours are reserved for them in any milestone.',
          'When live issues arrive, analysts drop planned work to respond — milestone targets are missed and backlog tickets keep getting pushed.',
          'Live issues are treated as interruptions rather than predictable, planned work.',
          'Data: 38% of total workload in Jan–Feb 2026 was consumed by live issues.',
        ],
      },
      {
        title: 'No standard template for raising tickets to developers',
        points: [
          'Analysts raise tickets differently — some include detailed context, others write minimal descriptions.',
          'Ticket quality depends entirely on who wrote it, not on a consistent standard.',
          'Developers and QA have to interpret what is needed rather than following a clear brief, causing miscommunication and wrong builds.',
          'No mandatory fields are enforced before a ticket is assigned.',
        ],
      },
      {
        title: 'Task planning is not based on actual capacity',
        points: [
          '56% of milestone tasks were delayed in the Jan–Mar 2026 period.',
          '63 tasks had 0 plan hours — no estimate attached before entering the milestone.',
          '23 tasks were still open at the time of review with a high probability of being pushed again.',
          'Milestones are built on optimism, not on available developer hours minus live issue buffer.',
        ],
      },
      {
        title: 'Knowledge is stored in people\'s heads, not in documents',
        points: [
          'Each analyst becomes the expert in certain modules — this knowledge is never written down.',
          'If that analyst is on leave or leaves the company, tickets for those modules slow down or stop.',
          'New analysts must learn by asking senior staff, who lose time explaining the same things repeatedly.',
          'No shared module knowledge base or reference library exists.',
        ],
      },
    ],
  },
  {
    id: 'dev',
    name: 'Development Team',
    subtitle: 'Builds features and fixes bugs across all system modules',
    problems: [
      {
        title: 'Code review depends on a single senior developer',
        points: [
          'All code review flows through one senior developer — if they are on leave or leave the company, the entire review process stops.',
          'Mid-level developers never build the habit of reviewing each other\'s work, keeping overall code awareness low.',
          'A single reviewer for a legacy system where one small change can break an unrelated module is an unacceptable risk.',
        ],
      },
      {
        title: 'No impact analysis when code changes are made',
        points: [
          'When a developer changes one module, there is no formal document identifying which other parts of the system may be affected.',
          'QA is not informed of related areas to test — they test only what the ticket describes and miss breakages in connected modules.',
          'Bugs caused by undetected side effects escape to production and are reported by clients as new issues.',
        ],
      },
      {
        title: 'Requirement changes happen verbally — nothing is written down',
        points: [
          'Analysts or clients sometimes ask for changes mid-development through verbal conversation.',
          'Developer builds the new version. QA tests the original written ticket. The two do not match.',
          'QA rejects the ticket. Both sides are right — the problem is there is no written record of the change.',
          'This is one of the most common causes of wasted time between Dev and QA.',
        ],
      },
      {
        title: 'Every module has one owner — no backup developer',
        points: [
          'Each module is handled by a single developer. If that developer is sick or on leave, the tickets for that module wait.',
          'Junior developers never learn other modules because tickets are always routed to the same person.',
          'If a key developer leaves the company, that entire module area becomes a delivery risk.',
        ],
      },
      {
        title: 'Live tickets destroy planned sprint work every sprint',
        points: [
          'Live tickets arrive throughout the sprint with no planned capacity to absorb them.',
          'Every live ticket takes hours directly away from planned sprint work.',
          '41% task push rate in Jan–Feb 2026 — 101 out of 182 tasks were live issues (55.5% of total workload).',
          'Management has no visibility into how much planned work was displaced by live issues each week.',
        ],
      },
      {
        title: 'Tickets exceeding 8 hours are not broken into sub-tasks',
        points: [
          'Developers work on single tickets for 20–40+ hours with no visible progress in the system.',
          'No formal sub-task breakdown means sprint planning estimates are unreliable.',
          '24 tasks in Jan–Feb 2026 exceeded 8 hours (13% of all tasks) — these inflate sprint capacity and hide real workload.',
        ],
      },
    ],
  },
  {
    id: 'qa',
    name: 'QA Team',
    subtitle: 'Tests all changes on the QA server before production deployment',
    problems: [
      {
        title: 'No standard for what developers must provide before QA assignment',
        points: [
          'Tickets arrive at QA with only a title and description — no standard structure of what information must be present.',
          'QA frequently has to go back to the developer or analyst to understand what was changed, what areas are affected, and what a passing result looks like.',
          'No information on which files were changed, which modules may be affected, or whether stored procedures were touched.',
          'Without this, QA cannot test beyond the immediate screen in the ticket — related areas break silently.',
        ],
      },
      {
        title: 'No QA checklist before merging to the Main Branch',
        points: [
          'Before a ticket is merged into Main, there is no standardized checklist QA must complete.',
          'Each tester decides on their own what is sufficient — the Main Branch is protected only by individual judgment, not a defined standard.',
          'If something reaches production, there is no record of what was and was not checked before the merge was approved.',
          'This is the main cause of regression bugs — issues that appear in areas the team thought were unaffected.',
        ],
      },
      {
        title: 'No Root Cause Analysis documentation for live issues',
        points: [
          'When a live issue is fixed and deployed, the team moves on with no record of what caused it.',
          'The same types of issues recur because there is no institutional memory of what went wrong.',
          'New joiners have no reference to understand the system\'s known failure points.',
          'Clients receive no formal assurance that issues have been properly investigated — just verbal confirmation.',
        ],
      },
      {
        title: 'No automated testing',
        points: [
          'QA relies entirely on manual testing — no automated test suite exists.',
          'Manual-only testing cannot scale with the volume of tickets and the risk of regression in a legacy system.',
          'Tools such as Katalon Studio or Selenium have been identified as potential starting points.',
        ],
      },
    ],
  },
]

export default function GapAnalysis() {
  return (
    <>
      <h2 className="section-title">4. Gap Analysis</h2>
      <p className="section-subtitle">
        Department-by-department review of current process problems — sourced from the Process Improvement Plan v1.0, March 2026
      </p>

      {departments.map((dept, di) => (
        <div key={dept.id} style={{ marginBottom: di < departments.length - 1 ? '40px' : '0' }}>

          {/* Department header */}
          <div style={{ background: '#1F2937', color: '#fff', borderRadius: '8px', padding: '12px 20px', marginBottom: '16px' }}>
            <div style={{ fontWeight: 800, fontSize: '15px' }}>{dept.name}</div>
            <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '2px' }}>{dept.subtitle}</div>
          </div>

          {/* Problems */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {dept.problems.map((problem, pi) => (
              <div key={pi} style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: '#fff' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', gap: '10px', background: '#F9FAFB' }}>
                  <div style={{ background: '#374151', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>
                    {`${dept.id.toUpperCase()}-${pi + 1}`}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: '#111827' }}>{problem.title}</div>
                </div>
                <ul style={{ margin: 0, padding: '12px 16px 12px 32px' }}>
                  {problem.points.map((point, i) => (
                    <li key={i} style={{ fontSize: '13px', color: '#374151', lineHeight: 1.7, marginBottom: i < problem.points.length - 1 ? '4px' : '0' }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      ))}
    </>
  )
}
