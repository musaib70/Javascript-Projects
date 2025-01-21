let myTable = []

let numbers = 10;

for (let i=0; i<numbers; i++){
     let tempArray = []
  
    for (j=0; j<numbers; j++){
        tempArray.push(i * j)
}
myTable.push(tempArray)

}

console.table(myTable)