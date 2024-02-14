const composeFunctions = (functions) => {
	return function (x) {
		// function (2)
		// [f(2), g(2), h(2)]

		/**
     * 
     functions.reduceRight((acc, func) => {
      // accumulator,
      // func is the current value which is the far right of the functions
      // then call it with the value passed in and return the value
      // then call the next function with the result from the previous function
      // return function (acc) 
    }, 2)
     *  */
		return functions.reduceRight((acc, func) => func(acc), x);
	};
};

// Example functions
function f(x) {
	return x + 1;
}

function g(x) {
	return x * 2;
}

function h(x) {
	return x ** 2;
}

const functions = [f, g, h];
const composed = composeFunctions(functions);

console.log(composed(2)); // Output: 9 (f(g(h(2))))
