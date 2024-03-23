type Person = {
  name: string
  nationality: string
  hobbies: string[]
}

function printFirstHobby(person: Person) {
  console.log(person.hobbies[0])
}

const person1: Person = {
  name: 'Joe',
  nationality: 'USA',
  hobbies: ['reading', 'swimming'],
}

printFirstHobby(person1)

/**
 * what NOT to do - any
 * any removes all type checking, which defeats the purpose of TypeScript
 */
const person2 = {
  name: 'Joe',
  nationality: 'USA',
}

printFirstHobby(person2)

/**
 * what NOT to do - casting
 * if you lie to TypeScript, it will lie back
 */
printFirstHobby(person2 as Person)
printFirstHobby(person2 as any)
