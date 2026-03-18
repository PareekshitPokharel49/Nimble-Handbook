const meetings = [
  {
    time: '9:15 AM',
    mon:  { label: 'Standup', sub: '15 min · All teams', color: '#E8F5F1', text: '#0F6E56' },
    tue:  { label: 'Standup', sub: '15 min · All teams', color: '#E8F5F1', text: '#0F6E56' },
    wed:  { label: 'Standup', sub: '15 min · All teams', color: '#E8F5F1', text: '#0F6E56' },
    thu:  { label: 'Standup', sub: '15 min · All teams', color: '#E8F5F1', text: '#0F6E56' },
    fri:  { label: 'Standup', sub: '15 min · All teams', color: '#E8F5F1', text: '#0F6E56' },
  },
  {
    time: '9:30 AM',
    mon:  { label: 'Week wrap-up', sub: '20 min · All teams', color: '#EDEBF7', text: '#4B3A8A' },
    tue:  { label: 'Week kickoff', sub: '20 min · All teams', color: '#EDEBF7', text: '#4B3A8A' },
    wed:  null,
    thu:  null,
    fri:  null,
  },
  {
    time: '11:00 AM',
    mon:  null,
    tue:  null,
    wed:  { label: 'Backlog refine', sub: '45 min · SA + Dev lead', color: '#FEF9E7', text: '#7B4F00' },
    thu:  null,
    fri:  null,
  },
  {
    time: '2:00 PM',
    mon:  { label: 'SA sync', sub: '20 min · SA only', color: '#FDF0EC', text: '#8B2500' },
    tue:  { label: 'Dev sync', sub: '20 min · Dev only', color: '#EBF5FF', text: '#1F4E79' },
    wed:  null,
    thu:  { label: 'QA sync', sub: '20 min · QA only', color: '#FEF9E7', text: '#7B4F00' },
    fri:  null,
  },
  {
    time: '3:00 PM',
    mon:  null,
    tue:  null,
    wed:  null,
    thu:  { label: 'Cross-team', sub: '30 min · As needed', color: '#FEECEC', text: '#7A1A1A' },
    fri:  null,
  },
]

const days = ['mon', 'tue', 'wed', 'thu', 'fri']
const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const Cell = ({ data }) => {
  if (!data) return <td style={{ color: '#ccc', textAlign: 'center', fontSize: '12px' }}>—</td>
  return (
    <td style={{ padding: '10px 12px' }}>
      <div style={{
        background: data.color,
        borderRadius: '6px',
        padding: '8px 10px',
        textAlign: 'center',
      }}>
        <div style={{ fontWeight: 700, fontSize: '13px', color: data.text }}>{data.label}</div>
        <div style={{ fontSize: '11px', color: data.text, opacity: 0.8, marginTop: '2px' }}>{data.sub}</div>
      </div>
    </td>
  )
}

export default function MeetingCalendar() {
  return (
    <>
      <h2 className="section-title">2. Weekly Meeting Calendar</h2>
      <p className="section-subtitle">All meetings, all teams, every week — 2-week sprint cycle · Owner: Prajwal (SA)</p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th style={{ width: '80px' }}>Time</th>
              {dayLabels.map(d => <th key={d}>{d}</th>)}
            </tr>
          </thead>
          <tbody>
            {meetings.map((row, i) => (
              <tr key={i} style={{ background: 'transparent' }}>
                <td style={{ fontWeight: 700, fontSize: '12px', color: '#444', background: '#f5f5f5', whiteSpace: 'nowrap' }}>{row.time}</td>
                {days.map(d => <Cell key={d} data={row[d]} />)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '32px', background: '#F0F7FF', border: '1px solid #C3D9F5', borderRadius: '10px', padding: '20px 24px' }}>
        <div style={{ fontWeight: 700, fontSize: '14px', color: '#1F4E79', marginBottom: '8px' }}>Daily Work Record</div>
        <p style={{ fontSize: '13px', color: '#333', margin: '0 0 12px 0' }}>
          Every team member is required to fill in the daily work record at the end of each working day.
          This sheet is maintained by <strong>Prajwal sir (PM)</strong> and work progress is tracked daily by{' '}
          <strong>Ram Sapkota (Senior Dev)</strong> and <strong>Khem sir</strong>.
        </p>
        <a
          href="https://docs.google.com/spreadsheets/d/1OxTHqtPXKXxjD5cysfgicDbpSB9oBeLUqhApHkDDXRw/edit?gid=712146022#gid=712146022"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'inline-block', background: '#1F4E79', color: '#fff', fontWeight: 600, fontSize: '13px', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none' }}
        >
          Open Daily Work Record ↗
        </a>
      </div>
    </>
  )
}
