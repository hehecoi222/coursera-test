function Circle (rad) {
    this.rad = rad
};

Circle.prototype.getRad = function () {
    return this.rad
}

myCircle = new Circle(20)

console.log(myCircle)
console.log(myCircle.getRad())