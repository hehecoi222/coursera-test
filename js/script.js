//By Value:

var x = 5
var y =x
y=7
console.log(x)
console.log(y)

//By Reference(refer to address)
var a ={
    x:5
}

var b =a
b.x= 7
console.log(a.x)