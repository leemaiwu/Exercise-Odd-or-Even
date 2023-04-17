const oddOrEven = (array) => {
    if (array === ['']) {
        return 'even'
    } else {
        let sum = array.reduce(function(x, y) {
            return x + y
        }, 0)
        if (sum % 2 === 0) {
            return 'even'
        } else {
            return 'odd'
        }
    }
}

console.log(oddOrEven([])) // even
console.log(oddOrEven([0])) // even
console.log(oddOrEven([0, 1, 4])) // odd


// Alternate Solution


const evenOrOdd = (arr) => arr.reduce((x, y) => x + y, 0) % 2 ? 'odd' : 'even'

console.log(evenOrOdd([])) // even
console.log(evenOrOdd([0])) // even
console.log(evenOrOdd([0, 1, 4])) // odd
