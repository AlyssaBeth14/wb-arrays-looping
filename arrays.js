const meals = ["apple pie", "chicken curry", "pad thai", "hamburgers", "ramen noodles"]
meals[3] = "hot dogs"
console.log(meals[3])
console.log(meals[meals.length -1]);

meals.push("burritos")

console.log(meals, lastItem)

meals.splice(2, 2, "beef pho", "steak")
console.log(meals.slice(1,4))
console.log(meals)
const meals2 = [...meals]

meals.unshift("uranium")
console.log(meals)

meals.shift()

meals.push(meals.shift())

const steakIdx = meals.indexOf("steak")
console.log(meals[steakIdx], steakIdx)