
import prompt from 'prompt-sync';

// const prompt = promptSync();


let name = prompt()("Enter your name");


switch (name) {
    case "Musaib":
        console.log("Hello musaib! you are my friend" )
        break;
        case "Imran":
            console.log("Hello Imran ! you are my friend")
            break;

    default: 
    console.log("who are you?")
        break;
}






