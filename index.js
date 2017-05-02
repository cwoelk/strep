'use strict'

exports = module.exports = createReplacer
exports.pattern = /{([a-zA-Z0-9_]+)}/g

function createReplacer(format, pattern) {
    var parts = format.split(pattern || exports.pattern),
        src   = 'return '

    for (var i = 0, l = parts.length - 1; i <= l; i++) {
        var part = parts[ i ]

        if (i % 2 === 0)
            src += '"' + part + '"'
        else
            src += '(_["' + part + '"]||"")'

        if (i < l)
            src += '+'
    }

    return new Function('_', src)
}
