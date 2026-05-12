import {
  type PTAEvent,
  categoryLabels,
  categoryStyles,
  formatEventDate,
} from '../data/events';
import CTAButton from './CTAButton';
import Icon from './Icon';

function displayDate(event: PTAEvent): string {
  if (event.dateTbd || !event.date) {
    // Strip the year from "September 2026" -> "September" for the TBD label,
    // since the year is usually obvious from context.
    const monthOnly = event.month.split(' ')[0];
    return `Date TBD — ${monthOnly}`;
  }
  return formatEventDate(event.date);
}

export default function EventCard({ event }: { event: PTAEvent }) {
  const hasAnyAction = event.teamsLink || event.volunteerLink;
  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5">
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[event.category]}`}
        >
          {categoryLabels[event.category]}
        </span>
        {event.fifthGradeOnly && (
          <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-700">
            5th grade
          </span>
        )}
      </div>

      <div className="mt-4 flex items-start gap-3">
        <span
          className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-navy-50 text-navy-700"
          aria-hidden
        >
          <Icon name="calendar" className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-navy-700">{displayDate(event)}</p>
          {event.time && <p className="text-xs text-ink-muted">{event.time}</p>}
        </div>
      </div>

      <h3 className="mt-3 text-xl font-semibold">{event.title}</h3>
      <p className="mt-1 text-sm text-ink-muted">{event.location}</p>
      <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{event.description}</p>

      {hasAnyAction && (
        <div className="mt-5 flex flex-wrap gap-2">
          {event.teamsLink && (
            <CTAButton
              href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_NmE2NjUxNTUtOGNlMy00NmQ4LTlhMTMtOTVjZWIzODBmZjkx%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522201533f2-95f9-4b74-b6d9-26c5d9f73311%2522%252c%2522Oid%2522%253a%25226ff8f329-51a7-46ba-b001-091274da851d%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=91082e79-3d0e-480e-885e-d705690e95d5&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
              target="_blank"
              rel="noreferrer noopener"
              variant="teams"
              size="md"
            >
              Join on Microsoft Teams ↗
            </CTAButton>
          )}
          {event.volunteerLink && (
            <CTAButton to="/volunteer" variant="ghost" size="md" withArrow>
              Sign up to volunteer
            </CTAButton>
          )}
        </div>
      )}
    </article>
  );
}
