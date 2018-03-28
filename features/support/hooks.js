var {After, Before, Status} = require('cucumber');

// Synchronous
Before(function () {
  this.count = 0;
});

// Asynchronous Callback
Before(function (testCase, callback) {
  var world = this;
  tmp.dir({unsafeCleanup: true}, function(error, dir) {
    if (error) {
      callback(error);
    } else {
      world.tmpDir = dir;
      callback();
    }
  });
});

// Asynchronous Promise
After(function () {
  // Assuming this.driver is a selenium webdriver
  return this.driver.quit();
});

//saving a screenshot using Selenium WebDriver when a scenario fails:
After(function (testCase) {
  var world = this;
  if (testCase.result.status === Status.FAILED) {
    return webDriver.takeScreenshot().then(function(screenShot) {
      // screenShot is a base-64 encoded PNG
      world.attach(screenShot, 'image/png');
    });
  }