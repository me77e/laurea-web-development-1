// Muokataan otsikkoa kun nappia painetaan
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading"); 

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";

});
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

// Muutetaan otsikon tyyliä
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});


// Muutetaan eläintekstiä
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Elefantit elävät Afrikassa ja Aasiassa.";
});

// TEHTÄVÄ 2

const animalContent = document.querySelector("#animalContent");

// Luodaan otsikko
const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";
animalHeading.classList.add("animal-heading");

// Luodaan tekstikappale
const animalParagraph = document.createElement("p");
animalParagraph.textContent = "Tiikeri on maailman suurin kissaeläin.";

// Luodaan kuva
const animalImage = document.createElement("img");
animalImage.src = "images/tiger.png";
animalImage.alt = "Tiikeri";

// Lisätään elementit sivulle
animalContent.append(animalHeading, animalParagraph, animalImage);

// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT



// listener for the select element from the drop down list.


    // function to update the DOM based on the selected animal
