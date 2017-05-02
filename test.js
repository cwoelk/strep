'use strict'

var test  = require('tap'),
    strep = require('./')

test.equals(strep('{0}')([ 'Hello World!' ]), 'Hello World!')
test.equals(strep('Hello World!{0}')([]), 'Hello World!')
test.equals(strep('{0}Hello World!{0}')([]), 'Hello World!')
test.equals(strep('Hello {0}!')([ 'World' ]), 'Hello World!')
test.equals(strep('{0} {1}!')([ 'Hello', 'World' ]), 'Hello World!')
test.equals(strep('{1} {0}!')([ 'World', 'Hello' ]), 'Hello World!')
test.equals(strep('{0}{2}{1}')([ 'Hello', '!', 'World' ]), 'HelloWorld!')
test.equals(strep('{1}{0}{0}{1}')([ 'B', 'A' ]), 'ABBA')

test.equals(strep('$0 $2$1', /\$([0-9]+)/)([ 'Hello', '!', 'World' ]), 'Hello World!')
strep.pattern = /:([a-z]+)/
test.equals(strep('/:this/is/a/:test')({ 'this': 'that', test: 'pizza' }), '/that/is/a/pizza')
