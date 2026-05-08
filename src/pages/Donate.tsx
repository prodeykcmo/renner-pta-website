import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';

export default function Donate() {
  const { donateAlternatives, contact, links } = siteConfig;

  return (
    <>
      <SeoHead
        title="Donate"
        description="Donate to the Renner Elementary PTA. Card, Apple Pay, Google Pay, Venmo, Zelle, or check — every dollar stays at Renner."
      />

      <section className="container-px py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Donate</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Every dollar stays at Renner.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Pick the way that's easiest for you. We've added as many free, low-friction options as
            possible so giving is never the hard part.
          </p>
        </div>
      </section>

      {/* Primary: Zeffy donation */}
      <section className="container-px pb-10">
        <div className="grid gap-8 rounded-[2rem] bg-scarlet-600 p-8 text-cream-50 shadow-lift sm:p-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="eyebrow bg-cream-50/15 text-cream-50">Recommended</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Give online — card, Apple Pay, Google Pay, or bank
            </h2>
            <p className="mt-4 text-cream-50/90">
              We use Zeffy, which charges the PTA <strong>zero fees</strong>. 100% of your gift
              reaches Renner. Recurring monthly gifts are an option too.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-cream-50/85">
              <li className="flex items-center gap-2"><Icon name="check" className="h-4 w-4" /> Credit / debit cards</li>
              <li className="flex items-center gap-2"><Icon name="check" className="h-4 w-4" /> Apple Pay</li>
              <li className="flex items-center gap-2"><Icon name="check" className="h-4 w-4" /> Google Pay</li>
              <li className="flex items-center gap-2"><Icon name="check" className="h-4 w-4" /> Bank transfer (ACH)</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 text-ink shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wider text-scarlet-700">
              Suggested amounts
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {['$10', '$25', '$50', '$100', '$250', 'Other'].map((v) => (
                <a
                  key={v}
                  href={links.donate}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-2xl border border-ink/10 bg-cream-50 px-3 py-3 text-center text-sm font-semibold text-ink hover:border-scarlet-600 hover:bg-scarlet-50"
                >
                  {v}
                </a>
              ))}
            </div>
            <CTAButton
              href={links.donate}
              target="_blank"
              rel="noreferrer noopener"
              size="lg"
              variant="primary"
              className="mt-5 w-full"
            >
              Donate now
            </CTAButton>
            <p className="mt-3 text-xs text-ink-muted">
              You'll be redirected to our secure Zeffy donation form.
            </p>
          </div>
        </div>
      </section>

      {/* Alternatives */}
      <section className="container-px py-12">
        <SectionHeader
          eyebrow="Other ways to give"
          title="Use what works for you"
          description="Prefer Venmo, Zelle, or a check? We've got you."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {/* Venmo */}
          <a
            href={donateAlternatives.venmo.url}
            target="_blank"
            rel="noreferrer noopener"
            className="block rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5 transition-shadow hover:shadow-lift"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-scarlet-50 text-scarlet-700">
              <Icon name="heart" className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-xl font-semibold">Venmo</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">
              Send to <strong>{donateAlternatives.venmo.handle}</strong>. Add a note so we can
              thank you.
            </p>
            <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-scarlet-700">
              Open in Venmo <Icon name="arrow-right" className="h-4 w-4" />
            </p>
          </a>

          {/* Zelle */}
          <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-scarlet-50 text-scarlet-700">
              <Icon name="phone" className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-xl font-semibold">Zelle</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">
              {donateAlternatives.zelle.email || donateAlternatives.zelle.phone ? (
                <>
                  Send through your bank to{' '}
                  <strong>
                    {donateAlternatives.zelle.email || donateAlternatives.zelle.phone}
                  </strong>
                  .
                </>
              ) : (
                <>Coming soon — email us if you'd like to give via Zelle today.</>
              )}
            </p>
          </div>

          {/* Check */}
          <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-scarlet-50 text-scarlet-700">
              <Icon name="document" className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-xl font-semibold">Check</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">
              Pay to <strong>{donateAlternatives.mailedCheck.payTo}</strong>, mail to{' '}
              {donateAlternatives.mailedCheck.mailTo}. Or send in with your student.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px py-12">
        <div className="rounded-[2rem] bg-cream-50 p-8 ring-1 ring-ink/5 sm:p-12">
          <SectionHeader
            eyebrow="Tax-deductible"
            title="The Renner PTA is a registered nonprofit"
            description="Donations are tax-deductible to the extent allowed by law. Receipts are emailed automatically through Zeffy. For other methods, email us and we'll send one over."
          />
          <p className="mt-4 text-sm text-ink-muted">
            Questions? Email{' '}
            <a className="text-scarlet-700 hover:underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
