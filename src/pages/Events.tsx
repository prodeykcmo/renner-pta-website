import { useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import EventCard from '../components/EventCard';
import CTAButton from '../components/CTAButton';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';
import {
  events,
  categoryLabels,
  getMonthsInOrder,
  type EventCategory,
  type PTAEvent,
} from '../data/events';

type Filter = EventCategory | 'all';

const FILTER_ORDER: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'meeting', label: categoryLabels.meeting + 's' },
  { value: 'school', label: 'School Events' },
  { value: 'fundraiser', label: 'Fundraisers' },
  { value: 'community', label: categoryLabels.community },
  { value: 'restaurant', label: 'Restaurant Nights' },
  { value: 'fifth-grade', label: categoryLabels['fifth-grade'] },
];

function sortEventsForMonth(a: PTAEvent, b: PTAEvent): number {
  if (a.dateTbd && !b.dateTbd) return 1;
  if (!a.dateTbd && b.dateTbd) return -1;
  if (a.date && b.date) return a.date.localeCompare(b.date);
  return 0;
}

export default function Events() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = useMemo(() => {
    return filter === 'all' ? events : events.filter((e) => e.category === filter);
  }, [filter]);

  const months = useMemo(() => getMonthsInOrder(filtered), [filtered]);
  const grouped = useMemo(() => {
    const map: Record<string, PTAEvent[]> = {};
    filtered.forEach((e) => {
      if (!map[e.month]) map[e.month] = [];
      map[e.month].push(e);
    });
    Object.keys(map).forEach((k) => map[k].sort(sortEventsForMonth));
    return map;
  }, [filtered]);

  return (
    <>
      <SeoHead
        title="Events"
        description="Renner Elementary PTA event calendar. Monthly PTA meetings, school events, fundraisers, and community nights — all in one place."
      />

      <section className="container-px py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Calendar</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Mark your calendar, Roadrunners.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            From PTA meetings to STEAM Night to the Spring Carnival — every event the Renner PTA
            knows about lives here. Filter by type below.
          </p>
        </div>
      </section>

      {/* Monthly PTA Meeting — recurring section pinned above the filtered list. */}
      <section className="container-px pb-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-ink/5 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-navy px-3 py-1 text-xs font-medium text-white">
              Recurring · Virtual
            </span>
            <span className="eyebrow">Monthly PTA Meetings</span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
            Monthly PTA Meeting
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            All Renner families are welcome to join us in person at Renner Elementary or attend
            virtually via Microsoft Teams. Meetings are held monthly during the school year —
            specific dates will be posted here as the year begins.
          </p>
          <div className="mt-5">
            <CTAButton
              href={siteConfig.links.ptaMeeting}
              target="_blank"
              rel="noreferrer noopener"
              variant="teams"
              size="lg"
            >
              Join on Microsoft Teams ↗
            </CTAButton>
          </div>
        </div>
      </section>

      <hr className="container-px mx-auto border-ink/10" />

      {/* Filter chips */}
      <section className="container-px pt-8 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          {FILTER_ORDER.map((f) => {
            const active = filter === f.value;
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                aria-pressed={active}
                className={`inline-flex min-h-[40px] items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'border-navy bg-navy text-white'
                    : 'border-navy/30 bg-transparent text-navy hover:border-navy hover:bg-navy/5'
                }`}
              >
                {f.label}
                {active && f.value !== 'all' && (
                  <span
                    aria-hidden
                    className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-xs leading-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFilter('all');
                    }}
                  >
                    ×
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-sm text-ink-muted">
          Showing <strong className="text-ink">{filtered.length}</strong> of {events.length} events
        </p>
      </section>

      {/* Events grouped by month */}
      <section className="container-px pb-12">
        {filtered.length === 0 ? (
          <div className="rounded-3xl bg-cream-50 p-8 text-center ring-1 ring-ink/5">
            <p className="text-lg font-semibold">Nothing here yet for this filter</p>
            <p className="mt-1 text-ink-soft">Try a different category, or browse all events.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {months.map((month) => (
              <div key={month}>
                <h2 className="font-display text-2xl font-semibold text-navy-700 sm:text-3xl">
                  {month}
                </h2>
                <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {grouped[month].map((e) => (
                    <EventCard key={e.id} event={e} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="container-px py-12">
        <SectionHeader
          eyebrow="Full calendar"
          title="Add events to your phone"
          description="The PTA Google Calendar mirrors everything above — tap any event to copy it to your own calendar."
        />
        <div className="mt-8 overflow-hidden rounded-3xl bg-white p-2 shadow-soft ring-1 ring-ink/5">
          <iframe
            title="Renner PTA event calendar"
            src={siteConfig.calendar.embedSrc}
            className="h-[640px] w-full rounded-2xl border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
