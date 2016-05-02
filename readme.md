# no-whitespace [![Build Status](https://travis-ci.org/radiovisual/no-whitespace.svg?branch=master)](https://travis-ci.org/radiovisual/no-whitespace)

> Remove absolutely all whitespace from a string.


## Install

```
$ npm install --save no-whitespace
```


## Usage

```js
const noWhitespace = require('no-whitespace');

noWhitespace('\n\r\t unicorns & rainbows! amaze! \n\r\t');
//=> 'unicorns&rainbows!amaze!'
```


## API

### noWhitespace(input, [options])

Returns a string with all whitespace characters removed. 

#### input

*Required*  
Type: `string`

The string you want to remove all whitespace characters from.



## Related

- [selective-whitespace](https://github.com/radiovisual/selective-whitespace) Condense all whitespace in a string, with options to preserve specific whitespace characters.


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
