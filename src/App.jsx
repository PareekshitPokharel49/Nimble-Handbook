import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import OrgHierarchy from './components/OrgHierarchy'
import MeetingCalendar from './components/MeetingCalendar'
import StandupFormat from './components/StandupFormat'
import CurrentFlow from './components/CurrentFlow'
import ToBeFlow from './components/ToBeFlow'
import SDLCSection from './components/SDLCSection'
import SOPSection from './components/SOPSection'
import PMSFeature from './components/PMSFeature'
import LLMRecommendation from './components/LLMRecommendation'
import SRDSection from './components/SRDSection'
import GapAnalysis from './components/GapAnalysis'
import './App.css'

const sections = [
  { id: 'org',       label: '1. Organisation' },
  { id: 'calendar',  label: '2. Meeting Calendar' },
  { id: 'standup',   label: '3. Standup Format' },
  { id: 'gap',       label: '4. Gap Analysis' },
  { id: 'current',   label: '5. Current Flow' },
  { id: 'tobe',      label: '6. Improved Flow' },
  { id: 'sdlc',      label: '7. SDLC' },
  { id: 'sop',       label: '8. SOPs & Comment Templates' },
  { id: 'pms',       label: '9. PMS Feature' },
  { id: 'llm',       label: '10. LLM Recommendation' },
  { id: 'srd',       label: '11. Requirements & SRD' },
]

function PasswordGate({ onUnlock }) {
  const [val, setVal] = useState('')
  const [error, setError] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (val === 'nimble123') { onUnlock() }
    else { setError(true); setVal('') }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a2b4a' }}>
      <div style={{ background: '#fff', borderRadius: 10, padding: '40px 48px', width: 360, boxShadow: '0 20px 60px rgba(0,0,0,0.3)', textAlign: 'center' }}>
        <div style={{ width: 48, height: 48, background: '#f97316', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 900, color: '#fff', margin: '0 auto 16px' }}>N</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: '#1a2b4a', marginBottom: 4 }}>Nimble Infosys</div>
        <div style={{ fontSize: 12, color: '#6B7280', marginBottom: 28 }}>Process & Operations Guide · Confidential</div>
        <form onSubmit={submit}>
          <input
            type="password"
            value={val}
            onChange={e => { setVal(e.target.value); setError(false) }}
            placeholder="Enter password"
            autoFocus
            style={{ width: '100%', border: `1.5px solid ${error ? '#dc2626' : '#D1D5DB'}`, borderRadius: 6, padding: '10px 14px', fontSize: 14, outline: 'none', marginBottom: error ? 6 : 14, fontFamily: 'inherit', background: error ? '#fef2f2' : '#fff' }}
          />
          {error && <div style={{ fontSize: 12, color: '#dc2626', marginBottom: 10, textAlign: 'left' }}>Incorrect password. Please try again.</div>}
          <button type="submit" style={{ width: '100%', background: '#1a2b4a', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 0', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}

export default function App() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('nimble_auth') === '1')
  const [active, setActive] = useState('org')

  useEffect(() => {
    if (!unlocked) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [unlocked])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!unlocked) return <PasswordGate onUnlock={() => { sessionStorage.setItem('nimble_auth', '1'); setUnlocked(true) }} />

  return (
    <div className="app">
      <Nav sections={sections} active={active} onNav={scrollTo} />
      <main className="content">
        <div className="cover">
          <div className="cover-inner">
            <span className="cover-tag">Process &amp; Operations Guide</span>
            <h1>Nimble Infosys</h1>
            <p className="cover-desc">Sprint Ceremonies · Ticket Flow · SLA · Best Practices</p>
            <div className="cover-meta">
              <span>Version 1.0 · 2026</span>
              <span>Owner: Pareekshit Pokharel</span>
            </div>
            <button className="cover-btn" onClick={() => scrollTo('org')}>Read the guide ↓</button>
          </div>
        </div>
        <section id="org"><OrgHierarchy /></section>
        <section id="calendar"><MeetingCalendar /></section>
        <section id="standup"><StandupFormat /></section>
        <section id="gap"><GapAnalysis /></section>
        <section id="current"><CurrentFlow /></section>
        <section id="tobe"><ToBeFlow /></section>
        <section id="sdlc"><SDLCSection /></section>
        <section id="sop"><SOPSection /></section>
        <section id="pms"><PMSFeature /></section>
        <section id="llm"><LLMRecommendation /></section>
        <section id="srd"><SRDSection /></section>
        <footer className="site-footer">
          Nimble Infosys Pvt. Ltd. · Confidential · Version 1.0 · 2026
        </footer>
      </main>
    </div>
  )
}

//test 1