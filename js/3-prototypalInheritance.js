// Prototypal Inheritance

// - Non-primitive types have properties/methods associated with them.
//   * Array.prototype.push()
//   * String.prototype.toUpperCase()
const arr = []
arr.push('100')

// - Each object stores a reference to its prototype

// - Properties/methods defined most tightly to the instance have priority
console.log(arr.__proto__) // try this in the browser console
console.log(arr.__proto__.__proto__)

// - Most primitive types have object wrappers
//   * String(), Number(), Boolean(), ...

// 42.toString() // error!
const num = 42
num.toString() // num is boxed! "42"
console.log(num.__proto__) // [Number: 0], 42.__proto__ doesn't exist
console.log(num instanceof Number) // false

// - JS will automatically "box" (wrap) primitive values so you can access to methods

// - Why use reference to prototype? what's the alternative?
// : deepcopy - the problem is that each object will have to store its own copy of prototype)

// You should never do this even though you can!
Number.prototype.toString = function () {
  return '1000'
}

const numb = 40
console.log(numb.toString())
