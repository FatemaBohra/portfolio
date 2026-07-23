import { ArrowUpRightIcon } from './icons'

/** Decorative top-right circular glass button, used inside a card that's already a link. */
export function CardArrow() {
  return (
    <div
      className="liquid-glass"
      style={{
        position: 'absolute',
        top: 20,
        right: 20,
        width: 36,
        height: 36,
        borderRadius: 999,
        display: 'grid',
        placeItems: 'center',
        color: '#fff',
        zIndex: 1,
      }}
    >
      <ArrowUpRightIcon size={16} color="#fff" />
    </div>
  )
}
