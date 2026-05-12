import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import BoardCard from '../components/BoardCard';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';
import { boardMembers } from '../data/board';

const reasons = [
  {
    icon: 'star' as const,
    title: 'Every dollar stays at Renner',
    body: 'Dues directly fund classroom support, family events, teacher appreciation, and the spring carnival.',
  },
  {
    icon: 'users' as const,
    title: 'Connect with other families',
    body: 'Meet other Roadrunner parents, share rides, build the community your kids grow up in.',
  },
  {
    icon: 'megaphone' as const,
    title: 'Have a voice',
    body: 'Members vote at monthly meetings on how funds are spent and which initiatives we back.',
  },
  {
    icon: 'heart' as const,
    title: 'Support every kid, not just yours',
    body: "PTA-funded programs reach every classroom, including kids whose families can't pay dues.",
  },
];

// TODO: Replace budgetBreakdown values with real figures from PTA treasurer
const budgetBreakdown: { name: string; value: number; color: string }[] = [
  { name: 'Events & Activities', value: 35, color: '#1B3A7B' },
  { name: 'Classroom & Teacher Support', value: 25, color: '#E8A800' },
  { name: 'Community Programs', value: 15, color: '#C8102E' },
  { name: 'Staff Appreciation', value: 12, color: '#2A52A8' },
  { name: 'Fundraiser Costs', value: 8, color: '#B88200' },
  { name: 'Admin & National Dues', value: 5, color: '#9CA3AF' },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Does joining require any time commitment?',
    answer:
      "Not at all. Many members simply pay their annual dues to support the PTA's work and stay informed through our communications. Attending meetings is always welcome but never required. If you do want to get more involved, there are plenty of volunteer opportunities throughout the year — you choose what fits your schedule.",
  },
  {
    question: 'What does my $15 actually pay for?',
    answer:
      'Every dollar stays at Renner. PTA funds support school events like STEAM Night and the Carnival, classroom materials, staff appreciation, community programs like Culture Night, and the administrative costs of running the organization. See the breakdown above for details.',
  },
  {
    question: 'Who can become a member?',
    answer:
      "Anyone who supports Renner Elementary students is welcome to join — parents, grandparents, community members, and school staff. You don't need to have a child currently enrolled.",
  },
  {
    question: 'Do I need to be a member to attend PTA events?',
    answer:
      "No. Every PTA-sponsored event is open to all Renner families regardless of membership status. Membership supports the work behind those events — it's not a ticket to attend them.",
  },
  {
    question: 'How does my child benefit from the PTA?',
    answer:
      "The PTA funds and organizes experiences that the school budget doesn't cover — hands-on events, community celebrations, teacher support, and programs that bring families together. Every Renner student benefits from PTA activity, every year.",
  },
  {
    question: 'How will I hear about PTA news and events?',
    answer:
      "Members receive PTA communications directly. We also post on Facebook and Instagram, and Renner's Textcaster system sends push notifications for important updates. Joining the PTA is the most direct way to stay in the loop.",
  },
  {
    question: 'Is the Renner PTA connected to a larger organization?',
    answer:
      'Yes — Renner PTA is a member of the Park Hill District Council PTA and the National PTA. A small portion of dues supports these memberships, which provide resources, advocacy support, and community programs at the district and national level.',
  },
  {
    question: 'Are there other ways to support the PTA besides membership?',
    answer:
      'Absolutely. You can make a one-time donation, volunteer at events, participate in restaurant spirit nights, or shop during our spirit wear sale. Every bit of support helps. Visit the Donate page for giving options.',
  },
];

export default function Join() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SeoHead
        title="Join the PTA"
        description="Become a Renner Elementary PTA member for the 2026–2027 school year. $15 per family, per year. Online sign-up takes 2 minutes."
      />

      <section className="container-px py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Membership</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Become a Renner PTA member.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            <strong className="text-ink">$15 per family, per year.</strong> Card, Apple Pay, Google
            Pay, or bank transfer. Annual dues power every classroom moment, family event, and
            teacher thank-you we make happen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton
              href={siteConfig.links.membership}
              target="_blank"
              rel="noreferrer noopener"
              size="lg"
              withArrow
            >
              Join online now
            </CTAButton>
            <a
              href="/donate"
              className="self-center text-sm font-medium text-navy underline hover:text-navy-light"
            >
              Just want to donate?
            </a>
          </div>
        </div>
      </section>

      <section className="container-px pb-12">
        <SectionHeader eyebrow="Why join" title="Four reasons it's worth it" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-gold-light text-navy">
                <Icon name={r.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px py-12">
        <div className="rounded-[2rem] bg-navy p-8 text-cream-50 shadow-lift sm:p-12">
          <div className="max-w-2xl">
            <span className="eyebrow bg-cream-50/15 text-cream-50">Sign up</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Pay dues for 2026–27
            </h2>
            <p className="mt-3 text-cream-50/90">
              The button below opens our secure Zeffy form — Zeffy charges no platform fees, so
              100% of your dues go to the PTA.
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
                Open membership form
              </CTAButton>
            </div>
            <p className="mt-3 text-sm text-cream-50/80">
              $15 per family · no platform fees via Zeffy · 100% goes to Renner
            </p>
            <p className="mt-3 text-xs text-cream-50/70">
              Prefer Venmo or check? See the{' '}
              <a href="/donate" className="underline">
                donate page
              </a>{' '}
              for alternatives.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px py-12">
        <SectionHeader
          eyebrow="Your 2026–27 board"
          title="The Roadrunners running this thing"
          description="Volunteer board members. Email any of us — we'd love to meet you."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((m) => (
            <BoardCard key={`${m.name}-${m.role}`} member={m} />
          ))}
        </div>
      </section>

      {/* Change 13A — Where your $15 goes */}
      <BudgetSection />

      {/* Change 13B — FAQ accordion */}
      <section className="container-px py-12">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
        />
        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink/5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;
            return (
              <div
                key={faq.question}
                className={`${idx > 0 ? 'border-t border-gray-200' : ''}`}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-navy transition-colors hover:bg-gray-50 sm:px-6 ${
                    isOpen ? 'border-l-4 border-gold pl-4 sm:pl-5' : ''
                  }`}
                >
                  <span className="text-base">{faq.question}</span>
                  <Icon
                    name="arrow-right"
                    className={`h-5 w-5 flex-none rotate-90 text-gold transition-transform duration-200 ${
                      isOpen ? '-rotate-90' : ''
                    }`}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-4 text-sm leading-relaxed text-gray-700 sm:px-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          Still have questions?{' '}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-navy underline hover:text-navy-light"
          >
            Email us at {siteConfig.contact.email}
          </a>{' '}
          — we'll get back to you quickly.
        </p>
      </section>
    </>
  );
}

// ----- Budget donut chart (Change 13A) ---------------------------------------

function BudgetSection() {
  const total = budgetBreakdown.reduce((sum, slice) => sum + slice.value, 0);
  const a11ySummary = budgetBreakdown
    .map((s) => `${s.name.replace(/&/g, 'and')} ${s.value}%`)
    .join(', ');

  return (
    <section className="container-px py-12">
      <SectionHeader
        eyebrow="Where it goes"
        title={<>Where your $15 goes</>}
        description="Every dollar collected through PTA membership stays at Renner — funding the events, programs, and moments that make this school feel like a community."
      />

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
        {/* Donut */}
        <div className="relative mx-auto h-80 w-full max-w-md">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={budgetBreakdown}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="95%"
                paddingAngle={1}
                stroke="none"
              >
                {budgetBreakdown.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [`${value}%`, String(name)]}
                contentStyle={{
                  borderRadius: 12,
                  borderColor: '#E5E7EB',
                  fontSize: 13,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-display text-3xl font-bold text-gold">100%</p>
            <p className="text-xs font-medium text-navy">stays at Renner</p>
          </div>
          <p className="sr-only">
            Budget breakdown: {a11ySummary}. Total {total}%.
          </p>
        </div>

        {/* Legend cards */}
        <div className="grid gap-3 sm:grid-cols-2">
          {budgetBreakdown.map((slice) => (
            <div
              key={slice.name}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink/5"
            >
              <span
                aria-hidden
                className="h-3 w-3 flex-none rounded-full"
                style={{ backgroundColor: slice.color }}
              />
              <p className="flex-1 text-sm font-medium text-navy">{slice.name}</p>
              <p className="text-sm font-bold text-gold">{slice.value}%</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-xs italic text-gray-400">
        * Budget breakdown shown is approximate. Final figures updated annually.
      </p>
    </section>
  );
}
