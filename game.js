var number = 7;
var guess = prompt("Guess a number");

if(Number(guess) === number) {
    alert("You got it right!");
}

else if(Number(guess) > number){
    alert("Too high. Guess again.");
}
else {
    alert("Too low. Guess again.");
}