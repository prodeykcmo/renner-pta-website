import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import SectionHeader from '../components/SectionHeader';
import EventCard from '../components/EventCard';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';
import { featuredEvents } from '../data/events';

const ways = [
  {
    icon: 'star' as const,
    title: 'Join the PTA',
    body: 'Annual dues fund every event, fundraiser, and classroom moment we make happen. Sign up online in 2 minutes.',
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
                  withArrow
                >
                  Join the PTA
                </CTAButton>
                <CTAButton to="/volunteer" size="lg" variant="ghost">
                  Volunteer
                </CTAButton>
                <CTAButton to="/donate" size="lg" variant="navy">
                  Donate
                </CTAButton>
              </div>
              <p className="mt-6 text-sm text-ink-muted">
                Mobile-friendly. Available in 100+ languages — see the bar at the top of every page.
              </p>
            </div>

            {/* Hero — roadrunner logo featured prominently */}
            <div className="relative">
              {/* Soft red glow underneath */}
              <div
                className="absolute -inset-6 -z-10 rounded-full bg-scarlet-100/40 blur-3xl"
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
                  <p className="font-display text-2xl font-bold text-scarlet-600">
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
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-50 text-navy-700">
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

      {/* Featured upcoming events */}
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
              className="inline-flex items-center gap-1 text-sm font-semibold text-scarlet-600 hover:text-scarlet-700"
            >
              See full calendar <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>

      {/* For teachers / embed kit promo */}
      <section className="container-px py-16">
        <div className="grid gap-8 rounded-[2rem] bg-navy-700 p-8 text-cream-50 shadow-lift sm:p-12 md:grid-cols-[1fr_auto] md:items-center">
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
          <CTAButton to="/embed-kit" size="lg" variant="primary">
            Open the embed kit
          </CTAButton>
        </div>
      </section>

      {/* Closing CTA — bold red school-spirit panel */}
      <section className="container-px py-16">
        <div className="overflow-hidden rounded-[2rem] bg-scarlet-600 px-8 py-12 text-cream-50 shadow-lift sm:px-12 sm:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Renner runs on volunteers and dues.
              </h2>
              <p className="mt-3 max-w-xl text-cream-50/95">
                Two minutes and $10 of dues unlocks every PTA-funded moment of your child's year.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton
                href={siteConfig.links.membership}
                target="_blank"
                rel="noreferrer noopener"
                size="lg"
                variant="navy"
              >
                Join the PTA
              </CTAButton>
              <CTAButton
                to="/donate"
                size="lg"
                variant="ghost"
                className="bg-white/10 text-cream-50 ring-cream-50/40 hover:bg-white/20"
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
