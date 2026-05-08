import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';
import { sponsors } from '../data/sponsors';

const tiers = [
  {
    name: 'Roadrunner',
    price: '$1,000+',
    perks: [
      'Logo on home page',
      'Logo on every event flyer',
      'Featured social media post',
      'Recognition at all PTA meetings',
    ],
    color: 'scarlet' as const,
  },
  {
    name: 'Scarlet',
    price: '$500',
    perks: [
      'Logo on sponsors page',
      'Recognition at major events',
      'Mention in monthly newsletter',
    ],
    color: 'navy' as const,
  },
  {
    name: 'Friend',
    price: '$100',
    perks: [
      'Listed on sponsors page',
      'Annual thank-you in the newsletter',
    ],
    color: 'navy' as const,
  },
];

export default function Sponsors() {
  const hasSponsorForm = siteConfig.links.sponsor && siteConfig.links.sponsor !== '#';
  return (
    <>
      <SeoHead
        title="Business Sponsors"
        description="Become a Renner Elementary PTA sponsor. Reach 600+ Roadrunner families while supporting Park Hill students."
      />

      <section className="container-px py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Business support</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Partner with the Renner Roadrunners.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Local businesses keep our community strong. Sponsor the PTA to reach 600+ families,
            support every classroom at Renner, and show up where you live and work.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="container-px pb-12">
        <SectionHeader
          eyebrow="Sponsorship tiers"
          title="Pick the level that fits"
          description="Custom partnerships welcome — email us if none of these are quite right."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex h-full flex-col rounded-3xl p-6 shadow-soft ring-1 ${
                t.color === 'scarlet'
                  ? 'bg-scarlet-600 text-cream-50 ring-scarlet-700'
                  : 'bg-white ring-ink/5'
              }`}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-wider ${
                  t.color === 'scarlet' ? 'text-cream-50/85' : 'text-scarlet-700'
                }`}
              >
                {t.name}
              </p>
              <p
                className={`mt-2 font-display text-3xl font-semibold ${
                  t.color === 'scarlet' ? 'text-cream-50' : 'text-ink'
                }`}
              >
                {t.price}
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm">
                {t.perks.map((p) => (
                  <li
                    key={p}
                    className={`flex items-start gap-2 ${
                      t.color === 'scarlet' ? 'text-cream-50/90' : 'text-ink-soft'
                    }`}
                  >
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-none" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CTAButton
                  href={
                    hasSponsorForm
                      ? siteConfig.links.sponsor
                      : `mailto:${siteConfig.contact.email}?subject=Sponsorship%20interest%20—%20${t.name}%20tier`
                  }
                  target={hasSponsorForm ? '_blank' : undefined}
                  rel={hasSponsorForm ? 'noreferrer noopener' : undefined}
                  variant={t.color === 'scarlet' ? 'navy' : 'primary'}
                  className={
                    t.color === 'scarlet'
                      ? 'bg-cream-50 text-scarlet-700 hover:bg-cream-100'
                      : ''
                  }
                  withArrow
                >
                  Apply
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current sponsors */}
      <section className="container-px py-12">
        <SectionHeader
          eyebrow="Thank you to our sponsors"
          title="Local businesses backing Renner"
        />
        {sponsors.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((s) => (
              <a
                key={s.name}
                href={s.url ?? '#'}
                target={s.url ? '_blank' : undefined}
                rel={s.url ? 'noreferrer noopener' : undefined}
                className="block rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5 hover:shadow-lift"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-scarlet-700">
                  {s.tier}
                </p>
                <p className="mt-2 text-xl font-semibold">{s.name}</p>
                {s.blurb && <p className="mt-2 text-sm text-ink-soft">{s.blurb}</p>}
              </a>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-ink-muted">
            We're just getting started for 2026–27. Want to be the first sponsor on this page?
          </p>
        )}
      </section>
    </>
  );
}
