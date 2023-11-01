const meals = ["apple pie", "chicken curry", "pad thai", "hamburgers", "ramen noodles"]

for(let i=0; i<meals.length; i++){ 
    console.log(meals[i])
    if(meals[i] === "hamburgers"){
        break;
    }
}

for(let i=meals.length-1; i>=0; i--){
    console.log(meals[i])
}

for(const item of meals){
    console.log(item);
}

const perfectTemp = 125
let teaTemp = 150

while(teaTemp > perfectTemp){
    console.log(`Tea temperature is ${teaTemp}`);
    teaTemp -= 2;
    count++;
}

console.log("Your tea is ready to drink! You added " + count + " ice chips to the tea!");

for(let i=10; i>10; i--){
    console.log(i);
}
console.log("Blast off!");