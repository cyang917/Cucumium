'use strict'

const Page = require('./BasePage')
class Home extends Page {
 //elements & methods
 get myAccount () { return $(`.profile-access__title`) }
 get signIn () { return $x('//*[text()="Sign in"][@type="button"]')}
 get register () { return $(`.btn btn--primary`)}
}

module.exports = Home