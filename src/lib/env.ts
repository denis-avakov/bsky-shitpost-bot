import type { AtpAgentLoginOpts } from '@atproto/api';

type Account = AtpAgentLoginOpts & {
  name: 'nocontextscats';
};

if (!process.env.BSKY_NOCONTEXTSCATS_HANDLE || !process.env.BSKY_NOCONTEXTSCATS_PASSWORD) {
  throw new Error('Some environment variables are not specified ☹️');
}

export const accounts = [
  {
    name: 'nocontextscats',
    identifier: process.env.BSKY_NOCONTEXTSCATS_HANDLE,
    password: process.env.BSKY_NOCONTEXTSCATS_PASSWORD
  }
] satisfies Account[];
