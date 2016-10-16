const month = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

function dateParser (date) {
  const yyyy = date.split('-')[0]
  const mm = date.split('-')[1]
  const dd = date.split('-')[2]
  return `${dd} ${month[parseInt(mm, 10)]} ${yyyy}`
}

module.exports = dateParser
