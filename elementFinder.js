const repl = require('repl')
const driver = require('./features/support/custombuilder').build()
const {$, $$, $x, $$x, $v, $$v} = require('./features/support/$')
const os = require('os')
const empty = '(' + os.EOL + ')'
const {isMobile} = require('./features/support/ismobile')
global.driver = driver
if (isMobile) {
  global.driver = require('webdriver-js-extender')
    .extend(global.driver)
}
const r = repl.start({prompt: '> '})
r.context.d = driver
