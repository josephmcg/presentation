type Person = {
  name: string
  hobbies: string[]
  // age: number
}

function printName(person: Person) {
  console.log(person.name)
}

const person = {
  name: 'Joe',
  hobbies: ['reading', 'swimming'],
  // age: 28
}

printName(person)

// when you have the chance to be specific, you should be specific
// explicitly typed variables and functions are always safer than implicitly typed ones

// help other developers (including yourself) understand your code
// we all benefit from autocomplete, type checking
