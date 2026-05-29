import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'accent' | 'outline' | 'outline-primary' | 'ghost' | 'white';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

export function Button({
  asChild = false,
  children,
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]';

  const variants = {
    default: 'bg-foreground text-background hover:bg-foreground/90 shadow-md hover:shadow-lg',
    primary:
      'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5',
    accent:
      'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5',
    outline: 'border-2 border-input bg-background hover:bg-muted hover:text-foreground',
    'outline-primary':
      'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground',
    ghost: 'hover:bg-accent/10 hover:text-accent',
    white: 'bg-white text-foreground hover:bg-gray-50 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 font-bold',
  } as const;

  const sizes = {
    default: 'h-11 px-6 py-2',
    sm: 'h-9 rounded-md px-4',
    lg: 'h-14 rounded-xl px-8 text-base',
    icon: 'h-11 w-11',
  } as const;

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (asChild && React.isValidElement<{ className?: string }>(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
    });
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
