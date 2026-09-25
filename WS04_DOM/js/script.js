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

// Piilota ja näytä eläin
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "block";
});

// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT

// TEHTÄVÄ 3

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const selectedAnimalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elefantti";
        selectedAnimalImage.src = "images/elephant.png";
        selectedAnimalImage.alt = "Elefantti";
        animalDescription.textContent = "Elefantit ovat maailman suurimpia maaeläimiä.";
    }

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        selectedAnimalImage.src = "images/tiger.png";
        selectedAnimalImage.alt = "Tiikeri";
        animalDescription.textContent = "Tiikeri on maailman suurin kissaeläin.";
    }

    if (selectedAnimal === "penguin") {
        animalName.textContent = "Pingviini";
        selectedAnimalImage.src = "images/penguin.png";
        selectedAnimalImage.alt = "Pingviini";
        animalDescription.textContent = "Pingviinit ovat lentokyvyttömiä lintuja.";
    }

    if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        selectedAnimalImage.src = "images/panda.png";
        selectedAnimalImage.alt = "Panda";
        animalDescription.textContent = "Pandat syövät pääasiassa bambua.";
    }
});

// Korostetaan kuvaa, kun hiiri viedään kuvan päälle
selectedAnimalImage.addEventListener("mouseenter", function () {
    selectedAnimalImage.classList.add("image-highlight");
});

// Poistetaan korostus, kun hiiri viedään pois kuvan päältä
selectedAnimalImage.addEventListener("mouseleave", function () {
    selectedAnimalImage.classList.remove("image-highlight");
});

// TEHTÄVÄ 4

const animalForm = document.querySelector("#animalForm");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animal = document.querySelector("#observationAnimal").value;
    const location = document.querySelector("#observationLocation").value;
    const date = document.querySelector("#observationDate").value;

    if (animal === "" || location === "" || date === "") {
        alert("Täytä kaikki kentät.");
        return;
    }

    // Luodaan uusi taulukkorivi
    const newRow = document.createElement("tr");

    // Luodaan solut
    const animalCell = document.createElement("td");
    const locationCell = document.createElement("td");
    const dateCell = document.createElement("td");

    // Lisätään lomakkeen tiedot soluihin
    animalCell.textContent = animal;
    locationCell.textContent = location;
    dateCell.textContent = date;

    // Lisätään solut riville
    newRow.append(animalCell, locationCell, dateCell);

    // Lisätään uusi rivi taulukkoon
    const tableBody = document.querySelector("#observationTableBody");
    tableBody.append(newRow);
});



// listener for the select element from the drop down list.


    // function to update the DOM based on the selected animal
