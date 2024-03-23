type Person = {
  name: string
  nationality: string
  hobbies: string[]
}

function printHobbies(person: Person) {
  console.log(person.hobbies)
}

const person1: Person = {
  name: 'Joe',
  nationality: 'USA',
  hobbies: ['reading', 'swimming'],
}

printHobbies(person1)

// ----------------------------
/**
 * what NOT to do - any
 */
const person2 = {
  name: 'Joe',
  nationality: 'USA',
}

// printHobbies(person2)

/**
 * what NOT to do - casting
 * lying to TypeScript. it will lie back
 */
printHobbies(person2 as Person)
printHobbies(person2 as any)
