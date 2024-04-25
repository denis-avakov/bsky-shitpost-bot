import { useState } from 'react';
import { LoaderIcon } from 'lucide-react';

import { cn } from '~/lib/utils';
import { useDelayUnmount } from '~/hooks/use-delay-unmount';

import { Dialog, DialogContent, DialogTrigger } from '~/primitives/dialog';

interface VisualEditingProps {
  /** A query string used to save state between reloads. */
  qsKey?: string;
  defaultOpen: boolean;
  adminUrlPath: string;
  dialogTrigger: React.ReactNode;
}

export function VisualEditing(props: VisualEditingProps) {
  const [isKeystaticLoaded, setIsKeystaticLoaded] = useState(false);
  const shouldRenderChild = useDelayUnmount(!isKeystaticLoaded, 300);

  const onOpenChange = (open: boolean) => {
    if (!props.qsKey) {
      return;
    }

    if (open) {
      history.pushState({}, '', location.pathname + '?' + props.qsKey);
    } else {
      history.pushState({}, '', location.pathname + '');
      setIsKeystaticLoaded(false);
    }
  };

  return (
    <Dialog defaultOpen={props.defaultOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{props.dialogTrigger}</DialogTrigger>

      <DialogContent>
        {shouldRenderChild && (
          <div
            className={cn(
              'absolute inset-0 z-10 flex items-center justify-center bg-white',
              isKeystaticLoaded && 'opacity-0 transition-opacity duration-300'
            )}
          >
            <LoaderIcon className="animate-spin" />
          </div>
        )}

        <iframe
          src={`/keystatic/collection/${props.adminUrlPath}`}
          onLoad={() => setTimeout(() => setIsKeystaticLoaded(true), 500)}
          className="h-full w-full border-none"
        />
      </DialogContent>
    </Dialog>
  );
}
