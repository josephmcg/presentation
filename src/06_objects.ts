type Person = {
  name: string
  nationality: string
  hobbies: string[]
}

const person = {
  name: 'Joe',
  nationality: 'USA',
}

// when you have the chance to be specific, you should be specific
// explicitly typed variables and functions are always safer than implicitly typed ones

// help other developers (including yourself) understand your code
// you also get autocomplete, type checking
