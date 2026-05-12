import { useMemo, useState, type ReactNode } from 'react';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';
import {
  documents,
  documentCategories,
  type DocCategory,
} from '../data/documents';

type CategoryFilter = DocCategory | 'all';
type YearFilter = string | 'all';

// Parse 'YYYY-MM-DD' as a local date so the displayed day doesn't shift by
// a timezone (which `new Date('2024-08-22')` would do, treating it as UTC).
function formatDate(iso?: string) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Documents() {
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [schoolYear, setSchoolYear] = useState<YearFilter>('all');

  const availableYears = useMemo(() => {
    const years = new Set<string>();
    documents.forEach((d) => d.schoolYear && years.add(d.schoolYear));
    return Array.from(years).sort().reverse();
  }, []);

  const counts = useMemo(() => {
    const byCat: Record<string, number> = { all: documents.length };
    const byYear: Record<string, number> = { all: documents.length };
    documents.forEach((d) => {
      byCat[d.category] = (byCat[d.category] ?? 0) + 1;
      if (d.schoolYear) {
        byYear[d.schoolYear] = (byYear[d.schoolYear] ?? 0) + 1;
      }
    });
    return { byCat, byYear };
  }, []);

  const filtered = useMemo(() => {
    return documents
      .filter((d) => category === 'all' || d.category === category)
      .filter((d) => schoolYear === 'all' || d.schoolYear === schoolYear)
      .slice()
      .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
  }, [category, schoolYear]);

  const clearFilters = () => {
    setCategory('all');
    setSchoolYear('all');
  };
  const hasActiveFilter = category !== 'all' || schoolYear !== 'all';

  return (
    <>
      <SeoHead
        title="Documents"
        description="Renner Elementary PTA documents — meeting minutes, bylaws, and more. View or download any document."
      />

      <section className="container-px py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Documents</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Open books, open community.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Meeting notes, bylaws, and financial summaries. View any document right in your browser
            or download a copy — works the same on phone and laptop.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="container-px pb-4">
        <div className="space-y-5 rounded-3xl bg-cream-50 p-5 ring-1 ring-ink/5 sm:p-6">
          <FilterRow label="Type">
            <FilterChip
              active={category === 'all'}
              count={counts.byCat.all}
              onClick={() => setCategory('all')}
            >
              All
            </FilterChip>
            {documentCategories.map((c) => (
              <FilterChip
                key={c.value}
                active={category === c.value}
                count={counts.byCat[c.value] ?? 0}
                onClick={() => setCategory(c.value)}
              >
                {c.label}
              </FilterChip>
            ))}
          </FilterRow>

          {availableYears.length > 0 && (
            <FilterRow label="School year">
              <FilterChip
                active={schoolYear === 'all'}
                count={counts.byYear.all}
                onClick={() => setSchoolYear('all')}
              >
                All years
              </FilterChip>
              {availableYears.map((y) => (
                <FilterChip
                  key={y}
                  active={schoolYear === y}
                  count={counts.byYear[y] ?? 0}
                  onClick={() => setSchoolYear(y)}
                >
                  {y}
                </FilterChip>
              ))}
            </FilterRow>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-4">
            <p className="text-sm text-ink-muted">
              Showing <strong className="text-ink">{filtered.length}</strong> of{' '}
              {documents.length} documents
            </p>
            {hasActiveFilter && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex min-h-[40px] items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-scarlet-600 hover:text-scarlet-700 hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container-px pb-12">
        {filtered.length === 0 ? (
          <div className="rounded-3xl bg-white p-8 text-center shadow-soft ring-1 ring-ink/5">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-cream-100 text-ink-muted">
              <Icon name="document" className="h-6 w-6" />
            </span>
            <p className="mt-4 text-lg font-semibold">Nothing here yet for this filter</p>
            <p className="mt-1 max-w-md mx-auto text-ink-soft">
              We haven't posted documents in this category yet. Email the PTA secretary if you need
              something specific — we can usually find it.
            </p>
            <div className="mt-5">
              <CTAButton
                href={`mailto:${siteConfig.contact.email}`}
                size="md"
                variant="ghost"
              >
                Email the PTA
              </CTAButton>
            </div>
          </div>
        ) : (
          <ul className="grid gap-4 md:grid-cols-2">
            {filtered.map((doc) => {
              const cat = documentCategories.find((c) => c.value === doc.category);
              return (
                <li
                  key={doc.id}
                  className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-scarlet-50 text-scarlet-700">
                      <Icon name="document" className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      {cat && (
                        <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                          {cat.label}
                        </span>
                      )}
                      <h3 className="mt-0.5 text-base font-semibold leading-tight">
                        {doc.title}
                      </h3>
                      {doc.date && (
                        <p className="mt-1 text-sm text-ink-muted">{formatDate(doc.date)}</p>
                      )}
                      {doc.description && (
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                          {doc.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`/${doc.filename}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full bg-navy-700 px-5 py-2 text-sm font-semibold text-cream-50 transition hover:bg-navy-700/90 sm:flex-none"
                      aria-label={`View ${doc.title} in a new tab`}
                    >
                      View
                      <Icon name="arrow-right" className="h-4 w-4" />
                    </a>
                    <a
                      href={`/${doc.filename}`}
                      download
                      className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-navy-700 ring-1 ring-navy-700/20 transition hover:bg-cream-50 sm:flex-none"
                      aria-label={`Download ${doc.title}`}
                    >
                      Download
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* Need help footer */}
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

// ----- Local helpers ----------------------------------------------------------

function FilterRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterChip({
  active,
  count,
  onClick,
  children,
}: {
  active: boolean;
  count: number;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? 'bg-scarlet-600 text-cream-50 shadow-soft'
          : 'bg-white text-ink-soft ring-1 ring-ink/10 hover:bg-cream-100 hover:text-ink'
      }`}
    >
      <span>{children}</span>
      <span
        className={`min-w-[1.5rem] rounded-full px-2 text-center text-xs font-semibold tabular-nums ${
          active ? 'bg-white/25 text-cream-50' : 'bg-ink/5 text-ink-muted'
        }`}
      >
        {count}
      </span>
    </button>
  );
}
