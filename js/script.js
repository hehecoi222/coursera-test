function makeMultiplier(Multiplier) {
    function myFunc(x){
        return Multiplier*x
    }

    return myFunc;
}

var multiplyBy3 = makeMultiplier(3)
console.log(multiplyBy3(2))