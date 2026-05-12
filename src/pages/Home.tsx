import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import SectionHeader from '../components/SectionHeader';
import EventCard from '../components/EventCard';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';
import { getFeaturedEvents } from '../data/events';

const ways = [
  {
    icon: 'star' as const,
    title: 'Join the PTA',
    body: 'Annual dues are $15 per family and fund every event, fundraiser, and classroom moment we make happen. Sign up online in 2 minutes.',
    href: siteConfig.links.membership,
    label: 'Become a member',
  },
  {
    icon: 'hands' as const,
    title: 'Volunteer',
    body: 'Help with class parties, school events, the carnival — whatever fits your schedule. One slot at a time.',
    to: '/volunteer',
    label: 'Find a slot',
  },
  {
    icon: 'heart' as const,
    title: 'Donate',
    body: 'Card, Apple Pay, Venmo, Zelle, or check. Whatever works for you, every dollar stays at Renner.',
    to: '/donate',
    label: 'Give now',
  },
];

export default function Home() {
  const featured = getFeaturedEvents(4);
  return (
    <>
      <SeoHead
        title="Home"
        description={`${siteConfig.tagline} ${siteConfig.mission}`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-100"
          aria-hidden
        />
        <div
          className="absolute -top-32 right-1/2 -z-10 h-[480px] w-[480px] translate-x-1/2 rounded-full bg-navy-100/60 blur-3xl"
          aria-hidden
        />
        <div className="container-px py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="eyebrow">{siteConfig.district} · Roadrunners</span>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-navy-700 sm:text-5xl lg:text-6xl">
                {siteConfig.tagline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                {siteConfig.mission}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton
                  href={siteConfig.links.membership}
                  target="_blank"
                  rel="noreferrer noopener"
                  size="lg"
                  variant="primary"
                  withArrow
                >
                  Join the PTA
                </CTAButton>
                <CTAButton to="/volunteer" size="lg" variant="secondary">
                  Volunteer
                </CTAButton>
                <CTAButton to="/donate" size="lg" variant="secondary">
                  Donate
                </CTAButton>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                $15 / year per family · 100% stays at Renner
              </p>
              <p className="mt-6 text-sm text-ink-muted">
                Mobile-friendly. Available in 100+ languages — see the bar at the top of every page.
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-6 -z-10 rounded-full bg-gold-light/40 blur-3xl"
                aria-hidden
              />
              <div
                className="absolute -inset-2 -z-10 rounded-full bg-navy-100/40 blur-2xl"
                aria-hidden
              />
              <div className="rounded-[2rem] bg-white p-8 shadow-lift ring-1 ring-navy-100 sm:p-10">
                <img
                  src="/renner-logo.png"
                  alt="Renner Roadrunners — proud mascot of Alfred L. Renner Elementary"
                  className="mx-auto h-64 w-auto sm:h-80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="mt-6 border-t border-navy-100 pt-5 text-center">
                  <p className="font-display text-2xl font-bold text-roadrunnerRed">
                    Go Roadrunners!
                  </p>
                  <p className="mt-1 text-sm font-medium text-navy-700">
                    {siteConfig.schoolName}
                  </p>
                  <p className="text-xs text-ink-muted">{siteConfig.district}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Change 4 — Social proof bar */}
      <section className="bg-navy py-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 text-center md:grid-cols-4">
          <div>
            <p className="text-3xl font-bold text-gold">450+</p>
            <p className="mt-1 text-sm text-white">Renner families</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gold">$15</p>
            <p className="mt-1 text-sm text-white">per family, per year</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gold">100%</p>
            <p className="mt-1 text-sm text-white">stays at Renner</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gold">6+</p>
            <p className="mt-1 text-sm text-white">events every year</p>
          </div>
        </div>
      </section>

      {/* Featured upcoming events (auto-populated from data/events featured: true) */}
      <section className="bg-cream-200/50 py-16">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="What's coming up"
              title="Featured events"
              description="A few highlights this season. The full calendar lives on the events page."
            />
            <Link
              to="/events"
              className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-navy-light"
            >
              See full calendar <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>

      {/* Change 8 — Stay in the loop */}
      <section className="container-px py-12">
        <div className="rounded-[2rem] bg-gold-light p-8 ring-1 ring-gold/30 sm:p-12">
          <div className="max-w-2xl">
            <span className="eyebrow bg-white/50 text-navy">Stay in the loop</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-700 sm:text-4xl">
              The best way to get PTA news is to become a member.
            </h2>
            <p className="mt-3 text-ink-soft">
              Event reminders, volunteer opportunities, and school updates — all in 2 minutes and
              $15 a year.
            </p>
            <div className="mt-6">
              <CTAButton
                href={siteConfig.links.membership}
                target="_blank"
                rel="noreferrer noopener"
                size="lg"
                variant="primary"
                withArrow
              >
                Join the PTA — $15/year
              </CTAButton>
            </div>
            <p className="mt-3 text-xs text-ink-muted">
              Questions? Email us at{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-navy underline hover:text-navy-light"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Change 11B — Resources callout */}
      <section className="container-px py-10">
        <div className="rounded-[2rem] bg-stone-50 p-8 ring-1 ring-ink/10 sm:p-12">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <span className="eyebrow bg-white text-navy">For every Renner family</span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-navy-700 sm:text-3xl">
                Find community resources.
              </h2>
              <p className="mt-3 max-w-2xl text-ink-soft">
                A directory of free resources available through Renner Elementary, the Park Hill
                District, and our community — including the PTA Clothing Center, school lunch
                programs, language support, and more. No membership required.
              </p>
              <p className="mt-2 text-xs text-ink-muted">
                Resources listed are operated by the school, district, or community — not the
                Renner PTA.
              </p>
            </div>
            <CTAButton to="/resources" size="lg" variant="secondary" withArrow>
              Browse resources
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Three ways to get involved */}
      <section className="container-px py-16">
        <SectionHeader
          eyebrow="Get involved"
          title="Three ways to be part of it"
          description="Pick what fits your week — or do all three. Every bit of help adds up."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ways.map((w) => (
            <div
              key={w.title}
              className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy-100"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-light text-navy">
                <Icon name={w.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-xl font-semibold">{w.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{w.body}</p>
              <div className="mt-5">
                {w.to ? (
                  <CTAButton to={w.to} variant="ghost" withArrow>
                    {w.label}
                  </CTAButton>
                ) : (
                  <CTAButton
                    href={w.href!}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="ghost"
                    withArrow
                  >
                    {w.label}
                  </CTAButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For teachers / embed kit — moved lower per spec */}
      <section className="container-px py-12">
        <div className="grid gap-8 rounded-[2rem] bg-navy p-8 text-cream-50 shadow-lift sm:p-12 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <span className="eyebrow bg-cream-50/15 text-cream-50">For teachers & room parents</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Grab a link, image, or blurb for your next email.
            </h2>
            <p className="mt-3 max-w-xl text-cream-50/85">
              Copy-paste-ready content for newsletters, classroom emails, and social posts —
              including QR codes and translated language.
            </p>
          </div>
          <CTAButton to="/embed-kit" size="lg" variant="ghost" className="bg-white">
            Open the embed kit
          </CTAButton>
        </div>
      </section>

      {/* Closing CTA — gold panel for visual punch */}
      <section className="container-px py-16">
        <div className="overflow-hidden rounded-[2rem] bg-navy px-8 py-12 text-cream-50 shadow-lift sm:px-12 sm:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Renner runs on volunteers and dues.
              </h2>
              <p className="mt-3 max-w-xl text-cream-50/95">
                Two minutes and $15 of dues unlocks every PTA-funded moment of your child's year.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton
                href={siteConfig.links.membership}
                target="_blank"
                rel="noreferrer noopener"
                size="lg"
                variant="primary"
              >
                Join the PTA
              </CTAButton>
              <CTAButton
                to="/donate"
                size="lg"
                variant="ghost"
                className="bg-transparent text-cream-50 border-cream-50/40 hover:bg-white/10"
              >
                Donate
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
