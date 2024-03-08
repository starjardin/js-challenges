class Calculator {
	/**
	 * @param {number} value
	 */
	constructor(value) {
		this.value = value;
	}

	/**
	 * @param {number} value
	 * @return {Calculator}
	 */
	add(value) {
		this.value += value;
		return this;
	}

	/**
	 * @param {number} value
	 * @return {Calculator}
	 */
	subtract(value) {
		this.value -= value;
		return this;
	}

	/**
	 * @param {number} value
	 * @return {Calculator}
	 */
	multiply(value) {
		this.value *= value;
		return this;
	}

	/**
	 * @param {number} value
	 * @return {Calculator}
	 */
	divide(value) {
		if (value === 0) {
			throw new Error("Division by zero is not allowed");
		} else {
			this.value /= value;
		}
		return this;
	}

	/**
	 * @param {number} value
	 * @return {Calculator}
	 */
	power(value) {
		this.value = this.value ** value;
		return this;
	}

	/**
	 * @return {number}
	 */
	getResult() {
		return this.value;
	}
}

// Source: https://leetcode.com/problems/calculator-with-method-chaining/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * 
 * # Intuition
This class will contain several methods that will do basic operations (add, subtract, divide, multiply, power, and getResult).

# Approach
1. We need to initiate this.value in the constructor to equal to the number that's passed in.
2. Will to the operations in each methods respectively by accessing `this.value` and the `arguments` passed to each method. And finally return `this` for other methods to work.
3. Except `getResult` will return the actual value - `this.value`
 */
