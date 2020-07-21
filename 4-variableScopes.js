// "var" is lexically scoped
// it means, the variable exists from time of declaration to the end of function
// "hoisting"
console.log(lexicallyScoped)
if (true) {
  var lexicallyScoped = 'Hello'
}
console.log(lexicallyScoped)

thisShouldWork()

function thisShouldWork() {
  console.log('functions are hoisted!')
}

// "let" and "const" - block scoped

// if (true) {
//   let blockScoped = 'Hi'
//   const alsoBlockScoped = 'Hello'
// }

// console.log(blockScoped)
// console.log(alsoBlockScoped)

// someFunction()

var someFunction = function () {
  console.log('this function is not hoisted')
}

// const someFunction = function () {
//   console.log('this function is not hoisted')
// }

whatIsThis = 'Hello' // this is how you make a global variable, not necessary
console.log(whatIsThis)
var whatIsThis
