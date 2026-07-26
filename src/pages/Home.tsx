import { Link, useNavigate } from 'react-router-dom'
import { CardArrow } from '../components/CardArrow'
import { MarqueeRow } from '../components/Marquee'
import { MailIcon, LinkedInIcon, GitHubIcon } from '../components/icons'

const SKILLS_MARQUEE = [
  'Python',
  'Java',
  'React + Vite',
  'TypeScript',
  'C#',
  'DynamoDB',
  'Git',
  'AWS',
  'PostgreSQL',
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#0a0a0a',
        color: '#fff',
        paddingInline: 'clamp(16px,3vw,56px)',
        paddingBlock: 'clamp(24px,2.5vw,40px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 20,
          flexWrap: 'wrap',
          marginBottom: 'clamp(20px,2vw,32px)',
        }}
      >
        <div style={{ maxWidth: 768 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(28px,4vw,44px)',
              lineHeight: 1.15,
              fontWeight: 400,
              letterSpacing: '-0.02em',
            }}
          >
            Hi, I'm Fatema Bohra!
          </h1>
          <p
            style={{
              margin: '14px 0 0',
              fontSize: 'clamp(14px,1.05vw,15px)',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 768,
            }}
          >
            Aspiring AI-Augmented Software Engineer. Building real-world experience one project at a time.
          </p>
        </div>
        <Link
          to="/contact"
          className="liquid-glass"
          style={{
            borderRadius: 999,
            padding: 'clamp(10px,1vw,12px) clamp(20px,2vw,24px)',
            color: '#fff',
            fontSize: 14,
            fontWeight: 500,
            whiteSpace: 'nowrap',
            alignSelf: 'flex-start',
            display: 'inline-block',
          }}
        >
          Let's Connect
        </Link>
      </div>

      <div className="feat-grid">
        {/* Column 1 : About Me */}
        <Link
          to="/about"
          className="portfolio-card-link"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 16,
            background: '#000',
            minWidth: 0,
            color: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(18px,1.6vw,28px)',
            minHeight: 380,
          }}
        >
          <img
            src="https://github.com/user-attachments/assets/affbb2cf-2284-455e-bb0a-58c56d3ed56c"
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scale(0.85)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg,rgba(0,0,0,0.35) 0%,rgba(0,0,0,0.15) 35%,rgba(0,0,0,0.75) 100%)',
            }}
          />
          <CardArrow />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              marginTop: -8,
            }}
          >
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>✦</span>
            <span
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                fontSize: 11,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              About Me
            </span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>✦</span>
          </div>
        </Link>

        {/* Column 2 : Projects + Skills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,1.2vw,20px)', minHeight: 0, minWidth: 0 }}>
          <Link
            to="/projects"
            className="portfolio-card-link"
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 16,
              background: '#324444',
              color: 'inherit',
              flex: 1,
              minHeight: 240,
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              padding: 'clamp(20px,1.8vw,24px)',
            }}
          >
            <CardArrow />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                  fontSize: 11,
                  fontWeight: 500,
                  color: '#ffffffb3',
                }}
              >
                Projects
              </span>
              <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.25)' }} />
            </div>
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 14, fontWeight: 500 }}>Zinema</h3>
                <p style={{ margin: '4px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                  Full-stack movie booking app: React, Spring Boot, DynamoDB, Stripe.
                </p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
              <div>
                <h3 style={{ margin: 0, fontSize: 14, fontWeight: 500 }}>Luv2Read</h3>
                <p style={{ margin: '4px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                  Book search, checkout, reviews, and Stripe-powered late fees behind Auth0.
                </p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
              <div>
                <h3 style={{ margin: 0, fontSize: 14, fontWeight: 500 }}>Lumora</h3>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.6)',
                    WebkitMaskImage: 'linear-gradient(to bottom,black 60%,transparent 100%)',
                    maskImage: 'linear-gradient(to bottom,black 60%,transparent 100%)',
                  }}
                >
                  AI-assisted grading platform built as Product Owner across a team of 8.
                </p>
              </div>
              <p style={{ margin: '4px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>+3 more</p>
            </div>
          </Link>

          <Link
            to="/skills"
            className="portfolio-card-link"
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 16,
              color: 'inherit',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              background: 'linear-gradient(160deg, oklch(40% 0.07 55) 0%, oklch(24% 0.04 45) 55%, #0a0a0a 100%)',
              minWidth: 0,
              padding: 'clamp(20px,1.8vw,24px)',
              minHeight: 170,
            }}
          >
            <CardArrow />
            <div style={{ position: 'relative', zIndex: 1, maxWidth: 'calc(100% - 56px)', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                  fontSize: 11,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                Skills
              </span>
              <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.25)' }} />
            </div>

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                overflow: 'hidden',
                minWidth: 0,
                marginTop: 40,
                WebkitMaskImage: 'linear-gradient(to right,transparent,black 8%,black 92%,transparent)',
                maskImage: 'linear-gradient(to right,transparent,black 8%,black 92%,transparent)',
              }}
            >
              <MarqueeRow items={SKILLS_MARQUEE} direction="left" />
            </div>
          </Link>
        </div>

        {/* Column 3 : Education & Experience + Let's Connect */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,1.2vw,20px)', minHeight: 0, minWidth: 0 }}>
          <Link
            to="/education-experience"
            className="portfolio-card-link"
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 16,
              background: 'linear-gradient(160deg, oklch(40% 0.07 55) 0%, oklch(24% 0.04 45) 55%, #0a0a0a 100%)',
              color: 'inherit',
              flex: 1,
              minHeight: 240,
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(18px,1.6vw,26px)',
            }}
          >
            <CardArrow />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                  fontSize: 11,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                Education &amp; Experience
              </span>
              <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.25)' }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>Bachelor of Applied Computer Science</div>
                <div style={{ fontSize: 12, fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Dalhousie University</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>Software Developer Co-op</div>
                <div style={{ fontSize: 12, fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Jazz Aviation LP</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>Junior Developer Intern</div>
                <div style={{ fontSize: 12, fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Solucore Inc.</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>Community Mentor</div>
                <div style={{ fontSize: 12, fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Residence Life at Dal</div>
              </div>
              <div style={{ fontSize: 12, fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Dean's List &amp; Sexton Scholar</div>
            </div>
          </Link>

          <div
            className="portfolio-card-link"
            role="link"
            tabIndex={0}
            onClick={() => navigate('/contact')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                navigate('/contact')
              }
            }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 16,
              background: '#324444',
              color: 'inherit',
              display: 'block',
              padding: 'clamp(20px,1.8vw,24px)',
              minHeight: 170,
              cursor: 'pointer',
            }}
          >
            <CardArrow />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span
                  style={{
                    textTransform: 'uppercase',
                    letterSpacing: '0.22em',
                    fontSize: 11,
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  Let's Connect
                </span>
                <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.25)' }} />
              </div>
              <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a
                  href="mailto:fatema.bohra@dal.ca"
                  className="contact-link"
                  onClick={(e) => e.stopPropagation()}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.6)', width: 'fit-content' }}
                >
                  <MailIcon size={14} color="rgba(255,255,255,0.6)" />
                  <span style={{ fontSize: 13, color: 'inherit' }}>fatema.bohra@dal.ca</span>
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <a
                    href="https://www.linkedin.com/in/fatema-bohra-3b8356226/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="contact-link"
                    onClick={(e) => e.stopPropagation()}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.6)' }}
                  >
                    <LinkedInIcon size={14} color="rgba(255,255,255,0.6)" />
                    <span style={{ fontSize: 13, color: 'inherit' }}>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/FatemaBohra"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="contact-link"
                    onClick={(e) => e.stopPropagation()}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.6)' }}
                  >
                    <GitHubIcon size={14} color="rgba(255,255,255,0.6)" />
                    <span style={{ fontSize: 13, color: 'inherit' }}>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
