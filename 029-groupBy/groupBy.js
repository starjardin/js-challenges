/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
	const grouped = {};
	for (i of this) {
		const key = fn(i);
		if (!(key in grouped)) {
			grouped[key] = [];
		}
		grouped[key].push(i);
	}

	return grouped;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
