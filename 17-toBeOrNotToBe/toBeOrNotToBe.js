/**
 * @param {string} val
 * @return {boolean|string}
 */
const expect = function (val) {
	function toBe(expectedValue) {
		if (val === expectedValue) {
			return true;
		} else {
			throw "Not Equal";
		}
	}

	function notToBe(expectedValue) {
		if (val !== expectedValue) {
			return true;
		} else {
			throw "Equal";
		}
	}

	return {
		toBe,
		notToBe,
	};
};
