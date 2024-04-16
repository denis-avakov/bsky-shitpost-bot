import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { LoaderIcon } from 'lucide-react';

import type { VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-0.5 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        sky: 'bg-[#3873ff] text-primary-foreground hover:bg-[#3873ff]/80 focus-visible:ring-[#3873ff]',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
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

    const [buttonWidth, setButtonWidth] = useState<number | undefined>();

    useEffect(() => {
      if (innerRef.current && !isLoading) {
        setButtonWidth(innerRef.current.clientWidth);
      }
    }, [isLoading, ref]);

    return (
      <Component
        className={cn(
          buttonVariants({ variant, size, className }),
          isLoading && 'disabled:opacity-100'
        )}
        style={{ width: buttonWidth }}
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
