// STEP 1: Print text to the browser console is string ""

console.log("Hello, World!");

// STEP 2: Variables

// Store text values in variables

const userName = "Mette";
const favoriteAnimal = "Kultainennoutaja";


// Print the variables to the console
console.log("Minun nimeni on " + userName);
console.log("Minun lempieläimeni on " + favoriteAnimal);
// STEP 3: User interaction
// Display a pop-up message
alert("tervetuloa hienolle nettisivulleni!");

// Ask the user for their name

const visitorName = prompt("Mikä on nimesi?");

// Print the user's answer
console.log(visitorName);

console.log("Terve " + visitorName + "! Tervetuloa javaScriptin pariin!");
// Ask the user for their favorite animal

const visitorFavoriteAnimal = prompt("Mikä on lempieläimesi?");

// Create a sentence using both answers

console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

if (visitorFavoriteAnimal === "Kultainennoutaja") {
    console.log("Hyvä valinta! Se on myös minun lempieläimeni!");
} else {
    console.log("Kiva! Sinun lempieläimesi on " + visitorFavoriteAnimal + ".");
}
// STEP 4: Conditionals
const visitorAge = prompt("Kuinka vanha olet?");

if (visitorAge >= 18) {
    console.log("Olet aikuinen.");
} else {
    console.log("Olet alle 18-vuotias.");
}

// STEP 5: Functions
function greetUser(name) {
    console.log("Hei " + name + "!");
}

greetUser("Mette");

// STEP 6: Button
function showMessage() {
    alert("JavaScript toimii!");
}

