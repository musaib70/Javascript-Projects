let guest = ["Musaib", "Ali", "Asim", "Hamza", "Asad"];
let invitation = "you all are invited in my party at 9:00pm sharp";



// console.log (guest[0], invitation)
// console.log (guest[1], invitation)
// console.log (guest[2], invitation)
// console.log (guest[3], invitation)

let deleteGuest = guest.splice(4,4)
let addGuest = guest.push("Kamran")

// console.log(guest[4], invitation)

guest.unshift("Muqeet")
guest.splice(1,0,"Hadi")
guest.push("Zain")
console.log(guest,invitation)