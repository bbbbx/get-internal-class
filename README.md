# Get internal class

  Get JS object internal property [[Class]].

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Build Status][travis-image]][travis-url]

## Install

  Install via npm:

  ```bash
  npm install --save get-internal-class
  ```

## Usage

  ```js
  const getClass = require('get-internal-class')

  getClass([])   // 'array'
  getClass(123)  // 'number'
  getClass(null) // 'null'
  ```

  For more examples, please see [tests](./test/index.test.js).

[npm-image]: https://img.shields.io/npm/v/get-internal-class.svg
[npm-url]: https://npmjs.org/package/get-internal-class
[downloads-image]: https://img.shields.io/npm/dm/get-internal-class.svg
[downloads-url]: https://npmjs.org/package/get-internal-class
[travis-image]: https://img.shields.io/travis/bbbbx/get-internal-class/master.svg?label=test
[travis-url]: https://www.travis-ci.org/bbbbx/get-internal-class

## License

MIT
