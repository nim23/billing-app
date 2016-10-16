const currencyPrefix = '£'

module.exports = function costFormatter (value) {
  return `${currencyPrefix}${value}`
}
