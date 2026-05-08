import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';

// QR code helper — uses the free api.qrserver.com service.
// No account required. Returns a PNG URL for any text/URL.
function qrUrl(data: string, size = 240) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;
}

type CopyBlock = {
  id: string;
  label: string;
  content: string;
};

const blocks: CopyBlock[] = [
  {
    id: 'short-blurb',
    label: 'Short blurb (newsletter, classroom email)',
    content: `Renner PTA — events, sign-ups, dues, and donations all in one place. Visit the new site and add events to your phone calendar in one tap.`,
  },
  {
    id: 'membership-blurb',
    label: 'Membership push',
    content: `Join the Renner PTA for 2026–27! Annual dues fund every classroom event, family night, and teacher thank-you. Sign up online in 2 minutes — card, Apple Pay, or bank transfer accepted.`,
  },
  {
    id: 'donate-blurb',
    label: 'Donate push',
    content: `Support the Renner Roadrunners! Donate online (card, Apple Pay, Venmo, Zelle, or check). 100% stays at Renner — Zeffy charges no platform fees.`,
  },
  {
    id: 'volunteer-blurb',
    label: 'Volunteer push',
    content: `One slot, one hour, one school year better. Find open volunteer slots for class parties, school events, and teacher appreciation on the Renner PTA site.`,
  },
];

export default function EmbedKit() {
  const [copied, setCopied] = useState<string | null>(null);

  function copy(id: string, text: string) {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied((c) => (c === id ? null : c)), 1500);
    });
  }

  // Site URL is unknown at build time, so we use the current page origin
  // for QR code generation. Falls back to a friendly placeholder.
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://renner-pta-website.vercel.app';

  const links = [
    { id: 'home', label: 'Home page', url: origin },
    { id: 'join', label: 'Join the PTA', url: `${origin}/join` },
    { id: 'donate', label: 'Donate', url: `${origin}/donate` },
    { id: 'volunteer', label: 'Volunteer', url: `${origin}/volunteer` },
    { id: 'events', label: 'Events calendar', url: `${origin}/events` },
    {
      id: 'membership-zeffy',
      label: 'Direct Zeffy membership',
      url: siteConfig.links.membership,
    },
  ];

  return (
    <>
      <SeoHead
        title="Embed Kit"
        description="Copy-paste content for teachers, room parents, and board members. Pre-written blurbs, QR codes, and links for newsletters and emails."
      />

      <section className="container-px py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">For teachers & board</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Grab a link, blurb, or QR code in one tap.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Pre-written content for newsletters, classroom emails, and bulletin boards. Click to
            copy — paste into anything. Translate the destination page in 100+ languages from the
            bar at the top of every page.
          </p>
        </div>
      </section>

      {/* Pre-written blurbs */}
      <section className="container-px pb-12">
        <SectionHeader eyebrow="Pre-written blurbs" title="Click to copy" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {blocks.map((b) => (
            <div
              key={b.id}
              className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-wider text-scarlet-700">
                  {b.label}
                </p>
                <button
                  type="button"
                  onClick={() => copy(b.id, b.content)}
                  className="inline-flex items-center gap-1 rounded-full bg-scarlet-50 px-3 py-1 text-xs font-semibold text-scarlet-700 hover:bg-scarlet-100"
                >
                  <Icon name={copied === b.id ? 'check' : 'document'} className="h-3.5 w-3.5" />
                  {copied === b.id ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="leading-relaxed text-ink-soft">{b.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QR codes / links */}
      <section className="container-px py-12">
        <SectionHeader
          eyebrow="QR codes & links"
          title="For flyers, posters, and back-to-school nights"
          description="Right-click any QR code to save the image. Or click the URL to copy it."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <div
              key={l.id}
              className="flex flex-col items-center gap-3 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5"
            >
              <img
                src={qrUrl(l.url)}
                alt={`QR code for ${l.label}`}
                className="h-40 w-40 rounded-xl bg-cream-50"
                loading="lazy"
              />
              <p className="font-semibold text-ink">{l.label}</p>
              <button
                type="button"
                onClick={() => copy(l.id, l.url)}
                className="text-xs text-scarlet-700 hover:underline break-all"
                title="Click to copy URL"
              >
                {copied === l.id ? 'Copied!' : l.url}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Translation tip */}
      <section className="container-px py-12">
        <div className="rounded-[2rem] bg-navy-700 p-8 text-cream-50 sm:p-12">
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cream-50/15">
              <Icon name="translate" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold">Multilingual families</h3>
              <p className="mt-2 text-cream-50/85">
                Every page on this site can be translated by parents using the language bar at the
                top. Share the link as-is — they'll pick their language when they arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* External link to embed kit */}
      <section className="container-px py-12 text-center">
        <CTAButton to="/contact" variant="ghost">
          Need a custom asset? Email the PTA
        </CTAButton>
      </section>
    </>
  );
}
