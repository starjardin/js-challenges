/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

function createCounter(init) {
	let count = init;

	function increment() {
		count++;
		return count;
	}

	function reset() {
		count = init;
		return count;
	}

	function decrement() {
		count--;
		return count;
	}

	return {
		increment,
		decrement,
		reset,
	};
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
