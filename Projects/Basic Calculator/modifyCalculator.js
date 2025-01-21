let cal = []
for (let i = 0 ; i < 10 ; i++){

    let y = (i * 5)
    let z = (i * i)
    let result = calculator(y,z)
    result.push(cal)

}
console.log(cal)
function calculator (a,b,optr) {
    if ("-" === optr){
        return(a-b)
    }
    else { return (a+b)
    }
    
}
