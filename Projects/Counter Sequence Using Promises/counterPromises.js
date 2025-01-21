function abc() {
    return new Promise ((resolve,reject) =>{
    resolve("start counting")
    })
}

let counter = (value)=> console.log(value)

abc().then((value)=>{
console.log(value);
return "one"

})
.then((value)=>{
    console.log(value);
    return "two"
    }
).then((value)=>{
    console.log(value);
    return "three"

    }
).then((value)=>{
    console.log(value);
    }
)
