interface LogoMarkProps {
  id?: string
  className?: string
}

export function LogoMark({ id = 'fmark', className = '' }: LogoMarkProps) {
  const gradId = `${id}-grad`
  return (
    <svg
      viewBox="0 0 38 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="38" y1="0" x2="0" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4B5FD" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      {/* Vertical stem */}
      <rect x="0" y="0" width="11" height="46" rx="1.5" fill={`url(#${gradId})`} />
      {/* Top horizontal bar */}
      <rect x="11" y="0" width="27" height="12" rx="1.5" fill={`url(#${gradId})`} />
      {/* Mid horizontal bar */}
      <rect x="11" y="19" width="21" height="11" rx="1.5" fill={`url(#${gradId})`} />
      {/* Circuit accent dot — top bar */}
      <circle cx="34" cy="6" r="2" fill="#DDD6FE" opacity="0.75" />
      {/* Tiny connector line */}
      <rect x="30" y="5.25" width="3" height="1.5" rx="0.5" fill="#DDD6FE" opacity="0.5" />
      {/* Circuit accent dot — mid bar */}
      <circle cx="28" cy="24.5" r="1.5" fill="#DDD6FE" opacity="0.5" />
    </svg>
  )
}
