let yearOfBirth = prompt("What is the year of Birth?");
if(yearOfBirth === "" || yearOfBirth === null){
    console.log("Too bad you didn't want to share your birth year.")
} else {
    console.log(`Your year of birth is ${+yearOfBirth}`);
}

let city = prompt("What city do you live in?");
if(city === "" || city === null){
    console.log("Too bad you didn't want to share your city.")
} else {
    switch(city) {
        case "Kyiv":
            console.log("You live in the capital of Ukraine.");
            break;
        case "Washington":
            console.log("You live in the capital of USA.");
            break;
        case "London":
            console.log("You live in the capital of England.");
            break;
        default:
            console.log(`You live in ${city}`);
    }
}

let favoriteSport = prompt("What is the favorite sport?");
if(favoriteSport === "" || favoriteSport === null){
    console.log("Too bad you didn't want to share your favorite sport.")
} else {
    switch(favoriteSport) {
        case "Basketball":
            console.log("Cool! Want to be like Michael Jordan?");
            break;
        case "Boxing":
            console.log("Cool! Do you want to be like Muhammad Ali?");
            break;
        case "Soccer":
            console.log("Cool! Do you want to be like Cristiano Ronaldo?");
            break;
        default:
            console.log(`Your favorite sport is ${favoriteSport}`);
    }
}