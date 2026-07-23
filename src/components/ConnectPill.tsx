import { Link } from 'react-router-dom'

export function ConnectPill() {
  return (
    <Link
      to="/contact"
      className="liquid-glass"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        borderRadius: 999,
        padding: '10px 18px',
        fontSize: 13,
        color: '#fff',
      }}
    >
      Let's Connect
    </Link>
  )
}
