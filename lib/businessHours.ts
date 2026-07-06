/**
 * Business Hours Configuration
 * Centralized configuration for opening hours across the site
 */

export const OPENING_HOURS_LABEL = '24 hours';
export const OPENING_HOURS_SHORT = 'Open 24 hours';
export const OPENING_HOURS_DISPLAY = 'Open 24 hours a day, 7 days a week';

/** Schema.org opening hours — 24/7 */
export const OPENING_HOURS_SCHEMA = [
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
];

export interface BusinessHours {
  day: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday, etc.
  opens: string;
  closes: string;
  isOpen: boolean;
}

export const BUSINESS_HOURS: BusinessHours[] = [
  { day: 'Sunday', dayIndex: 0, opens: '00:00', closes: '23:59', isOpen: true },
  { day: 'Monday', dayIndex: 1, opens: '00:00', closes: '23:59', isOpen: true },
  { day: 'Tuesday', dayIndex: 2, opens: '00:00', closes: '23:59', isOpen: true },
  { day: 'Wednesday', dayIndex: 3, opens: '00:00', closes: '23:59', isOpen: true },
  { day: 'Thursday', dayIndex: 4, opens: '00:00', closes: '23:59', isOpen: true },
  { day: 'Friday', dayIndex: 5, opens: '00:00', closes: '23:59', isOpen: true },
  { day: 'Saturday', dayIndex: 6, opens: '00:00', closes: '23:59', isOpen: true },
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
 * Get formatted opening hours string for display
 */
export function getFormattedHours(_opens: string, _closes: string): string {
  return OPENING_HOURS_LABEL;
}

/**
 * Get current day index (0 = Sunday, 1 = Monday, etc.)
 */
export function getCurrentDayIndex(): number {
  return new Date().getDay();
}

/**
 * Check if business is currently open
 */
export function getBusinessStatus(): {
  isOpen: boolean;
  currentDay: BusinessHours | null;
  message: string;
} {
  const dayIndex = getCurrentDayIndex();
  const currentDay = BUSINESS_HOURS.find((h) => h.dayIndex === dayIndex) ?? null;

  return {
    isOpen: true,
    currentDay,
    message: OPENING_HOURS_SHORT,
  };
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

  return BUSINESS_HOURS.map((hour) => ({
    day: hour.day,
    hours: OPENING_HOURS_LABEL,
    isToday: hour.dayIndex === currentDayIndex,
    isOpen: hour.isOpen,
  }));
}
