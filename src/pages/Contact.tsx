import { useEffect, useRef, useState } from 'react'
import { BackButton } from '../components/BackButton'

type CopyKey = 'email' | 'emailsecondary' | 'linkedin' | 'github'

const LINKEDIN_URL = 'https://www.linkedin.com/in/fatema-bohra-3b8356226/'
const GITHUB_URL = 'https://github.com/FatemaBohra'
const EMAIL = 'fatema.bohra@dal.ca'
const EMAILSECONDARY = 'fatema.bohra3004@gmail.com'

function copyToClipboard(value: string) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(value).catch(() => fallbackCopy(value))
  } else {
    fallbackCopy(value)
  }
}

function fallbackCopy(value: string) {
  const ta = document.createElement('textarea')
  ta.value = value
  ta.style.position = 'fixed'
  ta.style.opacity = '0'
  document.body.appendChild(ta)
  ta.focus()
  ta.select()
  try {
    document.execCommand('copy')
  } catch {
    // ignore
  }
  document.body.removeChild(ta)
}

function CopyButton({ copyKey, value, copied, onCopy }: { copyKey: CopyKey; value: string; copied: CopyKey | null; onCopy: (key: CopyKey, value: string) => void }) {
  return (
    <button
      onClick={() => onCopy(copyKey, value)}
      className="liquid-glass"
      style={{ border: 'none', cursor: 'pointer', padding: '5px 12px', borderRadius: 999, fontSize: 11.5, color: 'rgba(255,255,255,0.75)' }}
    >
      {copied === copyKey ? 'Copied' : 'Copy'}
    </button>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState<CopyKey | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  function handleCopy(key: CopyKey, value: string) {
    copyToClipboard(value)
    setCopied(key)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div
      className="detail-page"
      style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', padding: 'clamp(24px,2.5vw,40px) clamp(16px,3vw,56px)' }}
    >
      <BackButton to="/" label="← Back" />

      <h1 style={{ margin: '32px 0 8px', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 400, letterSpacing: '-0.02em' }}>
        Let's Connect
      </h1>
      <p style={{ margin: '0 0 40px', fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 640, lineHeight: 1.6 }}>
        Always happy to talk about tech, mentorship, or the next thing to build.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 560 }}>
        <div style={{ borderRadius: 16, background: '#141414', padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <a href={`mailto:${EMAIL}`} style={{ fontSize: 16, color: '#fff' }}>
              {EMAIL}
            </a>
            <CopyButton copyKey="email" value={EMAIL} copied={copied} onCopy={handleCopy} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <a href={`mailto:${EMAILSECONDARY}`} style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>
              {EMAILSECONDARY}
            </a>
            <CopyButton copyKey="emailsecondary" value={EMAILSECONDARY} copied={copied} onCopy={handleCopy} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>
              LinkedIn ↗
            </a>
            <CopyButton copyKey="linkedin" value={LINKEDIN_URL} copied={copied} onCopy={handleCopy} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>
              GitHub ↗
            </a>
            <CopyButton copyKey="github" value={GITHUB_URL} copied={copied} onCopy={handleCopy} />
          </div>
        </div>

        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, background: '#324444', padding: '20px 24px' }}>
          <p style={{ position: 'relative', zIndex: 1, margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
            Let's build what you're looking for together.
          </p>
        </div>
      </div>
    </div>
  )
}
