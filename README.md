# ISO-639-1-plus
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Download Count][download-url]][npm-url]

[travis-image]: https://travis-ci.org/polarisation/iso-639-1-plus.svg?branch=master
[travis-url]: https://travis-ci.org/polarisation/iso-639-1-plus
[npm-image]: https://img.shields.io/npm/v/iso-639-1-plus.svg?style=flat-square
[npm-url]: https://npmjs.org/package/iso-639-1-plus
[download-url]: https://img.shields.io/npm/dt/iso-639-1-plus.svg?style=flat-square

Simple interface for [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) 2-letter language codes and common [IETF BCP 47 language tags](https://en.wikipedia.org/wiki/IETF_language_tag).

Forked from [iso-639-1](https://github.com/meikidd/iso-639-1) and extended with a some common language subtags for regional variations (eg. `en-GB`, `pt-BR`, `zh-Hans`). The intention is not to provide a definitive list, but a subset of commonly used language tags / locales.

## Installation

```
npm install iso-639-1-plus
```

## Usage

### Node.js

```javascript
const ISO6391 = require('iso-639-1-plus');
console.log(ISO6391.getName('en-GB')); // 'English (United Kingdom)'
```

### ES Module

```javascript
import ISO6391 from 'iso-639-1-plus';
console.log(ISO6391.getName('en-GB')); // 'English (United Kingdom)'
```

### Browsers

HTML

```html
<script type="text/javascript" src="./node_modules/iso-639-1-plus/build/index.js"></script>
```

Visit global variable ISO6391 in js

```javascript
console.log(ISO6391.getName('en-GB')); // 'English (United Kingdom)'
```

## Methods

### getName(code)
  - @param code {string}
  - @return {string}

Lookup language English name by code

### getAllNames()
  - @return {array}

Get array of all language English names

### getNativeName(code)
  - @param code {string}
  - @return {string}

Lookup language native name by code

### getAllNativeNames()
  - @return {array}

Get array of all language native names


### getCode(name)
  - @param name {string}
  - @return {string}

Lookup code by English name or native name

### getAllCodes()
  - @return {array}

Get array of all codes

### validate(code)
  - @param code {string}
  - @return {boolean}

Check whether the given code is in the list of [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

### getLanguages(codes)
  - @param codes {array}
  - @return {array}

Get the array of the language objects by the given codes

## Example

```
const ISO6391 = require('iso-639-1-plus')

console.log(ISO6391.getName('zh')) // 'Chinese'
console.log(ISO6391.getNativeName('zh')) // '中文'

console.log(ISO6391.getAllNames()) // ['Afar','Abkhaz', ... ,'Zulu']
console.log(ISO6391.getAllNativeNames()) //['Afaraf','аҧсуа бызшәа', ... ,'isiZulu' ]

console.log(ISO6391.getCode('Chinese')) // 'zh'
console.log(ISO6391.getCode('中文')) // 'zh'

console.log(ISO6391.getAllCodes()) //['aa','ab',...,'zu']

console.log(ISO6391.validate('en')) // true
console.log(ISO6391.validate('xx')) // false

console.log(ISO6391.getLanguages(['en', 'zh']))
// [{code:'en',name:'English',nativeName:'English'},{code:'zh',name:'Chinese',nativeName:'中文'}]

```
