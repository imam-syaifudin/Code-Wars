const obj = [
  { name: "Muhammad Imam", id: 1, app: true},
  { name: "Muhammad Farhan", id: 2, app: true},
  { name: "Muhammad Farhan", id: 2, app: true},
]

const isAllReviewed = obj.every(val => val.app === true)

console.log(isAllReviewed)