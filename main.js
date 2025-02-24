let name = prompt("What is your name?");
if(name === "" || name === null) {
    alert("Please enter your name");
    console.log(`Hello, ${prompt("So, What is your name?")}! How are you?`);
}  else {
    console.log(`Hello, ${name}! How are you?`);
}