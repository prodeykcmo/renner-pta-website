import { Link } from 'react-router-dom';
import Icon from './Icon';
import CTAButton from './CTAButton';
import { siteConfig } from '../siteConfig';

const cols = [
  {
    heading: 'Get involved',
    links: [
      { to: '/join', label: 'Join the PTA' },
      { to: '/volunteer', label: 'Volunteer' },
      { to: '/donate', label: 'Donate' },
      { to: '/sponsors', label: 'Become a sponsor' },
    ],
  },
  {
    heading: 'Find info',
    links: [
      { to: '/events', label: 'Events calendar' },
      { to: '/documents', label: 'Meeting minutes' },
      { to: '/embed-kit', label: 'For teachers' },
      { to: '/contact', label: 'Contact us' },
    ],
  },
];

export default function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="mt-24 border-t border-ink/5 bg-cream-50">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
              <span
                className="grid h-9 w-9 place-items-center rounded-2xl bg-scarlet-600 font-bold text-cream-50"
                aria-hidden
              >
                R
              </span>
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              {siteConfig.mission}
            </p>
            <address className="mt-4 not-italic text-sm text-ink-soft">
              {siteConfig.schoolName}
              <br />
              {contact.address.line1}
              <br />
              {contact.address.city}, {contact.address.state} {contact.address.zip}
              <br />
              <a href={`tel:${contact.schoolPhone}`} className="hover:text-ink">
                {contact.schoolPhone}
              </a>
            </address>
            <div className="mt-6">
              <CTAButton to="/donate" variant="primary" withArrow>
                Donate today
              </CTAButton>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-ink-soft hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink/5 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. {siteConfig.district}.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email the PTA"
              className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-soft ring-1 ring-ink/10 hover:text-ink"
            >
              <Icon name="mail" />
            </a>
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer noopener"
              className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-soft ring-1 ring-ink/10 hover:text-ink"
            >
              <Icon name="instagram" />
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer noopener"
              className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-soft ring-1 ring-ink/10 hover:text-ink"
            >
              <Icon name="facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
