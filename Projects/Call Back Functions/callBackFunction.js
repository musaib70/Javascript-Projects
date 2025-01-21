function classes(grade) {

switch (true) {
    case (grade === "A+"): console.log("perfect")
        break;

        case (grade === "A"): console.log ("excellent")
        break;

        case (grade === "B"): console.log ("good")
        break;

        case (grade === "C"): console.log ("need improve")
        break;

        case (grade === "D"): console.log ("not qualified")
        break;


    default: console.log("fail")
        break;
}
    
}

function numbers (score, callback) {

    let grade;

    switch (true) {
        case (score >=80 ): console.log( "your grade is " , grade = "A+")
            
            break;
            case (score >=75 ): console.log( "your grade is " , grade = "A")
            break;
           
            case (score >=65 ): console.log( "your grade is " , grade = "B")
            break;
            
            case (score >=55 ): console.log( "your grade is " , grade = "C")
            break;
            
            case (score >=40 ): console.log( "your grade is " , grade = "D")
            break;

        default: console.log( "your are fail")
            break;
    }

    callback(grade)
    
}

numbers(80,classes)