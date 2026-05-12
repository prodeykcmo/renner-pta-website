import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';

const opportunities = [
  {
    icon: 'star' as const,
    title: 'Class parties',
    body: 'Sign up to host or send treats for fall, winter, and spring class parties.',
  },
  {
    icon: 'megaphone' as const,
    title: 'School events',
    body: 'STEAM Night, Skate Night, Glow Run, Carnival — extra hands welcome at every one.',
  },
  {
    icon: 'gift' as const,
    title: 'Teacher appreciation',
    body: 'Bring in lunch, drop off treats, or organize the staff favorites cart.',
  },
  {
    icon: 'users' as const,
    title: 'Behind the scenes',
    body: 'Help with photography, social media, design, translation, or sponsor outreach.',
  },
];

export default function Volunteer() {
  const hasSignupUrl = siteConfig.links.volunteer && siteConfig.links.volunteer !== '#';
  return (
    <>
      <SeoHead
        title="Volunteer"
        description="Volunteer at Renner Elementary. Sign up for class parties, school events, teacher appreciation, and more."
      />

      <section className="container-px py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Volunteer</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            One slot, one hour, one school year better.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Renner runs on volunteers. Pick the slot that fits your week — even one shift at a
            single event makes a real difference.
          </p>
          <div className="mt-6">
            <CTAButton
              href={hasSignupUrl ? siteConfig.links.volunteer : `mailto:${siteConfig.contact.email}?subject=Volunteer%20interest`}
              target={hasSignupUrl ? '_blank' : undefined}
              rel={hasSignupUrl ? 'noreferrer noopener' : undefined}
              size="lg"
              withArrow
            >
              {hasSignupUrl ? 'See open volunteer slots' : 'Email us to volunteer'}
            </CTAButton>
          </div>
          {!hasSignupUrl && (
            <p className="mt-3 text-xs text-ink-muted">
              SignUpGenius slot-based signups coming soon — for now, drop us an email and we'll
              loop you in for the next event.
            </p>
          )}
        </div>
      </section>

      <section className="container-px pb-12">
        <div className="rounded-[2rem] bg-scarlet-50 p-8 ring-1 ring-scarlet-100 sm:p-10">
          <div className="grid items-start gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="eyebrow text-scarlet-700">Right now — Park Hill District</span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-navy-700 sm:text-3xl">
                Volunteer at the Park Hill Clothing Center
              </h2>
              <p className="mt-3 max-w-2xl text-ink-soft">
                The district's free clothing center serves every Park Hill family. Sort donations,
                hand out essentials, or help families shop — pick a slot that fits your week.
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                Open to all Renner families. Signups managed through the district on SignUpGenius.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <CTAButton
                href={siteConfig.links.clothingCenterVolunteer}
                target="_blank"
                rel="noreferrer noopener"
                size="md"
                withArrow
              >
                Sign up for a slot
              </CTAButton>
              <CTAButton
                href={siteConfig.links.parkHillClothing}
                target="_blank"
                rel="noreferrer noopener"
                size="md"
                variant="ghost"
              >
                About the center
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px pb-12">
        <SectionHeader
          eyebrow="What you can do"
          title="Where extra hands always help"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {opportunities.map((o) => (
            <div
              key={o.title}
              className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-scarlet-50 text-scarlet-700">
                <Icon name={o.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{o.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{o.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px py-12">
        <div className="rounded-[2rem] bg-cream-50 p-8 ring-1 ring-ink/5 sm:p-12">
          <SectionHeader
            eyebrow="Park Hill volunteer requirements"
            title="A quick heads-up before you sign up"
            description="The district requires a free background check for any volunteer who'll be inside the school building. It only takes a few minutes."
          />
          <div className="mt-6">
            <CTAButton
              href="https://www.parkhill.k12.mo.us/parents-students/volunteer"
              target="_blank"
              rel="noreferrer noopener"
              size="lg"
              variant="ghost"
              withArrow
            >
              District volunteer info
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
