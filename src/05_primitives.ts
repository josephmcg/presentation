// in JavaScript, a primitive is data
// that is not an object and has no methods or properties

// there are 7 primitive types:
// ? string, number, bigint, boolean, symbol, null, undefined

// primitive variables do not need an explicit type declaration
// the type is implicitly inferred from the value
let foo = 'test'
let bar = 3
let isTrue = true

// this is valid, but not recommended
let baz: string = 'test'
// linters handle this for you

// foo = 4 // this will throw an error

// a dynamically typed variable can be declared like this
let stringOrNumber: string | number = 'test'
stringOrNumber = 3
