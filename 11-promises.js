// From ES6, Promise - natively in JS

fetch('https://hello.world')
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    return {
      importantData: json.importantData,
    }
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    // handle error
    console.log(err)
  })
