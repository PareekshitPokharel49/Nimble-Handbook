export default function OrgHierarchy() {
  return (
    <>
      <h2 className="section-title">1. Organisation Hierarchy</h2>
      <p className="section-subtitle">Who is in each team and how they connect</p>

      <img src="/org_chart.png" alt="Nimble Infosys Organisation Chart" className="flow-image" style={{ marginBottom: '36px' }} />

      <div className="sub-heading">Teams</div>
      <ul className="bullet-list">
        <li><strong>CSD</strong> — Customer Support Department. First point of contact for all client issues. Responsible for logging and tracking every ticket raised.</li>
        <li><strong>System Analyst (SA)</strong> — Reviews and triages all incoming tickets. Owns sprint planning, backlog management, deployment preparation, and cross-team coordination. Prajwal is the primary SA.</li>
        <li><strong>Developer</strong> — Builds and fixes features based on tickets assigned by SA. Responsible for local testing, impact analysis, and code quality before handoff to QA. Khem sir leads the dev team.</li>
        <li><strong>QA</strong> — Tests all changes before they reach production. Maintains test checklists per module and provides formal sign-off before deployment.</li>
      </ul>

      <div className="sub-heading">Reporting and Approval Line</div>
      <ul className="bullet-list">
        <li>CSD logs ticket → SA triages and assigns → Developer builds → QA validates → SA prepares deployment.</li>
        <li>Final deployment to production requires written approval from <strong>Ram sir or Khem sir</strong> before anything goes live.</li>
      </ul>
    </>
  )
}
