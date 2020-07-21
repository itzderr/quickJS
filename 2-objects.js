// object - (key, value), functions
//
const obj = new Object() // {}
obj.firstname = 'Derrick'
obj['lastname'] = 'Park'
obj.isTeaching = true
obj.sayHi = function () {
  console.log('Hi')
}

obj.sayHi()

const obj2 = {
  firstname: 'Derrick',
  lastname: 'Park',
  isTeaching: true,
  sayHi: function () {
    console.log('Hi')
  },
  sayHello() {
    // ES6 Syntax
    console.log('Hello')
  },
  address: {
    street: 'Smithe',
    city: 'Vancouver',
  },
}

const obj3 = obj2
obj2.firstname = 'Vince'
obj2.address.city = 'Burnaby'
console.log(obj3.firstname)
console.log(obj3.address.city)

// Shallow-Copy
const o1 = Object.assign({}, obj2) // 1. clone the obj2
const o2 = { ...obj2 } // 2. using spread operator
// 3. library (lodash, rambda)

// Deep-Copy
// 1. library (lodash, rambda)
function deepcopy(obj) {
  // check if values are objects
  // if yes, copy that object (deepcopy)
  // else, return the value
  const keys = Object.keys(obj)
  const newObject = {}
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (typeof obj[key] === 'object') {
      newObject[key] = deepcopy(obj[key])
    } else {
      newObject[key] = obj[key]
    }
  }

  return newObject
}

const obj4 = deepcopy(obj2)
obj2.address.city = 'North Vancouver'
console.log(obj4.address.city)
