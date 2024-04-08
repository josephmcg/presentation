type Person = {
  name: string
}

const people: Person[] = []

// add optional chaining to prevent runtime errors
console.log(people[0].name)

// you could download a runtime validator like zod to check this
// but why increase the bundle size unless absolutely necessary

// dig into your tools (vite, TS). understand how they work under the hood,
// and how you can leverage them to write better code
