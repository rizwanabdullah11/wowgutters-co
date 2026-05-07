/**
 * Business Hours Configuration
 * Centralized configuration for opening hours across the site
 */

export interface BusinessHours {
  day: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday, etc.
  opens: string;
  closes: string;
  isOpen: boolean;
}

export const BUSINESS_HOURS: BusinessHours[] = [
  { day: 'Sunday', dayIndex: 0, opens: '10:00', closes: '18:00', isOpen: true },
  { day: 'Monday', dayIndex: 1, opens: '07:00', closes: '20:00', isOpen: true },
  { day: 'Tuesday', dayIndex: 2, opens: '07:00', closes: '20:00', isOpen: true },
  { day: 'Wednesday', dayIndex: 3, opens: '07:00', closes: '20:00', isOpen: true },
  { day: 'Thursday', dayIndex: 4, opens: '07:00', closes: '20:00', isOpen: true },
  { day: 'Friday', dayIndex: 5, opens: '07:00', closes: '20:00', isOpen: true },
  { day: 'Saturday', dayIndex: 6, opens: '09:00', closes: '18:00', isOpen: true },
];

/**
 * Format time from 24h to 12h format
 * @param time - Time in HH:MM format (e.g., "07:00", "18:00")
 * @returns Formatted time (e.g., "7:00am", "6:00pm")
 */
export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'pm' : 'am';
  const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  return `${displayHours}:${minutes.toString().padStart(2, '0')}${period}`;
}

/**
 * Get formatted opening hours string
 * @param opens - Opening time in HH:MM format
 * @param closes - Closing time in HH:MM format
 * @returns Formatted string (e.g., "7:00am – 8:00pm")
 */
export function getFormattedHours(opens: string, closes: string): string {
  return `${formatTime(opens)} – ${formatTime(closes)}`;
}

/**
 * Get current day index (0 = Sunday, 1 = Monday, etc.)
 */
export function getCurrentDayIndex(): number {
  return new Date().getDay();
}

/**
 * Check if business is currently open
 * @returns Object with isOpen status and current day info
 */
export function getBusinessStatus(): {
  isOpen: boolean;
  currentDay: BusinessHours | null;
  message: string;
} {
  const now = new Date();
  const dayIndex = now.getDay();
  const currentTime = now.getHours() * 60 + now.getMinutes(); // minutes since midnight
  
  const currentDay = BUSINESS_HOURS.find(h => h.dayIndex === dayIndex);
  
  if (!currentDay || !currentDay.isOpen) {
    return {
      isOpen: false,
      currentDay: currentDay || null,
      message: 'Closed today'
    };
  }
  
  // Parse opening and closing times
  const [openHours, openMinutes] = currentDay.opens.split(':').map(Number);
  const [closeHours, closeMinutes] = currentDay.closes.split(':').map(Number);
  
  const openTime = openHours * 60 + openMinutes;
  const closeTime = closeHours * 60 + closeMinutes;
  
  const isOpen = currentTime >= openTime && currentTime < closeTime;
  
  if (isOpen) {
    return {
      isOpen: true,
      currentDay,
      message: `Open until ${formatTime(currentDay.closes)}`
    };
  } else if (currentTime < openTime) {
    return {
      isOpen: false,
      currentDay,
      message: `Opens at ${formatTime(currentDay.opens)}`
    };
  } else {
    return {
      isOpen: false,
      currentDay,
      message: 'Closed for today'
    };
  }
}

/**
 * Get all business hours with formatted times
 */
export function getFormattedBusinessHours(): Array<{
  day: string;
  hours: string;
  isToday: boolean;
  isOpen: boolean;
}> {
  const currentDayIndex = getCurrentDayIndex();
  
  return BUSINESS_HOURS.map(hour => ({
    day: hour.day,
    hours: hour.isOpen ? getFormattedHours(hour.opens, hour.closes) : 'Closed',
    isToday: hour.dayIndex === currentDayIndex,
    isOpen: hour.isOpen
  }));
}
