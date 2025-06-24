const fruit = ['apple', 'banana', 'orange']
const scores = [10, 20, 30]
const mixedbag = [10, 'apple', true,null]

console.log(fruit)
console.log(`My favorite fruit is ${fruit[1]}`)
fruit[1] = 'watermelon'
console.log(`My favorite fruit is now  ${fruit[1]}`)
console.log(fruit)
fruit.push('grape')
console.log(fruit)
const last = fruit.pop()
console.log(last)
console.log(fruit)

console.log(`Foreach.......`)
scores.forEach((score ,index) => {
  console.log(`Item at index ${index} is ${score}`)
})

// map() method creates a new array by tranforming every array
const numbers = [1,2,3,4,5]
console.log("map....")
const double = numbers.map(number => number * 2)
console.log(double)
console.log(numbers)

//array that filters even numbers
const numbers2 = [1,2,3,4,5,6,7,8,9,10]
const even = numbers2.filter(number => number % 2 === 0)
console.log(even)