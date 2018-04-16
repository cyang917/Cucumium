const repl = require('repl')
const driver = require('./features/support/custombuilder').build()
const {$, $$, $x, $$x, $v, $$v} = require('./features/support/$')
const os = require('os')
const empty = '(' + os.EOL + ')'
const r = repl.start({prompt: '> '})
r.context.d = driver
