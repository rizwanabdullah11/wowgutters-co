/**
 * Format ISO date string (YYYY-MM-DD) to human-readable format
 * @param isoDate - Date string in ISO 8601 format (YYYY-MM-DD)
 * @returns Formatted date string (e.g., "March 31, 2026")
 */
export function formatBlogDate(isoDate: string): string {
  try {
    const date = new Date(isoDate);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return isoDate; // Return original if invalid
    }
    
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    return date.toLocaleDateString('en-GB', options);
  } catch (error) {
    console.error('Error formatting date:', error);
    return isoDate; // Return original if error
  }
}

/**
 * Format ISO date string to short format
 * @param isoDate - Date string in ISO 8601 format (YYYY-MM-DD)
 * @returns Formatted date string (e.g., "31 Mar 2026")
 */
export function formatBlogDateShort(isoDate: string): string {
  try {
    const date = new Date(isoDate);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return isoDate; // Return original if invalid
    }
    
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    
    return date.toLocaleDateString('en-GB', options);
  } catch (error) {
    console.error('Error formatting date:', error);
    return isoDate; // Return original if error
  }
}
