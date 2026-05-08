import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';

const docCategories = [
  {
    title: 'Meeting minutes',
    description: 'Notes from monthly PTA meetings.',
    icon: 'document' as const,
    note: 'Add new meeting minutes by uploading PDFs to a public Google Drive folder and linking it here.',
  },
  {
    title: 'PTA bylaws',
    description: 'How the PTA operates, votes, and spends funds.',
    icon: 'document' as const,
  },
  {
    title: 'Annual budget',
    description: 'Where dues and donations go each year.',
    icon: 'document' as const,
  },
  {
    title: 'Staff favorites',
    description: 'Each teacher and staff member\'s favorite snacks, drinks, and gift cards.',
    icon: 'star' as const,
  },
];

export default function Documents() {
  return (
    <>
      <SeoHead
        title="Documents"
        description="Renner Elementary PTA documents — meeting minutes, bylaws, budget, and staff favorites."
      />

      <section className="container-px py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Documents</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Open books, open community.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Meeting notes, financial summaries, and resources for current and prospective members.
          </p>
        </div>
      </section>

      <section className="container-px pb-12">
        <SectionHeader eyebrow="Browse" title="What's here" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {docCategories.map((c) => (
            <div
              key={c.title}
              className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-scarlet-50 text-scarlet-700">
                <Icon name={c.icon} className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{c.description}</p>
                <p className="mt-3 text-sm text-ink-muted">
                  <em>Document links coming soon.</em>
                </p>
                {c.note && (
                  <p className="mt-2 text-xs text-ink-muted">{c.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px py-12">
        <div className="rounded-[2rem] bg-cream-50 p-8 ring-1 ring-ink/5 sm:p-12">
          <SectionHeader
            eyebrow="Need something specific?"
            title="Email the secretary"
            description="If a document isn't up here yet, the PTA secretary can usually find it for you."
          />
          <div className="mt-6">
            <CTAButton href={`mailto:${siteConfig.contact.email}`} size="lg" variant="primary">
              Email the PTA
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
