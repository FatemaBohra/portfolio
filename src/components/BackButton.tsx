import { Link, useNavigate } from 'react-router-dom'

interface BackButtonProps {
  label?: string
  to?: string
  useHistory?: boolean
}

const pillStyle = {
  display: 'inline-flex' as const,
  alignItems: 'center' as const,
  gap: 8,
  borderRadius: 999,
  padding: '10px 18px',
  fontSize: 13,
  color: '#fff',
}

export function BackButton({ label = '←', to = '/', useHistory = false }: BackButtonProps) {
  const navigate = useNavigate()

  if (useHistory) {
    return (
      <a
        className="liquid-glass"
        style={{ ...pillStyle, cursor: 'pointer' }}
        onClick={(e) => {
          e.preventDefault()
          navigate(-1)
        }}
        href="#"
      >
        {label}
      </a>
    )
  }

  return (
    <Link to={to} className="liquid-glass" style={pillStyle}>
      {label}
    </Link>
  )
}
