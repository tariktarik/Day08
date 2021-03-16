// Only change code below this line

function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

console.log(randomRangeNumber(7, 50));
// Only change code above this line
module.exports = randomRangeNumber;