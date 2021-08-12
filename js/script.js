function makeMultiplier(Multiplier) {
    var myFunc = function (x) {
        return Multiplier*x
    }

    return myFunc;
}

var multiplyBy3 = makeMultiplier(3)
console.log(multiplyBy3(2))