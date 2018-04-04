'use strict'

class Page {
  constructor (path) {
    this.path = path || '/'
    this.baseURL = process.env.ENV_URL || 'https://www.pwc.com'
  }

  async open (path) {
    await driver.get(this.baseURL + this.path)
    await driver.sleep(1000)
  }
}
module.exports = Page