'use strict'
const {Given, When, Then} = require('cucumber')
const pages = require('../pageobjects/pages')

Given('I am a guest user', async function () {

})

When('I open {string} page', async function (pageName) {
  await pages[pageName].open()
  this.page = pages[pageName]
  await driver.sleep(30000)
})