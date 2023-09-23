export const formatDate = (format: string, date: Date) => {
  const dateObj = {
    year: String(date.getFullYear()).padStart(4, '0'),
    month: String(date.getMonth() + 1).padStart(2, '0'),
    date: String(date.getDate()).padStart(2, '0'),
    hours: String(date.getHours()).padStart(2, '0'),
    minutes: String(date.getMinutes()).padStart(2, '0'),
    seconds: String(date.getSeconds()).padStart(2, '0'),
  }
  return format
    .replace('%y', dateObj.year)
    .replace('%m', dateObj.month)
    .replace('%d', dateObj.date)
    .replace('%H', dateObj.hours)
    .replace('%M', dateObj.minutes)
    .replace('%S', dateObj.seconds)
}
