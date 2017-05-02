[![view on npm](http://img.shields.io/npm/v/strep.svg?style=flat-square)](https://www.npmjs.com/package/strep)
[![downloads per month](http://img.shields.io/npm/dm/strep.svg?style=flat-square)](https://www.npmjs.com/package/strep)
[![node version](https://img.shields.io/badge/node-%3E=0.8-brightgreen.svg?style=flat-square)](https://nodejs.org/download)
[![build status](https://img.shields.io/travis/schwarzkopfb/strep.svg?style=flat-square)](https://travis-ci.org/schwarzkopfb/strep)
[![test coverage](https://img.shields.io/coveralls/schwarzkopfb/strep.svg?style=flat-square)](https://coveralls.io/github/schwarzkopfb/strep)
[![license](https://img.shields.io/npm/l/strep.svg?style=flat-square)](https://github.com/schwarzkopfb/strep/blob/master/LICENSE)

# String Replacer

Tiny and fast string replacer utility.

## Usage

```js
const strep = require('strep'),
      great = strep('{1} {0}!')
       
console.log(great([ 'World', 'Hello' ]))
```
```text
Hello World!
```

Objects are supported as well:

```js
const format = strep('{first} {last} ({nick})'),
      name = {
          nick: 'Johnny',
          first: 'John',
          last: 'Doe'
      }

console.log(format(name))
```
```text
John Doe (Johnny)
```

## Custom placeholders

By default the following regexp is employed to find placeholders in a format string: `/{([a-zA-Z0-9_]+)}/g`
You are able to override it globally or per call to use different placeholders.

```js
strep.pattern = /\{{\s*([a-z]+)\s*}}/g // override globally

const mustache = strep('Hello {{ name }}!'),
      bash     = strep('$0 is my $1', /\$([0-9]+)/) // override just for this call

console.log(bash([ 'Buggy', 'cat' ]))
console.log(mustache({ name: 'Buggy' }))
```
```text
Buggy is my cat.
Hello Buggy!
```

_Note:_ mind the capturing group in those regexps. Those are required to work properly.

## Installation

With npm:

    npm install strep

## Tests & benchmarks

Run unit tests:

    npm test

Run unit tests and create coverage report:

    npm run cover

Run benchmark:

    npm run benchmark

## License

[MIT](/LICENSE)
