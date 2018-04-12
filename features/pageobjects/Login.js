'use strict'

const Page = require('./BasePage')
class Login extends Page {
  //elements & methods
  get txtLogin () { return $(`.pwc-regis__tab-a`)}
  get tbEmail () { return $(`#email_address`) }
  get tbPassword () { return $(`#password`)}
  get btnLogIn () { return $(`#login-submit`)}
  get txtInvalid() {return $(`#msg_loginUserIDPwdFaild`)}
}

module.exports = Login