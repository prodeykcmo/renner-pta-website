import type { BoardMember } from '../data/board';
import Icon from './Icon';

function initials(name: string) {
  if (name === 'TBD') return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

export default function BoardCard({ member }: { member: BoardMember }) {
  return (
    <div className="flex flex-col rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5">
      <div className="flex items-center gap-3">
        {/* TODO: replace with real photo */}
        <span
          className="grid h-12 w-12 place-items-center rounded-full bg-gold font-display text-lg font-bold text-navy"
          aria-hidden
        >
          {initials(member.name)}
        </span>
        <div>
          <p className="font-semibold text-ink">{member.name}</p>
          <p className="text-sm font-medium text-navy-700">{member.role}</p>
        </div>
      </div>
      {member.bio && (
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{member.bio}</p>
      )}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="mt-3 inline-flex items-center gap-1 text-sm text-ink-soft hover:text-ink"
        >
          <Icon name="mail" className="h-4 w-4" /> {member.email}
        </a>
      )}
    </div>
  );
}
