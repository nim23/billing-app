'use strict'

const conf = require('../../nightwatch.conf.js')
const dateParser = require('../../src/utils/dateParser')
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
      .waitForElementVisible('.summary')
  },
  'Verify Summary Details': function (browser) {
    browser.elements('class name', 'summary--row-value', (result) => {
      // verify total
      browser.elementIdText(result.value[0].ELEMENT, (result) => {
        browser.assert.ok(result.value.includes(this.backEndData.total))
      })

      // verify generated date
      browser.elementIdText(result.value[1].ELEMENT, (result) => {
        browser.assert
          .equal(result.value, dateParser(this.backEndData.statement.generated))
      })

      // verify due date
      browser.elementIdText(result.value[2].ELEMENT, (result) => {
        browser.assert
          .equal(result.value, dateParser(this.backEndData.statement.due))
      })

      // verify from date
      browser.elementIdText(result.value[3].ELEMENT, (result) => {
        browser.assert
          .equal(result.value, dateParser(this.backEndData.statement.period.from))
      })

      // verify to date
      browser.elementIdText(result.value[4].ELEMENT, (result) => {
        browser.assert
          .equal(result.value, dateParser(this.backEndData.statement.period.to))
      })

      browser.end()
    })
  }
}
