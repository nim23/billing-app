const conf = require('../nightwatch.conf.js')
const fetch = require('isomorphic-fetch')

module.exports = function fetchData () {
  return fetch(conf.API_ENDPOINT)
    .then(res => res.json())
    .then(json => {
      return json
    })
}
