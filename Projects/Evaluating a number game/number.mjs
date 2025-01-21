import prompt from 'prompt-sync';

let roll_no = prompt()("Enter your roll number")

switch (roll_no) {
    case "25", "65", "89", "12":
        console.log ("you are eligible for showing result");
        
        break;

    default:
        console.log("your are not paying fees!")
        break;
}

let grade = prompt()("Enter your percentage")


if (grade >= 80 || grade >= 90 )  {
    console.log("your grade is A+")
    
} else if (grade >= 70) {
    console.log ("your grade is B")

} else if (grade >= 60){
    console.log ("your grade is C")
}

else{  (grade <= 60)
    console.log ("you are failed")
}
    
