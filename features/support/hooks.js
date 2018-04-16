var {After, Before, AfterAll, Status} = require('cucumber')
const builder = require('./custombuilder')
const {isdevice} = require('./ismobile')

Before(async function () {
  global.driver = await builder.build()
  if (process.platform === 'linux' && !process.env.DEVICE_NAME) {
    await driver.manage().window().setSize(1440, 1050)
  }
})

//Asynchronous Promise
After(function () {
  // Assuming this.driver is a selenium webdriver
  return driver.quit();
})

//saving a screenshot using Selenium WebDriver when a scenario fails:
After(function (testCase) {
  var world = this;
  if (testCase.result.status === Status.FAILED) {
    return driver.takeScreenshot().then(function(screenShot) {
      // screenShot is a base-64 encoded PNG
      world.attach(screenShot, 'image/png');
    })
  }
})