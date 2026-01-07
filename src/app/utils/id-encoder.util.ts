/**
 * Utility functions for encoding and decoding entity IDs in URLs.
 * This prevents raw IDs from appearing directly in the URL path.
 * 
 * Usage:
 *   Navigation: router.navigate(['/product', encodeId(productId)])
 *   Detail Load: const id = decodeId(params['id'])
 */

/**
 * Encodes an ID (number or string) to Base64 for safe URL usage.
 * @param id The raw entity ID (number or string)
 * @returns Base64-encoded ID string safe for URLs
 */
export function encodeId(id: string | number): string {
  if (!id) return '';
  return btoa(id.toString());
}

/**
 * Decodes a Base64-encoded ID from a route parameter.
 * @param encodedId The Base64-encoded ID from route params
 * @returns The decoded raw ID string, or null if decoding fails
 */
export function decodeId(encodedId: string | null | undefined): string | null {
  if (!encodedId) return null;
  try {
    return atob(encodedId);
  } catch (error) {
    console.error('Failed to decode ID:', encodedId, error);
    return null;
  }
}

/**
 * Validates that an encoded ID can be decoded successfully.
 * Use this before attempting to load a resource.
 * @param encodedId The Base64-encoded ID from route params
 * @returns true if the ID can be decoded, false otherwise
 */
export function isValidEncodedId(encodedId: string | null | undefined): boolean {
  return decodeId(encodedId) !== null;
}
