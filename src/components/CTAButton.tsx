import { Link } from 'react-router-dom';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import Icon from './Icon';

// =============================================================================
// 4-level button hierarchy + Teams special:
//   primary   — Level 1: gold filled, navy text. Conversion CTA (Join the PTA).
//   secondary — Level 2: navy outlined. Donate, Volunteer, secondary actions.
//   ghost     — Level 3: gray outlined. Low-priority links styled as buttons.
//   navy      — filled navy. Reserved for special cases (kept for compatibility).
//   teams     — Microsoft Teams brand color (#6264A7).
// Level 4 (text link) is a plain <a>, not a button — don't use CTAButton.
// =============================================================================

type Variant = 'primary' | 'secondary' | 'ghost' | 'navy' | 'teams';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-gold text-navy hover:bg-gold-dark shadow-soft hover:shadow-lift active:scale-[0.99]',
  secondary:
    'border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-white',
  ghost:
    'border border-gray-300 text-gray-700 bg-transparent hover:border-gray-400 hover:bg-gray-50',
  navy:
    'bg-navy text-white hover:bg-navy-dark shadow-soft hover:shadow-lift active:scale-[0.99]',
  teams:
    'bg-[#6264A7] text-white hover:bg-[#4F5195] shadow-soft hover:shadow-lift active:scale-[0.99]',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

type SharedProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
};

type LinkProps = SharedProps & { to: string; href?: never };
type AnchorProps = SharedProps &
  ComponentPropsWithoutRef<'a'> & { href: string; to?: never };
type ButtonProps = SharedProps &
  ComponentPropsWithoutRef<'button'> & { to?: undefined; href?: undefined };

type Props = LinkProps | AnchorProps | ButtonProps;

export default function CTAButton(props: Props) {
  const {
    variant = 'primary',
    size = 'md',
    withArrow = false,
    className = '',
    children,
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <Icon name="arrow-right" className="h-4 w-4" />}
    </>
  );

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { variant: _v, size: _s, withArrow: _a, className: _c, children: _ch, ...rest } =
      props as AnchorProps;
    return (
      <a {...rest} className={classes}>
        {content}
      </a>
    );
  }

  const { variant: _v, size: _s, withArrow: _a, className: _c, children: _ch, ...rest } =
    props as ButtonProps;
  return (
    <button {...rest} className={classes}>
      {content}
    </button>
  );
}
