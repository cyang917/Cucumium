'use strict'
const webdriver = require('selenium-webdriver')
const WebElement = webdriver.WebElement
const {$, $$, $x, $$x, $v, $$v, parent, prev, next, $f} = require('./$')
const chrome = require('selenium-webdriver/chrome')
const {isIos} = require('./ismobile')
const {click, flickElement} = require('./actions')
require('chromedriver')
require('geckodriver')

WebElement.prototype.$ = global.$ = $
WebElement.prototype.$$ = global.$$ = $$
WebElement.prototype.$x = global.$x = $x
WebElement.prototype.$$x = global.$$x = $$x
WebElement.prototype.$v = global.$v = $v
WebElement.prototype.$$v = global.$$v = $$v
WebElement.prototype.parent = parent
WebElement.prototype.prev = prev
WebElement.prototype.next = next
WebElement.prototype.$f = $f
if (isIos) {
  const deviceOffset = process.env.DEVICE_NAME === 'iPhone X' ? 94 : 70
  WebElement.prototype.click = click(deviceOffset)
  WebElement.prototype.flickElement = flickElement(deviceOffset)
} else {
  WebElement.prototype.flickElement = async function (offset, speed) {
    return driver.touchActions().flickElement(this, offset, speed).perform()
  }
}

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
// caps['browserstack.local'] = 'true'
caps['device'] = process.env.DEVICE_NAME
caps['browserstack.appium_version'] = '1.7.2'
caps['browserstack.selenium_version'] = '3.6.0'
// caps['safariAllowPopups'] = true
caps['realMobile'] = 'true'
caps['project'] = 'Dotcom'
caps['build'] = new Date().toJSON().substr(0, 16).replace(/[-:]/g, '') +
  (process.env.USERNAME ? process.env.USERNAME.slice(0, -3) : 'jenkins')
// caps['os_version'] = '11.2'
// caps['platformName'] = 'iOS'
// caps['platformVersion'] = '11.2'
caps['automationName'] = 'XCUITest'

const builder = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(chromeOptions)
  .withCapabilities(caps)

module.exports = builder
