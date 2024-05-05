function getChileanDateTime(): Date {
  // Get current UTC time
  const currentUTC = new Date();

  // Calculate Chilean time offset (GMT-4)
  const chileanTimeOffset = 4 * 60 * 60 * 1000; // 4 hours in milliseconds

  // Create a new Date object with Chilean time
  const chileanTime = new Date(currentUTC.getTime() - chileanTimeOffset);

  return chileanTime;
}

export const formatDateBad = (dateTimeString: string): string => {
  const [datePart] = dateTimeString.split("T"); // Extract date part
  const [year, month, day] = datePart.split("-"); // Split year, month, and day
  return `${year}-${month}-${day}`;
};

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  return `${year}-${month}-${day}`;
}

function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

export { getChileanDateTime };
