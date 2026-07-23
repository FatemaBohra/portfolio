interface MarqueeRowProps {
  items: string[]
  direction: 'left' | 'right'
  animate?: boolean
}

export function MarqueeRow({ items, direction, animate = true }: MarqueeRowProps) {
  const list = [...items, ...items]
  return (
    <div
      className={animate ? `animate-marquee-${direction}` : ''}
      style={{ display: 'flex', gap: 12, width: 'max-content' }}
    >
      {list.map((label, i) => (
        <div
          key={direction + i}
          className="liquid-glass"
          style={{
            height: 60,
            padding: '0 18px',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            whiteSpace: 'nowrap',
            fontSize: 13,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          {label}
        </div>
      ))}
    </div>
  )
}
