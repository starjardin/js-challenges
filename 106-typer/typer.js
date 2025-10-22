var typer = (function (input) {

    return {
        isNumber: (input) => {
            return input.constructor === Number && !isNaN(input);
        },
        isString: (input) => {
            return input.constructor === String
        },
        isArray: (input) => {
            return Array.isArray(input)
        },
        isFunction: (input) => {
            return typeof input === 'function'
        },
        isDate: (input) => {
            return typeof input.getMonth === 'function'
        },
        isRegExp: (input) => {
            return input.constructor === RegExp
        },
        isBoolean: (input) => {
            return input.constructor === Boolean
        },
        isError: (input) => {
            return input instanceof Error
        },
        isNull: (input) => {
            return input === null
        },
        isUndefined: (input) => {
            return input === undefined
        }
    };
}(null));