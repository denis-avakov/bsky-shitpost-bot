/**
 * Gets a random element from collection.
 */
export function getRandom<T>(collection: Array<T>): T {
  return collection[Math.floor(Math.random() * collection.length)];
}
