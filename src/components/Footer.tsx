import { Link } from 'react-router-dom';
import Icon from './Icon';
import CTAButton from './CTAButton';
import { siteConfig } from '../siteConfig';

type FooterLink =
  | { to: string; label: string; href?: undefined }
  | { href: string; label: string; to?: undefined };

const cols: { heading: string; links: FooterLink[] }[] = [
  {
    heading: 'Get involved',
    links: [
      { to: '/join', label: 'Join the PTA' },
      { to: '/volunteer', label: 'Volunteer' },
      { to: '/donate', label: 'Donate' },
      { to: '/sponsors', label: 'Become a sponsor' },
      { href: siteConfig.links.membership, label: 'Get PTA updates' },
    ],
  },
  {
    heading: 'Find info',
    links: [
      { to: '/resources', label: 'Community resources' },
      { href: siteConfig.links.rennerFamiliesHub, label: 'Renner school site' },
      { to: '/events', label: 'Events calendar' },
      { to: '/documents', label: 'Meeting minutes' },
      { to: '/embed-kit', label: 'For teachers' },
      { to: '/contact', label: 'Contact us' },
    ],
  },
  {
    heading: 'Park Hill District',
    links: [
      { href: siteConfig.links.districtPta, label: 'District Council PTA' },
      { href: siteConfig.links.nutritionMenu, label: 'Lunch menu & nutrition' },
      { href: siteConfig.links.parkHillClothing, label: 'Clothing Center' },
      { href: siteConfig.links.clothingCenterVolunteer, label: 'Volunteer at the Clothing Center' },
    ],
  },
];

export default function Footer() {
  const { contact, social } = siteConfig;
  return (
    <footer className="mt-24 bg-navy-700 text-cream-50">
      {/* Spirit stripe — thin red accent above footer to reinforce school colors. */}
      <div className="h-1.5 bg-scarlet-500" aria-hidden />

      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 font-display text-lg font-semibold text-cream-50">
              <img
                src="/renner-logo.png"
                alt="Renner Roadrunners"
                className="h-12 w-12 flex-none rounded-full bg-white object-contain p-1"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <span>{siteConfig.shortName}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-50/85">
              {siteConfig.mission}
            </p>
            <address className="mt-4 not-italic text-sm text-cream-50/85">
              <strong className="block text-cream-50">{siteConfig.schoolName}</strong>
              <span className="block text-cream-50/75">{siteConfig.district}</span>
              {contact.address.line1}
              <br />
              {contact.address.city}, {contact.address.state} {contact.address.zip}
              <br />
              <a href={`tel:${contact.schoolPhone}`} className="hover:text-cream-50">
                {contact.schoolPhone}
              </a>
              <br />
              <a href={`mailto:${contact.email}`} className="hover:text-cream-50">
                {contact.email}
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
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-50">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.to ?? l.href}>
                    {l.to ? (
                      <Link
                        to={l.to}
                        className="text-sm text-cream-50/80 hover:text-cream-50"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm text-cream-50/80 hover:text-cream-50"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-cream-50/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-cream-50/70">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Go Roadrunners!
          </p>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email the PTA"
              className="grid h-9 w-9 place-items-center rounded-full bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/20 hover:bg-cream-50/20"
            >
              <Icon name="mail" />
            </a>
            <a
              href={social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer noopener"
              className="grid h-9 w-9 place-items-center rounded-full bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/20 hover:bg-cream-50/20"
            >
              <Icon name="facebook" />
            </a>
            <a
              href={social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer noopener"
              className="grid h-9 w-9 place-items-center rounded-full bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/20 hover:bg-cream-50/20"
            >
              <Icon name="instagram" />
            </a>
            <a
              href={social.tiktok}
              aria-label="TikTok"
              target="_blank"
              rel="noreferrer noopener"
              className="grid h-9 w-9 place-items-center rounded-full bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/20 hover:bg-cream-50/20"
            >
              <Icon name="tiktok" />
            </a>
            <a
              href={social.x}
              aria-label="X (Renner school account)"
              target="_blank"
              rel="noreferrer noopener"
              className="grid h-9 w-9 place-items-center rounded-full bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/20 hover:bg-cream-50/20"
            >
              <Icon name="x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
