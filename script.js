let fruitsArray = ['apple', 'orange', 'pineapple', 'watermelon']
let sampleArray = [7, 45, 89, 20, 1, 38, 47, 200, 65, 89]

// Array properties

// lenght property === Arr.lenght
console.log(sampleArray.length) // 8

//Array methods
//push method == used to add items to an array
fruitsArray.push('carrots', 'grapes');
console.log(fruitsArray);

// pop method == takes item(s) away from an array
fruitsArray.pop() //take the grapes out of the fruits Array
console.log(fruitsArray)

//unshift method == adds aitems to an array from the first
fruitsArray.unshift('blackberry', 'strawberry')
console.log(fruitsArray)

//shift method == removes the first item in an array
fruitsArray.shift()
console.log(fruitsArray)

//concat method == adds the two arrays together
let num1arr = [1,2,3,4,5]
let num2arr = [6,7,8,9,10]

let allNums = num1arr.concat(num2arr);
console.log(allNums)

let till15 = alNums.concat([11, 12, 13, 14, 15])
console.log(till15)

//Array.splice
// current state of fruits array === ['strawberry', 'apple', 'orange', 'pineapple', 'watermelon', 'carrots']
fruitsArray.splice(3,0)
// console.log(fruitArray);

// current state of fruits array === ['strawberry', 'apple', 'orange', 'blackberry', 'pineApple', 'watermelon', 'carrots']
fruitsArray.splice(5,1)
console.log(fruitsArray)


//Array.slice == used to create a copy of our array items
// current state of fruits array === ['strawberry', 'apple', 'orange', 'blackberry', 'pineApple', 'carrots']
let newFruits = fruitsArray.slice(2);
console.log(newFruits)

let newFruits2 = fruitsArray.slice(2,5);
console.log(newFruits2);

//Array.toString() returns a comma separated string from an array
let fruitString = newFruits2.toString()
console.log(fruitString)

let nameArr = ['Alogba', 'omotayo']
//Array.join() joins all the items in an array with a defined string
let fullName = nameArr.join(' ')