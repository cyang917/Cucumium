'use strict'
const webdriver = require('selenium-webdriver')
const WebElement = webdriver.WebElement
const {$, $$, $x, $$x, $v, $$v, $f} = require('./$')
const chrome = require('selenium-webdriver/chrome')
require('chromedriver')
require('geckodriver')

WebElement.prototype.$ = global.$ = $
WebElement.prototype.$$ = global.$$ = $$
WebElement.prototype.$x = global.$x = $x
WebElement.prototype.$$x = global.$$x = $$x
WebElement.prototype.$v = global.$v = $v
WebElement.prototype.$$v = global.$$v = $$v
WebElement.prototype.$f = $f
const args = ['disable-infobars', 'start-maximized', 'no-sandbox']
if (process.platform === 'darwin') {
  args.push('kiosk')
}
const chromeOptions = new chrome.Options()
  .addArguments(args)
if (process.env.EMU_DEVICE) {
  chromeOptions.setMobileEmulation({deviceName: process.env.EMU_DEVICE})
}
if (process.env.CHROME_BIN) {
  chromeOptions.setChromeBinaryPath(process.env.CHROME_BIN)
}
const caps = {
  avdReadyTimeout: 300000,
  avdLaunchTimeout: 300000,
  autoDismissAlerts: true
}
caps['deviceName'] = process.env.DEVICE_NAME
caps['platformName'] = process.env.PLATFORM_NAME
caps['avd'] = process.env.AVD_NAME
caps['browserName'] = process.env.SELENIUM_BROWSER || 'chrome'
caps['nativeWebTap'] = true
caps['browserstack.debug'] = true
caps['browserstack.user'] = process.env.BS_USER
caps['browserstack.key'] = process.env.BS_KEY
caps['device'] = process.env.DEVICE_NAME
caps['browserstack.appium_version'] = '1.7.2'
caps['browserstack.selenium_version'] = '3.6.0'
caps['realMobile'] = 'true'
caps['project'] = 'Cucumium'
caps['build'] = new Date().toJSON().substr(0, 16).replace(/[-:]/g, '') +
  (process.env.USERNAME ? process.env.USERNAME.slice(0, -3) : 'jenkins')
caps['automationName'] = 'XCUITest'

const builder = function (testName){
  caps['name']= testName
  return new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(chromeOptions)
  .withCapabilities(caps)
}

module.exports = builder