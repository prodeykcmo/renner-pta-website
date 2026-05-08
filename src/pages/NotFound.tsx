import CTAButton from '../components/CTAButton';
import SeoHead from '../components/SeoHead';

export default function NotFound() {
  return (
    <>
      <SeoHead title="Page not found" />
      <section className="container-px py-24 text-center">
        <p className="font-display text-6xl font-semibold text-scarlet-600">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
          The Roadrunner ran the wrong way.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          The page you're looking for has moved or doesn't exist yet. Let's get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <CTAButton to="/" size="lg" withArrow>
            Back to home
          </CTAButton>
          <CTAButton to="/events" size="lg" variant="ghost">
            See events
          </CTAButton>
        </div>
      </section>
    </>
  );
}
