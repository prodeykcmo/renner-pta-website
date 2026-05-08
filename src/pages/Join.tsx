import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import BoardCard from '../components/BoardCard';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';
import { boardMembers } from '../data/board';

const reasons = [
  {
    icon: 'star' as const,
    title: 'Every dollar stays at Renner',
    body: 'Dues directly fund classroom support, family events, teacher appreciation, and the spring carnival.',
  },
  {
    icon: 'users' as const,
    title: 'Connect with other families',
    body: 'Meet other Roadrunner parents, share rides, build the community your kids grow up in.',
  },
  {
    icon: 'megaphone' as const,
    title: 'Have a voice',
    body: 'Members vote at monthly meetings on how funds are spent and which initiatives we back.',
  },
  {
    icon: 'heart' as const,
    title: 'Support every kid, not just yours',
    body: 'PTA-funded programs reach every classroom, including kids whose families can\'t pay dues.',
  },
];

export default function Join() {
  return (
    <>
      <SeoHead
        title="Join the PTA"
        description="Become a Renner Elementary PTA member for the 2026–2027 school year. Online sign-up takes 2 minutes."
      />

      <section className="container-px py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Membership</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Become a Renner PTA member.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Two minutes online. Card, Apple Pay, Google Pay, or bank transfer. Annual dues power
            every classroom moment, family event, and teacher thank-you we make happen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton
              href={siteConfig.links.membership}
              target="_blank"
              rel="noreferrer noopener"
              size="lg"
              withArrow
            >
              Join online now
            </CTAButton>
            <CTAButton to="/donate" size="lg" variant="ghost">
              Just want to donate?
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="container-px pb-12">
        <SectionHeader eyebrow="Why join" title="Four reasons it's worth it" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-scarlet-50 text-scarlet-700">
                <Icon name={r.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px py-12">
        <div className="rounded-[2rem] bg-scarlet-600 p-8 text-cream-50 shadow-lift sm:p-12">
          <div className="max-w-2xl">
            <span className="eyebrow bg-cream-50/15 text-cream-50">Sign up</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Pay dues for 2026–27
            </h2>
            <p className="mt-3 text-cream-50/90">
              The button below opens our secure Zeffy form — Zeffy charges no platform fees, so
              100% of your dues go to the PTA.
            </p>
            <div className="mt-6">
              <CTAButton
                href={siteConfig.links.membership}
                target="_blank"
                rel="noreferrer noopener"
                size="lg"
                variant="navy"
                withArrow
              >
                Open membership form
              </CTAButton>
            </div>
            <p className="mt-3 text-xs text-cream-50/70">
              Prefer Venmo or check? See the <a href="/donate" className="underline">donate page</a> for alternatives.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px py-12">
        <SectionHeader
          eyebrow="Your 2026–27 board"
          title="The Roadrunners running this thing"
          description="Volunteer board members. Email any of us — we'd love to meet you."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((m) => (
            <BoardCard key={m.role} member={m} />
          ))}
        </div>
      </section>
    </>
  );
}
