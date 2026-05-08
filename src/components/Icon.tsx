// Inline SVG icon set — no external dependency, easy to add new ones.

type IconName =
  | 'heart'
  | 'house'
  | 'hands'
  | 'pin'
  | 'sparkle'
  | 'box'
  | 'leaf'
  | 'sun'
  | 'check'
  | 'arrow-right'
  | 'menu'
  | 'close'
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'mail'
  | 'phone'
  | 'calendar'
  | 'translate'
  | 'star'
  | 'users'
  | 'megaphone'
  | 'document'
  | 'gift'
  | 'shirt';

type IconProps = {
  name: IconName;
  className?: string;
  'aria-hidden'?: boolean;
};

export default function Icon({ name, className = 'h-5 w-5', ...rest }: IconProps) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': rest['aria-hidden'] ?? true,
  };

  switch (name) {
    case 'heart':
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.65-9.5 9-9.5 9Z" />
        </svg>
      );
    case 'house':
      return (
        <svg {...common}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case 'hands':
      return (
        <svg {...common}>
          <path d="M7 11V6a2 2 0 1 1 4 0v5" />
          <path d="M11 11V5a2 2 0 1 1 4 0v6" />
          <path d="M15 11V7a2 2 0 1 1 4 0v8a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-2l-1.4-1.4a2 2 0 1 1 2.8-2.8L7 11" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case 'sparkle':
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
        </svg>
      );
    case 'box':
      return (
        <svg {...common}>
          <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z" />
          <path d="M3 7.5 12 12l9-4.5M12 12v9" />
        </svg>
      );
    case 'leaf':
      return (
        <svg {...common}>
          <path d="M5 19c0-9 7-14 16-14-1 9-5 14-13 14a3 3 0 0 1-3-3" />
          <path d="M5 19c2-3 5-6 9-8" />
        </svg>
      );
    case 'sun':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path d="m5 12 4 4 10-10" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9Z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg {...common}>
          <path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.5v13.7a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.4a6.6 6.6 0 0 0-1-.1A6.3 6.3 0 1 0 15.7 15.7V9a8.1 8.1 0 0 0 4.8 1.5V7.1a4.8 4.8 0 0 1-.9-.4Z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.13 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
      );
    case 'translate':
      return (
        <svg {...common}>
          <path d="M4 5h11M9 3v2M11 5c-.5 4.5-3 7.5-7 9M5 9c0 4 3.5 7 7 8" />
          <path d="m13 21 4-9 4 9M14.5 17h5" />
        </svg>
      );
    case 'star':
      return (
        <svg {...common}>
          <path d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.8L12 3z" />
        </svg>
      );
    case 'users':
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'megaphone':
      return (
        <svg {...common}>
          <path d="M3 11v2a2 2 0 0 0 2 2h1l2 5h2l-2-5h1l9 4V5L9 9H5a2 2 0 0 0-2 2Z" />
        </svg>
      );
    case 'document':
      return (
        <svg {...common}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
          <path d="M14 3v5h5M9 13h6M9 17h6" />
        </svg>
      );
    case 'gift':
      return (
        <svg {...common}>
          <rect x="3" y="8" width="18" height="4" rx="1" />
          <path d="M5 12v9h14v-9M12 8v13M12 8s-2-5-5-5a2.5 2.5 0 0 0 0 5h5ZM12 8s2-5 5-5a2.5 2.5 0 0 1 0 5h-5Z" />
        </svg>
      );
    case 'shirt':
      return (
        <svg {...common}>
          <path d="M4 7l4-4h8l4 4-3 3v11H7V10L4 7Z" />
          <path d="M9 3a3 3 0 0 0 6 0" />
        </svg>
      );
  }
}
