import type { FeaturedEvent } from '../data/events';
import CTAButton from './CTAButton';
import Icon from './Icon';

export default function EventCard({ event }: { event: FeaturedEvent }) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5">
      <div className="flex items-center gap-3">
        <span
          className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-50 text-navy-700"
          aria-hidden
        >
          <Icon name="calendar" className="h-6 w-6" />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-scarlet-600">
            {event.dateLabel}
          </p>
          {event.time && (
            <p className="text-xs text-ink-muted">{event.time}</p>
          )}
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{event.title}</h3>
      {event.location && (
        <p className="mt-1 text-sm text-ink-muted">{event.location}</p>
      )}
      <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{event.description}</p>
      {event.signupUrl && (
        <div className="mt-5">
          <CTAButton
            href={event.signupUrl}
            target="_blank"
            rel="noreferrer noopener"
            variant="ghost"
            withArrow
          >
            {event.signupLabel ?? 'Sign up'}
          </CTAButton>
        </div>
      )}
    </article>
  );
}
