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
        browser.end()
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
      browser.elementIdText(result.value[0].ELEMENT, (result) => {
        browser.assert.ok(result.value.includes(this.backEndData.package.total))
      })
    })
  },
  'verify package names': function (browser) {
    browser.elements('class name', 'subscription--name', (result) => {
      result.value.forEach((value, index) => {
        browser.elementIdText(value.ELEMENT, (result) => {
          browser.assert.equal(result.value, this.backEndData.package.subscriptions[index].name)
        })
      })
    })
  },
  'verify package costs': function (browser) {
    browser.elements('class name', 'subscription--cost', (result) => {
      result.value.forEach((value, index) => {
        browser.elementIdText(value.ELEMENT, (result) => {
          browser.assert.ok(result.value.includes(this.backEndData.package.subscriptions[index].cost))
        })
      })
    })
    browser.end()
  }
}
