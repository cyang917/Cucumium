'use strict'

const Page = require('./BasePage')
class Home extends Page {
 //elements & methods
 get myAccount () { return $(`.profile-access__title`) }
}

module.exports = Home