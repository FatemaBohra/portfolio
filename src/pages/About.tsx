import { Link } from 'react-router-dom'
import { BackButton } from '../components/BackButton'

interface RoleCardProps {
  title: string
  org: string
  dates: string
  description: string
}

function RoleCard({ title, org, dates, description }: RoleCardProps) {
  return (
    <div style={{ borderRadius: 16, background: '#141414', padding: '22px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>{title}</h3>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>{dates}</span>
      </div>
      <p style={{ margin: '6px 0 0', fontSize: 13.5, color: 'rgba(255,255,255,0.6)' }}>{org}</p>
      <p style={{ margin: '10px 0 0', fontSize: 13.5, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{description}</p>
    </div>
  )
}

export default function About() {
  return (
    <div
      className="detail-page"
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        color: '#fff',
        padding: 'clamp(24px,2.5vw,40px) clamp(16px,3vw,56px)',
      }}
    >
      <BackButton to="/" />

      <h1 style={{ margin: '32px 0 8px', fontSize: 'clamp(28px,3.4vw,40px)', fontWeight: 400, letterSpacing: '-0.02em' }}>
        About Me
      </h1>
      <p style={{ margin: '0 0 12px', fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 860, lineHeight: 1.6 }}>
        Aspiring AI-Augmented Software Developer and Computer Science student at Dalhousie University, building
        real-world experience one project at a time — through a co-op term, hands-on projects, and active
        involvement in campus life.
      </p>
      <p style={{ margin: '0 0 32px', fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 860, lineHeight: 1.6 }}>
        Four years in, I have built production applications used by real people, contributed to industry teams, led
        client projects, and stayed deeply involved in my campus community — all at once. Finishing my degree in
        August 2026 and ready for what comes next.
      </p>

      <div style={{ maxWidth: 768, margin: '0 auto' }}>
        <h2 style={{ margin: '0 0 10px', fontSize: 'clamp(22px,2.4vw,30px)', fontWeight: 400, letterSpacing: '-0.02em' }}>
          Community Leadership
        </h2>
        <p style={{ margin: '0 0 32px', fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
          Four-plus years of putting people first, on and off campus.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 768, margin: '0 auto' }}>
        <span style={{ textTransform: 'uppercase', letterSpacing: '0.22em', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
          On Campus
        </span>

        <RoleCard
          title="VP, Women in Tech Society"
          dates="Sep 2024 – Dec 2024"
          org="Dalhousie University"
          description="Led initiatives promoting diversity and inclusion for women in STEM."
        />
        <RoleCard
          title="Community Mentor"
          dates="Sept 2023 - Apr 2026"
          org="Dalhousie University"
          description="Guided first-year students through academic and personal transitions."
        />
        <RoleCard
          title="Community Safety Team Member"
          dates="Aug 2024 – Sept 2026"
          org="Dalhousie University"
          description="Supports campus safety through evening patrols and student check-ins."
        />
        <RoleCard
          title="Guest Services Associate"
          dates="May 2024 - Aug 2024"
          org="Dalhousie University"
          description="Front-line support for campus visitors, events, and daily operations."
        />

        <span
          style={{
            marginTop: 8,
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            fontSize: 11,
            fontWeight: 700,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          Off Campus
        </span>

        <RoleCard
          title="Global Youth Leader"
          dates="Apr 2021 – Feb 2022"
          org="Plastic Tides"
          description="Spearheaded campaigns raising awareness of plastic pollution and ocean preservation."
        />
        <RoleCard
          title="Social Media Coordinator"
          dates="Jun 2020 – Oct 2020"
          org="SankalpTaru Foundation"
          description="Promoted tree-plantation initiatives to combat climate change through articles and videos."
        />

        <div style={{ borderRadius: 16, background: '#324444', padding: '22px 24px' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 500 }}>Honours &amp; Awards</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13.5, color: 'rgba(255,255,255,0.85)' }}>
            <span>Dean's List &amp; Sexton Scholar — 2026</span>
            <span>Women in Tech Society Scholarship — 2022–2024</span>
            <span>Global Youth Leadership Award — 2021</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 768, margin: '32px auto 0', textAlign: 'center' }}>
        <Link
          to="/contact"
          className="liquid-glass"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            borderRadius: 999,
            padding: '10px 20px',
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          Let's connect <span>→</span>
        </Link>
      </div>
    </div>
  )
}
