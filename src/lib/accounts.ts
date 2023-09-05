import type { AtpAgentLoginOpts } from '@atproto/api';
import type { PostItem } from '~/lib/types.js';

import posts from '~/data/posts.json';

type Account = AtpAgentLoginOpts & {
  posts: PostItem[];
};

if (!process.env.BSKY_NOCONTEXTSCATS_HANDLE || !process.env.BSKY_NOCONTEXTSCATS_PASSWORD) {
  throw new Error('Some environment variables are not specified ☹️');
}

export const accounts = [
  {
    identifier: process.env.BSKY_NOCONTEXTSCATS_HANDLE,
    password: process.env.BSKY_NOCONTEXTSCATS_PASSWORD,
    posts: posts.cats
  }
] satisfies Account[];
