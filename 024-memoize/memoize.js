function memoize(fn) {
  // create a cache map to hold values of ca
	const cache = new Map();
	return function (...args) {
    // stringify the arguments, will be useful to check if it exists in the map
    // else we will set an new entry to the map using the stringified arguments
		const key = JSON.stringify(args);

    // Check if the stringified arguments is in cache
		if (cache.has(key)) {
      // If the stringified arguments is in cache then get its value and return
			return cache.get(key);
		}

    // If the stringified arguments is not in cache then, do the operation to the function
    // and set the stringified arguments to cache with its value from function result
    // This is the cached value for the function
		const result = fn(...args);
		cache.set(key, result);
    // Return the result of the operation, for the first time.
		return result;
	};
}
