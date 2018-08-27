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

When('I click {string} element', async function (elementName) {
  const element = this.page[elementName]
  await element.click()
  await driver.sleep(2000)
})

When('I input {string} into {string} element', async function (inputText, elementName) {
  const element = this.page[elementName]
  await element.sendKeys(inputText)
  await driver.sleep(2000)
})

Then('I should go to {string} page', async function (pageName) {
  this.page = pages[pageName]
  await driver.sleep(3000)
 // expect((await driver.getCurrentUrl()).includes(pageName)).to.be.true
})

When('I wait for {int} second(s)', async function (int) {
  await driver.sleep(int * 1000)
})

When('I input {string} element with value {string}' , async function (elementName, value) {
  const element = this.page[elementName]
  await element.sendKeys(value) 
  await driver.sleep(2000)
})
Then('I should see {string} message in {string} element', async function (message, elementName) {
  var element = this.page[elementName]
  // element.getText()
  expect(await element.getText()).to.equal(message)
})
