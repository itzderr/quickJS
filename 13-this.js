class Car {
  constructor(sound) {
    this.sound = sound
  }

  drive(n) {
    return this.sound.repeat(n)
  }
}

const car = new Car('vroom')
console.log(car.drive(5))

const truck = {
  sound: 'truck',
  drive: car.drive,
}

console.log(truck.drive(1)) // look at the obj that is calling the function

const driving = car.drive
// console.log(driving()) // 'sound' of undefined -> there's no 'this'

// 1. bind - binds 'this' with a given obj
const drivingBound = driving.bind(car)
console.log(drivingBound(2))

// 2. call - pass args one by one
console.log(driving.call(truck, 1))

// 3. apply - pass args as an array
console.log(driving.apply(truck, [1]))
