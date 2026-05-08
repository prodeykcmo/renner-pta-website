import SectionHeader from '../components/SectionHeader';
import EventCard from '../components/EventCard';
import CTAButton from '../components/CTAButton';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';
import { featuredEvents } from '../data/events';

export default function Events() {
  return (
    <>
      <SeoHead
        title="Events"
        description="Renner Elementary PTA event calendar. Add events to your phone, RSVP to upcoming nights, and never miss a Roadrunner gathering."
      />

      <section className="container-px py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Calendar</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Mark your calendar, Roadrunners.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            From Skate Night to STEAM Night to the Spring Carnival, this is where every PTA event
            lives. Tap any event in the calendar below to add it to your own phone calendar.
          </p>
        </div>
      </section>

      <section className="container-px pb-12">
        <SectionHeader eyebrow="Featured" title="Coming up next" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredEvents.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>

      <section className="container-px py-12">
        <SectionHeader
          eyebrow="Full calendar"
          title="Everything coming up at Renner"
          description="Powered by Google Calendar — same calendar your board manages from their phones."
        />
        <div className="mt-8 overflow-hidden rounded-3xl bg-white p-2 shadow-soft ring-1 ring-ink/5">
          <iframe
            title="Renner PTA event calendar"
            src={siteConfig.calendar.embedSrc}
            className="h-[640px] w-full rounded-2xl border-0"
            loading="lazy"
          />
        </div>
        <p className="mt-3 text-xs text-ink-muted">
          To add an event to your own calendar, click any event then use "Copy to my calendar" or
          download the .ics file.
        </p>
      </section>

      <section className="container-px py-12">
        <div className="rounded-[2rem] bg-cream-50 p-8 ring-1 ring-ink/5 sm:p-12">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <span className="eyebrow">Monthly meetings</span>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                Join the next PTA meeting
              </h2>
              <p className="mt-3 max-w-xl text-ink-soft">
                All Roadrunner families are welcome. Meetings happen monthly, in person and on
                Microsoft Teams. The recurring meeting link works every time.
              </p>
            </div>
            <CTAButton
              href={siteConfig.links.ptaMeeting}
              target="_blank"
              rel="noreferrer noopener"
              size="lg"
              variant="primary"
            >
              <Icon name="calendar" className="h-4 w-4" /> Join on Teams
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
