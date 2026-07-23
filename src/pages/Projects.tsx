import { BackButton } from '../components/BackButton'
import { ConnectPill } from '../components/ConnectPill'

interface ProjectLink {
  label: string
  href: string
}

function LinkRow({ links }: { links: ProjectLink[] }) {
  return (
    <div style={{ display: 'flex', gap: 16, flexShrink: 0, flexWrap: 'wrap' }}>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', textDecoration: 'underline', textUnderlineOffset: 3, whiteSpace: 'nowrap' }}
        >
          {l.label} ↗
        </a>
      ))}
    </div>
  )
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {tags.map((t) => (
        <span key={t} className="proj-tag liquid-glass">
          {t}
        </span>
      ))}
    </div>
  )
}

interface FeaturedCardProps {
  links: ProjectLink[]
  title: string
  titleFontSize: string
  role: string
  note?: string
  description: string
  tags: string[]
}

function FeaturedCard({ links, title, titleFontSize, role, note, description, tags }: FeaturedCardProps) {
  return (
    <div
      style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, background: '#324444', padding: 'clamp(20px,1.8vw,24px)' }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0, fontSize: titleFontSize, fontWeight: 400, flex: '1 1 260px', minWidth: 0 }}>{title}</h2>
          <LinkRow links={links} />
        </div>
        <p style={{ margin: '6px 0 0', fontSize: 14, fontStyle: 'italic', color: 'rgba(255,255,255,0.85)' }}>{role}</p>
        {note && <p style={{ margin: '8px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{note}</p>}
        <p style={{ margin: '12px 0 18px', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', maxWidth: 640, whiteSpace: 'pre-line' }}>
          {description}
        </p>
        <TagRow tags={tags} />
      </div>
    </div>
  )
}

interface GridCardProps {
  links: ProjectLink[]
  title: string
  role?: string
  note?: string
  description: string
  tags: string[]
}

function GridCard({ links, title, role, note, description, tags }: GridCardProps) {
  return (
    <div
      style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, background: '#324444', padding: 'clamp(18px,1.6vw,22px)' }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
          <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 500, flex: '1 1 160px', minWidth: 0 }}>{title}</h3>
          <LinkRow links={links} />
        </div>
        {role && <p style={{ margin: '0 0 8px', fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,0.85)' }}>{role}</p>}
        {note && <p style={{ margin: '0 0 8px', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{note}</p>}
        <p style={{ margin: '0 0 14px', fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)' }}>{description}</p>
        <TagRow tags={tags} />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div
      className="detail-page"
      style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', padding: 'clamp(24px,2.5vw,40px) clamp(16px,3vw,56px)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <BackButton useHistory label="←" />
        <ConnectPill />
      </div>

      <h1 style={{ margin: '32px 0 8px', fontSize: 'clamp(28px,3.4vw,40px)', fontWeight: 400, letterSpacing: '-0.02em' }}>
        Projects
      </h1>
      <p style={{ margin: '0 0 32px', fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 640, lineHeight: 1.6 }}>
        Full-stack builds, from industry collaborations to solo passion projects.
      </p>

      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <FeaturedCard
          links={[
            { label: 'Live Demo', href: 'https://zinema-movie-booking.vercel.app/' },
            { label: 'GitHub', href: 'https://github.com/FatemaBohra/zinema-movie-booking/tree/main' },
          ]}
          title="Zinema — Movie Booking App"
          titleFontSize="clamp(20px,2vw,24px)"
          role="Full-Stack Developer · Personal Project"
          description={`A movie booking platform built independently to master cloud-native development and third-party integrations.\nUsers can browse 15 popular movies sourced from the TMDB API, select showtimes, pick seats via seat map, and complete bookings via Stripe payment. The platform includes Auth0 authentication with role-based access, an admin panel for managing movies and showtimes, and a booking history page with cancellation option.`}
          tags={['React + Vite', 'Spring Boot', 'DynamoDB', 'S3', 'Docker', 'Auth0', 'Stripe']}
        />

        <FeaturedCard
          links={[
            { label: 'Live Demo', href: 'https://luv2read-library.vercel.app/home' },
            { label: 'GitHub', href: 'https://github.com/FatemaBohra/luv2read-library' },
          ]}
          title="Luv2Read — Library Management System"
          titleFontSize="clamp(18px,1.6vw,20px)"
          role="Full-Stack Developer · Personal Project"
          description={`A library management system built and deployed independently with production infrastructure.\nUsers can search and browse books, borrow and return books, track loan history, leave reviews, ask question to librarians, and pay late fees via Stripe. An admin panel allows librarians to manage inventory and respond to patron messages.`}
          tags={['React + Vite', 'TypeScript', 'Spring Boot', 'MySQL', 'Auth0', 'Stripe']}
        />

        <FeaturedCard
          links={[
            { label: 'Live Demo', href: 'https://project-413nd.vercel.app/' },
            { label: 'GitLab', href: 'https://git.cs.dal.ca/fbohra/lumora' },
          ]}
          title="Lumora — AI-Assisted Grading Platform"
          titleFontSize="clamp(18px,1.6vw,20px)"
          role="Product Owner · University Course Project · Team of 8"
          note="Source code hosted on private GitLab repository. Available upon request."
          description={`An AI-assisted grading and course management platform built in an agile team environment across 5 sprints.\nAs Product Owner, I managed the full product lifecycle — translating client requirements into user stories, prioritizing the backlog, facilitating sprint planning and retrospectives, and maintaining ongoing communication between the client and development team. The platform features an admin dashboard, authentication pages, and AI grading verification tools.`}
          tags={['React + Vite', 'Render', 'Spring Boot', 'Agile / Scrum']}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <GridCard
            links={[
              { label: 'Live Demo', href: 'https://smart-brain-m5x0.onrender.com/' },
              { label: 'GitHub', href: 'https://github.com/FatemaBohra/smart-brain' },
            ]}
            title="Smart Brain — Face Detection App"
            role="Full-Stack Developer · Personal Project"
            description="Full-stack web app using Node.js, React.js, and MySQL to detect faces in images. Integrated APIs for automated image processing with GitHub version control."
            tags={['Node.js', 'React.js + Vite', 'MySQL']}
          />

          <GridCard
            links={[
              { label: 'Live Demo', href: 'https://fatemabohra.github.io/robofriends-1/' },
              { label: 'GitHub', href: 'https://github.com/FatemaBohra/robofriends-1' },
            ]}
            title="RoboFriends"
            role="Full-Stack Developer · Personal Project"
            description="Dynamic search interface built with React Hooks, Git/GitHub workflow."
            tags={['React + Vite', 'Hooks', 'Git']}
          />

          <GridCard
            links={[{ label: 'GitLab', href: 'https://git.cs.dal.ca/courses/csci-x691/hci4good-solucore' }]}
            title="Elevator Safety UI"
            note="Source code hosted on private GitLab repository. Available upon request."
            description="Solucore Inc. collaboration. ReactJS + REST APIs for real-time elevator monitoring and alerts, built with Agile/Scrum methodology."
            tags={['ReactJS + Vite', 'REST APIs', 'Agile / Scrum']}
          />
        </div>
      </div>
    </div>
  )
}
