const conf = require('../../nightwatch.conf.js')
const PANEL_TOGGLE_CSS = '.panel--toggle:nth-child(1)'

module.exports = {
  'step one': function (browser) {
    browser
      .url(conf.TEST_URL)
      .waitForElementVisible('.panel')
  },

  'Panel accessibility test': function (browser) {
    browser.click(PANEL_TOGGLE_CSS)

    browser.getAttribute(PANEL_TOGGLE_CSS, 'aria-expanded', (result) => {
      browser.assert.equal(result.value, 'false')
    })

    browser.click(PANEL_TOGGLE_CSS)

    browser.getAttribute(PANEL_TOGGLE_CSS, 'aria-expanded', (result) => {
      browser.assert.equal(result.value, 'true')
    })
  },

  'Panel functionality test': function (browser) {
    browser.click(PANEL_TOGGLE_CSS)
      .assert.hidden('.package')

    browser.click(PANEL_TOGGLE_CSS)
      .assert.visible('.package')

    browser.end()
  }
}
