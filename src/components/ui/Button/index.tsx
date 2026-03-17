import { type ReactNode, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
type ButtonSize = 'sm' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = 'primary',
  size = 'lg',
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${size}`,
    `btn--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
