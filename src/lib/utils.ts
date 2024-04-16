import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

/**
 * Combines and merges CSS classes using `clsx` and `tailwind-merge`.
 *
 * @param {...ClassValue} inputs CSS classes or class values to combine and merge.
 * @returns {string} A single string representing the combined and merged CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
