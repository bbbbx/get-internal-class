const getClass = require('../index')

describe('Object', () => {
    test('should return "object"', () => {
        expect(getClass({})).toBe('object')
    })
})

describe('Null', () => {
    test('should return "null"', () => {
        expect(getClass(null)).toBe('null')
    })
})

describe('Undefined', () => {
    test('should return "undefined"', () => {
        expect(getClass(undefined)).toBe('undefined')
    })
})

describe('Array', () => {
    test('should return "array"', () => {
        expect(getClass([])).toBe('array')
    })
})

describe('Regular expression', () => {
    test('literal should return "regexp"', () => {
        expect(getClass(/abc/)).toBe('regexp')
    })

    test('constructor should return "regexp"', () => {
        expect(getClass(new RegExp(/abc/))).toBe('regexp')
    })
})

describe('Date', () => {
    test('should return "date"', () => {
        expect(getClass(new Date())).toBe('date')
    })
})

describe('Math', () => {
    test('should return "math"', () => {
        expect(getClass(Math)).toBe('math')
    })
})

describe('Function', () => {
    test('arrow function should return "function"', () => {
        expect(getClass(() => {})).toBe('function')
    })

    test('normal function should return "function"', () => {
        expect(getClass(function () {})).toBe('function')
    })
})

describe('Number', () => {
    test('primitive should return "number"', () => {
        expect(getClass(123)).toBe('number')
    })

    test('wrapper type should return "number"', () => {
        expect(getClass(new Number(123))).toBe('number')
    })
})

describe('String', () => {
    test('primitive should return "string"', () => {
        expect(getClass('abc')).toBe('string')
    })

    test('wrapper type should return "string"', () => {
        expect(getClass(new String("abc"))).toBe('string')
    })
})

describe('Boolean', () => {
    test('primitive should return "boolean"', () => {
        expect(getClass(false)).toBe('boolean')
    })

    test('wrapper type should return "boolean"', () => {
        expect(getClass(new Boolean(false))).toBe('boolean')
    })
})

