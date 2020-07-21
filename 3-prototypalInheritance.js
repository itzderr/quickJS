// Prototypal Inheritance
// - Non-primitive types have properties/methods associated with them.
//   * Array.prototype.push()
//   * String.prototype.toUpperCase()
// - Each object stores a reference to its prototype
// - Most primitive types have object wrappers
//   * String(), Number(), Boolean(), ...
// - JS will automatically "box" (wrap) primitive values so you can access to methods
// - Properties/methods defined most tightly to the instance have priority
//   * arr.__proto__.toString, arr.__proto__.__proto__.toString

// You should never to this!
Number.prototype.toString = function () {
  return '1000'
}

const num = 40
console.log(num.toString())

