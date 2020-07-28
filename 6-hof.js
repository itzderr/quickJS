// Higher-Order functions: functions takes functions or returns functions
// - map [ e -> function -> new_e ]
// - filter [ e -> function -> stays or not ]
// - reduce [ e -> function -> single value ]

function map(arr, fn) {
  const newArr = []
  arr.forEach((elem) => {
    newArr.push(fn(elem))
  })
  return newArr
}

map([1, 2, 3, 4, 5], (e) => e * 2)

function filter(arr, fn) {
  const newArr = []
  arr.forEach((elem) => {
    if (fn(elem)) {
      newArr.push(elem)
    }
  })
  return newArr
}

function reduce(arr, fn, initialVal) {
  let res = initialVal
  arr.forEach((e) => {
    res = fn(res, e)
  })
  return res
}

const reducedVal = reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0)
console.log(reducedVal)
