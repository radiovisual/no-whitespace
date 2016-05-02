'use strict';
module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('no-whitespace expects a string');
	}

	return str.replace(/[\s\n\r]+/gm, '');
};
