'use strict'

const Page = require('./BasePage')
class Home extends Page {
 //elements & methods
 get myAccount () { return $(`.profile-access__title`) }
 get signIn () { return $x('//*[text()="Sign in"][@type="button"]')}
 get register () { return $(`.btn btn--primary`)}
 get registerButton() { return $(`.myaccount__login a.btn--primary`)}
 get registerEmail() { return $(`#email_address`)}
 get FirstName() { return $(`#first_name`)}
 get LastName() { return $(`#last_name`)}
 get NewPassword() { return $(`#reg_password`)}
 get Country() { return $(`#country`)}
 get Iagree() { return $(`#agreement_chk_indicator`)}
 get registersubmit() { return $(`#register-submit`)}
 get Thankyou() { return $(`.pwc-regis__content-heading`)}
}

module.exports = Home
