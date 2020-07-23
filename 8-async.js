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
setTimeout(printOne, 1000) // 3
setTimeout(printTwo, 0) // 2
printThree() // 1

// * JS concurrency Model (Async)
// Execution (call) stack
// Event loop
// Function Queue
// Other APIs
