const S = {
  wrap:       { display:'flex', flexDirection:'column', width:'100%', fontFamily:'Arial, sans-serif' },
  laneHeaders:{ display:'flex', width:'100%' },
  laneHeader: (bg, color) => ({ flex:1, textAlign:'center', fontSize:12, fontWeight:700, padding:'7px 4px', borderRadius:'6px 6px 0 0', border:'1px solid rgba(0,0,0,0.08)', margin:'0 3px', background:bg, color }),
  laneRow:    (minH=64) => ({ display:'flex', width:'100%', minHeight:minH, alignItems:'stretch' }),
  cell:       (bg) => ({ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'6px 4px', margin:'0 3px', borderLeft:'1px solid rgba(0,0,0,0.05)', borderRight:'1px solid rgba(0,0,0,0.05)', background:bg }),
  step:       (bg, color, border, extra={}) => ({ width:'92%', padding:'6px 8px', borderRadius:6, fontSize:12, lineHeight:1.45, textAlign:'center', border:`1px solid ${border}`, background:bg, color, ...extra }),
  stepTitle:  { display:'block', fontSize:12.5, marginBottom:2, fontWeight:700 },
  ul:         { textAlign:'left', paddingLeft:14, marginTop:4, fontSize:11 },
  li:         { marginBottom:2 },
  arrowRow:   { display:'flex', width:'100%', height:24, alignItems:'center' },
  arrowCell:  { flex:1, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 3px', fontSize:15, color:'#9CA3AF' },
  badge:      (bg, color) => ({ fontSize:11, background:bg, color, borderRadius:4, padding:'2px 7px', marginTop:4, display:'inline-block' }),
  pill:       (bg, color) => ({ display:'inline-block', padding:'2px 8px', borderRadius:10, fontSize:10, fontWeight:700, background:bg, color }),
  slaWrap:    { marginBottom:16 },
  slaTitle:   { fontSize:12, fontWeight:700, color:'#1F2937', marginBottom:6, paddingLeft:2 },
  slaTable:   { width:'100%', borderCollapse:'collapse', fontSize:11 },
  slaTh:      { padding:'6px 10px', textAlign:'left', fontSize:11, background:'#1F4E79', color:'#ffffff' },
  slaTd:      { padding:'6px 10px', borderBottom:'1px solid #E5E7EB' },
  sectionRow: { display:'flex', justifyContent:'center', padding:'8px 0 4px' },
  sectionLbl: { fontSize:12, fontWeight:700, color:'#065F46', background:'#D1FAE5', borderRadius:4, padding:'5px 16px', display:'inline-block' },
}

const COLS = {
  csd:    '#F0F6FF',
  sa:     '#F5F3FF',
  dev:    '#FFFBEB',
  qa:     '#FDF2F8',
  deploy: '#ECFDF5',
}

function Arrow({ col, label, labelColor='#065F46' }) {
  return (
    <div style={S.arrowCell}>
      {col ? <>↓{label && <span style={{ fontSize:10, color:labelColor, marginLeft:3 }}>{label}</span>}</> : null}
    </div>
  )
}

function ArrowRow({ csd, sa, dev, qa, deploy, saLabel, devLabel, qaLabel, deployLabel, csdRed, saRed }) {
  return (
    <div style={S.arrowRow}>
      <Arrow col={csd}    label={csd    && csd !== true ? csd : undefined}    labelColor={csdRed    ? '#B91C1C' : '#065F46'} />
      <Arrow col={sa}     label={sa     && sa  !== true ? sa  : undefined}    labelColor={saRed     ? '#B91C1C' : '#065F46'} />
      <Arrow col={dev}    label={dev    && dev !== true ? dev : undefined} />
      <Arrow col={qa}     label={qa     && qa  !== true ? qa  : undefined} />
      <Arrow col={deploy} label={deploy && deploy !== true ? deploy : undefined} />
    </div>
  )
}

const slaData = [
  { badge: ['#FEE2E2','#7F1D1D'], name:'Immediate', meaning:'System down · Data loss · Nothing works',              triage:'3 – 4 hours',       resolve:'Same day' },
  { badge: ['#FEF3C7','#78350F'], name:'Urgent',    meaning:'Critical feature broken · Major client impact',        triage:'1 business day',    resolve:'1 business day' },
  { badge: ['#FEF9C3','#713F12'], name:'High',       meaning:'Important feature broken · Workaround exists',         triage:'2 business days',   resolve:'2 business days' },
  { badge: ['#DBEAFE','#1E3A8A'], name:'Normal',     meaning:'Minor bug or standard feature request',                triage:'4 business days',   resolve:'Current sprint' },
  { badge: ['#F3F4F6','#374151'], name:'Low',         meaning:'Cosmetic issue · Nice to have',                        triage:'1 week',            resolve:'Next sprint' },
]

export default function ToBeFlow() {
  return (
    <>
      <h2 className="section-title">5. Improved Ticket Flow — To Be</h2>
      <p className="section-subtitle">Version 4.0 · QA pre-check gate + main branch test added · Effective from Day 1</p>

      <div style={S.wrap}>

        {/* SLA TABLE */}
        <div style={S.slaWrap}>
          <div style={S.slaTitle}>Priority SLA Reference</div>
          <div className="table-wrap">
            <table style={S.slaTable}>
              <thead>
                <tr>
                  <th style={S.slaTh}>Priority</th>
                  <th style={S.slaTh}>Meaning</th>
                  <th style={S.slaTh}>SA must triage within</th>
                  <th style={S.slaTh}>Dev must resolve within</th>
                </tr>
              </thead>
              <tbody>
                {slaData.map((r,i) => (
                  <tr key={r.name}>
                    <td style={{ ...S.slaTd, background: i%2===1?'#F9FAFB':'#fff' }}><span style={S.pill(r.badge[0], r.badge[1])}>{r.name}</span></td>
                    <td style={{ ...S.slaTd, background: i%2===1?'#F9FAFB':'#fff' }}>{r.meaning}</td>
                    <td style={{ ...S.slaTd, background: i%2===1?'#F9FAFB':'#fff' }}>{r.triage}</td>
                    <td style={{ ...S.slaTd, background: i%2===1?'#F9FAFB':'#fff', borderBottom: i===slaData.length-1?'none':undefined }}>{r.resolve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* LANE HEADERS */}
        <div style={S.laneHeaders}>
          <div style={S.laneHeader('#DBEAFE','#1D4ED8')}>CSD</div>
          <div style={S.laneHeader('#EDE9FE','#5B21B6')}>System Analyst</div>
          <div style={S.laneHeader('#FEF3C7','#92400E')}>Developer</div>
          <div style={S.laneHeader('#FCE7F3','#9D174D')}>QA</div>
          <div style={S.laneHeader('#D1FAE5','#065F46')}>Deployment</div>
        </div>

        {/* ROW 1 — CSD raises ticket */}
        <div style={S.laneRow()}>
          <div style={S.cell(COLS.csd)}>
            <div style={S.step('#DBEAFE','#1E3A8A','#93C5FD')}>
              <b style={S.stepTitle}>Customer raises issue</b>
              Email · Phone · Web<br />CSD logs ticket with title + description
            </div>
          </div>
          <div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} /><div style={S.cell(COLS.qa)} /><div style={S.cell(COLS.deploy)} />
        </div>
        <ArrowRow csd={true} />

        {/* ROW 2 — SA Gate 1 */}
        <div style={S.laneRow(150)}>
          <div style={S.cell(COLS.csd)} />
          <div style={S.cell(COLS.sa)}>
            <div style={S.step('#FEF9C3','#713F12','#FDE047',{fontWeight:700})}>
              <b style={S.stepTitle}>◆ SA Gate 1 — Triage</b>
              <ul style={S.ul}>
                <li style={S.li}>Set priority: Immediate / Urgent / High / Normal / Low</li>
                <li style={S.li}>Check SLA table above — triage deadline applies now</li>
                <li style={S.li}>Set type: Bug or Feature</li>
                <li style={S.li}><b>If Bug:</b> steps to replicate must be present</li>
                <li style={S.li}><b>If Feature:</b> description + acceptance criteria + wireframe required</li>
                <li style={S.li}><b>If Invalid / Duplicate / Out of scope:</b> Reject with written reason</li>
                <li style={S.li}>Assign to: Backlog or Current Sprint</li>
                <li style={S.li}>Set start date, end date, story points</li>
                <li style={S.li}><b>Ticket must be ≤ 8 hours of dev effort</b> — if larger, break it into sub-tickets before assigning</li>
              </ul>
            </div>
            <span style={S.badge('#FEE2E2','#B91C1C')}>✗ Invalid / Duplicate / Out of scope — Rejected</span>
          </div>
          <div style={S.cell(COLS.dev)} /><div style={S.cell(COLS.qa)} /><div style={S.cell(COLS.deploy)} />
        </div>

        {/* REJECTION PATH */}
        <div style={S.arrowRow}>
          <div style={S.arrowCell}>↓ <span style={{ fontSize:10, color:'#B91C1C', marginLeft:3 }}>Rejected</span></div>
          <div style={S.arrowCell}>↓ <span style={{ fontSize:10, color:'#065F46', marginLeft:3 }}>Approved</span></div>
          <div style={S.arrowCell} /><div style={S.arrowCell} /><div style={S.arrowCell} />
        </div>

        <div style={S.laneRow(52)}>
          <div style={S.cell(COLS.csd)}>
            <div style={{ ...S.step('#FEE2E2','#7F1D1D','#FCA5A5'), borderRadius:20, fontSize:11 }}>
              ✗ Ticket Rejected<br />Written reason sent to CSD<br />Status → Closed
            </div>
          </div>
          <div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} /><div style={S.cell(COLS.qa)} /><div style={S.cell(COLS.deploy)} />
        </div>
        <ArrowRow sa={true} />

        {/* ROW 3 — CSD notified */}
        <div style={S.laneRow(52)}>
          <div style={S.cell(COLS.csd)}>
            <div style={{ ...S.step('#DBEAFE','#1E3A8A','#93C5FD'), fontSize:11 }}>
              <b style={S.stepTitle}>CSD notified</b>
              Ticket assigned · Sprint · Est. end date
            </div>
          </div>
          <div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} /><div style={S.cell(COLS.qa)} /><div style={S.cell(COLS.deploy)} />
        </div>
        <ArrowRow dev={true} />

        {/* ROW 4 — Dev works */}
        <div style={S.laneRow()}>
          <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} />
          <div style={S.cell(COLS.dev)}>
            <div style={S.step('#FEF3C7','#78350F','#FCD34D')}>
              <b style={S.stepTitle}>Developer works on fix</b>
              Status → In Progress<br />Discusses with SA if needed
            </div>
          </div>
          <div style={S.cell(COLS.qa)} /><div style={S.cell(COLS.deploy)} />
        </div>
        <ArrowRow dev={true} />

        {/* ROW 5 — Dev Gate 2 */}
        <div style={S.laneRow(120)}>
          <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} />
          <div style={S.cell(COLS.dev)}>
            <div style={S.step('#FEF9C3','#713F12','#FDE047',{fontWeight:700})}>
              <b style={S.stepTitle}>◆ Dev Gate 2 — Before sending to QA</b>
              <ul style={S.ul}>
                <li style={S.li}>Tested on local environment ✓</li>
                <li style={S.li}>Impact analysis filled in ✓</li>
                <li style={S.li}>Description of fix added ✓</li>
                <li style={S.li}>Module / area of change noted ✓</li>
                <li style={S.li}><b>If ticket took or will take &gt; 8 hours</b> — stop and ask SA to break it down before continuing</li>
              </ul>
            </div>
            <span style={S.badge('#FEE2E2','#B91C1C')}>✗ Not ready — fix and recheck</span>
          </div>
          <div style={S.cell(COLS.qa)} /><div style={S.cell(COLS.deploy)} />
        </div>
        <div style={S.arrowRow}>
          <div style={S.arrowCell} /><div style={S.arrowCell} />
          <div style={S.arrowCell}>↓ <span style={{ fontSize:10, color:'#065F46', marginLeft:3 }}>Ready for QA</span></div>
          <div style={S.arrowCell} /><div style={S.arrowCell} />
        </div>

        {/* ROW 6 — CSD notified QA */}
        <div style={S.laneRow(52)}>
          <div style={S.cell(COLS.csd)}>
            <div style={{ ...S.step('#DBEAFE','#1E3A8A','#93C5FD'), fontSize:11 }}>
              <b style={S.stepTitle}>CSD notified</b>Ticket now in QA
            </div>
          </div>
          <div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} /><div style={S.cell(COLS.qa)} /><div style={S.cell(COLS.deploy)} />
        </div>
        <ArrowRow qa={true} />

        {/* ROW 7 — QA Pre-check gate */}
        <div style={S.laneRow(110)}>
          <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} />
          <div style={S.cell(COLS.qa)}>
            <div style={S.step('#FEF9C3','#713F12','#FDE047',{fontWeight:700})}>
              <b style={S.stepTitle}>◆ QA Pre-check before writing test cases</b>
              <ul style={S.ul}>
                <li style={S.li}>Steps to replicate present? (Bug tickets — mandatory)</li>
                <li style={S.li}>Acceptance criteria present? (Feature tickets — mandatory)</li>
                <li style={S.li}>Impact analysis filled in by Dev?</li>
              </ul>
            </div>
            <span style={S.badge('#FEE2E2','#B91C1C')}>✗ Anything missing — send back to SA</span>
          </div>
          <div style={S.cell(COLS.deploy)} />
        </div>
        <div style={S.arrowRow}>
          <div style={S.arrowCell} /><div style={S.arrowCell} /><div style={S.arrowCell} />
          <div style={S.arrowCell}>↓ <span style={{ fontSize:9, color:'#065F46', marginLeft:3 }}>All present</span></div>
          <div style={S.arrowCell} />
        </div>

        {/* ROW 7B — QA writes test cases */}
        <div style={S.laneRow()}>
          <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} />
          <div style={S.cell(COLS.qa)}>
            <div style={S.step('#FCE7F3','#831843','#F9A8D4')}>
              <b style={S.stepTitle}>QA writes test cases</b>
              Based on acceptance criteria<br />Covers all areas from impact analysis
            </div>
          </div>
          <div style={S.cell(COLS.deploy)} />
        </div>
        <ArrowRow qa={true} />

        {/* ROW 8 — QA tests QA branch */}
        <div style={S.laneRow(120)}>
          <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} />
          <div style={S.cell(COLS.qa)}>
            <div style={S.step('#FCE7F3','#831843','#F9A8D4')}>
              <b style={S.stepTitle}>QA tests on QA branch</b>
              <ul style={S.ul}>
                <li style={S.li}>What was tested (per module)</li>
                <li style={S.li}>Validated against impact analysis</li>
                <li style={S.li}>Status: Pass or Fail per test case</li>
                <li style={S.li}>QA checklist attached to ticket</li>
              </ul>
            </div>
            <span style={S.badge('#FEE2E2','#B91C1C')}>✗ Fail — bug logged with steps — back to Dev</span>
            <span style={S.badge('#D1FAE5','#065F46')}>✓ Pass — request merge to develop</span>
          </div>
          <div style={S.cell(COLS.deploy)} />
        </div>
        <div style={S.arrowRow}>
          <div style={S.arrowCell} /><div style={S.arrowCell} />
          <div style={S.arrowCell}>↓ <span style={{ fontSize:10, color:'#065F46', marginLeft:3 }}>merge develop</span></div>
          <div style={S.arrowCell} /><div style={S.arrowCell} />
        </div>

        {/* ROW 9 — Dev merges develop */}
        <div style={S.laneRow()}>
          <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} />
          <div style={S.cell(COLS.dev)}>
            <div style={S.step('#FEF3C7','#78350F','#FCD34D')}>
              <b style={S.stepTitle}>Developer merges</b>into develop branch
            </div>
          </div>
          <div style={S.cell(COLS.qa)} /><div style={S.cell(COLS.deploy)} />
        </div>
        <ArrowRow qa={true} />

        {/* ROW 10 — QA tests develop branch */}
        <div style={S.laneRow(120)}>
          <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} />
          <div style={S.cell(COLS.qa)}>
            <div style={S.step('#FCE7F3','#831843','#F9A8D4')}>
              <b style={S.stepTitle}>QA tests on develop branch</b>
              <ul style={S.ul}>
                <li style={S.li}>Re-run full module checklist</li>
                <li style={S.li}>Regression check on related areas</li>
                <li style={S.li}>Status: Pass or Fail per test case</li>
                <li style={S.li}>QA checklist attached to ticket</li>
              </ul>
            </div>
            <span style={S.badge('#FEE2E2','#B91C1C')}>✗ Fail — bug logged — back to Dev</span>
            <span style={S.badge('#D1FAE5','#065F46')}>✓ Pass — request merge to main</span>
          </div>
          <div style={S.cell(COLS.deploy)} />
        </div>
        <div style={S.arrowRow}>
          <div style={S.arrowCell} /><div style={S.arrowCell} />
          <div style={S.arrowCell}>↓ <span style={{ fontSize:10, color:'#065F46', marginLeft:3 }}>merge main</span></div>
          <div style={S.arrowCell} /><div style={S.arrowCell} />
        </div>

        {/* ROW 10B — Dev merges main */}
        <div style={S.laneRow()}>
          <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} />
          <div style={S.cell(COLS.dev)}>
            <div style={S.step('#FEF3C7','#78350F','#FCD34D')}>
              <b style={S.stepTitle}>Developer merges</b>into main branch
            </div>
          </div>
          <div style={S.cell(COLS.qa)} /><div style={S.cell(COLS.deploy)} />
        </div>
        <ArrowRow qa={true} />

        {/* ROW 10C — QA tests main branch */}
        <div style={S.laneRow(120)}>
          <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} />
          <div style={S.cell(COLS.qa)}>
            <div style={S.step('#FCE7F3','#831843','#F9A8D4')}>
              <b style={S.stepTitle}>QA tests on main branch</b>
              <ul style={S.ul}>
                <li style={S.li}>Verify all changes applied correctly</li>
                <li style={S.li}>Spot-check core affected screens</li>
                <li style={S.li}>Status: Pass or Fail per test case</li>
                <li style={S.li}>QA checklist attached to ticket</li>
              </ul>
            </div>
            <span style={S.badge('#FEE2E2','#B91C1C')}>✗ Fail — bug logged — back to Dev</span>
            <span style={S.badge('#D1FAE5','#065F46')}>✓ Pass — QA sign-off</span>
          </div>
          <div style={S.cell(COLS.deploy)} />
        </div>
        <div style={S.arrowRow}>
          <div style={S.arrowCell} />
          <div style={S.arrowCell}>↓ <span style={{ fontSize:10, color:'#065F46', marginLeft:3 }}>QA sign-off received</span></div>
          <div style={S.arrowCell} /><div style={S.arrowCell} /><div style={S.arrowCell} />
        </div>

        {/* ROW 11 — SA Gate 3 */}
        <div style={S.laneRow(120)}>
          <div style={S.cell(COLS.csd)} />
          <div style={S.cell(COLS.sa)}>
            <div style={S.step('#FEF9C3','#713F12','#FDE047',{fontWeight:700})}>
              <b style={S.stepTitle}>◆ SA Gate 3 — Deployment Prep Log</b>
              <ul style={S.ul}>
                <li style={S.li}>List of tickets ready for deployment</li>
                <li style={S.li}>Date and time of deployment request</li>
                <li style={S.li}>QA sign-off confirmed per ticket</li>
                <li style={S.li}>SQL script attached (if required)</li>
                <li style={S.li}>Impact analysis form attached</li>
              </ul>
            </div>
          </div>
          <div style={S.cell(COLS.dev)} /><div style={S.cell(COLS.qa)} /><div style={S.cell(COLS.deploy)} />
        </div>
        <ArrowRow sa={true} />

        {/* DEPLOYMENT SECTION LABEL */}
        <div style={S.sectionRow}><span style={S.sectionLbl}>Deployment Review — System Analyst</span></div>

        {/* DEPLOYMENT STEPS */}
        {[
          { step:'Step 1', label:'Extract deployment report from Nimble HRMIS' },
          { step:'Step 2', label:'Run Git Analyser · MAIN vs DEVELOP' },
          { step:'Step 3', label:'Upload to Internal Tool · Resolve discrepancies' },
        ].map(({ step, label }) => (
          <div key={step}>
            <div style={S.laneRow(52)}>
              <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} /><div style={S.cell(COLS.qa)} />
              <div style={S.cell(COLS.deploy)}>
                <div style={S.step('#D1FAE5','#064E3B','#6EE7B7')}><b style={S.stepTitle}>{step}</b>{label}</div>
              </div>
            </div>
            <ArrowRow deploy={true} />
          </div>
        ))}

        {/* STEP 4 — Sign-off gate */}
        <div style={S.laneRow(72)}>
          <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} /><div style={S.cell(COLS.qa)} />
          <div style={S.cell(COLS.deploy)}>
            <div style={S.step('#FEF9C3','#713F12','#FDE047',{fontWeight:700})}>
              <b style={S.stepTitle}>◆ Step 4 — Sign-off Gate</b>
              Final list shared with<br />Ram sir or Khem sir<br />Written approval required
            </div>
          </div>
        </div>
        <div style={S.arrowRow}>
          <div style={S.arrowCell} /><div style={S.arrowCell} /><div style={S.arrowCell} /><div style={S.arrowCell} />
          <div style={S.arrowCell}>↓ <span style={{ fontSize:10, color:'#065F46', marginLeft:3 }}>Approved</span></div>
        </div>

        {/* STEPS 5–8 */}
        {[
          { step:'Step 5', label:'Deploy to internal testing server' },
          { step:'Step 6', label:'Verify internal testing server' },
          { step:'Step 7', label:'Deploy to production' },
          { step:'Step 8', label:'Verify on production replica server' },
        ].map(({ step, label }) => (
          <div key={step}>
            <div style={S.laneRow(52)}>
              <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} /><div style={S.cell(COLS.qa)} />
              <div style={S.cell(COLS.deploy)}>
                <div style={S.step('#D1FAE5','#064E3B','#6EE7B7')}><b style={S.stepTitle}>{step}</b>{label}</div>
              </div>
            </div>
            <ArrowRow deploy={true} />
          </div>
        ))}

        {/* STEP 9 — Release note gate */}
        <div style={S.laneRow(52)}>
          <div style={S.cell(COLS.csd)} /><div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} /><div style={S.cell(COLS.qa)} />
          <div style={S.cell(COLS.deploy)}>
            <div style={S.step('#FEF9C3','#713F12','#FDE047',{fontWeight:700})}>
              <b style={S.stepTitle}>◆ Step 9 — Gate</b>
              Release Note complete<br />Notify all departments
            </div>
          </div>
        </div>
        <div style={S.arrowRow}>
          <div style={S.arrowCell}>↓</div>
          <div style={S.arrowCell} /><div style={S.arrowCell} /><div style={S.arrowCell} />
          <div style={S.arrowCell}>↓</div>
        </div>

        {/* FINAL ROW */}
        <div style={S.laneRow(44)}>
          <div style={S.cell(COLS.csd)}>
            <div style={{ ...S.step('#DBEAFE','#1E3A8A','#93C5FD'), fontSize:11 }}>
              <b style={S.stepTitle}>CSD notified</b>Ticket closed
            </div>
          </div>
          <div style={S.cell(COLS.sa)} /><div style={S.cell(COLS.dev)} /><div style={S.cell(COLS.qa)} />
          <div style={S.cell(COLS.deploy)}>
            <div style={{ ...S.step('#D1FAE5','#064E3B','#6EE7B7'), borderRadius:20, fontWeight:700 }}>✓ Ticket Closed</div>
          </div>
        </div>

      </div>
    </>
  )
}
