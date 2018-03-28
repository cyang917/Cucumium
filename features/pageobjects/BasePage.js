'use strict'

const $u = require('../support/$u')
class Page {
  constructor (path) {
    this.title = 'My Page'
    this.path = path || '/'
    this.baseURL = process.env.ENV_URL || 'https://www.hbo.com'
  }
  get headline () { return driver.findElement({css: 'h2'}) }

  async open (path) {
    await driver.get(this.baseURL + this.path)
    await driver.sleep(1000)
  }
}
module.exports = Page