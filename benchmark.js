'use strict'

var strep = require('./')

var str      = 'this {1} a {0}',
    args     = [ 'benchmark', 'a' ],
    replace1 = strep(str)

function replace2(arr) {
    return str.replace(strep.pattern, function (_, i) {
        return arr[ i ]
    })
}

exports.compare = {
    strep: function () {
        replace1(args)
    },

    'String.prototype.replace()': function () {
        replace2(args)
    }
}

require('bench').runMain()
