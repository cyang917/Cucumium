'use strict'

const Page = require('./BasePage')
class Home extends Page {
 //elements & methods
 get myAccount () { return $(`.profile-access__title`) }
 get signIn () { return $x('//*[text()="Sign in"][@type="button"]')}
 get register () { return $(`.btn btn--primary`)}
 get registerButton() { return $(`.myaccount__login a.btn--primary`)}
 get registerEmail() { return $(`#email_address`)}
 get firstName() { return $(`#first_name`)}
 get lastName() { return $(`#last_name`)}
 get newPassword() { return $(`#reg_password`)}
 get country() { return $(`#country`)}
 get iAgree() { return $(`#agreement_chk_indicator`)}
 get registerSubmit() { return $(`#register-submit`)}
 get thankYou() { return $(`.pwc-regis__content-heading`)}
}

module.exports = Home
