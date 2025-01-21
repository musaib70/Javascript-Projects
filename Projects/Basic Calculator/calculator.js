let a = 5
let b = 10
let optr = "-"

function calculator (a,b,optr) {
    if ("-" === optr){
        console.log(a-b)
    }
    else { console.log(a+b)
    }
    
}

console.log( calculator(5,6,"+"))