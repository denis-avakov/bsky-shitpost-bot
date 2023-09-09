import type { AtpAgentLoginOpts } from '@atproto/api';

type Account = AtpAgentLoginOpts & {
  id: string;
};

if (!process.env.BSKY_NOCONTEXTSCATS_HANDLE || !process.env.BSKY_NOCONTEXTSCATS_PASSWORD) {
  throw new Error('Some environment variables are not specified ☹️');
}

export const accounts = [
  {
    id: 'nocontextscats',
    identifier: process.env.BSKY_NOCONTEXTSCATS_HANDLE,
    password: process.env.BSKY_NOCONTEXTSCATS_PASSWORD
  }
] satisfies Account[];
