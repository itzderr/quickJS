// Javascript is single-threaded, synchronous

function hang(sec) {
  const done = Date.now() + sec * 1000
  while (Date.now() < done) {
    // do nothing
  }

  console.log('done!')
}

hang(10)
