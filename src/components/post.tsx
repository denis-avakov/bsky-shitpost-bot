import type { CollectionEntry } from 'astro:content';

import { Button } from '~/primitives/button';
import { ScrollArea, ScrollBar } from '~/primitives/scroll-area';

import { VisualEditing } from './visual-editing';

type PostProps = {
  collectionId: string;
  qsPostEdit?: string | null;
} & CollectionEntry<'nocontextscats'>;

export function Post(props: PostProps) {
  const postId = props.id.replace('/index', '');

  const attachments = [props.data.image1, props.data.image2, props.data.image3, props.data.image4];
  const hasAttachments = attachments.some((value) => value);

  return (
    <PostEditor collectionId={props.collectionId} postId={postId} qsPostEdit={props.qsPostEdit}>
      <div className="h-full w-full flex-col justify-start space-y-2 p-2">
        <p>{props.data.content}</p>

        {hasAttachments && (
          <ScrollArea className="w-full pb-4" type="always">
            <div className="flex items-start gap-2">
              {attachments.map((fileName) => {
                if (!fileName) {
                  return null;
                }

                return (
                  <div className="relative mb-0.5 aspect-auto w-52 overflow-hidden rounded-lg border bg-slate-50 shadow-sm">
                    <img src={`/src/content/${props.collection}/${postId}/${fileName}`} />
                  </div>
                );
              })}
            </div>

            <ScrollBar
              orientation="horizontal"
              className="cursor-grab active:cursor-grabbing"
              onClick={(event) => event.preventDefault()}
            />
          </ScrollArea>
        )}
      </div>
    </PostEditor>
  );
}

interface PostEditorProps {
  collectionId: string;
  postId: string;
  qsPostEdit?: string | null;
  children: React.ReactNode;
}

function PostEditor(props: PostEditorProps) {
  return (
    <VisualEditing
      qsKey={`post=${props.postId}`}
      adminUrlPath={`${props.collectionId}/item/${props.postId}`}
      defaultOpen={props.qsPostEdit === props.postId}
      dialogTrigger={
        <Button
          variant="ghost"
          className="h-auto whitespace-normal border bg-gray-100 p-0 text-left active:translate-y-0"
        >
          {props.children}
        </Button>
      }
    />
  );
}
