function doSomethingWithOne(cb) {
  return cb(1)
}

doSomethingWithOne(console.log)

function doSomethingWithOneAsync(cb) {
  // when the task is done, call this cb function!
  setTimeout(() => {
    cb(1)
  }, 2000)
}

doSomethingWithOneAsync(console.log)
