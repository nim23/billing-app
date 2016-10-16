'use strict'

const conf = require('../../nightwatch.conf.js')
const fetchData = require('../fetchData')

module.exports = {
  before: function (browser, done) {
    fetchData()
      .then((data) => {
        this.backEndData = data
        done()
      })
      .catch(error => {
        console.warn(error)
        done()
      })
  },
  'step one': function (browser) {
    browser
      .url(conf.TEST_URL)
      .waitForElementVisible('.panel')
  },
  'verify total': function (browser) {
    browser.elements('class name', 'panel--subtitle', (result) => {
      browser.elementIdText(result.value[2].ELEMENT, (result) => {
        browser.assert.ok(result.value.includes(this.backEndData.callCharges.total))
      })
    })
    browser.end()
  }
}
