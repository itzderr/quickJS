interface Person {
  firstname: string
  lastname: string
}

class Student {
  fullname: string
  constructor(
    public firstname: string,
    public middlename: string,
    public lastname: string,
  ) {
    this.fullname = firstname + ' ' + middlename + ' ' + lastname
  }
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstname + ' ' + person.lastname
}

const student = new Student('Derrick', 'S.', 'Park')
const greet = greeter({ firstname: 'Jane', lastname: 'Park' })
const greet1 = greeter(student)

console.log(greet)
