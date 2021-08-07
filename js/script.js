var message ="in Global"
console.log("global: message:",message)
function a() {
    var message ="in A"
    console.log("A: message:",message)
    var b= function (){
        console.log("B: message:",message)
    }
    b()
}
a()