'use strict'
const {Given, When, Then} = require('cucumber')
const pages = require('../pageobjects/pages')
const chai = require('chai')
const expect = chai.expect

Given('I am a guest user', async function () {

})

When('I open {string} page', async function (pageName) {
  await pages[pageName].open()
  this.page = pages[pageName]
  await driver.sleep(3000)
})

Then('I should see {string} element', async function (elementName) {
  const element = this.page[elementName]
  expect(await element.isDisplayed()).to.be.true
})

Then('I click {string} element', async function (elementName) {
  const element = this.page[elementName]
  await element.click()
  await driver.sleep(2000)
})