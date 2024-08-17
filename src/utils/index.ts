import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges the provided class names using tailwind-merge and clsx to ensure optimized and conflict-free class strings.
 *
 * @param inputs - The class names to be merged.
 * @returns The merged class names as a string.
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export { cn };
