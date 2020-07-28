function printOne() {
  console.log('one')
}

function printTwo() {
  console.log('two')
}

function printThree() {
  console.log('three')
}

// Browser API
setTimeout(printOne, 1000) // print third
setTimeout(printTwo, 0) // print second
printThree() // print first

// * JS concurrency Model (Async)
// Execution (call) stack
// Event loop
// Function Queue
// Other APIs
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
