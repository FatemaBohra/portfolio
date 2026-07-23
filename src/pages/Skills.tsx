import { Link } from 'react-router-dom'
import { BackButton } from '../components/BackButton'

function Pill({ label }: { label: string }) {
  return (
    <span className="skill-pill liquid-glass">{label}</span>
  )
}

function PillGroup({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <h3
        style={{
          margin: '0 0 10px',
          fontSize: 13,
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.6)',
        }}
      >
        {heading}
      </h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {items.map((i) => (
          <Pill key={i} label={i} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div
      className="detail-page"
      style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', padding: 'clamp(24px,2.5vw,40px) clamp(16px,3vw,56px)' }}
    >
      <BackButton to="/" />

      <h1 style={{ margin: '32px 0 8px', fontSize: 'clamp(28px,3.4vw,40px)', fontWeight: 400, letterSpacing: '-0.02em' }}>
        Skills
      </h1>
      <p style={{ margin: '0 0 32px', fontSize: 15, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', maxWidth: 640, lineHeight: 1.6 }}>
        What I build with, how I ship it, and how I work with people.
      </p>

      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          className="liquid-glass"
          style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, background: 'rgba(255,255,255,0.02)', padding: 'clamp(22px,2vw,28px)' }}
        >
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ margin: '0 0 14px', fontSize: 'clamp(18px,1.6vw,20px)', fontWeight: 400 }}>Interpersonal</h2>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Communication', 'Collaboration', 'Teamwork', 'Adaptability', 'Agile', 'Product Ownership', 'Active Listening'].map(
                (i) => (
                  <Pill key={i} label={i} />
                ),
              )}
            </div>
          </div>
        </div>

        <div
          className="liquid-glass"
          style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, background: 'rgba(255,255,255,0.02)', padding: 'clamp(22px,2vw,28px)' }}
        >
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ margin: '0 0 18px', fontSize: 'clamp(18px,1.6vw,20px)', fontWeight: 400 }}>Technical Tools</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <PillGroup heading="Languages" items={['Python', 'Java', 'TypeScript', 'C#']} />
              <PillGroup heading="Frameworks & Libraries" items={['React + Vite', 'Axios', 'Angular', 'Spring Boot', '.NET Framework']} />
              <PillGroup heading="Cloud & Infrastructure" items={['AWS (DynamoDB, S3)', 'Docker', 'Azure', 'Terraform']} />
              <PillGroup heading="Authentication & Payments" items={['Auth0', 'Stripe']} />
              <PillGroup heading="Databases" items={['MySQL', 'PostgreSQL', 'DynamoDB']} />
              <PillGroup heading="DevOps & Tools" items={['Git', 'GitHub', 'Jira', 'Confluence', 'Bash']} />
            </div>
          </div>
        </div>

        <Link
          to="/projects"
          className="liquid-glass"
          style={{ display: 'block', position: 'relative', overflow: 'hidden', borderRadius: 16, background: '#324444', padding: 'clamp(20px,1.8vw,24px)', color: 'inherit' }}
        >
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 15, fontWeight: 500 }}>See My Projects</span>
            <span className="liquid-glass" style={{ width: 28, height: 28, borderRadius: 999, display: 'grid', placeItems: 'center', color: '#fff' }}>
              ↗
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
