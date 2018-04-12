const Home = require('./Home')
const Login = require('./Login')

const pages = {
  'Home': new Home('/'),
  'Login': new Login()
  // list all specific pages
}

module.exports = pages