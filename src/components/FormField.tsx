import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type BaseProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children?: ReactNode;
};

type InputProps = BaseProps &
  ComponentPropsWithoutRef<'input'> & { as?: 'input' };
type TextareaProps = BaseProps &
  ComponentPropsWithoutRef<'textarea'> & { as: 'textarea' };
type SelectProps = BaseProps &
  ComponentPropsWithoutRef<'select'> & { as: 'select' };

type Props = InputProps | TextareaProps | SelectProps;

const fieldClass =
  'block w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-base text-ink shadow-sm placeholder:text-ink-muted focus:border-scarlet-600 focus:outline-none focus:ring-2 focus:ring-scarlet-600/30';

export default function FormField(props: Props) {
  const { id, label, hint, error, required, as = 'input', children, ...rest } = props as Props & {
    as?: 'input' | 'textarea' | 'select';
  };

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
        {required && <span className="ml-1 text-scarlet-700" aria-hidden>*</span>}
      </label>

      {as === 'textarea' ? (
        <textarea
          id={id}
          {...(rest as ComponentPropsWithoutRef<'textarea'>)}
          required={required}
          className={`${fieldClass} min-h-[120px] resize-y`}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={hint || error ? `${id}-help` : undefined}
        />
      ) : as === 'select' ? (
        <select
          id={id}
          {...(rest as ComponentPropsWithoutRef<'select'>)}
          required={required}
          className={fieldClass}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={hint || error ? `${id}-help` : undefined}
        >
          {children}
        </select>
      ) : (
        <input
          id={id}
          {...(rest as ComponentPropsWithoutRef<'input'>)}
          required={required}
          className={fieldClass}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={hint || error ? `${id}-help` : undefined}
        />
      )}

      {(hint || error) && (
        <p
          id={`${id}-help`}
          className={`text-xs ${error ? 'text-scarlet-700' : 'text-ink-muted'}`}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
}
