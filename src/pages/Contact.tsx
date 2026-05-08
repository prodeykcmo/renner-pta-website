import { useState, type FormEvent } from 'react';
import SectionHeader from '../components/SectionHeader';
import FormField from '../components/FormField';
import CTAButton from '../components/CTAButton';
import Icon from '../components/Icon';
import SeoHead from '../components/SeoHead';
import { siteConfig } from '../siteConfig';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { contact, social, links } = siteConfig;

  // Frontend-only success state for now. To collect submissions, swap this
  // form for a Tally / Formspree embed and configure both
  // contact.email AND contact.bccEmail as recipients in that tool.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <SeoHead
        title="Contact"
        description="Get in touch with the Renner Elementary PTA. Email, phone, school address, and feedback form."
      />

      <section className="container-px py-14 sm:py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            We'd love to hear from you.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Questions, ideas, partnership requests, or just want to say hi — drop the PTA a note.
            We try to reply within a few days.
          </p>
        </div>
      </section>

      <section className="container-px pb-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact info card */}
          <div>
            <SectionHeader eyebrow="Reach us" title="A few ways to connect" />
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink/5">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-scarlet-50 text-scarlet-700" aria-hidden>
                  <Icon name="mail" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">PTA email</p>
                  <a href={`mailto:${contact.email}`} className="text-sm text-ink-soft hover:text-ink">
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink/5">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-scarlet-50 text-scarlet-700" aria-hidden>
                  <Icon name="phone" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">School front office</p>
                  <a href={`tel:${contact.schoolPhone}`} className="text-sm text-ink-soft hover:text-ink">
                    {contact.schoolPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink/5">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-scarlet-50 text-scarlet-700" aria-hidden>
                  <Icon name="pin" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">School address</p>
                  <p className="text-sm text-ink-soft">
                    {siteConfig.schoolName}
                    <br />
                    {contact.address.line1}
                    <br />
                    {contact.address.city}, {contact.address.state} {contact.address.zip}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink/5">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-scarlet-50 text-scarlet-700" aria-hidden>
                  <Icon name="instagram" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Social</p>
                  <div className="mt-1 flex gap-3 text-sm">
                    <a href={social.facebook} target="_blank" rel="noreferrer noopener" className="text-ink-soft hover:text-ink">
                      Facebook
                    </a>
                    <a href={social.instagram} target="_blank" rel="noreferrer noopener" className="text-ink-soft hover:text-ink">
                      Instagram
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            {links.feedback !== '#' && (
              <div className="mt-6">
                <CTAButton
                  href={links.feedback}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="ghost"
                  withArrow
                >
                  Anonymous feedback form
                </CTAButton>
              </div>
            )}
          </div>

          {/* Contact form */}
          {submitted ? (
            <div role="status" className="rounded-3xl bg-scarlet-50 p-8 ring-1 ring-scarlet-200">
              <h3 className="font-display text-2xl font-semibold text-scarlet-800">Got it — thank you!</h3>
              <p className="mt-2 text-scarlet-800/80">
                We'll get back to you within a few days.
              </p>
              <CTAButton onClick={() => setSubmitted(false)} variant="ghost" className="mt-5">
                Send another note
              </CTAButton>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField id="c-name" label="Your name" required placeholder="Jane Roadrunner" />
                <FormField id="c-email" label="Email" type="email" required placeholder="you@example.com" />
              </div>
              <FormField id="c-subject" label="Subject" placeholder="What's on your mind?" />
              <FormField as="textarea" id="c-message" label="Message" required placeholder="Tell us a little more…" />
              <div className="pt-2">
                <CTAButton size="lg" withArrow type="submit">
                  Send message
                </CTAButton>
              </div>
              <p className="text-xs text-ink-muted">
                This form is a placeholder — replace with a Tally or Formspree embed when ready and
                set both <code>{contact.email}</code> and <code>{contact.bccEmail}</code> as
                recipients.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
