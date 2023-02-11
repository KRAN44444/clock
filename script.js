// let Clock = function(color,mark){
//     this.color = color
// }
// i = new Clock("red","x")
// console.log(i)

let h1 = document.getElementById("h1")
let int

function timer(){
    let time = new Date()
    let h = time.getHours().toString()
    let m = time.getMinutes().toString()
    let s = time.getSeconds().toString()
    if (h.length<2){
        h = "0"+h 
    }
    if (m.length<2){
        m = "0"+m 
    }
    if (s.length<2){
        s = "0"+s 
    }
    let u = h+":"+m+":"+s
    h1.innerHTML = u
    let color = "#"+h+m+s
    document.body.style.background = color
    h1.style.color = "white"
}
function diseable(){
    document.body.style.background = "white"
    h1.style.color = "black"
    h1.innerHTML = "00:00:00"
    clearInterval(int)
}
function enable(){
    int = setInterval(timer,1000)
}
function start_clock(){
    start = !start
    timer()
    start?enable():diseable()
}

let start = false