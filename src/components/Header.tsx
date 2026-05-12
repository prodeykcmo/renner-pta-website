import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import CTAButton from './CTAButton';
import Icon from './Icon';
import { siteConfig } from '../siteConfig';

// "Join the PTA" deliberately omitted — it lives on the right as a gold
// CTA button (visually separated from text nav). It's added back into the
// mobile menu list explicitly below.
const navItems = [
  { to: '/events', label: 'Events' },
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/donate', label: 'Donate' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/resources', label: 'Resources' },
  { to: '/documents', label: 'Documents' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-scarlet-500/20 bg-cream-100/95 backdrop-blur supports-[backdrop-filter]:bg-cream-100/85">
      <div className="container-px flex h-20 items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 font-display text-lg font-semibold text-ink"
          aria-label={`${siteConfig.name} home`}
        >
          {/* Roadrunner logo image — upload to public/renner-logo.png. */}
          <img
            src="/renner-logo.png"
            alt="Renner Roadrunners"
            className="h-12 w-12 flex-none object-contain"
            onError={(e) => {
              // Graceful fallback if logo isn't uploaded yet.
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
          <span className="leading-tight">
            <span className="block text-base font-bold text-navy-700 sm:text-lg">
              {siteConfig.shortName}
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-wider text-ink-muted sm:block">
              Renner Elementary · Park Hill
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-navy-50 text-navy-700'
                        : 'text-ink-soft hover:bg-cream-200 hover:text-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {/* Small divider visually separates the gold CTA from text nav. */}
          <span aria-hidden className="h-6 w-px bg-ink/15" />
          <CTAButton to="/join" variant="primary" size="md" withArrow>
            Join the PTA
          </CTAButton>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-ink shadow-soft ring-1 ring-ink/10"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="container-px pb-4">
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-base font-medium ${
                      isActive
                        ? 'bg-navy-50 text-navy-700'
                        : 'text-ink hover:bg-cream-200'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <CTAButton to="/join" variant="primary" size="md" className="w-full">
                Join the PTA
              </CTAButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
