magician_name = ["Musaib","Khan","Hamza", "Asad"]

function magician() {

    console.log (magician_name)

}

magician()

function make_great() {
    
    magician_name.push ("Ali","Akbar")
    return magician()

}

// console.log(magician_name)
make_great()
