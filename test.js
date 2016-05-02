import test from 'ava';
import fn from './';

test('Expects a string', t => {
	t.throws(() => {
		fn({});
	}, 'no-whitespace expects a string');
});

test('removes spaces', t => {
	t.is(fn('  A B C D E F 1 2 3 4 5 6 7 8 9  '), 'ABCDEF123456789');
});

test('removes tabs', t => {
	t.is(fn('\t  A\t B\t C\t D\t E\t F\t 1\t 2\t 3\t 4\t 5\t 6\t 7\t 8\t 9\t  '), 'ABCDEF123456789');
});

test('removes all whitespace characters', t => {
	t.is(fn('\n\r  A\r B\n C\n D\t E\t F\t 1\t 2\t 3\t 4\t 5\t 6\t 7\t 8\t 9\t  '), 'ABCDEF123456789');
});
