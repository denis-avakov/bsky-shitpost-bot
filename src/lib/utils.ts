import type { PostItem } from '~/lib/types.js';
import { redis } from '~/lib/upstash.js';

/**
 * Gets a random element from collection.
 */
export function getRandom<T>(collection: Array<T>): T {
  return collection[Math.floor(Math.random() * collection.length)];
}

/**
 * Retrieves a post by the specified user from a Redis list.
 */
export function getPost(author: string) {
  return redis.lmove<PostItem>(`postsBy_${author}`, `postsBy_${author}`, 'left', 'right');
}
