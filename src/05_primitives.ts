// In JavaScript, a primitive (primitive value, primitive data type) is data
// that is not an object and has no methods or properties.

// There are 7 primitive data types:
// ? string, number, bigint, boolean, symbol, null, undefined

// primitive variables do not need an explicit type declaration
// the type is implicitly inferred from the value
let foo = 'test'
let bar = 3
let isTrue = true

// this is valid, but not recommended
// linters handle this for you
let baz: string = 'test'

// foo = 4 // this will throw an error

// a dynamically typed variable can be declared like this
let stringOrNumber: string | number = 'test'
stringOrNumber = 3
