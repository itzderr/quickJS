// Javascript is single-threaded, synchronous
// This function will freeze the browser page

function hang(sec) {
  const done = Date.now() + sec * 1000
  while (Date.now() < done) {
    // do nothing
  }

  console.log('done!')
}

hang(10)

// Callstack
// Each function calls will be pushed to the function callstack.
// when errors are thrown, the entire call stack is logged.
function addOne(num) {
  throw new Error('on ho, there is an error!')
  // return num + 1
}

function getNum() {
  return addOne(10)
}

function logger() {
  console.log(getNum() + getNum())
}

logger()
