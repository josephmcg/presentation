type Person = {
  name: string
  nationality: string
}

const people: Person[] = [
  {
    name: 'Joe',
    nationality: 'USA',
  },
  {
    name: 'Taro',
    nationality: 'Japan',
  },
]

people[0].name

if (people[0]) {
  people[0].name
}

// you could download a runtime validator like zod to check this
// but why increase the bundle size unless absolutely necessary
