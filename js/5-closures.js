function makeFunctionArray() {
  const arr = []
  for (let i = 0; i < 5; i++) {
    arr.push(function () {
      console.log(i)
    })
  }

  return arr
}

function makeFunctionArray2() {
  const arr = []
  for (var i = 0; i < 5; i++) {
    arr.push(
      (function (x) {
        console.log(x)
      })(i),
    )
  }

  return arr
}

const funcArr = makeFunctionArray()
funcArr[0]()

// IIFE - Immediately Invoked Function Expression

function makeHelloFunction() {
  let message = 'Hello!'
  function sayHello() {
    console.log(message)
  }

  return sayHello
}

const sayHello = makeHelloFunction()
sayHello()

const sayHi = (function () {
  let message = 'Hi'
  function sayHi() {
    console.log(message)
  }
  return sayHi
})() // immediately invoked function expression

sayHi()

// Arrow function
const counter = (() => {
  let count = 0
  return {
    inc: () => {
      count += 1
    },
    dec: () => {
      count -= 1
    },
    get: () => {
      console.log(count)
    },
  }
})()

counter.get()
counter.inc()
counter.get()
counter.dec()
counter.get()
