import type { Post } from './types.js';

type DataSources = {
  [key: string]: Post[];
};

export function getRandom(posts: Post[]) {
  return posts[Math.floor(Math.random() * posts.length)];
}

export const sources = {
  nocontextscats: []
} satisfies DataSources;
