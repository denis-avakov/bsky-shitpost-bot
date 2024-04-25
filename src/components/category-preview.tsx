import { AtSignIcon, PenSquareIcon } from 'lucide-react';

import type { CollectionEntry } from 'astro:content';

import { cn } from '~/lib/utils';

import { Button, buttonVariants } from '~/primitives/button';
import { Separator } from '~/primitives/separator';

import { Post } from './post';
import { VisualEditing } from './visual-editing';

interface CategoryPreviewProps {
  qsCreateNewPost?: string | null;
  qsPostEdit?: string | null;
  accountHandle: string;
  collectionId: string;
  posts: CollectionEntry<'nocontextscats'>[];
}

export function CategoryPreview(props: CategoryPreviewProps) {
  return (
    <section className="space-y-4 rounded-xl border-2 bg-gray-50 p-4">
      <div className="flex items-center justify-between">
        <h2>
          <a
            href={`https://bsky.app/profile/` + props.accountHandle}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: 'link' }),
              'space-x-1 rounded-md bg-gradient-to-r from-zinc-200 px-2 text-xl text-gray-900'
            )}
          >
            <AtSignIcon className="h-6 w-6" />
            <span className="relative -top-1">{props.accountHandle}</span>
          </a>
        </h2>

        <VisualEditing
          qsKey={`create=${props.collectionId}`}
          adminUrlPath={`${props.collectionId}/create`}
          defaultOpen={props.qsCreateNewPost === props.collectionId}
          dialogTrigger={
            <Button className="flex items-center space-x-2 text-lg">
              <PenSquareIcon />
              <span>New Post</span>
            </Button>
          }
        />
      </div>

      <div className="grid grid-flow-row auto-rows-max grid-cols-4 gap-4">
        {props.posts.map((post) => (
          <Post
            key={post.id}
            collectionId={props.collectionId}
            qsPostEdit={props.qsPostEdit}
            {...post}
          />
        ))}
      </div>
    </section>
  );
}
