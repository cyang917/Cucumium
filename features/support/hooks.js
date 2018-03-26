'use strict'
const {defineSupportCode} = require('cucumber')
const builder = require('./custombuilder')
const {isdevice, ismobile} = require('./ismobile')
const report = require('cucumber2-report')
const $u = require('./$u')
defineSupportCode(function ({After, Before, registerHandler}) {
  Before({tags: 'not (@link or @linkvideo)'}, async function () {
    global.driver = await builder.build()
    if (process.platform === 'linux' && !process.env.DEVICE_NAME) {
      await driver.manage().window().setSize(1440, 1050)
    }
    if (isdevice) {
      global.driver = await require('webdriver-js-extender')
        .extend(global.driver)
    }
  })

  After({tags: 'not (@link or @linkvideo)'}, async function (scenarioResult) {
    await driver.close()
    await driver.quit()
  })

  After({tags: 'not (@link or @linkvideo or @visual)'}, async function (scenarioResult) {
    if (scenarioResult.isFailed()) {
      await $u.saveScreenshot(this, scenarioResult.scenario.name)
    }
  })

  registerHandler('AfterFeatures', async function () {
    const browser = process.env.SELENIUM_BROWSER || 'chrome'
    const type = ismobile ? 'Mobile' : 'Desktop'
    const env = process.env.ENV_URL || 'https://staging.hbo.com'
    const device = process.env.EMU_DEVICE || process.env.DEVICE_NAME
    const tag = process.argv.slice(-1)[0]
    await report.generate({
      source: './reports/result.json',             // source json
      dest: './reports',                   // target directory (will create if not exists)
      partials: './templates/partials',
      config: {
        env: env,
        browser: browser,
        type: type,
        device: device,
        tag: tag
      }
    })
  })
})
