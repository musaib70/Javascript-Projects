counter = 0;

function abc (value) {

    return new Promise ((resolve,reject)=>{

        setTimeout(() => {
            counter++
            resolve(`x value ${value} counter: ${counter}`)
        }, 2000);
    })
}

async function xyz(value) {
    console.log(`ready ${value} counter: ${counter}`)

    let x = await abc(value)
    console.log(x)
}

for (let i=1; i<4; i++){
    xyz(i)
}

