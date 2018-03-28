'use strict'
const {WebElement, WebElementPromise} = require('selenium-webdriver')
const {isMobile} = require('./ismobile')

/**
 * $
 * Find element by css selector
 * If [<index>] is appended to the selector, it will return the nth element
 * e.g. $('div[2]') will return the third div
 * @param {string} selector css selector
 * @returns {!WebElementPromise}
 */
const $ = function (selector) {
  const that = (this instanceof WebElement) ? this : driver
  const match = selector.match(/\[(\d+)]$/)
  if (Array.isArray(match)) {
    return new WebElementPromise(driver,
      that.findElements({css: selector.replace(match[0], '')})
        .then(array => array[parseInt(match[1])])
    )
  }
  return that.findElement({css: selector})
}

/**
 * $$
 * Find elements by css selector
 *
 * @param {string} selector css selector
 * @returns {!Thenable<Array>}
 */
const $$ = function (selector) {
  const that = (this instanceof WebElement) ? this : driver
  return that.findElements({css: selector})
}

/**
 * $x
 * Find element by xpath
 *
 * @param {string} selector xpath
 * @returns {!WebElementPromise}
 */
const $x = function (selector) {
  const that = (this instanceof WebElement) ? this : driver
  return that.findElement({xpath: selector})
}

/**
 * $$
 * Find elements by xpath
 *
 * @param {string} selector xpath
 * @returns {!Thenable<Array>}
 */
const $$x = function (selector) {
  const that = (this instanceof WebElement) ? this : driver
  return that.findElements({xpath: selector})
}

/**
 * $x
 * Find visile element by css selector
 * If isMobile design and mobileSelector is not empty,
 * return the first visible element located by mobileSelector
 *
 * @param {string} selector css selector
 * @param {string} mobileSelector='' css selector
 * @returns {!WebElementPromise}
 */
const $v = function (selector, mobileSelector = '') {
  const that = (this instanceof WebElement) ? this : driver
  if (!!mobileSelector && isMobile) {
    return that.findElement(firstVisibleElement(that, mobileSelector))
  }
  return that.findElement(firstVisibleElement(that, selector))
}

/**
 * $$
 * Find visible elements by css selector
 * If isMobile design and mobileSelector is not empty,
 * return the visible elements located by mobileSelector
 *
 * @param {string} selector css selector
 * @param {string} mobileSelector='' css selector
 * @returns {!Thenable<Array>}
 */
const $$v = function (selector, mobileSelector = '') {
  const that = (this instanceof WebElement) ? this : driver
  if (!!mobileSelector && isMobile) {
    return that.findElements(visibleElements(that, mobileSelector))
  }
  return that.findElements(visibleElements(that, selector))
}

async function _firstVisibleElement (that, locator) {
  const elements = await that.findElements({css: locator})
  for (let element of elements) {
    if (await element.isDisplayed()) {
      return element
    }
  }
}

async function _visibleElements (that, locator) {
  const results = []
  const elements = await that.findElements({css: locator})
  for (let element of elements) {
    if (await element.isDisplayed()) {
      results.push(element)
    }
  }
  return results
}

function firstVisibleElement (that, locator) {
  return async function () { return _firstVisibleElement(that, locator) }
}

function visibleElements (that, locator) {
  return async function () { return _visibleElements(that, locator) }
}

const flash = function () {
  return driver.executeScript(`
    arguments[0].scrollIntoView()
    arguments[0].style.border="3px solid yellow"
  `, this)
}

module.exports = {
  $: $,
  $$: $$,
  $x: $x,
  $$x: $$x,
  $v: $v,
  $$v: $$v,
  $f: flash
}
