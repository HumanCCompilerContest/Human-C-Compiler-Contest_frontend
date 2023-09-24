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

export const formatMillSeconds = (format: string, millSeconds: number) => {
  const seconds = Math.ceil(millSeconds / 1000)
  const h = Math.floor(seconds / (60 * 60))
  const m = Math.floor((seconds - h * 60 * 60) / 60)
  const s = seconds - (h * 60 * 60 + m * 60)

  const timeObj = {
    hours: String(h).padStart(2, '0'),
    minutes: String(m).padStart(2, '0'),
    seconds: String(s).padStart(2, '0'),
  }
  return format
    .replace('%H', timeObj.hours)
    .replace('%M', timeObj.minutes)
    .replace('%S', timeObj.seconds)
}

/* 秒単位で日付を比較する */
export const equalDateTime = (d1: Date, d2: Date) => {
  return Math.floor(d1.getTime() / 1000) === Math.floor(d2.getTime() / 1000)
}
