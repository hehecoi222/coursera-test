function Circle (rad) {
    this.rad = rad
    console.log(this.rad)
    
    var doubleCircle  = function (radius) {
        this.radius = radius
        return this.radius*2
    }
    console.log(doubleCircle(this.rad))
};

myCircle = new Circle(20)

console.log(myCircle)