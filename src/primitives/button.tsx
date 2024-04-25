import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { LoaderIcon } from 'lucide-react';

import type { VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium outline-none transition-all focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 active:translate-y-0.5 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/80',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground focus-visible:bg-slate-50',
        link: 'text-primary underline underline-offset-4 hover:underline focus-visible:bg-slate-50'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-16 rounded-xl px-8 text-lg',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading = false, asChild = false, children, ...props }, ref) => {
    const Component = asChild ? Slot : 'button';

    const innerRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLButtonElement);

    const [width, setWidth] = useState<number | undefined>();

    useEffect(() => {
      if (innerRef.current && !isLoading) {
        setWidth(innerRef.current.clientWidth);
      }
    }, []);

    return (
      <Component
        className={cn(
          buttonVariants({ variant, size, className }),
          isLoading && 'disabled:opacity-100'
        )}
        style={{ width: isLoading ? width : undefined }}
        ref={innerRef}
        {...props}
      >
        {isLoading ? (
          <div className="animate-in zoom-in">
            <LoaderIcon className="animate-spin" />
          </div>
        ) : (
          children
        )}
      </Component>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
