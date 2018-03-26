'use strict'
const {defineSupportCode} = require('cucumber')
const expect = require('chai').expect
const pages = require('../pageobjects/pages')
const webdriver = require('selenium-webdriver')
const until = webdriver.until
const Key = webdriver.Key
const $u = require('../support/$u')
const createPage = require('../pageobjects/pageFactory')
const { ismobile } = require('../support/ismobile')
const {isIos} = require('../support/ismobile')
const {isMobile} = require('../support/ismobile')

defineSupportCode(function ({Given, When, Then}) {
  Given('I am a guest user', async function () {

  })

  When('I open {pageName} page', async function (pageName) {
    await pages[pageName].open()
    this.page = pages[pageName]
    driver.sleep(30000)
  })
  When(/I go to ([\w-/]+) page/, async function (pageName) {
    const page = createPage(pageName)
    await page.open()
    this.page = page
  })
  /* Browser related steps */
  When('I back to previous page', async function () {
    await driver.navigate().back()
    await driver.sleep(1000)
  })