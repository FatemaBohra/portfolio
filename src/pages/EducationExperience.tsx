import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { BackButton } from '../components/BackButton'
import { ConnectPill } from '../components/ConnectPill'

function TimelineDot() {
  return (
    <span
      style={{
        position: 'absolute',
        left: -25,
        top: 24,
        width: 8,
        height: 8,
        borderRadius: 999,
        background: '#fff',
      }}
    />
  )
}

function TimelineCard({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <TimelineDot />
      <div
        className="liquid-glass"
        style={{ borderRadius: 16, background: 'rgba(255,255,255,0.02)', padding: 'clamp(20px,1.8vw,24px)' }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
      </div>
    </div>
  )
}

function EntryHeader({ title, dates }: { title: string; dates: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>{title}</h3>
      <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>{dates}</span>
    </div>
  )
}

function OrgLine({ children }: { children: ReactNode }) {
  return <p style={{ margin: '6px 0 0', fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>{children}</p>
}

function Body({ children }: { children: ReactNode }) {
  return (
    <p style={{ margin: '10px 0 0', fontSize: 13.5, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
      {children}
    </p>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: '10px 0 0', paddingLeft: 18, fontSize: 13.5, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function EducationExperience() {
  return (
    <div
      className="detail-page"
      style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', padding: 'clamp(24px,2.5vw,40px) clamp(16px,3vw,56px)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <BackButton to="/" label="← Back" />
        <ConnectPill />
      </div>

      <h1 style={{ margin: '32px 0 8px', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 400, letterSpacing: '-0.02em' }}>
        Education &amp; Experience
      </h1>
      <p style={{ margin: '0 0 40px', fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 640, lineHeight: 1.6 }}>
        A co-op term, a full course load, and a campus community — all at once.
      </p>

      <div style={{ paddingLeft: 20, borderLeft: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <TimelineCard>
          <EntryHeader title="Software Developer Co-op" dates="Jan – May 2025" />
          <OrgLine>Jazz Aviation LP</OrgLine>
          <Body>
            {`Hybrid co-op role at Jazz Aviation, one of Canada's largest regional airlines.\nDeveloped an internal scheduling web application for airport staff as part of a cross-functional team of 11, collaborating across roles from team manager to department manager level.`}
          </Body>
          <BulletList
            items={[
              'Built a full-stack scheduling platform using AngularJS and React.js on the frontend and .NET Framework on the backend',
              'Replaced a manual scheduling process, streamlining shift management and resource allocation for 40+ airport staff',
              'Worked closely with stakeholders at multiple levels to ensure the application met operational requirements',
            ]}
          />
        </TimelineCard>

        <TimelineCard>
          <EntryHeader title="Bachelor of Computer Science" dates="Sept 2022 – Aug 2026" />
          <OrgLine>Dalhousie University</OrgLine>
          <OrgLine>GPA 4.01</OrgLine>
          <Body>
            Coursework spanning Data Structures and Algorithms, User Interface Design, and Software Development.
            Gained hands-on industry experience through a co-op placement at Jazz Aviation LP and a university team
            project delivered to a real client.
          </Body>
        </TimelineCard>

        <TimelineCard>
          <EntryHeader title="Community Mentor" dates="Sept 2023 – Sept 2025" />
          <OrgLine>Dalhousie University</OrgLine>
          <Body>
            {`I contribute to creating a welcoming and inclusive environment for students in residence, by serving as a bridge between newcomers and established members.\nMy responsibilities encompassed guiding students to campus resources, planning and running educational field trips, and providing 1on1 mentoring to those facing both personal and professional difficulties`}
          </Body>
        </TimelineCard>

        <TimelineCard>
          <EntryHeader title="Guest Services Associate" dates="April – Sep 2024" />
          <OrgLine>Dalhousie Event &amp; Conference Services</OrgLine>
          <BulletList
            items={[
              'Collaborated closely with supervisors and custodial staff to coordinate daily operations, resolve guest concerns efficiently, and ensure a seamless experience through effective teamwork and communication.',
              'Served as a primary point of contact for guests by providing accurate information on university policies, local attractions, directions, and available services.',
            ]}
          />
        </TimelineCard>

        <div style={{ position: 'relative' }}>
          <TimelineDot />
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
    </div>
  )
}
