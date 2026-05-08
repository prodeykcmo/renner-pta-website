import { Link } from 'react-router-dom';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import Icon from './Icon';

type Variant = 'primary' | 'secondary' | 'ghost' | 'navy';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-scarlet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-scarlet-500 text-white hover:bg-scarlet-600 shadow-soft hover:shadow-lift active:scale-[0.99]',
  secondary:
    'bg-navy-700 text-white hover:bg-navy-800 shadow-soft hover:shadow-lift active:scale-[0.99]',
  navy:
    'bg-navy-700 text-white hover:bg-navy-800 shadow-soft hover:shadow-lift active:scale-[0.99]',
  ghost:
    'bg-white text-navy-700 ring-1 ring-inset ring-navy-700/25 hover:bg-navy-50',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
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
