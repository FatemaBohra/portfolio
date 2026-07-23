import type { CSSProperties } from 'react'

interface IconProps {
  size?: number
  color?: string
  style?: CSSProperties
}

const SPARKLE_PATH =
  'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z'

function IconBase({
  paths,
  size = 16,
  color = 'currentColor',
  style,
}: IconProps & { paths: string[] }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color, flexShrink: 0, display: 'block', ...style }}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  )
}

export function SparkleIcon(props: IconProps) {
  return <IconBase {...props} paths={[SPARKLE_PATH]} />
}

export function ArrowUpRightIcon(props: IconProps) {
  return <IconBase {...props} paths={['M7 7h10v10', 'M7 17 17 7']} />
}

export function MailIcon(props: IconProps) {
  return <IconBase {...props} paths={['M4 6h16v12H4z', 'M4 7l8 6 8-6']} />
}

export function LinkedInIcon(props: IconProps) {
  return (
    <IconBase
      {...props}
      paths={[
        'M6.94 8.5v9M6.94 5.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM11 17.5v-5.2c0-1.6 1-2.8 2.6-2.8s2.4 1.1 2.4 2.8v5.2M11 12.3v-3.8',
      ]}
    />
  )
}

export function GitHubIcon(props: IconProps) {
  return (
    <IconBase
      {...props}
      paths={[
        'M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.68c-2.5.55-3-1.2-3-1.2-.4-1-1-1.28-1-1.28-.8-.55.06-.54.06-.54.9.06 1.37.92 1.37.92.8 1.36 2.1.97 2.6.74.08-.58.32-.97.58-1.2-2-.22-4.1-1-4.1-4.44 0-.98.35-1.78.92-2.4-.1-.23-.4-1.15.1-2.4 0 0 .77-.25 2.5.93a8.7 8.7 0 0 1 4.55 0c1.74-1.18 2.5-.93 2.5-.93.5 1.25.2 2.17.1 2.4.57.62.92 1.42.92 2.4 0 3.45-2.1 4.22-4.1 4.44.33.28.6.85.6 1.7v2.5c0 .24.14.5.6.43A9 9 0 0 0 12 3Z',
      ]}
    />
  )
}
