
let array1 = ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
let array2 = ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
console.log(array1)

// Remove the first item.

let lastdelete = array1.pop()
console.log(array1)

// Remove the last item.

let firstdelete = array1.shift()
console.log(array1)

//Assign hello World to the fourth item value.

let fourth_delete = array1.splice(4,0, "hello World")
console.log(array1)

// Assign MIDDLE to the third index value.

let middile_value = array1.splice(3,0, "middle")
console.log(array1)

//Add LAST to the last position in the array
let last = array1.push("LAST")
console.log(array1)
 
//Add LAST to the First position in the array

let shift1 = array1.unshift("Last")
console.log(array1)



