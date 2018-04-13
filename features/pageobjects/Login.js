'use strict'

const Page = require('./BasePage')
class Login extends Page {
  //elements & methods
  get txtLogin () { return $(`.pwc-regis__tab-a`)}
  get tbEmail () { return $(`#email_address`) }
  get tbPassword () { return $(`#password`)}
  get btnLogIn () { return $(`#login-submit`)}
  get txtInvalid() {return $(`#msg_loginUserIDPwdFaild`)}
  get txtInvalidEmailFormat () {return $(`#msg_loginInalidEmailFormat`)}
  get txtEmailRequired () {return $(`#msg_loginRequiredField`)}
  get txtPwdRequired () {return $(`#msg_passwordReq`)}
}

module.exports = Login