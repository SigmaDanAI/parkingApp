export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  return `${year}-${month}-${day}`;
}

function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}