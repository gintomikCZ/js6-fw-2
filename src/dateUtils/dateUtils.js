export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const weekDayShorts = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

export const getNumberOfDays = (month, year) => {
  const dt = new Date(year, month + 1, 0)
  return dt.getDate()
}

export const compareDates = (dt1, dt2) => {
  return dt1.getFullYear() === dt2.getFullYear() && dt1.getMonth() === dt2.getMonth() && dt1.getDate() === dt2.getDate()
}

const get2digitsNumber = (num) => {
  return num > 9 ? '' + num : '0' + num
}

export const formatDate = (dt) => {
  return get2digitsNumber(dt.getDate()) + '.' + get2digitsNumber(dt.getMonth() + 1) + '.' + dt.getFullYear()
}