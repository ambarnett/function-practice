//This is a function that will calculate a persons age in dog years
// const calculateAgeInDogYears = (ageOfPerson) => {
    // const ageInDogYears = ageOfPerson / 7
    // console.log(ageInDogYears)
//     return ageInDogYears
// }

// const dogAge = calculateAgeInDogYears(45)
// console.log(dogAge)

//This is a function that will take input and see if the person is talking about a cat or if it is a schnauzer that they are talking about
// const myFavoriteDog = (dogBreed) => {
//     if(dogBreed === "schnauzer"){
//         return `My Favorite dog breed is ${dogBreed}`
//     }
//     else if(dogBreed === "meow"){
//         return "I like cats"
//     }
//     else {
//         return
//     }
// }

// const myFavorite = myFavoriteDog("schnauzer")

// console.log(`When it comes to to pets ${myFavorite}`)

//This is a function that will add two numbers together
// const add = (int2, int1) => {
//     const total = int1 + int2
//     return total
// }

// const total = add(2, 3)
// console.log(total)

//This is a function that will take in two parameters about a car and tell you which direction it is going and if it is going too fast
// const go = (direction, speed) => {
//     if (speed > 75) {
//         return `The car is moving ${direction} at ${speed}MPH. SLOW DOWN!`
//     }
//     return `The car is moving ${direction} at ${speed}MPH.`
// }

// const direction = go("forward", 80)
// console.log(direction)

//This is a function that checks if a number is even or odd... changed to add ability for it to read through array
// const numbers = [1,2,3,4,5,6]
// const evenOrOdd = (num) => {
//         if (num % 2 === 0) {
//             console.log("Even")
//         }
//         console.log("Odd")
// }
// numbers.forEach(evenOrOdd)


// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
// const filterForK = words.filter(word => !(word.startsWith("k")))

// console.log(filterForK)
/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */


/*
    Invoke the filtering function and store its return value
 */


/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/


// console.log()

// flips a coin to see if Sven will catch a fish or not
// const fishChance = () => {
//     const chance = Math.random() * 2
//     if (chance > 1 && chance <= 2){
//         console.log("Sven hooked a tuna! :)")
//     }
//     else
//         console.log("Sven came up empty-handed. :(")
// }
// fishChance()


const menu = {
    sandwiches: [
        {
            id: 1,
            name: "cheeseburger",
            price: 5
        },
        {
            id: 2,
            name: "club",
            price: 3
        },
        {
            id: 3,
            name: "footlong sub",
            price: 10
        }
    ],
    sides: [
        {
            id: 1,
            name: "fries",
            price: 2
        },
        {
            id: 2,
            name: "tots",
            price: 2
        },
        {
            id: 3,
            name: "salad",
            price: 1.50
        }
    ],
    drinks: [
        {
            id: 1,
            name: "coke",
            price: 3
        },
        {
            id: 2,
            name: "sprite",
            price: 3
        },
        {
            id: 3,
            name: "water",
            price: 0
        }
    ],
    desserts: [
        {
            id: 1,
            name: "ice cream",
            price: 3
        },
        {
            id: 2,
            name: "fudge",
            price: 2.50
        },
        {
            id: 3,
            name: "pie",
            price: 3
        }
    ]
}

const myOrder = (mySandwich, mySide, myDrink, myDessert) => {
    let order = {
        sandwich: mySandwich,
        side: mySide,
        drink: myDrink,
        dessert: myDessert,
        totalPrice: 0
    }

    for (const sandObj of menu.sandwiches) {
        if (sandObj.name === mySandwich) {
            order.totalPrice += sandObj.price
        }
    }
    for (const sideObj of menu.sides) {
        if (sideObj.name === mySide) {
            order.totalPrice += sideObj.price
        }
    }
    for (const drinkObj of menu.drinks) {
        if (drinkObj.name === myDrink) {
            order.totalPrice += drinkObj.price
        }
    }
    for (const destObj of menu.desserts) {
        if (destObj.name === myDessert) {
            order.totalPrice += destObj.price
        }
    }
    return order
}

const order = myOrder("cheeseburger", "tots", "coke", "pie")
console.log(`You ordered a ${order.sandwich} and ${order.side} with a ${order.drink} to drink and ${order.dessert} for dessert. Your total is $${order.totalPrice}`)
