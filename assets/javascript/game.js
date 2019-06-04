// Array of Sweets and Treats for game
var gameWord = ["Cheesecake", "Oreos", "Cupcake", "Churros", "Lemonhead", "Sherbert", "Chocolate", "Muffin", "Macaron", "Cookies", "Marshmallows", "Applesauce", "Doughnut", "Cake", "Pie", "Twizzlers", "Gushers", "Reese's", "Snickers", "Smores"]

// Array of alphabet Letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessAttempt = 10;
var letterAttempt = [];
var underScore = "_";
var wins = 0;

//when page is opened or refreshed
window.onload = function () {
   
   
    // random word is choosen from array of sweets
    var sweets = gameWord [Math.floor(Math.random() * gameWord.length)];
    sweets = sweets.toLowerCase();
    var sweetsLetters = sweets.split("");
   
    console.log(sweetsLetters);
    
    // creating "string" out of the random word chosen
    function randomSweet() {
        sweets = gameWord [Math.floor(Math.random() * gameWord.length)];
        sweets = sweets.toLowerCase();
        sweetsLetters = sweets.split("");
       

    // puts the letters from random word in the div created for it
    randomWord.textContent = sweetsLetters.join("");
    console.log(sweetsLetters);



    }
}









    // when a key is pressed
document.onkeyup = function (event) {

    var letterGuess = event.key.toLowerCase();








}
