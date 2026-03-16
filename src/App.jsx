import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import OrgHierarchy from './components/OrgHierarchy'
import MeetingCalendar from './components/MeetingCalendar'
import StandupFormat from './components/StandupFormat'
import SLATable from './components/SLATable'
import CurrentFlow from './components/CurrentFlow'
import ToBeFlow from './components/ToBeFlow'
import './App.css'

const sections = [
  { id: 'org',       label: '1. Organisation' },
  { id: 'calendar',  label: '2. Meeting Calendar' },
  { id: 'standup',   label: '3. Standup Format' },
  { id: 'sla',       label: '4. SLA Guide' },
  { id: 'current',   label: '5. Current Flow' },
  { id: 'tobe',      label: '6. Improved Flow' },
]

export default function App() {
  const [active, setActive] = useState('org')

  useEffect(() => {
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
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

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
        <section id="sla"><SLATable /></section>
        <section id="current"><CurrentFlow /></section>
        <section id="tobe"><ToBeFlow /></section>
        {/* <section id="practices"><BestPractices /></section> */}
        <footer className="site-footer">
          Nimble Infosys Pvt. Ltd. · Confidential · Version 1.0 · 2026
        </footer>
      </main>
    </div>
  )
}
