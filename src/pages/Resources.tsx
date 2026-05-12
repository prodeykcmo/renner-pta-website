import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';

// 2025-26 Clothing Center shopping schedule.
// TODO: replace with the 2026-27 schedule once the District publishes it (August).
const clothingCenterSchedule: { date: string; hours: string }[] = [
  { date: 'August 19', hours: '10am–12pm and 5–7pm' },
  { date: 'September 2 & 16', hours: '10am–12pm and 5–7pm' },
  { date: 'October 7 & 21', hours: '10am–12pm and 5–7pm' },
  { date: 'November 4 & 18', hours: '10am–12pm and 5–7pm' },
  { date: 'December 2 & 16', hours: '10am–12pm and 5–7pm' },
  { date: 'January 6 & 20', hours: '10am–12pm and 5–7pm' },
  { date: 'February 3 & 24', hours: '10am–12pm and 5–7pm' },
  { date: 'March 3 & 17', hours: '10am–12pm and 5–7pm' },
  { date: 'April 7 & 21', hours: '10am–12pm and 5–7pm' },
  { date: 'May 5', hours: '4–6pm only' },
];

type ResourceCardProps = {
  icon: Parameters<typeof Icon>[0]['name'];
  title: string;
  body: string;
  sourceLabel: string;
  linkText: string;
  href: string;
  external?: boolean;
};

const resourceCards: ResourceCardProps[] = [
  {
    icon: 'gift',
    title: 'Free & reduced lunch',
    body: 'Apply for free or reduced-price school meals through the Park Hill district. Applications are accepted year-round.',
    sourceLabel: 'Park Hill School District',
    linkText: 'Apply or learn more',
    href: 'https://www.parkhill.k12.mo.us/families/nutrition-services',
    external: true,
  },
  {
    icon: 'translate',
    title: 'Language & translation support',
    body: 'Park Hill provides translation and interpretation services for families. This website is also available in 100+ languages — use the translate bar at the top of any page.',
    sourceLabel: 'Park Hill School District',
    linkText: 'District language services',
    href: 'https://www.parkhill.k12.mo.us',
    external: true,
  },
  {
    icon: 'users',
    title: 'Park Hill District Council PTA',
    body: 'The district-level PTA coordinates programs across all Park Hill schools, including SEPAC (special education family advisory council) and community initiatives.',
    sourceLabel: 'Park Hill School District',
    linkText: 'Visit District Council PTA',
    href: 'https://www.parkhill.k12.mo.us/families/district-council-pta',
    external: true,
  },
  {
    icon: 'calendar',
    title: 'Community events',
    body: "The Renner PTA partners with the school's DEIB committee on community events open to all families — food drives, cultural celebrations, and family nights. No membership required to attend.",
    sourceLabel: 'Renner Elementary PTA + Renner DEIB',
    linkText: 'See upcoming events',
    href: '/events',
  },
  {
    icon: 'document',
    title: 'Renner school info',
    body: 'Handbook, supply lists, attendance, transportation, health services, and the school directory — all on the official Renner families page.',
    sourceLabel: 'Renner Elementary School',
    linkText: 'Renner families page',
    href: 'https://renner.parkhill.k12.mo.us/families',
    external: true,
  },
  {
    icon: 'mail',
    title: 'Questions? Contact the PTA',
    body: "Not sure where to start? Email us — we'll do our best to point you to the right resource, even if it's not something the PTA runs directly.",
    sourceLabel: 'Renner Elementary PTA',
    linkText: 'Email the PTA',
    href: `mailto:${siteConfig.contact.email}`,
  },
];

export default function Resources() {
  return (
    <>
      <SeoHead
        title="Community Resources"
        description="A directory of resources available to all Renner families through the school, Park Hill School District, and community — no PTA membership required."
      />

      {/* Hero */}
      <section className="container-px py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Resources</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Community resources for Renner families.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            This page is a directory of resources available through Renner Elementary, the Park
            Hill School District, and our local community. The Renner PTA does not administer or
            fund these programs — we simply want every family to know what's out there. No
            membership required to access anything listed here.
          </p>
        </div>
      </section>

      {/* Section 1 — Tara Davis spotlight */}
      <section className="container-px pb-10">
        <SectionHeader eyebrow="First contact" title="Your first contact at Renner" />
        <div className="mt-6 rounded-[2rem] bg-gold-light p-6 ring-1 ring-gold/30 sm:p-10">
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
            <span
              className="grid h-16 w-16 flex-none place-items-center rounded-full bg-gold font-display text-2xl font-bold text-navy"
              aria-hidden
            >
              TD
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-700">
                Renner Elementary School Social Worker — school role, not PTA
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-navy-700 sm:text-3xl">
                Tara Davis, LMSW
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Tara is Renner's licensed school social worker and the best starting point if
                you're not sure where to begin. She can help connect your family with clothing,
                food support, counseling referrals, financial assistance programs, and district
                services. Reach out directly — all conversations are confidential.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <a
                  href="tel:8163595547"
                  className="inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-navy"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  816-359-5547
                </a>
                <a
                  href="mailto:tara.davis@parkhill.k12.mo.us"
                  className="inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-navy"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  tara.davis@parkhill.k12.mo.us
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-ink-muted">
          Tara Davis is a Renner Elementary School employee. This listing is provided as a
          convenience — the Renner PTA does not coordinate her services.
        </p>
      </section>

      {/* Section 2 — Clothing Center */}
      <section className="container-px pb-12">
        <SectionHeader
          eyebrow="Clothing Center"
          title="Free clothing for Park Hill families"
        />
        <div className="mt-6 space-y-6 rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-ink/5 sm:p-10">
          <p className="text-ink-soft">
            The Park Hill District PTA runs a Clothing Center that provides free, gently used
            clothing plus new socks and underwear to any Park Hill student from Pre-K through 12th
            grade. You do not need to be a Renner PTA member — any Park Hill family is welcome.
          </p>

          <div className="rounded-2xl border-l-4 border-roadrunnerRed bg-roadrunnerRed-light/40 p-4 text-sm">
            <strong className="text-navy-700">Note:</strong> This program is operated by the Park
            Hill District PTA, not the Renner Elementary PTA. All clothing is free of charge.
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-700">What to bring</h3>
            <p className="mt-2 text-ink-soft">
              Bring proof that your child is enrolled in the Park Hill School District. Any of the
              following works:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-soft">
              <li>Student ID card</li>
              <li>Class schedule or enrollment form</li>
              <li>Dated letter from a principal or social worker</li>
              <li>District portal showing student information</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-700">Location</h3>
            <p className="mt-1 text-ink-soft">
              8009 N Atkins Ave, Kansas City, MO — just south of the Gerner Family Early Education
              Center
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-700">Shopping days</h3>
            <p className="mt-1 text-ink-soft">
              1st and 3rd Tuesday of every month, 10am–12pm and 5pm–7pm. Hours vary by date — see
              the schedule below or check the Facebook group for the most current info.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink/10">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Date</th>
                  <th className="px-4 py-2 text-left font-semibold">Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {clothingCenterSchedule.map((row) => (
                  <tr key={row.date} className="bg-white">
                    <td className="px-4 py-2 font-medium text-navy-700">{row.date}</td>
                    <td className="px-4 py-2 text-ink-soft">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ink-muted">
            Schedule shown is for 2025–26. The 2026–27 schedule will be updated here in August.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-navy-700">How to help</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-soft">
              <li>
                Donations of clean, gently used clothing are welcome year-round. Drop them in the
                blue bin in front of the garage at 8009 N Atkins. Please bag donations in
                kitchen-sized bags.
              </li>
              <li>
                Volunteers are needed to sort donations and staff shopping days. Sign up via the
                district's SignUpGenius.
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <CTAButton
              href={siteConfig.links.clothingCenterVolunteer}
              target="_blank"
              rel="noreferrer noopener"
              variant="secondary"
            >
              Volunteer for a shift
            </CTAButton>
            <CTAButton
              href="https://www.facebook.com/groups/138302759297378"
              target="_blank"
              rel="noreferrer noopener"
              variant="ghost"
            >
              Facebook updates
            </CTAButton>
            <CTAButton
              href={siteConfig.links.parkHillClothing}
              target="_blank"
              rel="noreferrer noopener"
              variant="ghost"
            >
              District Clothing Center page
            </CTAButton>
          </div>

          <div className="border-t border-ink/10 pt-4 text-sm text-ink-soft">
            <p>
              <strong className="text-navy-700">Contact:</strong> Maria Acosta ·{' '}
              <a href="tel:8165911803" className="text-navy-700 underline hover:text-navy">
                (816) 591-1803
              </a>
            </p>
            <p className="mt-1">
              For additional guidance: Tara Davis ·{' '}
              <a href="tel:8163595547" className="text-navy-700 underline hover:text-navy">
                816-359-5547
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Resource grid */}
      <section className="container-px pb-12">
        <SectionHeader
          eyebrow="More resources"
          title="More resources for Renner families"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resourceCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-navy-50 text-navy-700">
                <Icon name={card.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{card.body}</p>
              <p className="mt-3 text-xs uppercase tracking-wider text-ink-muted">
                {card.sourceLabel}
              </p>
              <div className="mt-3">
                {card.external ? (
                  <CTAButton
                    href={card.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="ghost"
                    size="md"
                    withArrow
                  >
                    {card.linkText}
                  </CTAButton>
                ) : card.href.startsWith('mailto:') ? (
                  <CTAButton href={card.href} variant="ghost" size="md" withArrow>
                    {card.linkText}
                  </CTAButton>
                ) : (
                  <CTAButton to={card.href} variant="ghost" size="md" withArrow>
                    {card.linkText}
                  </CTAButton>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Page footer note */}
      <section className="container-px py-10">
        <p className="mx-auto max-w-3xl text-sm text-ink-muted">
          The Renner Elementary PTA is a nonprofit parent-teacher organization. PTA membership
          dues and donations fund school events and programs and are kept separate from community
          resource programs per our bylaws. Resources listed on this page are operated
          independently by the school, the Park Hill School District, or community organizations.
        </p>
      </section>
    </>
  );
}
