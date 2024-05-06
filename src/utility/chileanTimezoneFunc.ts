import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // Import the UTC plugin
import timezone from 'dayjs/plugin/timezone'; // Import the timezone plugin

// Extend dayjs with UTC and timezone plugins
dayjs.extend(utc);
dayjs.extend(timezone);

// Set the default timezone to Chile/Continental
dayjs.tz.setDefault('Chile/Continental');

// Function to generate a date in the Chilean timezone
export function chileanDateGenerator(): Date {
    return dayjs().toDate(); // Convert Day.js object to a Date object
}