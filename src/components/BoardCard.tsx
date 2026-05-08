import type { BoardMember } from '../data/board';
import Icon from './Icon';

export default function BoardCard({ member }: { member: BoardMember }) {
  return (
    <div className="flex flex-col rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5">
      <div className="flex items-center gap-3">
        <span
          className="grid h-12 w-12 place-items-center rounded-full bg-scarlet-50 font-display text-lg font-semibold text-scarlet-700"
          aria-hidden
        >
          {member.name === 'TBD' ? '?' : member.name.charAt(0)}
        </span>
        <div>
          <p className="font-semibold text-ink">{member.name}</p>
          <p className="text-sm text-scarlet-700">{member.role}</p>
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
