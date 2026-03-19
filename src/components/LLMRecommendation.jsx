const tiers = [
  {
    tier: 'Budget',
    color: '#F0FDF4',
    border: '#86EFAC',
    text: '#14532D',
    accent: '#16A34A',
    models: [
      { name: 'Mistral Nemo',        input: '$0.02',  output: '$0.02',  per10k: '$0.04',   accuracy: '85%', note: 'Ultra-cheap, simple tasks only' },
      { name: 'Gemini 2.0 Flash-Lite', input: '$0.075', output: '$0.30',  per10k: '$0.44',   accuracy: '88%', note: 'Best budget pick — Google reliability' },
      { name: 'DeepSeek V3.2',       input: '$0.14',  output: '$0.28',  per10k: '$1.26',   accuracy: '90%', note: 'Best cost-quality balance overall' },
    ],
  },
  {
    tier: 'Mid-Tier',
    color: '#EFF6FF',
    border: '#93C5FD',
    text: '#1E3A5F',
    accent: '#2563EB',
    models: [
      { name: 'Claude Haiku 4.5',    input: '$0.25',  output: '$1.25',  per10k: '$3.75',   accuracy: '91%', note: 'Fast, Anthropic ecosystem' },
      { name: 'GPT-5 Mini',          input: '$0.25',  output: '$2.00',  per10k: '$5.25',   accuracy: '92%', note: 'Reliable mid-tier option' },
      { name: 'Gemini 2.5 Flash',    input: '$0.30',  output: '$2.50',  per10k: '$6.50',   accuracy: '—',   note: '1M context window' },
    ],
  },
  {
    tier: 'Premium',
    color: '#FFF7ED',
    border: '#FCA5A5',
    text: '#7C1D1D',
    accent: '#DC2626',
    models: [
      { name: 'Gemini 2.5 Pro',      input: '$1.25',  output: '$10.00', per10k: '$26.25',  accuracy: '—',   note: 'Google premium, 1M context' },
      { name: 'GPT-5',               input: '$2.50',  output: '$10.00', per10k: '$32.50',  accuracy: '96%', note: 'Overkill for comment validation' },
      { name: 'Claude Sonnet 4.6',   input: '$3.00',  output: '$15.00', per10k: '$45.00',  accuracy: '95%', note: 'Excellent but expensive for this task' },
      { name: 'Claude Opus 4.5',     input: '$5.00',  output: '$25.00', per10k: '$75.00',  accuracy: '—',   note: 'Enterprise — avoid for bulk tasks' },
    ],
  },
]

const scenarios = [
  { label: '100 comments/day',    deepseek: '$3.78/mo',   gemini: '$1.31/mo',   haiku: '$11.25/mo'  },
  { label: '1,000 comments/day',  deepseek: '$37.80/mo',  gemini: '$13.05/mo',  haiku: '$112.50/mo' },
  { label: '10,000 comments/day', deepseek: '$378/mo',    gemini: '$130.50/mo', haiku: '$1,125/mo'  },
]

const picks = [
  {
    rank: '#1',
    label: 'Best Overall',
    name: 'DeepSeek V3.2',
    color: '#F0FDF4',
    border: '#16A34A',
    text: '#14532D',
    badge: '#DCFCE7',
    badgeText: '#15803D',
    points: [
      '$1.26 per 10,000 comments',
      '90% validation accuracy',
      'Excellent summarization quality',
      '~$4,536/year at 300K comments/month',
    ],
  },
  {
    rank: '#2',
    label: 'Budget Runner-Up',
    name: 'Gemini 2.0 Flash-Lite',
    color: '#EFF6FF',
    border: '#2563EB',
    text: '#1E3A5F',
    badge: '#DBEAFE',
    badgeText: '#1D4ED8',
    points: [
      '$0.44 per 10,000 comments',
      '88% accuracy — good for high volume',
      'Google infrastructure reliability',
      '~$1,566/year at 300K comments/month',
    ],
  },
  {
    rank: '#3',
    label: 'Mid-Tier Pick',
    name: 'Claude Haiku 4.5',
    color: '#F5F3FF',
    border: '#7C3AED',
    text: '#3B0764',
    badge: '#EDE9FE',
    badgeText: '#6D28D9',
    points: [
      '$3.75 per 10,000 comments',
      '91% accuracy — step up from DeepSeek',
      'Fast response, Anthropic ecosystem',
      'Upgrade path if DeepSeek quality dips',
    ],
  },
]

export default function LLMRecommendation() {
  return (
    <>
      <h2 className="section-title">9. LLM API Recommendation</h2>
      <p className="section-subtitle">
        Pricing comparison across 11 models for comment validation &amp; summarization workloads · March 2026
      </p>

      {/* Token context note */}
      <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '14px 18px', marginBottom: '28px', fontSize: '13px', color: '#475569', lineHeight: 1.7 }}>
        <strong style={{ color: '#1E293B' }}>Assumptions used in all cost calculations:</strong>{' '}
        500 input tokens + 200 output tokens = <strong>700 tokens per comment</strong>.
        A typical 100-word comment ≈ 130–150 tokens; a 50-word summary ≈ 65–75 tokens.
        Pricing is per 1M tokens as listed by each provider.
      </div>

      {/* Pricing tiers */}
      {tiers.map(t => (
        <div key={t.tier} style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{ background: t.accent, color: '#fff', fontWeight: 800, fontSize: '11px', padding: '3px 10px', borderRadius: '4px', letterSpacing: '0.5px' }}>
              {t.tier.toUpperCase()}
            </div>
          </div>
          <div style={{ border: `1px solid ${t.border}`, borderRadius: '8px', overflow: 'hidden', background: t.color }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: t.accent }}>
                  <th style={{ padding: '8px 14px', textAlign: 'left', color: '#fff', fontWeight: 700 }}>Model</th>
                  <th style={{ padding: '8px 14px', textAlign: 'right', color: '#fff', fontWeight: 700 }}>Input / 1M</th>
                  <th style={{ padding: '8px 14px', textAlign: 'right', color: '#fff', fontWeight: 700 }}>Output / 1M</th>
                  <th style={{ padding: '8px 14px', textAlign: 'right', color: '#fff', fontWeight: 700 }}>Cost / 10K comments</th>
                  <th style={{ padding: '8px 14px', textAlign: 'center', color: '#fff', fontWeight: 700 }}>Accuracy</th>
                  <th style={{ padding: '8px 14px', textAlign: 'left', color: '#fff', fontWeight: 700 }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {t.models.map((m, i) => (
                  <tr key={m.name} style={{ borderTop: i > 0 ? `1px solid ${t.border}` : 'none' }}>
                    <td style={{ padding: '9px 14px', fontWeight: 700, color: t.text }}>{m.name}</td>
                    <td style={{ padding: '9px 14px', textAlign: 'right', fontFamily: 'monospace', color: t.text }}>{m.input}</td>
                    <td style={{ padding: '9px 14px', textAlign: 'right', fontFamily: 'monospace', color: t.text }}>{m.output}</td>
                    <td style={{ padding: '9px 14px', textAlign: 'right', fontWeight: 800, color: t.accent }}>{m.per10k}</td>
                    <td style={{ padding: '9px 14px', textAlign: 'center', color: t.text }}>{m.accuracy}</td>
                    <td style={{ padding: '9px 14px', color: '#64748B', fontSize: '12px' }}>{m.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Monthly cost scenarios */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ fontWeight: 800, fontSize: '15px', color: '#1A1A1A', marginBottom: '12px' }}>Monthly Cost at Scale — Top 3 Models</div>
        <div style={{ border: '1px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#1A2B4A' }}>
                <th style={{ padding: '9px 14px', textAlign: 'left', color: '#CBD5E1', fontWeight: 600 }}>Volume</th>
                <th style={{ padding: '9px 14px', textAlign: 'right', color: '#86EFAC', fontWeight: 700 }}>DeepSeek V3.2</th>
                <th style={{ padding: '9px 14px', textAlign: 'right', color: '#93C5FD', fontWeight: 700 }}>Gemini Flash-Lite</th>
                <th style={{ padding: '9px 14px', textAlign: 'right', color: '#C4B5FD', fontWeight: 700 }}>Claude Haiku 4.5</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((s, i) => (
                <tr key={s.label} style={{ borderTop: '1px solid #E2E8F0', background: i % 2 === 0 ? '#fff' : '#F8FAFC' }}>
                  <td style={{ padding: '9px 14px', fontWeight: 600, color: '#1E293B' }}>{s.label}</td>
                  <td style={{ padding: '9px 14px', textAlign: 'right', fontWeight: 700, color: '#16A34A' }}>{s.deepseek}</td>
                  <td style={{ padding: '9px 14px', textAlign: 'right', fontWeight: 700, color: '#2563EB' }}>{s.gemini}</td>
                  <td style={{ padding: '9px 14px', textAlign: 'right', fontWeight: 700, color: '#7C3AED' }}>{s.haiku}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommendation picks */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '24px' }}>
        {picks.map(p => (
          <div key={p.name} style={{ background: p.color, border: `2px solid ${p.border}`, borderRadius: '10px', padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ background: p.badge, color: p.badgeText, fontWeight: 800, fontSize: '12px', padding: '2px 9px', borderRadius: '4px' }}>{p.rank}</span>
              <span style={{ fontSize: '11px', color: p.text, fontWeight: 600 }}>{p.label}</span>
            </div>
            <div style={{ fontWeight: 900, fontSize: '16px', color: p.text, marginBottom: '10px' }}>{p.name}</div>
            <ul style={{ paddingLeft: '16px', margin: 0 }}>
              {p.points.map(pt => (
                <li key={pt} style={{ fontSize: '12px', color: p.text, marginBottom: '4px', lineHeight: 1.6 }}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Avoid note */}
      <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '12px 16px', fontSize: '13px', color: '#7F1D1D' }}>
        <strong>Avoid for bulk comment validation:</strong> Claude Opus 4.5 ($75/10K) and Claude Sonnet 4.6 ($45/10K) are high-quality models
        but 30–60× more expensive than DeepSeek for this specific task with minimal accuracy gain.
        GPT-5 ($32.50/10K) is in the same overkill tier.
      </div>
    </>
  )
}
